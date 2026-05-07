document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery"); // Ensure this is an <img> tag
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");

  colorButton.addEventListener("click", () => {
    box.style.backgroundColor = "blue"; 
  });

  let toggled = false;
  toggleButton.addEventListener("click", () => {
    // Optimization: Check if gallery is an image tag before setting src
    if (gallery && gallery.tagName === 'IMG') {
      gallery.src = toggled ? "./assets/image1.jpeg" : "./assets/image2.jpeg"; "./assets/image3.jpeg";
      toggled = !toggled;
    } else {
      console.error("Element with ID 'gallery' is not an <img> tag.");
    }
  });

  console.log("Page loaded!"); 
});
