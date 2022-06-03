import Meta from '../components/Meta'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Main from "../components/Main"
import About from "../components/About"
import React from 'react'

export default function Home() {

  const [height, setHeight] = React.useState(() => 0)
  const [trans, setTrans] = React.useState(["scale-x-0", "scale-x-0", "scale-x-0", "scale-x-0"])

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
    console.log(height)
  }, [height])

  React.useEffect( () => {
      reveal(0, ".reveal0")
      window.addEventListener("scroll", () => {
        for(let i=0; i < 4; i++){
          reveal(i, `.reveal${i}`)
        }
      })
  }, [trans])  

  function reveal(id, elementClass){
    let element = document.querySelector(elementClass)
    let position = element.getBoundingClientRect().top;
    
    setTrans(prev => {
      let newTrans = prev;
      newTrans[id] = position < window.innerHeight ? "scale-x-150" : "scale-x-0";
      return newTrans;
    })
    console.log(position > 0 && position < window.innerHeight)
    console.log(trans)
    
  }


  return (
    <div className="">
      <Meta />
      <div className={`h-[${height}px]`}>
        <Navbar />
        <Main trans={trans[2]}/>
        <div>{trans[0]}</div>
      </div>
      <About trans={trans}/>

      <Footer />

    </div>
  )
}
