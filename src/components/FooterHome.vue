<template>
    <div class="bg_footer">
        <div class="body2">
            <div class="footer_left">
                <div>
                    <div><img src="https://pham-asset.com/upload/logo.png" border="0px" width="100"><br></div>
                    <span style="font-family: sans-serif;">Công ty Liên Doanh
                        Phạm-Asset <br>Trụ sở chính: Lô D4/1, Đường 1B, Khu công
                        nghiệp Vĩnh Lộc, P.Bình Hưng Hòa B, Q. Bình Tân, TP.HCM,
                        Việt Nam<br>(+84-28) 37 653 284/85/86<br></span>
                    <div><span style="font-family: sans-serif;"><br></span></div>
                    <div>
                        <a href="https://pham-asset.com/upload/ProfilePhamAssetJVC2023.pdf" target="_blank"
                            style="font-size: 18pt; background-color: rgb(255, 255, 255); text-align: justify; font-family: sans-serif;">
                            Profile PhamAsset JVC 2023
                        </a>
                    </div>
                    <div>
                        <div style="box-sizing: border-box; background-color: rgb(255, 255, 255); text-align: justify;">
                            <span
                                style="box-sizing: border-box; font-size: 18px; font-family: Roboto, Roboto; color: rgb(33, 37, 41);"><br></span>
                        </div>
                        <div style="box-sizing: border-box; background-color: rgb(255, 255, 255); text-align: justify;">
                            <span
                                style="box-sizing: border-box; font-size: 18px; font-family: Roboto, Roboto; color: rgb(33, 37, 41);">
                                <table align style="border-collapse: collapse;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span style="font-size: 24pt;">
                                                    <a href="https://pham-asset.com/upload/ProfilePhamAssetJVC2023.pdf"
                                                        target="_blank">Tải về</a></span>
                                            </td> 
                                        </tr>
                                    </tbody>
                                </table>
                            </span>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div class="footer_right">
                <div class="t_lienhe_home">Cập nhật tin tức tại </div>
                <div style="margin-top:2%;">
                    <table style="border-collapse:collapse;width:100%;">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://www.facebook.com/congtyjojo?mibextid=ZbWKwL"><img
                                            src="https://pham-asset.com/upload/fb-icon.png" border="0"
                                            style="margin-right: 20px;"></a><a
                                        href="https://youtube.com/@phamasset3375"><img
                                            src="https://pham-asset.com/upload/instagram-icon.png" border="0px"
                                            style="margin-right: 20px;"><img
                                            src="https://pham-asset.com/upload/youtube-icon.png" border="0px"
                                            style="margin-right: 20px;"></a><br>
                                </td>
                            </tr>

                            <tr>
                                <td><img src="https://pham-asset.com/upload/icon_visa.png" border="0px"
                                        style="margin-right: 20px;"><img
                                        src="https://pham-asset.com/upload/icon_ATMonline.png" border="0px"
                                        style="margin-right: 20px;"><img
                                        src="https://pham-asset.com/upload/icon_bank_transfer.png" border="0px"
                                        style="margin-right: 20px;"><img
                                        src="https://pham-asset.com/upload/icon_cod.png" border="0px"
                                        style="margin-right: 20px;"><img
                                        src="https://pham-asset.com/upload/icon_zalo_pay.png" border="0px"><br></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="footer_center">
                <div class="l">
                    <div v-for="menu in leftMenu" :key="menu.id" class="menu_footer">
                        <a :href="menu.link">{{ menu.name }}</a>
                    </div>
                </div>
                <div class="r">
                    <div v-for="menu in rightMenu" :key="menu.id" class="menu_footer">
                        <a :href="menu.link">{{ menu.name }}</a>
                    </div>
                </div>
                <div style="clear:both; height:0px;"></div>
            </div>
            <div style="clear:both; height:0px;"></div>
        </div>
    </div>
</template>

<script>

</script>