import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


import Model from './components/Model'
import Sec1 from './components/Sec1'
import Sec2 from './components/Sec2'
import Sec3 from './components/Sec3'
import Sec4 from './components/Sec4'
import Sec5 from './components/Sec5'
import Sec6 from './components/Sec6'
import Sec7 from './components/Sec7'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Eyes from './components/Eyes'
import Location from './components/Location'



import Navbar2 from './components/Navbar2'
import TubesCursorComponent from './components/TubesCursorComponent'







const App = () => {

  const StoneRef = useRef()
  const sec1Ref = useRef()
  const sec2Ref = useRef()
  const sec3Ref = useRef()
  const sec4Ref = useRef()
  const sec5Ref = useRef()
  const sec6Ref = useRef()
  const CarouselRef = useRef()
  const LocationRef = useRef()

  


  useEffect(()=>{
   const lenis = new Lenis({
       duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical',
        gestureDirection: 'vertical', 
        smooth: true,
        infinite:false,
        lerp: 0.02,
      
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // section 2
    ScrollTrigger.create({
      trigger:sec2Ref.current,
      start:'top center',
     
      onEnter:()=>{
        gsap.to(StoneRef.current.position,{
            x:-8,
          y:-2,
          z:4,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
              x:-.3,
            y:.2,
            z:0,
          duration:2,
          ease:'power4.out'
        })

      },

      onLeaveBack:()=>{
        gsap.to(StoneRef.current.position,{
          x:3,
          y:-1,
          z:-4,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
            x:0,
            y:-0.5,
            z:0,
          duration:2,
          ease:'power4.out'
        })
      }


    })

     // section 3
    ScrollTrigger.create({
      trigger:sec3Ref.current,
      start:'top center',
      onEnter:()=>{
        gsap.to(StoneRef.current.position,{
           x:-7,
          y:-.8,
          z:4,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
            x:0,
            y:2,
            z:0,
          duration:2,
          ease:'power4.out'
        })

      },

      onLeaveBack:()=>{
        gsap.to(StoneRef.current.position,{
          x:-8,
          y:-2,
          z:4,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
              x:-.3,
            y:.2,
            z:0,
          duration:2,
          ease:'power4.out'
        })
      }


    })

           // section 4
    ScrollTrigger.create({
      trigger:sec4Ref.current,
      start:'top center',
      onEnter:()=>{
        gsap.to(StoneRef.current.position,{
           x:5,
          y:-.8,
          z:-4,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
            x:0,
            y:-1,
            z:0,
          duration:2,
          ease:'power4.out'
        })

      },

      onLeaveBack:()=>{
        gsap.to(StoneRef.current.position,{
          x:-7,
          y:-.8,
          z:4,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
           x:0,
            y:2,
            z:0,
          duration:2,
          ease:'power4.out'
        })
      }


    })


            // section 5
    ScrollTrigger.create({
      trigger:sec5Ref.current,
      start:'top center',
      onEnter:()=>{
        gsap.to(StoneRef.current.position,{
           x:-1,
          y:1,
          z:-2,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
            x:-.1,
            y:.6,
            z:0,
          duration:2,
          ease:'power4.out'
        })

      },

      onLeaveBack:()=>{
        gsap.to(StoneRef.current.position,{
           x:5,
          y:-.8,
          z:-4,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
             x:0,
            y:-1,
            z:0,
          duration:2,
          ease:'power4.out'
        })
      }


    })

             // Carousel
    ScrollTrigger.create({
      trigger:CarouselRef.current,
      start:'top center',
      onEnter:()=>{
        gsap.to(StoneRef.current.position,{
           x:3,
          y:1.5,
          z:10,
          duration:5,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
              x:0,
            y:0,
            z:0,
          duration:2,
          ease:'power4.out'
        })

      },

      onLeaveBack:()=>{
        gsap.to(StoneRef.current.position,{
           x:-1,
          y:1,
          z:-2,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
             x:-.1,
            y:.6,
            z:0,
          duration:2,
          ease:'power4.out'
        })
      }


    })

          // section 6
      ScrollTrigger.create({
      trigger:sec6Ref.current,
      start:'top top',
      onEnter:()=>{
        gsap.to(StoneRef.current.position,{
           x:-20,
          y:-10,
          z:2,
          duration:5,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
              x:0,
            y:2.5,
            z:-.4,
          duration:2,
          ease:'power4.out'
        })

      },

      onLeaveBack:()=>{
        gsap.to(StoneRef.current.position,{
            x:3,
          y:1.5,
          z:10,
          duration:2,
          ease:'power4.out'
        })

         gsap.to(StoneRef.current.rotation,{
            x:0,
            y:0,
            z:0,
          duration:2,
          ease:'power4.out'
        })
      }


    })

 


  },[])



  return (
    <div  className='overflow-hidden bg-[#FEFEFD]'>
      <Navbar2 />

    <Canvas camera={{position: [6, 4, 8], fov: 45}} style={{height: '100vh' , position:'fixed', top: 0, left: 0 , zIndex: 1000 , pointerEvents:'none'}}>
      <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/afrikaans_church_exterior_1k.hdr'} background={false}/>
      <directionalLight intensity={1} position={[10, 10, 5]} />
      <Model ref={StoneRef} />
      <OrbitControls/>
    </Canvas>
 
    <Sec1 ref={sec1Ref} />
    <Sec2 ref={sec2Ref} />
    <Sec3 ref={sec3Ref} />
    <Sec4 ref={sec4Ref} />
    <Sec5 ref={sec5Ref} />
    <Carousel ref={CarouselRef} />
     
    <Location ref={LocationRef} />
     <Sec6 ref={sec6Ref} />
    <Footer />
    </div>
  )
}

export default App

