const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const toggle = document.querySelector('.toggle')

toggle.addEventListener('change',()=>{
    document.body.classList.toggle('dark-theme')
})


const myBars = document.querySelectorAll('.skill__inner-bar');

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

myBars.forEach(bar => {
  observer.observe(bar);
  console.log(bar);
});

const myIcon = document.querySelectorAll('#image1');

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('visable');
    } else {
      entry.target.classList.remove('visable');
    }
  });
});

myIcon.forEach(icon => {
  observer.observe(icon);
  console.log(icon);
});