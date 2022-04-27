canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
blue = "blue";
yellow = "yellow";
black = "black";
green = "green";
red = "red";

ctx.beginPath();
ctx.strokeStyle = blue;
ctx.linewidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = yellow;
ctx.linewidth = 2;
ctx.arc(245, 240, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = black;
ctx.linewidth = 2;
ctx.arc(290, 200, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = green;
ctx.linewidth = 2;
ctx.arc(335, 240, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = red;
ctx.linewidth = 2;
ctx.arc(380, 200, 40, 0, 2 * Math.PI)
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("x = "+ mouse_x+" , y= "+ mouse_y)
}