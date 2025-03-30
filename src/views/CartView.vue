<script>
import axios from 'axios'; // Đảm bảo bạn đã import axios

export default {
  data() {
    return {
      info: null // Khởi tạo info là null hoặc một giá trị mặc định khác
    };
  },
  mounted() {
    axios
      .get('http://localhost:8080/getBuyCart')
      .then(response => (this.info = response.data)) // Gán response.data cho this.info
      .catch(error => {
        console.error('Lỗi khi gọi API:', error);
        this.info = { error: 'Không thể tải dữ liệu từ API.' }; // Xử lý lỗi nếu có
      });
  },
};
</script>

<template>
  <div>
    <div>Dữ liệu API CoinDesk</div>
    {{ info }}
    <img :src="info" alt="" style="width: 100px;height: 100px;">
  </div>
</template>
