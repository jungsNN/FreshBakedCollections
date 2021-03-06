/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: YJ_ (https://sketchfab.com/YJ_)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/phone-booth-f52615a329da4908a42f5fae1d0f37d1
title: Phone booth
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    bolt_low001_box_tex_0: THREE.Mesh
    bolt_low001_glass_tex_0: THREE.Mesh
    bolt_low001_phone_tex_0: THREE.Mesh
    bolt_low001_line_tex_0: THREE.Mesh
  }
  materials: {
    box_tex: THREE.MeshStandardMaterial
    glass_tex: THREE.MeshStandardMaterial
    phone_tex: THREE.MeshStandardMaterial
    line_tex: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/pb-transformed.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 36.47]}>
              <mesh geometry={nodes.bolt_low001_box_tex_0.geometry} material={materials.box_tex} />
              <mesh geometry={nodes.bolt_low001_glass_tex_0.geometry} material={materials.glass_tex} />
              <mesh geometry={nodes.bolt_low001_phone_tex_0.geometry} material={materials.phone_tex} />
              <mesh geometry={nodes.bolt_low001_line_tex_0.geometry} material={materials.line_tex} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pb-transformed.glb')
