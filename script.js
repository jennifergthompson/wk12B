document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");
 
 
  colorButton.addEventListener("click", () => {
    bx.style.backgroundColor = "blue"; 
  });
 
 
 
  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/image1.jpg";
      toggled = false;
    } else {
      gallery.src = "./assets/image-does-not-exist.jpg"; 
      toggled = true;
    }
  });
 
 
 
  console.log("Page loaded!"
});
 
