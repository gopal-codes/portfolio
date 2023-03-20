import { MeshDistortMaterial, Sphere, Stars, } from '@react-three/drei'
import React,{ useRef, useState } from 'react'
import { useTheme } from 'styled-components'
import {useFrame } from "@react-three/fiber";

export const ProfileBackgroundAnimation = ({second}) => {
    
  const theme= useTheme();
  return (
    <mesh > 
        <Sphere scale={2.7}>
            <MeshDistortMaterial 
            color={second===true?theme.primaryColor:theme.textcolor}
            attach="material"
            distort={0.4}
            speed={2}
            />
        </Sphere>
    </mesh>
  )
}


export const BoxAnimation = () => {
  const theme= useTheme();
  
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  
  useFrame(() => {
    !hovered && (mesh.current.rotation.x = mesh.current.rotation.y += 0.01);
  });
  
  return (
  <mesh
      ref={mesh}
      scale="3.5"
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <Stars />
      <boxGeometry />
      <meshLambertMaterial  color={theme.primaryColor} />
    </mesh>
)
}
