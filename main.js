window.onload = () => {
  const gamb = document.querySelector(".gamb");
  const menu = document.querySelector(".menu-left-mobile");
  const gamb_close = document.querySelector(".gamb-close");

  gamb.onclick = () => {
    menu.classList.add("show");
  };

  gamb_close.onclick = () => {
    menu.classList.remove("show");
  };
};
