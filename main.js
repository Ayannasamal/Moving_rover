canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');

nasa_mars_images_array = ["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];

random_number=Math.floor(Math.random()*4);


var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 100;
var background_image = nasa_mars_images_array[random_number];
var rover_image = "rover.png";

function add(){
    background_image_object=new Image();
    background_image_object.onload=upload_background;
    background_image_object.src=background_image;

    rover_image_object=new Image();
    rover_image_object.onload=upload_rover;
    rover_image_object.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background_image_object , 0 , 0 , 800 , 600);
}

function upload_rover(){
    ctx.drawImage(rover_image_object , rover_x , rover_y , rover_width , rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=='37'){
        console.log("left");
       left();

    }

    if(keypressed=='38'){
        console.log("up");
       up();
       
    }

    if(keypressed=='39'){
        console.log("right");
       right();
       
    }

    if(keypressed=='40'){
        console.log("down");
       down();
       
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        upload_background();
        upload_rover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        upload_background();
        upload_rover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        upload_background();
        upload_rover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        upload_background();
        upload_rover();
    }
}