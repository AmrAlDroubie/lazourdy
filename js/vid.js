const videos = document.querySelectorAll("video");

videos[0].addEventListener("load", () => {
  videos[1].querySelector("source").src = videos[1].dataset.vsrc;
});

videos.forEach((vid, index) => {
  vid.addEventListener("loadeddata", () => {
    vid.nextElementSibling.querySelector("source").src =
      vid.nextElementSibling.querySelector("source").dataset.vsrc;
    vid.nextElementSibling.load();
  });
  vid.addEventListener("ended", () => {
    if (videos.length != index + 1) {
      vid.classList.remove("top");
      vid.nextElementSibling.classList.add("top");
      vid.nextElementSibling.play();
    } else {
      videos.forEach((ele) => ele.classList.remove("top"));
      videos[0].classList.add("top");
      videos[0].play();
    }
  });
});
