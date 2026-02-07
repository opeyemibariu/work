const stickyS = document.querySelector(".sticky");
const getTheArrow = document.querySelector(".data-lang");
const wishlistBtns = document.querySelectorAll(".gallery button");

function checkMate(xx) {
    xx.style.color = xx.style.color === "blue" ? "#aaa" : "blue";
}
wishlistBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkMate(btn);
  });
});
function updateSticky() {
  const shouldEdit =
    window.scrollY > 40 && window.innerWidth > 992;

  stickyS.classList.toggle("edit-me", shouldEdit);
}
const hider = () => {
    getTheArrow.classList.toggle("hide-me", window.scrollY < 456);
}
window.addEventListener("scroll", hider);
window.addEventListener("resize", hider);
window.addEventListener("scroll", updateSticky);
window.addEventListener("resize", updateSticky);

hider();
updateSticky();