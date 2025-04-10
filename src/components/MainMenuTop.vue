<template>
    <div class="bg_top">
        <img src="https://pham-asset.com/upload/logo.png" border="0px" />
    </div>
    <div class="bg_menu_top">
        <div class="body_menu" style="position:relative;">
            <div class="menu_top_left">
                <div id="cssmenu1" style="z-index:10001">
                    <div id="menu-button">Menu</div>
                    <ul>
                        <li v-for="(menuItem, index) in dataMenu" :key="index">
                            <a :href="menuItem.link">{{ menuItem.name }}</a>
                            <ul v-if="menuItem.subMenu">
                                <li v-for="(subItem, subIndex) in menuItem.subMenu" :key="subIndex">
                                    <a :href="subItem.link">{{ subItem.name }}</a>
                                    <ul v-if="subItem.subMenu">
                                        <li v-for="(subSubItem, subSubIndex) in subItem.subMenu" :key="subSubIndex">
                                            <a :href="subSubItem.link">{{ subSubItem.name }}</a>
                                            <ul v-if="subSubItem.subMenu">
                                                <li v-for="(subSubSubItem, subSubSubIndex) in subSubItem.subMenu"
                                                    :key="subSubSubIndex">
                                                    <a :href="subSubSubItem.link">{{ subSubSubItem.name }}</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu_top_right">
                <div class="bg_search">
                    <form action="/tim-kiem.html" enctype="multipart/form-data" method="get" name="frmSearch"
                        id="frmSearch">
                        <table border="0" cellspacing="0" cellpadding="0" width="98%">
                            <tbody>
                                <tr>
                                    <td>
                                        <input name="key" type="text" style="width:90%" id="textbox"
                                            placeholder="Tìm kiếm" />
                                    </td>
                                    <td width="30" align="center">
                                        <img alt="pham asset" src="https://pham-asset.com/images/i-search6.jpg"
                                            style="margin-top:0px; cursor:pointer"
                                            onclick="document.getElementById('frmSearch').submit()" />
                                    </td>
                                    <td width="70" align="center" style="padding-left:10px">
                                        <img src="https://pham-asset.com/images/lang_en.png"
                                            onclick="window.location='?l=en'" style="cursor:pointer;" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
            <div style="clear:both; height:0px;"></div>
        </div>
    </div>
    <div class="flash">
        <div id="jssor_1"
            style="position: relative; margin: 0px auto; top: 5px; left: 0px; width: 1195px; height: 373.438px; overflow: hidden; visibility: visible;"
            data-jssor-slider="1">
            <!-- Loading Screen -->
            <div style="position: absolute; display: block; top: 0px; left: 0px; width: 1195px; height: 373.438px;">
                <div
                    style="position: absolute; display: block; top: -13.2812px; left: -42.5px; width: 1280px; height: 400px; transform: scale(0.934527);">
                    <div data-u="slides"
                        style="cursor: default; position: absolute; top: 0px; left: 0px; width: 1280px; height: 400px; overflow: hidden; margin: 0px; padding: 0px; transform-style: flat; z-index: 0; pointer-events: none;">
                        <div
                            style="top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block; z-index: 0;">
                        </div>
                    </div>
                    <div data-u="slides"
                        style="cursor: default; position: absolute; top: 0px; left: 0px; width: 1280px; height: 400px; overflow: hidden; margin: 0px; padding: 0px; transform-style: flat; z-index: 0;">
                        <div
                            style="top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; overflow: hidden; transform-style: flat; z-index: 1;">
                            <div
                                style="top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block; overflow: hidden; background-color: rgba(0, 0, 0, 0); background-image: none;">
                                <img u="image" src2="https://pham-asset.com/images/Flash/o6nq834a.jpg" alt="pham asset"
                                    border="0"
                                    style="top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block; max-width: 10000px; z-index: 1;"
                                    data-events="auto" data-display="block"
                                    src="https://pham-asset.com/images/Flash/o6nq834a.jpg">
                            </div>
                            <div style="top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block; transform-style: preserve-3d; z-index: 1;"
                                data-events="auto" data-display="block">
                                <a href="#link" data-events="auto" data-display="inline"
                                    style="z-index: 1; top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block;"></a>
                            </div>
                        </div>
                        <div
                            style="top: 0px; left: 1280px; width: 1280px; height: 400px; position: absolute; overflow: hidden; transform-style: flat; z-index: 1;">
                            <div
                                style="top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block; overflow: hidden; background-color: rgba(0, 0, 0, 0); background-image: none;">
                                <img u="image" src2="https://pham-asset.com/images/Flash/75cm7gl8.jpg" alt="pham asset"
                                    border="0"
                                    style="top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block; max-width: 10000px; z-index: 1;"
                                    data-events="auto" data-display="block"
                                    src="https://pham-asset.com/images/Flash/75cm7gl8.jpg">
                            </div>
                            <div style="top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block; transform-style: preserve-3d; z-index: 1;"
                                data-events="auto" data-display="block">
                                <a href="#link" data-events="auto" data-display="inline"
                                    style="z-index: 1; top: 0px; left: 0px; width: 1280px; height: 400px; position: absolute; display: block;"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="bg_slogan">
        <span style="font-family: sans-serif;">CHÀO MỪNG BẠN ĐẾN VỚI THẾ GIỚI CỦA JOJO</span>
    </div>
</template>
<script>
import axios from 'axios';
import { message } from 'ant-design-vue';
export default {
    name: 'MainMenuTop',
    data() {
        return {
            dataMenu: []
        };
    },
    methods: {
        async fetchMenu() {
            try {
                const response = await axios.get('http://localhost:8080/menu');
                this.dataMenu = response.data[16].subMenu;   
            } catch (error) { 
                message.error('Failed to fetch menu!');  
            }
        }
    },
    mounted() {
        this.fetchMenu();
    }
};
</script>
<style scoped>
@import './../assets/styles/MenuTop.css';
</style>
