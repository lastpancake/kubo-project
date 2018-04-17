window.addEventListener("resize", function() {
    let width = document.body.clientWidth;

    if (width < 1280) {
      if (document.querySelector("#velkommen-billede")) {
        let image = document.querySelector("#velkommen-billede");
        image.parentNode.removeChild(image);
      }
    }
});

window.onload = function() {
  let width = document.body.clientWidth;

  if (width < 1280) {
    if (document.querySelector("#velkommen-billede")) {
      let image = document.querySelector("#velkommen-billede");
      image.parentNode.removeChild(image);
    }
  }
}
