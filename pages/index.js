import Meta from '../components/Meta'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Main from "../components/Main"
import About from "../components/About"
import Proyectos from "../components/Proyectos"
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
    //console.log(height)

    reveal(0, ".reveal0")
    //Este useEffect se ejecuta al recargar la página
  }, [])

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
      if(k>15){
        setStatus(prev => prev+1)
        scroller()
        k=0
      }
    } )
    //Este useEffect se ejecuta cada vez que se scrollea, gracias al status.
  }, [])  

  function reveal(id, elementClass){
    let element = document.querySelector(elementClass)
    let position = element.getBoundingClientRect().top;
    
    setTrans(prev => {
      let newTrans = prev;
      newTrans[id] = position > 0 && position < window.innerHeight ? "scale-x-150" : "scale-x-0";
      return newTrans;
    })
  }

  //A solucionar? height a veces anda y a veces no
  return (
    <div className="">
      <Meta />
      <div className={`h-[${height != 0 ? height.toString() : "969"}px] flex flex-col`}>
        <Navbar />
        <Main trans={trans[0]}/>
        <div className="animate-bounce flex justify-center mt-auto mb-16"><img src="/Arrow.svg" width="16px"/></div>
      </div>
      <About trans={trans}/>
      <Proyectos />
      <Footer />

    </div>
  )
}
