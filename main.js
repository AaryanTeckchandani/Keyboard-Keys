canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
    console.log("in add funcion");
img_imgTag = new Image(); 
img_imgTag.onload = uploadimg; 
img_imgTag.src = img_image;
}

function uploadimg() {

ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);


if
    (keyPressed >=97 && keyPressed<=122)

    {
        console.log("in If statement");
        alphabetkey(); 
    }
    else if (keyPressed >=65 && keyPressed<=90)
    {
        alphabetkey();
    }

    else if (keyPressed >=48 && keyPressed<=57)
    {
        numberkey();
    }

    else if (keyPressed >=127)
    {
        specialkey();
    }

    else if (keyPressed >=33 && keyPressed<=47)
    {
        otherkey();
    }

    else if (keyPressed >=37 && keyPressed<=40){
        console.log("Arrow up"); 
        arrowkey();
    }

    

else
{
otherkey();
document.getElementById("d1").innerHTML="You pressed symbol or other key";
}
}

function alphabetkey()
{
    img_image="Alpkey.png";
    add();
}

function numberkey()
{
    img_image="numkey.png";
add();
}

function arrowkey()
{img_image="Arrkey.png";
add();
}

function specialkey()
{
    img_image="spkey.png";
add();
}

function otherkey()
{
img_image="otherkey.png";
add();
}
