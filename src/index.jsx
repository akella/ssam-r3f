import { ssam } from "ssam";
import * as THREE from 'three'
import { extend, createRoot, events } from '@react-three/fiber'
extend(THREE)
import App from './App'
import {getPlayhead} from './App'

const sketch = ({ wrap, canvas, width, height, pixelRatio }) => {
  if (import.meta.hot) {
    import.meta.hot.dispose(() => wrap.dispose()); // @connect this to react
    import.meta.hot.accept(() => wrap.hotReload());
  }
  const root = createRoot(canvas)
  // Configure the root, inject events optionally, set camera, etc
  root.configure({ events, camera: { position: [0, 0, 3] } })
  // createRoot by design is not responsive, you have to take care of resize yourself
  window.addEventListener('resize', () => {
    root.configure({ size: { width: width, height: height } })
  })
  // Trigger resize
  window.dispatchEvent(new Event('resize'))
  const render = (playhead) => {
    console.log('render',playhead)
  }
  // Render entry point
  root.render(<App  />)








  wrap.render = ({ playhead }) => {
    getPlayhead(playhead)
  };

  wrap.resize = ({ width, height }) => {
    // camera.aspect = width / height;
    // camera.updateProjectionMatrix();
    // renderer.setSize(width, height);
  };

  wrap.unload = () => {
    // @todo: dispose of any resources here
    // renderer.dispose();
    // renderer.forceContextLoss();
  };
};

const settings = {
  mode: "webgl2",
  dimensions: [800, 800],
  pixelRatio: window.devicePixelRatio,
  animate: true,
  duration: 6_000,
  playFps: 60,
  exportFps: 60,
  framesFormat: ["mp4"],
  attributes: {
    preserveDrawingBuffer: true,
  },
};

ssam(sketch, settings);
