let soLuong = 0;

function tinhGia() {
  let tongTien = 0;
  const dsSanPham = document.querySelectorAll(".sanpham");
  dsSanPham.forEach((e) => {
    const gia = e.querySelector(".gia").innerText;
    const soLuong = e.querySelector(".soluong").value;
    const tong = Number(gia) * Number(soLuong);
    // e.querySelector(".tong").innerText = Math.round(tong * 100) / 100;
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
function hienThiDanhMuc() {
  document.getElementById("danhmuc-nd").classList.toggle("hienthi-block");
}
window.onclick = function (e) {
  if (!e.target.matches(".danhmuc-nut")) {
    var myDropdown = document.getElementById("danhmuc-nd");
    if (myDropdown.classList.contains("hienthi-block")) {
      myDropdown.classList.remove("hienthi-block");
    }
  }
};
