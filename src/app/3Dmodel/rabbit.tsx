"use client";
import { Suspense, useState } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import Scene from "./Scene";
import Loading from "../loading";

export default function Rabbit() {
  return (
    <div className=" w-full h-screen ">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls autoRotate enableZoom={false} />
          <ambientLight />
          <Scene />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
