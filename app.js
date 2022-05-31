const gifs = document.querySelectorAll(".gif");
const profileImg = document.querySelector(".profileImg");
const imgHoverHandler = (e) => {
  profileImg.src = "1.jpg";
};
const imgOutHover = (e) => {
  profileImg.src = `nicolasMartinez.png`;
};
const gifClickHandler = (e) => {
  const gifSelected = e.currentTarget;
  const img = gifSelected.querySelector("img");
  const link = img.dataset.link;
  link ? window.open(`${link}`, "_blank") : "";
};
profileImg.addEventListener("mouseover", imgHoverHandler);
profileImg.addEventListener("mouseout", imgOutHover);
gifs.forEach((gif) => {
  gif.addEventListener("click", gifClickHandler);
});
