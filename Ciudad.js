//Escena
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

var stats = new Stats();
stats.showPanel( 2 ); 
document.body.appendChild( stats.domElement );

var geometry = new THREE.BoxGeometry( 600, 1, 800);
var material = new THREE.MeshBasicMaterial( {color: 0xebebeb, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

// Camara de perspectiva basica
var camera = new THREE.PerspectiveCamera( 120, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 25;
camera.position.y = 15;
camera.position.x = 15;

// Renderizador
var renderer = new THREE.WebGLRenderer({antialias:true});

// Tamaño del renderizador
renderer.setSize( window.innerWidth, window.innerHeight );

// Color del renderizador
renderer.setClearColor("#000000");

// Integracion renderizador
document.body.appendChild( renderer.domElement );

// Render Loop
var render = function () {
  stats.begin();
  requestAnimationFrame( render );
  var speed = Date.now() * 0.0038;
  
  stats.end();
  renderer.render(scene, camera);
};

render();
window.onload = init;

function init(){
    var botonAgregar = document.getElementById('btn-agregar').addEventListener("click", addFunction);
  }

function addFunction() {

    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    console.log('click');

    let geometry = new THREE.BoxGeometry( 1 , Math.random() * (15 -1) + 1, 1 );
    let material = new THREE.MeshBasicMaterial( {color: randomColor});
    let cube =  new THREE.Mesh( geometry, material );
    cube.position.x = Math.random() * (25 ) + 1;
    cube.position.z = Math.random() * (25 ) + 1;
    scene.add(cube)
  }
