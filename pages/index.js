import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setItem } from '../reducer/reducer';
import { initialRender, aboutBackStyle } from '../utils/config';

import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';
import About from '../components/About';
import Proyectos from '../components/Proyectos';
import Contact from '../components/Contact';

export default function Home() {
  // Tarea: Organizar.... Usar Redux. Separar funciones en src/utils/functions.js.
  // Separar componentes containers
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const {
    trans, height, backgroundImagen, projectsImagen, aboutImagen, aboutHeigth,
  } = state;
  const bg = { body: `bg-[url('/${backgroundImagen}')]`, projects: `bg-[url('/${projectsImagen}')]` };
  // eslint-disable-next-line no-unused-vars

  function reveal(id, elementClass) {
    const element = document.querySelector(elementClass);
    const position = element.getBoundingClientRect().top;

    const newTrans = state.trans;
    newTrans[id] = position > 0 && position < window.innerHeight ? 'scale-x-150' : 'scale-x-0';
    dispatch(setItem('trans', newTrans));
  }

  function handleScroll(component) {
    document.querySelector(`#${component}`).scrollIntoView({ behavior: 'smooth' });
  }

  React.useEffect(() => {
    initialRender(backgroundImagen, projectsImagen, height);

    dispatch(setItem('height', window.innerHeight));
    window.addEventListener('resize', () => dispatch(setItem('height', window.innerHeight)));
    dispatch(setItem('aboutHeigth', document.querySelector('#about').offsetHeight));

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
        <Navbar handleScroll={handleScroll} bg={bg} setBg={null} />
        <Main trans={trans[0]} handleScroll={handleScroll} />
        <div className="animate-bounce flex justify-center mt-auto mb-16"><img src="/Icons/Arrow.svg" width="16px" alt="" /></div>
      </div>
      <div id="aboutBack" style={aboutBackStyle(height, aboutHeigth, aboutImagen)} />
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
