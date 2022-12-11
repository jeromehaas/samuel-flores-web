import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Float, OrbitControls } from '@react-three/drei';


const App = () => {

   const model = useLoader(GLTFLoader, './models/visitenkarte.glb');

  return (
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <directionalLight intensity={ 0.2} />
            <Float speed={ 2 }>
              <primitive object={ model.scene } position-y={ -0.5 } scale={ 15 } />
            </Float>
      </Canvas>
     );

}

export default App;
