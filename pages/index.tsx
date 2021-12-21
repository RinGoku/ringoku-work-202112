import { Canvas } from "@react-three/fiber";
// import { EffectComposer, Glitch } from "@react-three/postprocessing";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette
} from "@react-three/postprocessing";
import type { NextPage } from "next";
import LandingTitle from "../components/landing/LandingTitle";
import HomeBoxes from "../components/three/Boxes";
import Landing from "../components/three/Landing";
import GlitchShader from "../components/three/shaders/GlitchShader";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Landing />
      <LandingTitle />
    </div>
  );
};

export default Home;
