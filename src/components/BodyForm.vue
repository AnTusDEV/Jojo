<template>
  <div class="body"><img src="https://pham-asset.com/upload/banner.png" width="100%px" border="0"></div>
  <div class="body_footer">
    <div class="item_hotro">
      <table style="border-collapse:collapse;width:100%;">
        <tbody>
          <tr>
            <td><img src="https://pham-asset.com/upload/truck.png" border="0px"><br></td>
            <td>
              <table style="border-collapse:collapse;width:100%;">
                <tbody>
                  <tr>
                    <td>VẬN CHUYỂN</td>
                  </tr>
                  <tr>
                    <td>Miễn phí cho đơn hàng trên 1 triệu</td>
                  </tr>
                </tbody>
              </table><br>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="item_hotro">
      <table style="border-collapse:collapse;width:100%;">
        <tbody>
          <tr>
            <td><img src="https://pham-asset.com/upload/cargo.png" border="0"><br></td>
            <td>
              <table style="border-collapse:collapse;width:100%;">
                <tbody>
                  <tr>
                    <td>HỖ TRỢ TƯ VẤN</td>
                  </tr>
                  <tr>
                    <td>Thứ 2 - Thứ 7: 08h00 - 17h00</td>
                  </tr>
                </tbody>
              </table><br>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="item_hotro">
      <table style="border-collapse:collapse;width:100%;">
        <tbody>
          <tr>
            <td><img src="https://pham-asset.com/upload/support.png" border="0"><br></td>
            <td>
              <table style="border-collapse:collapse;width:100%;">
                <tbody>
                  <tr>
                    <td>ĐẶT
                      HÀNG NGAY</td>
                  </tr>
                  <tr>
                    <td>028
                      37653286</td>
                  </tr>
                </tbody>
              </table><br>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="item_hotro">
      <table style="border-collapse:collapse;width:100%;">
        <tbody>
          <tr>
            <td><img src="https://pham-asset.com/upload/pay-2.png" border="0"><br></td>
            <td>
              <table style="border-collapse:collapse;width:100%;">
                <tbody>
                  <tr>
                    <td>CHÍNH HÃNG</td>
                  </tr>
                  <tr>
                    <td>Cam kết đảm bảo chất lượng 100%</td>
                  </tr>
                </tbody>
              </table><br>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="clear:both; height:0px;"></div>
  </div>

  <div class="body_form">
    <div class="f_left">
      <div class="t_lienhe_home">Thông tin công ty</div>
      <table style="border-collapse:collapse;width:100%;">
        <tbody>
          <tr>
            <td><span style="font-weight: bold;">Công ty Liên Doanh
                Phạm-Asset</span><br>Trụ sở chính: Lô D4/1, Đường 1B,
              Khu công nghiệp Vĩnh Lộc, P. Bình H`ưng Hòa B, Q. Bình Tân,
              TP.HCM, Việt Nam<br>ĐT: (+84-28) 37 6532 84 / 85 /
              86<br></td>
          </tr>
          <tr>
            <td>
              <table style="border-collapse:collapse;width:100%;">
                <tbody>
                  <tr>
                    <td><img src="https://pham-asset.com/upload/1.jpg" border="0px"><br>
                    </td>
                    <td>jojo@pham-asset.com
                    </td>
                  </tr>
                  <tr>
                    <td><img src="https://pham-asset.com/upload/2.jpg" border="0px"><br>
                    </td>
                    <td>Trụ sở chính: Lô D4/1,
                      Đường 1B , Khu công nghiệp Vĩnh Lộc, Phường Bình
                      Hưng Hòa B, Quận Bình Tân, TP.HCM, Việt
                      Nam</td>
                  </tr>
                  <tr>
                    <td><img src="https://pham-asset.com/upload/3.jpg" border="0px"></td>
                    <td>028 37653286
                    </td>
                  </tr>
                  <tr>
                    <td><img src="https://pham-asset.com/upload/4.jpg" border="0px"><br>
                    </td>
                    <td>Luôn mở cửa
                    </td>
                  </tr>
                </tbody>
              </table><br>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="f_right">
      <form action="./?mode=send" enctype="multipart/form-data" method="post" name="frmInformation" id="frmInformation"
        onsubmit="return submitForm()">
        <div class="t_lienhe_home">Liên hệ với chúng tôi </div>
        <div class="item_lienhe_home">
          <div>Họ tên </div>
          <div><input name="Contact_Name" type="text" id="Contact_Name" style="width:100%;" value class="text_lienhe">
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="item_lienhe_home">
          <div>Email </div>
          <div><input name="Contact_Email" type="text" id="Contact_Email" style="width:100%;" value class="text_lienhe">
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="item_lienhe_home">
          <div>Điện thoại </div>
          <div><input name="Contact_Phone" type="text" id="Contact_Phone" style="width:100%;" value class="text_lienhe">
          </div>
          <div style="clear:both;"></div>
        </div>
        <div style="clear:both; height:10px;"></div>
        <div>
          <div>Nội dung </div><textarea name="Contact_Content" id="Contact_Content"
            style="width:99%; height:50px; overflow:auto; border:solid 1px  #4d7c98;"></textarea>
        </div>
        <div class="item_lienhe_left">
          <div class="b_guilienhe" onclick="submitForm()"><strong> Gửi
              liên hệ </strong></div>
        </div>
      </form>

    </div>
    <div style="clear:both; height:0px;"></div>
  </div>
</template>