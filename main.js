canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

width_1 = 160;
height_1 = 90;

car_x_1 = 10;
car_y_1 = 10;

car1 = "01.png";
car2 = "02.png";

width_2 = 160;
height_2 = 90;

car_x_2 = 10;
car_y_2 = 120;

Bg = "Track.jpg";

function add(){
    Backg = new Image();
    Backg.onload = uploadBg;
    Backg.src = Bg;
    
    car_1img = new Image()
    car_1img.onload = uploadCar1;
    car_1img.src = car1;

    car_2img = new Image()
    car_2img.onload = uploadCar2;
    car_2img.src = car2;
}

function uploadCar1(){
    ctx.drawImage(car_1img, car_x_1, car_y_1, width_1, height_1);
}

function uploadBg(){
    ctx.drawImage(Backg, 0, 0, canvas.width, canvas.height);
}

function uploadCar2(){
ctx.drawImage(car_2img, car_x_2, car_y_2, width_2, height_2);
}

window.addEventListener("keydown" ,my_keydown1) ;

function my_keydown1(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38')
    {
        car1up();

        console.log("up arrow key pressed")
    }

    if (keypressed == '40')
    {
        car1down();

        console.log("down arrow key pressed")
    }

    if (keypressed == '37')
    {
        car1left();

        console.log("left arrow key pressed")
    }

    if (keypressed == '39')
    {
        car1right();

        console.log("right arrow key pressed")
    }

    if (keypressed == '87')
    {
        car2up();

        console.log("w key pressed")
    }

    if (keypressed == '65')
    {
        car2left();

        console.log("a key pressed")
    }

    if (keypressed == '83')
    {
        car2down();

        console.log("s key pressed")
    }

    if (keypressed == '68')
    {
        car2right();

        console.log("d key pressed")
    }

    if (car_x_1 > 700){
        console.log("Car 1 won");
        document.getElementById("stats").innerHTML = "Car 1 won"
    }

    if (car_x_2 > 700){
        console.log("Car 2 won");
        document.getElementById("stats").innerHTML = "Car 2 won"
    }
}

function car1up(){
    
    if(car_y_1 > 0)
        {
            car_y_1 = car_y_1 - 10;
            console.log("Up arrow is pressed |" + "car y = " + car_y_1);
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
}

function car1down(){
    
    if(car_y_1 <= 510)
        {
            car_y_1 = car_y_1 + 10;
            console.log("Down arrow is pressed |" + "car y = " + car_y_1);
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
}

function car1left(){
    
    if(car_x_1 >= 0)
        {
            car_x_1 = car_x_1 - 10;
            console.log("Left arrow is pressed |" + "car x = " + car_x_1);
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
}

function car1right(){
    
    if(car_x_1 <= 640)
        {
            car_x_1 = car_x_1 + 10;
            console.log("Right arrow is pressed |" + "car x = " + car_y_1);
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
}






function car2up(){
    
    if(car_y_1 > 0)
        {
            car_y_2 = car_y_2 - 10;
            console.log("W key is pressed |" + "car y = " + car_y_2);
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
}

function car2down(){
    
    if(car_y_2 <= 510)
        {
            car_y_2 = car_y_2 + 10;
            console.log("S Key is pressed |" + "car y = " + car_y_2);
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
}

function car2left(){
    
    if(car_x_2 >= 0)
        {
            car_x_2 = car_x_2 - 10;
            console.log("A key is pressed |" + "car x = " + car_x_2);
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
}

function car2right(){
    
    if(car_x_2 <= 640)
        {
            car_x_2 = car_x_2 + 10;
            console.log("D key is pressed |" + "car x = " + car_y_2);
            uploadBg();
            uploadCar1();
            uploadCar2();
        }
}