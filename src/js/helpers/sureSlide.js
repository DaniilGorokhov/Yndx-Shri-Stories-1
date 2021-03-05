export default function sureSlide(slideAlias) {
  const slide = document.querySelector('.slide');
  return slide && slide.dataset.slide === slideAlias;
}
