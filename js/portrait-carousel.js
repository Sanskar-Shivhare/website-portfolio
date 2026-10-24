(() => {
  'use strict';

  const carousel = document.querySelector('.portrait-carousel');
  if (!carousel) return;

  const photos = [...carousel.querySelectorAll('.portrait-photos img')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let paused = reducedMotion.matches;
  let hovered = false;
  let focused = false;
  let timer;

  function schedule() {
    window.clearTimeout(timer);
    if (paused || hovered || focused || document.hidden) return;
    timer = window.setTimeout(() => {
      photos[active].classList.remove('is-active');
      photos[active].setAttribute('aria-hidden', 'true');
      active = (active + 1) % photos.length;
      photos[active].classList.add('is-active');
      photos[active].removeAttribute('aria-hidden');
      schedule();
    }, 7000);
  }

  carousel.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  carousel.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  carousel.addEventListener('focusin', () => { focused = true; schedule(); });
  carousel.addEventListener('focusout', (event) => {
    focused = carousel.contains(event.relatedTarget);
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', () => {
    paused = reducedMotion.matches;
    schedule();
  });
  schedule();
})();
