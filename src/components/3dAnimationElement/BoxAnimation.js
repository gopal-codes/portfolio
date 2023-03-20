import React from 'react'
import { BoxGeometry, MeshBasicMaterial } from 'three'

const BoxAnimation = () => {
  return (
    <mesh>
        <BoxGeometry />
        <MeshBasicMaterial />
    </mesh>
  )
}

export default BoxAnimation