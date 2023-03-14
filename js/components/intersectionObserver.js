const $sections = document.querySelectorAll("section[data-section-obs]");

export default function intersectionObserver() {

  let options = {
    threshold: [0.5]
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        document
          .querySelector(`a[data-scroll][href="#${id}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`a[data-scroll][href="#${id}"]`)
          .classList.remove("active");
      }
    })
  }, options);

  

  $sections.forEach(section => observer.observe(section));
}

