const getContentMenu = document.getElementById("mobile-content-menu");
const getTabMenu = document.getElementById("mobil-tab-menu");
const getCloseBtn = document.getElementsByClassName("leave-btn")[0];
window.addEventListener("load", (event) => {
  getTabMenu.addEventListener("click", () => {
    OpenMenu();
  });
  getCloseBtn.addEventListener("click", (event) => {
    closeMenu();
  });
});
let closeMenu = () => {
  getContentMenu.classList.remove("right-0");
  getContentMenu.classList.add("right-[-200rem]");
};
let OpenMenu = () => {
  getContentMenu.classList.remove("right-[-200rem]");
  getContentMenu.classList.add("right-0");
};
