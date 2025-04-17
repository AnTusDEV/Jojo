<script>
import axios from "axios";
import MainMenu from "../components/MainMenuTop.vue"
import Copyright from "../components/CopyRight.vue"
import BodyForm from "../components/BodyForm.vue"
import { message } from "ant-design-vue";
import commonMixin from "../mixins/commonMixin.js";
import { Badge, Button, ButtonGroup } from "ant-design-vue";
import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons-vue";

export default {
  mixins: [commonMixin],
  components: {
    MainMenu, Copyright, BodyForm,
    "a-badge": Badge,
    "a-button": Button,
    "a-button-group": ButtonGroup,
    "minus-outlined": MinusOutlined,
    "plus-outlined": PlusOutlined,
    "shopping-outlined": ShoppingCartOutlined,

  },
  data() {
    return {
      productsFeatured: [],
      productsSnack: [],
      productsSpongeCake: [],
      productsFish: [],
      productsSnackBlank: [],
      queryCallApi: {
        type: 1,
      },
      count: 0,
      dataCart: [],
    };
  },
  methods: {
    fetchProducts() {
      axios
        .get(this.urlCallApi + `products`)
        .then((response) => {
          response.data = response.data.map(product => ({
            ...product,
            count: 0
          }))
          this.productsFeatured = response.data.filter(product => product.type == this.typeProduct.productsFeatured.value)
          this.productsSnack = response.data.filter(product => product.type == this.typeProduct.productsSnack.value)
          this.productsSpongeCake = response.data.filter(product => product.type == this.typeProduct.productsSpongeCake.value)
          this.productsFish = response.data.filter(product => product.type == this.typeProduct.productsFish.value)
          this.productsSnackBlank = response.data.filter(product => product.type == this.typeProduct.productsSnackBlank.value)
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          message.error("Failed to fetch products!");
        });
    },
    formatPrice(value) {
      if (!value) return "0 đ";
      return new Intl.NumberFormat("vi-VN").format(value) + " đ";
    },
    addCart(type, id) {
      if (type == "tru" && this.dataCart.length > 0) {
        let check = this.dataCart.findIndex(item => item.id == id)
        if (check != -1) {
          this.dataCart[check].count--;
          if (this.dataCart[check].count == 0) {
            this.dataCart.splice(check, 1);
          }
        }
      } else if (type == "cong") {
        if (this.dataCart.length > 0) {
          let check = this.dataCart.findIndex(item => item.id == id)
          if (check == -1) {
            this.count++;
            this.dataCart.push({
              id: id,
              count: this.count,
            })
          } else {
            this.dataCart[check].count++;
          }
        } else {
          this.count++;
          this.dataCart.push({
            id: id,
            count: this.count,
          })
        }
      }
      this.count = this.dataCart.length
      // this.productsFeatured = this.productsFeatured.map(product => {
      //   if (product.id == id) {
      //     product.count = this.dataCart.find(item => item.id == id).count
      //   } 
      // })
      console.log(this.dataCart)
    },
  },
  mounted() {
    this.fetchProducts();
  },


};  
</script>
<template>
  <MainMenu />
  <div id="highslide-container">
    <div class="body">
      <div class="bg_danhgia">
        <div class="body2" style="padding: 1% 0 2% 0;">
          <div class="title_page_home"><a href="#">Sản phẩm nổi bật</a></div>
          <div class="jcarousel2-wrapper">
            <div class="jcarousel2" data-jcarousel="true" data-jcarouselautoscroll="true">
              <ul style="left: -2310px; top: 0px;">
                <li style="width: 365px;" v-for="product in productsFeatured" :key="product.id">
                  <div class="hotnews_img" style="height:300px; overflow:hidden;">
                    <img :src="product.img">
                  </div>
                  <div class="hotnews_name" style="color:#da251e; height:25px; overflow:hidden; text-align:center;">
                    <strong> {{ product.name }}</strong>
                  </div>
                </li>
              </ul>
            </div>
            <a href="#" class="jcarousel2-control-prev" data-jcarouselcontrol="true">‹</a>
            <a href="#" class="jcarousel2-control-next" data-jcarouselcontrol="true">›</a>
          </div>
        </div>
      </div>
      <div class="cate_image">
        <img width="100%" src="https://pham-asset.com/images/Category/snack-5t0ms0xo.jpg" alt="pham asset">
      </div>

      <!-- ==================== SNACK ============================ -->
      <div class="body" style="margin-top:2%">
        <div class="title_page_home">
          <a href="#">SNACK</a>
        </div>
        <div class="item_product" v-for="product in productsSnack" :key="product.id">
          <div class="product_image_list">
            <a href="#"> <img :src="product.img"> </a>
          </div>
          <div class="product_name" style="font-weight:bold; margin:4% 0">
            <a href="#">{{ product.name }} </a>
          </div>
          <div>
            <div class="product_price">
              <span style="color:#333333">Giá:</span>
              {{ formatPrice(product.price) }}
            </div>
          </div>
          <a-button-group>
            <a-button @click="addCart('tru', product.id)">
              <minus-outlined />
            </a-button>
            <a-button style="width: 50px; text-align: center;">
              {{ product.count }}
            </a-button>
            <a-button @click="addCart('cong', product.id)">
              <plus-outlined />
            </a-button>
          </a-button-group>
        </div>
        <div style="clear:both; height:20px;"></div>
      </div>
      <div class="cate_image"><a href="#">
          <img width="100%" src="https://pham-asset.com/images/Category/banh-xop-ong-fx44b9oc.jpg" alt="pham asset"></a>
      </div>

      <!-- ==================== Bánh xốp ống ===================== -->
      <div class="body" style="margin-top:2%">
        <div class="title_page_home">
          <a href="#">Bánh xốp ống</a>
        </div>
        <div class="item_product" v-for="product in productsSpongeCake" :key="product.id">
          <div class="product_image_list">
            <a href="#"> <img :src="product.img"></a>
          </div>
          <div class="product_name" style="font-weight:bold; margin:4% 0">
            <a href="#"> {{ product.name }}</a>
          </div>
          <div class="b_muangay" style="margin-bottom:6%"
            onclick="window.location='/san-pham/banh-xop-tanoshi-10/banh-xop-nhan-kem-vi-matcha-bac-ha-36.html'">
            Mua ngay
          </div>
        </div>
        <div style="clear:both; height:20px;"></div>
      </div>

      <!-- ==================== Đậu phộng da cá ================== -->
      <div class="cate_image">
        <a href="#">
          <img width="100%" src="https://pham-asset.com/images/Category/dau-phong-da-ca-b5i7l9gc.jpg"
            alt="pham asset"></a>
      </div>

      <div class="body" style="margin-top:2%">
        <div class="title_page_home"><a href="#">Đậu phộng da cá</a></div>
        <div class="item_product" v-for="product in productsFish" :key="product.id">
          <div class="product_image_list">
            <a href="#">
              <img :src="product.img"></a>
          </div>
          <div class="product_name" style="font-weight:bold; margin:4% 0">
            <a href="#"> {{ product.name }} </a>
          </div>
          <div class="b_muangay" style="margin-bottom:6%"
            onclick="window.location='/san-pham/dau-phong-da-ca-3/dau-ron-ron-vi-tom-cay-nuong-muoi-ot-38.html'">
            Mua ngay</div>
        </div>
        <div style="clear:both; height:20px;"></div>
      </div>

      <!-- ===================== Phôi Snack ===================== -->
      <div class="body" style="margin-top:2%">
        <div class="title_page_home">
          <a href="#">Phôi Snack</a>
        </div>

        <div class="item_product" v-for="product in productsSnackBlank" :key="product.id">
          <div class="product_image_list">
            <a href="#"><img :src="product.img"></a>
          </div>
          <div class="product_name" style="font-weight:bold; margin:4% 0">
            <a href="#">
              {{ product.name }}</a>
          </div>
          <div class="b_muangay" style="margin-bottom:6%"
            onclick="window.location='/san-pham/phoi-snack-4/vien-ca-muc-25.html'">
            Mua ngay
          </div>
        </div>
        <div style="clear:both; height:20px;"></div>
      </div>
    </div>
    <div class="floating-cart" @click="goToCart">
      <a-badge :count="count">
        <shopping-outlined />
      </a-badge>
    </div>
  </div>
  <BodyForm />
  <Copyright />
</template>

<style scoped>
@import './../assets/styles/HomeStyle.css';
</style>
