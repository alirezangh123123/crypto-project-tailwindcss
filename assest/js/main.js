const getContentMenu = document.getElementById("mobile-content-menu");
const getTabMenu = document.getElementById("mobil-tab-menu");
const getCloseBtn = document.getElementsByClassName("leave-btn")[0];
const getWallet = document.querySelector(".wallet-wrapper img");
const getttrBtn = document.getElementsByClassName("ttr-btn")[0];
const getrialBtn = document.getElementsByClassName("rial-btn")[0];
window.addEventListener("load", (event) => {
  getTabMenu.addEventListener("click", () => {
    OpenMenu();
  });
  getCloseBtn.addEventListener("click", (event) => {
    closeMenu();
  });
  getttrBtn.addEventListener("click", () => {
    ttrBtnStatus();
  });
  getrialBtn.addEventListener("click", () => {
    railBtnStatus();
  });
});
let ttrBtnStatus = () => {
  getttrBtn.classList.remove("text-white");
  getttrBtn.classList.remove("bg-primary-50");
  getttrBtn.classList.add("bg-white");
  getttrBtn.classList.add("text-primary-50");
  //
  getrialBtn.classList.remove("text-primary-50");
  getrialBtn.classList.remove("bg-white");
  getrialBtn.classList.add("text-white");
  getrialBtn.classList.add("bg-primary-50");
};
let railBtnStatus = () => {
  getttrBtn.classList.remove("bg-white");
  getttrBtn.classList.remove("text-primary-50");
  getttrBtn.classList.add("text-white");
  getttrBtn.classList.add("bg-primary-50");
  //
  getrialBtn.classList.remove("bg-primary-50");
  getrialBtn.classList.remove("text-white");
  getrialBtn.classList.add("bg-white");
  getrialBtn.classList.add("text-primary-50");
};
let closeMenu = () => {
  getContentMenu.classList.remove("acitve");
};
let OpenMenu = () => {
  getContentMenu.classList.add("acitve");
  getContentMenu.classList.add("z-60");
  getWallet.classList.remove("z-40");
  // getWallet.classList.add("z-20");
};
