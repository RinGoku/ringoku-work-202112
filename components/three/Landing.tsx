import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise
} from "@react-three/postprocessing";
import HomeBoxes from "./Boxes";
import GlitchShader from "./shaders/GlitchShader";

const Landing = () => {
  return (
    <Canvas
      style={{
        width: 100 + "vw",
        height: 100 + "vh",
        position: "fixed",
        top: 0,
        left: 0
      }}
      camera={{ position: [4, 7, 5] }}
    >
      {/* <ambientLight />
    <pointLight position={[0, 10, 10]} />
    <EffectComposer>
      <GlitchShader />
    </EffectComposer> */}
      <ambientLight />
      <pointLight position={[0, 10, 10]} />
      <HomeBoxes />

      <EffectComposer>
        <GlitchShader />
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
    </Canvas>
  );
};

export default Landing;
