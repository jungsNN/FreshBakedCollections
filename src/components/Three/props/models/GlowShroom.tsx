/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: caffeineandcarpaltunnel (https://sketchfab.com/caffeineandcarpaltunnel)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/glow-shroom-d4eca9d9180542b5a06ca15e4eb58061
title: Glow Shroom
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    shroom_caps_lambert4_0: THREE.Mesh
    shroom_stems_lambert5_0: THREE.Mesh
    pDisc1_lambert6_0: THREE.Mesh
    pPlane1_lambert7_0: THREE.Mesh
    pPlane2_lambert7_0: THREE.Mesh
    pPlane3_lambert7_0: THREE.Mesh
    pPlane4_lambert7_0: THREE.Mesh
  }
  materials: {
    lambert4: THREE.MeshStandardMaterial
    lambert5: THREE.MeshStandardMaterial
    lambert6: THREE.MeshStandardMaterial
    lambert7: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/glow-shroom-transformed.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 1.99]}>
            <mesh geometry={nodes.shroom_caps_lambert4_0.geometry} material={materials.lambert4} />
          </group>
          <group position={[0, 0, 1.99]}>
            <mesh geometry={nodes.shroom_stems_lambert5_0.geometry} material={materials.lambert5} />
          </group>
          <group position={[0, 0, -0.25]} scale={8.21}>
            <mesh geometry={nodes.pDisc1_lambert6_0.geometry} material={materials.lambert6} />
          </group>
          <group position={[-3.83, 4.22, 0.39]} rotation={[0, 0, -1.22]} scale={[5.14, 3.55, 1.46]}>
            <mesh geometry={nodes.pPlane1_lambert7_0.geometry} material={materials.lambert7} />
          </group>
          <group position={[-2.42, 3.25, -0.62]} rotation={[-0.08, -1, -1.6]} scale={[4.34, 3, 1.23]}>
            <mesh geometry={nodes.pPlane2_lambert7_0.geometry} material={materials.lambert7} />
          </group>
          <group position={[3.32, 2.77, -0.02]} rotation={[-2.93, -0.54, 2.04]} scale={[3.01, 2.08, 0.85]}>
            <mesh geometry={nodes.pPlane3_lambert7_0.geometry} material={materials.lambert7} />
          </group>
          <group position={[2.76, 3.35, -0.71]} rotation={[-2.88, -0.71, 1.95]} scale={[4.34, 3, 1.23]}>
            <mesh geometry={nodes.pPlane4_lambert7_0.geometry} material={materials.lambert7} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glow-shroom-transformed.glb')
