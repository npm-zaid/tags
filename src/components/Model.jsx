import { Center, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { forwardRef ,useEffect} from 'react'
import * as THREE from 'three'

const Model = forwardRef((props, ref) => {
 
  
    const {scene ,animations} = useGLTF('/models/demon_bee_full_texture.glb')

  
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
    
         <primitive ref={ref} position={[3, -1, -4]} rotation={[0, -.5, 0]} scale={1.8} object={scene} />
   
  )
})

export default Model