//creating a scene
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth/window.innerHeight, //aspect ratio
    0.1, //near clipping plane
    1000 //far clipping plane
)

//set camera position on z axis
camera.position.z = 5;

//instance of renderer, to allocate space on webpage to do our 3d stuff
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");

//set the size of space, here using windows inner width and height properties to take full page.
renderer.setSize( window.innerWidth, window.innerHeight );

//now to inject that space on to the page
document.body.appendChild( renderer.domElement );

//make window responsive
window.addEventListener('resize',() => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();
});


var geometry = new THREE.ConeGeometry( 
    1, //radius
    2, //height
    8,  //radial segments
    1  //height segments 
);


var geometry2 = new THREE.BoxGeometry(1,1,1)

var material = new THREE.MeshLambertMaterial( {color: 0x0000FF} );
var cone = new THREE.Mesh( geometry, material );
var cube = new THREE.Mesh( geometry2, material );

cone.position.x = -2;
scene.add(cone);


cube.position.set(2,1,1);
scene.add(cube);

var light = new THREE.PointLight(
    0xFFFFFF, //color (white)
    1, //intensity
    500, //distance
);
light.position.set(10,0,25); //x,y,z axis
scene.add(light);

var render = function() {
    requestAnimationFrame(render); //to create a loop to render ui repeatedly after page is refreshed
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.03;
    renderer.render(scene, camera);
}

render();