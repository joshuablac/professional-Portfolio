import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, useGLTF, OrbitControls } from '@react-three/drei' // <-- Import OrbitControls here

import CanvasLoader from '../Loader'

// Component for loading the computer model
const Computers = (isMobile) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      {/* Hemisphere light for ambient lighting */}
      <hemisphereLight skyColor={"#fff"} groundColor={"#000"} intensity={1} />
      <pointLight intensity={1}/>
      {/* Point light for brighter highlights */}
     
<directionalLight position={[-30, 50, 10]} intensity={7.5} receiveShadow={true}/>

      {/* Render the imported 3D model */}
      <primitive object={computer.scene} scale={isMobile? 0.7:0.75} position={isMobile? [0,-3,-2.2]:[0, -3.25, -1.5]} rotation={[-0.01,-0.2, -0.1]} />
    </mesh>
  )
}

// Main Canvas wrapper for rendering the 3D model
const ComputerCanvas = () => {
const [isMobile, setIsMobile]= useState(true)

useEffect(()=>{
  const medieQuery = window.matchMedia('(max-width:500px)');//to check if it match the small screen
setIsMobile(medieQuery.matches)
console.log(isMobile)
const handleMediaQueryChange = (event)=>{
  setIsMobile(event.matches);
}

medieQuery.addEventListener('change', handleMediaQueryChange);
return ()=>{
  medieQuery.removeEventListener('change', handleMediaQueryChange)
}
},[])
  return (

    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Add OrbitControls here */}
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> 
        <Computers  isMobile={isMobile}/>
      </Suspense>

      {/* Preload all assets */}
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas