// 🚫 Chặn chuột phải
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// 🚫 Chặn các phím tắt DevTools
document.addEventListener("keydown", function(e) {

  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }

  // Ctrl + U
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
  }

  // Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
    e.preventDefault();
  }

  // Ctrl + Shift + J
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
    e.preventDefault();
  }

  // Ctrl + Shift + C
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") {
    e.preventDefault();
  }

});