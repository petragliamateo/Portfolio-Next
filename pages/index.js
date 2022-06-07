import Meta from '../components/Meta'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Main from "../components/Main"
import About from "../components/About"
import Proyectos from "../components/Proyectos"
import Contact from "../components/Contact"
import React from 'react'

export default function Home() {

  const [height, setHeight] = React.useState(() => 0)
  const [trans, setTrans] = React.useState(() => ["scale-x-0", "scale-x-0", "scale-x-0", "scale-x-0"])
  const [status, setStatus] = React.useState(0)
  
  React.useEffect( () => {
    document.querySelector("body").classList.add("bg-[url('/BG/BG-image-SM.jpg')]");
    document.querySelector("body").classList.add("sm:bg-[url('/BG/BG-image-MD.jpg')]");
    document.querySelector("body").classList.add("md:bg-[url('/BG/BG-image-LG.jpg')]");
    document.querySelector("body").classList.add("lg:bg-[url('/BG/BG-image-XL.jpg')]");
    document.querySelector("body").classList.add("xl:bg-[url('/BG/BG-image-2XL.jpg')]");
    document.querySelector("body").classList.add("2xl:bg-[url('/BG/BG-image-3XL.jpg')]");
    document.querySelector("body").classList.add("bg-dark-3");
    document.querySelector("body").classList.add("bg-fixed");

    setHeight(window.innerHeight)
    window.addEventListener("resize", () => setHeight(window.innerHeight))
    console.log("height: ",height, window.innerHeight)

    reveal(0, ".reveal0")
    //Este useEffect se ejecuta al recargar la página
  }, [height])

  React.useEffect( () => {
    function scroller(){
      console.log(status)
      for(let i=0; i < 4; i++){
        reveal(i, `.reveal${i}`)
      }
    }
    let k = 0
    window.addEventListener("scroll", e => {
      k++
      if(k>10){
        //Aplico esto cada 10 px de scrolleo
        setStatus(prev => prev+1)
        scroller()
        k=0
      }
    } )
    //Este useEffect se ejecuta cada vez que se scrollea, gracias al status.
  }, [height])  

  function reveal(id, elementClass){
    let element = document.querySelector(elementClass)
    let position = element.getBoundingClientRect().top;
    
    setTrans(prev => {
      let newTrans = prev;
      newTrans[id] = position > 0 && position < window.innerHeight ? "scale-x-150" : "scale-x-0";
      return newTrans;
    })
  }

  function handleScroll(component){
    document.querySelector(`#${component}`).scrollIntoView({behavior: 'smooth'});
  }

  //A solucionar: Uso muchas veces las mismas variables en distintos componentes.
  //Podría usar un provider con useContext y pasarlas globalmente? o Redux?
  return (
    <div className="">
      <Meta />
      <div style={{height: `${height}px`}} className={`flex flex-col`} id="home" >
        <Navbar handleScroll={handleScroll} />
        <Main trans={trans[0]} handleScroll={handleScroll} />
        <div className="animate-bounce flex justify-center mt-auto mb-16"><img src="/Arrow.svg" width="16px"/></div>
      </div>
      <About trans={trans}/>
      <Proyectos />
      <Contact />
      <Footer handleScroll={handleScroll} />

    </div>
  )
}
