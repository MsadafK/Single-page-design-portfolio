const works = document.querySelector(".main_my-work-section_images-container");
const arrowLeft = document.querySelector(".left-arrow-button");
const arrowRight = document.querySelector(".right-arrow-button");
const mobile_width = 286;
const tablet_width = 768;
const desktop_width = 556;

let window_current_width =
  document.documentElement.clientWidth || window.innerWidth;

function calculate_width_to_show(width) {
  let direction;

  arrowLeft.addEventListener("click", function () {
    direction = 1;
    works.style.transform = `translate(${width}px)`;
  });

  arrowRight.addEventListener("click", function () {
    direction = -1;
    works.style.transform = `translate(-${width}px)`;
  });

  works.addEventListener("transitionend", function () {
    if (direction === -1) {
      works.appendChild(works.firstElementChild);
    } else if (direction === 1) {
      works.prepend(works.lastElementChild);
    }

    works.style.transition = "none";
    works.style.transform = "translate(0)";

    setTimeout(function () {
      works.style.transition = "all 0.5s";
    });
  });
}

if (window_current_width < tablet_width) {
  //Probably mobile
  calculate_width_to_show(mobile_width);
} else {
  // Probably
  calculate_width_to_show(desktop_width);
}
