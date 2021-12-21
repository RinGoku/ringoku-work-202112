import { useFrame } from "@react-three/fiber";
import { Glitch } from "@react-three/postprocessing";
import { useState } from "react";

const GlitchShader = () => {
  return (
    <Glitch delay={[1.5, 3.5]} strength={[0.3, 1.0]} active ratio={0.85} />
  );
};

export default GlitchShader;
