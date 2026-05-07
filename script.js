document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");

  colorButton.addEventListener("click", () => {
    // Fixed: Changed 'bx' to 'box'
    box.style.backgroundColor = "blue"; 
  });

  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/image1.jpg";
      toggled = false;
    } else {
      // Note: Ensure this file actually exists or use a valid fallback URL
      gallery.src = "./assets/image2.jpg"; 
      toggled = true;
    }
  });

  // Fixed: Added missing ')'
  console.log("Page loaded!"); 
}); // Fixed: Added missing '}'
