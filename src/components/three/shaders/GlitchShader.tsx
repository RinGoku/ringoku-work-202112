import { useFrame } from "@react-three/fiber";
import { Glitch } from "@react-three/postprocessing";
import { useState } from "react";
import { Vector2 } from "three";

const GlitchShader = () => {
  return (
    <Glitch
      delay={new Vector2(1.5, 3.5)}
      strength={new Vector2(0.3, 1.0)}
      active
      ratio={0.85}
    />
  );
};

export default GlitchShader;
