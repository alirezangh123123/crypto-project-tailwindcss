const getContentMenu = document.getElementById("mobile-content-menu");
const getTabMenu = document.getElementById("mobil-tab-menu");
const getCloseBtn = document.getElementsByClassName("leave-btn")[0];
const getWallet = document.querySelector(".wallet-wrapper img");
window.addEventListener("load", (event) => {
  getTabMenu.addEventListener("click", () => {
    OpenMenu();
  });
  getCloseBtn.addEventListener("click", (event) => {
    closeMenu();
  });
});
let closeMenu = () => {
  getContentMenu.classList.remove("acitve");
};
let OpenMenu = () => {
  getContentMenu.classList.add("acitve");
  getWallet.classList.remove("z-40");
  getWallet.classList.add("z-30");
};
