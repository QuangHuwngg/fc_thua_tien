// 🚫 Chặn chuột phải
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
}, true); // 👈 thêm true

// 🚫 Chặn các phím tắt DevTools (bắt ở capture phase)
document.addEventListener("keydown", function(e) {

  // F12
  if (e.key === "F12") {
    e.preventDefault();
    e.stopPropagation();
  }

  // Ctrl + U
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
    e.stopPropagation();
  }

  // Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
    e.preventDefault();
    e.stopPropagation();
  }

  // Ctrl + Shift + J
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
    e.preventDefault();
    e.stopPropagation();
  }

  // Ctrl + Shift + C
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") {
    e.preventDefault();
    e.stopPropagation();
  }

}, true); // 👈 QUAN TRỌNG