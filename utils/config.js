/* eslint-disable import/prefer-default-export */
const slowScroll = (element, n = 0) => {
  const scrolltotop = document.scrollingElement.scrollTop - n;
  const target = document.querySelector(element);
  const xvalue = 'center';
  const factor = 0.5;
  const yvalue = scrolltotop * factor;
  target.style.backgroundPosition = `${xvalue} ${yvalue}px`;
};

export const initialRender = (backgroundImagen, projectsImagen, height, aboutHeigth) => {
  /*
  document.querySelector('body').classList.add("bg-[url('/BG/BG-image-movile.jpg')]");
  document.querySelector('body').classList.add("sm:bg-[url('/BG/BG-image-MD.jpg')]");
  document.querySelector('body').classList.add("md:bg-[url('/BG/BG-image-LG.jpg')]");
  document.querySelector('body').classList.add("lg:bg-[url('/BG/BG-image-XL.jpg')]");
  document.querySelector('body').classList.add("xl:bg-[url('/BG/BG-image-2XL.jpg')]");
  document.querySelector('body').classList.add("2xl:bg-[url('/BG/BG-image-3XL.jpg')]");
  document.querySelector('body').classList.add('bg-dark-3');
  document.querySelector('body').classList.add('bg-fixed');
  */
  // Body config:
  document.querySelector('body').style.backgroundImage = `url('/${backgroundImagen}')`;
  document.querySelector('body').classList.add('bg-scroll');
  document.querySelector('body').classList.add('bg-left-top');
  document.querySelector('body').classList.add('blur-sm');

  document.querySelector('#projects').style.backgroundImage = `url('/${projectsImagen}')`;
  document.querySelector('#projects').classList.add('bg-scroll');
  document.querySelector('#projects').classList.add('bg-left-top');

  const projectInitialPosition = height + aboutHeigth;
  slowScroll('body');
  slowScroll('#projects', projectInitialPosition);

  document.querySelector('body').onscroll = () => {
    slowScroll('body');
    slowScroll('#projects', projectInitialPosition);
    slowScroll('#aboutBack', height * 2);
  };
};

// About config
export const aboutBackStyle = (height, aboutHeigth, aboutImagen) => ({
  height: aboutHeigth,
  width: '100%',
  top: height,
  position: 'absolute',
  backgroundImage: `url('/${aboutImagen}')`,
  backgroundAttachment: 'scroll',
});
