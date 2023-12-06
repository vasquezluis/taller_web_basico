const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const mobile_links = document.getElementsByClassName("mobile_link");

for (let i = 0; i < mobile_links.length; i++) {
  mobile_links[i].addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
