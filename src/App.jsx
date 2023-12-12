import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
const { PI } = Math;

let getPlayhead = (arg) => {};
function App() {
  const [playhead, setplayhead] = useState(0);
  getPlayhead = (arg) => setplayhead(arg);

  useFrame(({ clock }) => {
    console.log(playhead, "playhead for animation");
  });
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[5, 5, 5]} />
      <mesh rotation={[playhead*PI,playhead*PI,0]}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </>
  );
}

export { getPlayhead };
export default App;
