import React, { useEffect } from "react"
import { Canvas_3D_product } from "./block_3D_product.styles"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
// import * as dat from 'lil-gui'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"

import { navHeight, breakpoints } from "../../../common/globalVars"
import { calculatedViewportHeight } from "../../../common/utility"

import px from "../../../images/textures/environmentMaps/0/px.jpg"
import nx from "../../../images/textures/environmentMaps/0/nx.jpg"
import py from "../../../images/textures/environmentMaps/0/py.jpg"
import ny from "../../../images/textures/environmentMaps/0/ny.jpg"
import pz from "../../../images/textures/environmentMaps/0/pz.jpg"
import nz from "../../../images/textures/environmentMaps/0/nz.jpg"

const Block_3D_product = ({ threeDFileURL }) => {
  useEffect(() => {
    // Loaders
    const gltfLoader = new GLTFLoader()
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/static/")
    gltfLoader.setDRACOLoader(dracoLoader)

    // Debug
    // // const gui = new dat.GUI()
    const debugObject = {}

    // Canvas
    const canvas = document.querySelector(".webgl")

    // Scene
    let scene = new THREE.Scene()

    // Update all materials
    const updateAllMaterials = () => {
      scene.traverse(child => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          // child.material.envMap = environmentMap
          child.material.envMapIntensity = debugObject.envMapIntensity
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }

    // Environment map
    const environmentMap = cubeTextureLoader.load([px, nx, py, ny, pz, nz])

    environmentMap.encoding = THREE.sRGBEncoding

    // scene.background = environmentMap
    // scene.background = new THREE.Color(0xcec5b1); // cream
    scene.environment = environmentMap

    debugObject.envMapIntensity = 2.5
    // gui.add(debugObject, 'envMapIntensity').min(0).max(10).step(0.001).onChange(updateAllMaterials)

    // Models
    // gltfLoader.load("/static/DiamondRing01.glb", gltf => {
    gltfLoader.load(threeDFileURL, gltf => {
      gltf.scene.scale.set(1.2, 1.2, 1.2)
      gltf.scene.position.set(0, -1.4, 0)
      gltf.scene.rotation.y = Math.PI * 0.5
      scene.add(gltf.scene)

      // gui.add(gltf.scene.rotation, 'y').min(- Math.PI).max(Math.PI).step(0.001).name('rotation')
      // gui.add(gltf.scene.position, 'x').min(-15).max(15).step(0.001).name('ring-X')
      // gui.add(gltf.scene.position, 'y').min(-15).max(15).step(0.001).name('ring-Y')
      // gui.add(gltf.scene.position, 'z').min(-15).max(15).step(0.001).name('ring-Z')

      updateAllMaterials()
    })

    // Lights
    const directionalLight = new THREE.DirectionalLight("#ffffff", 3)
    directionalLight.castShadow = true
    directionalLight.shadow.camera.far = 15
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.normalBias = 0.05
    directionalLight.position.set(0.25, 3, -2.25)
    scene.add(directionalLight)

    // gui.add(directionalLight, 'intensity').min(0).max(10).step(0.001).name('lightIntensity')
    // gui.add(directionalLight.position, 'x').min(- 5).max(5).step(0.001).name('lightX')
    // gui.add(directionalLight.position, 'y').min(- 5).max(5).step(0.001).name('lightY')
    // gui.add(directionalLight.position, 'z').min(- 5).max(5).step(0.001).name('lightZ')

    // Sizes
    const getWidth = () => {
      const windowWidth = document.documentElement.clientWidth
      // return windowWidth < breakpoints.tablet ? windowWidth : windowWidth - 18
      return windowWidth
    }
    const getHeight = () => {
      return document.documentElement.clientWidth < breakpoints.tablet
        ? document.documentElement.clientHeight - navHeight.mobile
        : document.querySelector(".heroCarousel")?.offsetHeight
    }

    const sizes = {
      width: getWidth(),
      height: getHeight(),
    }

    // const sizes = {
    //   width: document.body.offsetWidth,
    //   height: document.documentElement.clientHeight,
    // height: document.querySelector(".heroCarousel").offsetHeight,
    // }

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = getWidth()
      sizes.height = getHeight()

      // Update sizes
      // sizes.width = document.body.offsetWidth
      // sizes.height = window.innerHeight
      // sizes.height = document.querySelector(".heroCarousel").offsetHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Camera
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )
    camera.position.set(7.1, 6.6, 3.2)
    scene.add(camera)

    // gui.add(camera.position, 'x').min(- 5).max(15).step(0.001).name('camera-X')
    // gui.add(camera.position, 'y').min(- 5).max(15).step(0.001).name('camera-Y')
    // gui.add(camera.position, 'z').min(- 5).max(15).step(0.001).name('camera-Z')

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enableZoom =
      document.documentElement.clientWidth < breakpoints.tablet ? true : false

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    renderer.physicallyCorrectLights = true
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ReinhardToneMapping
    renderer.toneMappingExposure = 3
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // gui
    // .add(renderer, 'toneMapping', {
    //     No: THREE.NoToneMapping,
    //     Linear: THREE.LinearToneMapping,
    //     Reinhard: THREE.ReinhardToneMapping,
    //     Cineon: THREE.CineonToneMapping,
    //     ACESFilmic: THREE.ACESFilmicToneMapping
    // })
    // gui.add(renderer, 'toneMappingExposure').min(0).max(10).step(0.001)

    // Animate
    let reqAnim
    const block3DProductEl = document.querySelector(".block3DProduct")

    let tick = () => {
      if (block3DProductEl?.classList?.contains("active")) {
        controls.update()
        renderer.render(scene, camera)
      }
      reqAnim = window.requestAnimationFrame(tick)
    }

    tick()

    return () => {
      window.cancelAnimationFrame(reqAnim)
      tick = "empty"
      // renderer.dispose()
      //scene = new THREE.Scene()
    }
  })

  return (
    <>
      <Canvas_3D_product className="webgl block3DProduct">
        Loading 3D Model...
      </Canvas_3D_product>
    </>
  )
}

export default Block_3D_product
