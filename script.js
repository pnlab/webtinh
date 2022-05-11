const dsSanPham = document.getElementById("ds-san-pham");

console.log(dsSanPham);

let sp = document.getElementsByClassName("san_pham")


function mauSanPham(ten, anh, mota,gia){
  return `<div class="san_pham">
          <div class="noi_dung_san_pham">
            <p class="ghi_chu">
              Thực phẩm
            </p>
            <img class="anh-minh_hoa_san_pham"
              src="${anh}" />
            <div class="can_le"></div>
            <h4 class="ten_san_pham">${ten}</h4>

            <p class="mo_ta_san_pham">${""}</p>
            <div class="gia_san_pham">
              <p>đ${gia}</p>
            </div>
            <button class="nut_them_vao_gio_hang ">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>`;
}


mangSanPham.map(sp =>{
  dsSanPham.innerHTML += mauSanPham(sp.name, sp.image, sp.mota, sp.price);
})

// for(let i = 0; i < 20; i++){
//   dsSanPham.innerHTML+=sp[0].outerHTML;
// }




// Danh muc
function hienThiDanhMuc() {
  document.getElementById("danhmuc-nd").style.display ="block"
}
window.onclick = function (e) {
  if (!e.target.matches(".danhmuc-nut")) {
   document.getElementById("danhmuc-nd").style.display = "none";
  }
};

let soLuong = 0;

function tinhGia() {
  let tongTien = 0;
  const dsSanPham = document.querySelectorAll(".sanpham");
  dsSanPham.forEach((e) => {
    const gia = e.querySelector(".gia").innerText;
    const soLuong = e.querySelector(".soluong").value;
    const tong = Number(gia) * Number(soLuong);
    e.querySelector(".tong").innerText = Math.round(tong * 100) / 100;
    tongTien += tong;
  });
  document.querySelector("#tong-tien").innerText =
    Math.round(tongTien * 100) / 100;
}

tinhGia();

function tangSL(id) {
  soLuong++;
  $("#" + id).val(soLuong);
  tinhGia();
}
function giamSL(id) {
  if (soLuong > 0) {
    soLuong--;
    $("#" + id).val(soLuong);
    tinhGia();
  }
}
