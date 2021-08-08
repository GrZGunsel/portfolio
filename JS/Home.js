var loader = document.querySelector(".loader");

setTimeout(vanish, 3000);
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
  console.log(loader);
}
