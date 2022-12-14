import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Float, OrbitControls } from '@react-three/drei';

const App = () => {

  const model = useLoader(GLTFLoader, './models/visitenkarte.glb');

  return (
    <Canvas>
      <OrbitControls maxDistance={ 10 } minDistance={ 2 } />
      <ambientLight intensity={ 0.1 } />
      <directionalLight position={[1, 20, 3]} intensity={ 1 } />
        <Float speed={ 2 }>
          <primitive object={ model.scene } position-y={ -0.75 } scale={ 20 } />
        </Float>
    </Canvas>
  );

};

export default App;
