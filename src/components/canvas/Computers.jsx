import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
// useGLTF allows us to import 3d Models
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei' 
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    // when dealing with 3d elements we do not start with a div 
    // we rather start with mesh
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0,-3,-2.2] : [0, -3.45, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () =>{
  const [isMobile,setIsMobile] = useState(false);

  useEffect(() =>{
    // Add a Listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // set the initial value of the 'isMobile' state variable
    // are we on the device that is lower than width 500px
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle 
    // changes to the media query
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches)
    }

    // Add the callback function to handle the changes to the media query
    //so we are adding the function media query, when the component mounts
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    // remove the Listener whern the component is unmounted
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20,3,5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas