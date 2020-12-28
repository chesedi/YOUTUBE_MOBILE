const moreBtn = document.querySelector(".info .metadata .moreBtn");
console.log("moreBtn", moreBtn);
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
