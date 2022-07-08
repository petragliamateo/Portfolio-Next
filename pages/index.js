import React from 'react';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';
import About from '../components/About';
import Proyectos from '../components/Proyectos';
import Contact from '../components/Contact';

export default function Home() {
  const [height, setHeight] = React.useState(() => 0);
  const [trans, setTrans] = React.useState(() => ['scale-x-0', 'scale-x-0', 'scale-x-0', 'scale-x-0']);
  const [bg, setBg] = React.useState({
    body: "bg-[url('/images/nightSky.jpg')]", projects: "bg-[url('/images/buildings.jpg')]",
  });
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = React.useState(0);

  let aboutHeigth = 488;
  const aboutBackStyle = {
    height: aboutHeigth, width: '100%', top: height, position: 'absolute',
    filter: 'blur(10px)',
  };

  function reveal(id, elementClass) {
    const element = document.querySelector(elementClass);
    const position = element.getBoundingClientRect().top;

    setTrans((prev) => {
      const newTrans = prev;
      newTrans[id] = position > 0 && position < window.innerHeight ? 'scale-x-150' : 'scale-x-0';
      return newTrans;
    });
  }

  function handleScroll(component) {
    document.querySelector(`#${component}`).scrollIntoView({ behavior: 'smooth' });
  }

  const slowScroll = (element, n = 0) => {
    const scrolltotop = document.scrollingElement.scrollTop;
    const target = document.querySelector(element);
    const xvalue = 'center';
    const factor = 0.5;
    const yvalue = (scrolltotop - n) * factor;
    target.style.backgroundPosition = `${xvalue} ${yvalue}px`;
  };

  React.useEffect(() => {
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
    document.querySelector('body').classList.add(bg.body);
    document.querySelector('body').classList.add('bg-scroll');
    document.querySelector('body').classList.add('bg-left-top');
    document.querySelector('body').classList.add('blur-sm');
    setTimeout(() => {
      document.querySelector('body').classList.remove('blur-sm');
      document.querySelector('body').classList.add('transition');
      document.querySelector('body').classList.add('duration-700');
    }, 100);

    document.querySelector('#projects').classList.add(bg.projects);
    document.querySelector('#projects').classList.add('bg-scroll');

    const projectInitialPosition = document.querySelector('#projects').getBoundingClientRect().y;
    slowScroll('body');
    slowScroll('#projects', projectInitialPosition);

    document.querySelector('body').onscroll = () => {
      slowScroll('body');
      slowScroll('#projects', projectInitialPosition);
      slowScroll('#aboutBack', -height);
    };

    setHeight(window.innerHeight);
    window.addEventListener('resize', () => setHeight(window.innerHeight));
    aboutHeigth = document.querySelector('#about').offsetHeight;

    reveal(0, '.reveal0');
    // Este useEffect se ejecuta al recargar la página
  }, [height]);

  React.useEffect(() => {
    function scroller() {
      for (let i = 0; i < 4; i += 1) {
        reveal(i, `.reveal${i}`);
      }
    }
    let k = 0;
    window.addEventListener('scroll', () => {
      k += 1;
      if (k > 10) {
        // Aplico esto cada 10 px de scrolleo
        setStatus((prev) => prev + 1);
        scroller();
        k = 0;
      }
    });
    // Este useEffect se ejecuta cada vez que se scrollea, gracias al status.
  }, []);

  // A solucionar: Uso muchas veces las mismas variables en distintos componentes.
  // \-> Puedo definirlas en CSS.
  // Podría usar un provider con useContext y pasarlas globalmente? o Redux?
  return (
    <div style={{ width: '100%' }}>

      <Meta />
      <div style={{ height: height === 0 ? '100%' : `${height}px` }} className="flex flex-col" id="home">
        <Navbar handleScroll={handleScroll} />
        <Main trans={trans[0]} handleScroll={handleScroll} />
        <div className="animate-bounce flex justify-center mt-auto mb-16"><img src="/Icons/Arrow.svg" width="16px" alt="" /></div>
      </div>
      <div id="aboutBack" style={aboutBackStyle} className={bg.body} />
      <About trans={trans} />
      <Proyectos />
      <Contact />
      <Footer handleScroll={handleScroll} />

      <button
        type="button"
        onClick={() => handleScroll('home')}
        className="bg-dark-6 text-slate-800 w-6 h-9 text-3xl
          self-center rounded-full fixed bottom-0 right-0 mb-5 mr-5"
      >
        &#8593;

      </button>

    </div>
  );
}
