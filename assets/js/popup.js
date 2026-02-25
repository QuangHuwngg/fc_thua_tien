function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function showPopup() {

  Swal.fire({
    title: "Thông Báo",
    html: `
      <div style="text-align:center;">
        <img class="banner" alt="" src="/assets/img/banner.gif"
             style="width:100%; max-width:300px; border-radius:10px; margin-bottom:15px;">
             
        <p>
            Chào mừng bạn đến với trang web của FC Thừa Tiền! Đây là một dự án được tạo ra bởi nhóm 4: Hưng, Tùng Dương, Tuấn, Minh Dương - 12A1.
        </p>
      </div>
    `,
    confirmButtonText: "Đã hiểu",
    allowOutsideClick: false
  });

}

// Tự động hiện khi vào trang
window.addEventListener("load", showPopup);
