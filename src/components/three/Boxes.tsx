import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

type Box = {
  position: number[];
  color: string;
};

const blue = "rgb(0, 116, 191)";
const pink = "rgb(208, 109, 140)";

export const boxesArray: Box[] = [
  // 1列目一段
  {
    position: [-2.4, -2.4, 2.4],
    color: blue,
  },
  {
    position: [-2.4, -1.2, 2.4],
    color: blue,
  },
  {
    position: [-2.4, 0, 2.4],
    color: blue,
  },
  {
    position: [-2.4, 1.2, 2.4],
    color: blue,
  },
  {
    position: [-2.4, 2.4, 2.4],
    color: blue,
  },
  // 1列目二段
  {
    position: [-1.2, 0, 2.4],
    color: blue,
  },
  // 1列目三段
  {
    position: [0, 0, 2.4],
    color: blue,
  },
  // 1列目四段
  {
    position: [1.2, 0, 2.4],
    color: blue,
  },
  // 1列目五段
  {
    position: [2.4, -2.4, 2.4],
    color: blue,
  },
  {
    position: [2.4, -1.2, 2.4],
    color: blue,
  },
  {
    position: [2.4, 0, 2.4],
    color: blue,
  },
  {
    position: [2.4, 1.2, 2.4],
    color: blue,
  },
  {
    position: [2.4, 2.4, 2.4],
    color: blue,
  },

  // 5列目一段
  {
    position: [-2.4, -2.4, -2.4],
    color: pink,
  },
  {
    position: [-1.2, -2.4, -2.4],
    color: pink,
  },
  {
    position: [0, -2.4, -2.4],
    color: pink,
  },
  {
    position: [1.2, -2.4, -2.4],
    color: pink,
  },
  {
    position: [2.4, -2.4, -2.4],
    color: pink,
  },
  // 5列目二段
  {
    position: [-2.4, -1.2, -2.4],
    color: pink,
  },
  {
    position: [0, -1.2, -2.4],
    color: pink,
  },
  {
    position: [2.4, -1.2, -2.4],
    color: pink,
  },
  // 5列目三段
  {
    position: [-2.4, 0, -2.4],
    color: pink,
  },
  {
    position: [0, 0, -2.4],
    color: pink,
  },
  {
    position: [2.4, 0, -2.4],
    color: pink,
  },
  // 5列目四段
  {
    position: [-2.4, 1.2, -2.4],
    color: pink,
  },
  {
    position: [0, 1.2, -2.4],
    color: pink,
  },
  {
    position: [2.4, 1.2, -2.4],
    color: pink,
  },
  // 5列目五段
  {
    position: [-2.4, 2.4, -2.4],
    color: pink,
  },
  {
    position: [0, 2.4, -2.4],
    color: pink,
  },
  {
    position: [2.4, 2.4, -2.4],
    color: pink,
  },
];

type Props = {
  position: number[];
  color: string;
};

const HomeBoxes = () => {
  const Box = (props: Props) => {
    return (
      <mesh
        position={
          new Vector3(props.position[0], props.position[1], props.position[2])
        }
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    );
  };

  const Boxes = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);
    useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));

    return (
      <instancedMesh
        ref={meshRef}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        scale={hovered ? new Vector3(1.2, 1.2, 1.2) : new Vector3(1, 1, 1)}
      >
        {boxesArray.map((item, index) => (
          <Box key={index} position={item.position} color={item.color} />
        ))}
      </instancedMesh>
    );
  };

  return <Boxes />;
};

export default HomeBoxes;
