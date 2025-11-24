import { Center, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { forwardRef ,useEffect} from 'react'
import * as THREE from 'three'

const Model = forwardRef((props, ref) => {
  useFrame(()=>{
    ref.current.rotation.y += 0.01
  })
  
    const {scene ,animations} = useGLTF('/models/stylized_ww1_plane.glb')

  
      // Animation setup
      const mixer = React.useMemo(() => new THREE.AnimationMixer(scene), [scene]);
      useEffect(() => {
        if (animations && animations.length > 0) {
          const action = mixer.clipAction(animations[0]);
          action.play();
        }
      }, [animations, mixer]);
    
      useFrame((_, delta) => mixer.update(delta));
  return (
    
         <primitive ref={ref} position={[0, 0, 0]} rotation={[0, 3, 0]} scale={4} object={scene} />
   
  )
})

export default Model