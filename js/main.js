const accordionItems = document.querySelectorAll(".accordion-item");
const accordionBtns = document.querySelectorAll(".accordion-button");


function collapse(element) {
  element.classList.remove("active");
}

function show(element) {
  element.classList.add("active");
}

function reset() {
  for (const item of accordionItems) {
    collapse(item);
  }
}

for (const item of accordionBtns) {
  item.addEventListener("click", function (event) {
    if (event.target.closest(".accordion-item").classList.contains("active")) {
      collapse(event.target.closest(".accordion-item"));

    } else {
      reset();
      show(event.target.closest(".accordion-item"));
    }
  });
}
