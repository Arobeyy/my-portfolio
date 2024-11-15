function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const videos = document.querySelectorAll(".project-video");

function autoPlayVideo() {
  videos.forEach((video) => {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      video.play();
    } else {
      video.pause();
    }
  });
}

window.addEventListener("scroll", autoPlayVideo);
window.addEventListener("resize", autoPlayVideo);
