// Randomise Favicon
var favicons = ["favicon_bakerloo.png", "favicon_barman.png", "favicon_central.png", "favicon_district.png", "favicon_hammer.png", "favicon_metropolitian.png", "favicon_overground.png", "favicon_victoria.png", "favicon_waterloo.png"];

document.querySelector('.favicon').setAttribute("href", "assets/images/" + favicons[Math.floor(Math.random() * favicons.length)]);

window.addEventListener("load", () => {
  // Animations
  document.querySelector('body').classList.remove('preload');

  // animation-fill overrides opacity change, so we have to add it once the animation has finished
  document.querySelectorAll('.main__title').forEach(titleEl => {
    titleEl.addEventListener('animationend', () => {
      titleEl.setAttribute('style', 'opacity: 1;');
    });
  })

  document.querySelector('.main__element:last-of-type .main__title').addEventListener('animationend', () => {
    document.querySelector('body').classList.add('finished');
  });

  // Click events
  document.querySelectorAll('.main__title').forEach(titleEl => {
    titleEl.addEventListener('click', () => {
      const linksEl = titleEl.nextElementSibling;
      linksEl.classList.toggle('main__links--visible');
    });
  })
});
