// console.clear();

// import \* as THREE from './vendor/three/build/three.module.js';

// function init() {
//   const canvas = document.querySelector("#c");
//   const renderer = new THREE.WebGLRenderer({ canvas });

//   const scene = new THREE.Scene();

//   renderer.setClearColor(new THREE.Color(0x000000, 0));


//   const fov = 50;
//   const aspect = 2; // the canvas default
//   const near = 0.1;
//   const far = 1000;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  
//   camera.position.z = 0;
//   camera.position.y = 0;
//   camera.position.x = 0;
  

//   const planeGeometry = new THREE.PlaneBufferGeometry(10, 10);
//   const planeMaterial = new THREE.MeshLambertMaterial({
//     color: 0xffffff
//   });
//   const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//   plane.visible = false;

//   scene.add(plane);

//   let cubeArray = [];

//   const rows = 15;
//   const cols = 15;
//   const yAxis = 15;
//   const planeSize = planeGeometry.parameters.height;
//   const cubeSize = planeSize / cols;

//   for (let j = 0; j < rows; j++) {
//     for (let i = 0; i < cols; i++) {
//       for (let y = 0; y < cols; y++) {
//         const randomNum = Math.random() * 1 + 0.6;
//         const cubeGeometry = new THREE.BoxGeometry(
//           cubeSize,
//           cubeSize,
//           cubeSize
//         );

//         const cubeMaterial = new THREE.MeshLambertMaterial();
//         cubeMaterial.color = new THREE.Color(0, randomNum, randomNum);
//         const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

//         cube.position.z = -10 + j * cubeSize - (planeSize - cubeSize) / 2 + j + 5;
//         cube.position.x = -10 + i * cubeSize - (planeSize - cubeSize) / 2 + i + 5;
//         cube.position.y = -10 + y * cubeSize - (planeSize - cubeSize) / 2 + y + 5;

//         cubeArray.push(cube);
//         scene.add(cube);

//       }
//     }
//   }
  
  
//   const tl = gsap.timeline();
//   let scaleSize = 0.2;
//   const scale = cubeArray.map((a) => a.scale);
  
  
//   tl.to(scale, {
//     duration: 1,
//     y: scaleSize,
//     x: scaleSize,
//     z: scaleSize,
//     yoyo: true,
//     repeat: -1,
//     stagger: {
//       amount: 3,
//       from: "end",
//     }
//   });

//   {
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
//     directionalLight.position.set(-20, 40, 60);
//     scene.add(directionalLight);
//   }

//   {
//     const ambientLight = new THREE.AmbientLight(0xfce5cd, 0.6);
//     scene.add(ambientLight);
//   }

//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   function render(time) {
//     time *= 0.0001;

//     cubeArray.forEach((cube, ndx) => {
//       const speed = 1 + ndx * 0.01;
//       const rot = time * speed;
//       cube.rotation.x = rot;
//       cube.rotation.y = rot;
    
//     });
    
//     camera.rotation.z = camera.rotation.y = time;

//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }

//     renderer.render(scene, camera);

//     requestAnimationFrame(render);
//   }

//   requestAnimationFrame(render);

//   renderer.render(scene, camera);
// }

// init();
