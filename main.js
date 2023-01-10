var mouseevent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=5;
radius=3;

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)

{

    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;





    mouseevent = "mousedown";

    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(lpox, lpoy ,40, 0, 2 *Math.PI);
ctx.stroke();


}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e)

{

    
    mouseevent = "mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e)

{


    mouseevent = "mouseup";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{

    c_p_o_x = e.clientX - canvas.offsetLeft;
    c_p_o_y = e.clientY - canvas.offsetTop;

   

    if(mouseevent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.radius = radius;
        ctx.arc(lpox, lpoy ,40, 0, 2 *Math.PI);
        



        console.log("last position of x and y coordinates = ");
        console.log("x = " + lpox + "y = " + lpoy);
        ctx.moveTo(lpox, lpoy);


        console.log("current position of x and y coordinates = ");
        console.log("x = " + c_p_o_x + "y = " + c_p_o_y);
        ctx.lineTo(c_p_o_x , c_p_o_y);
        ctx.stroke();
    
    }

    lpox = c_p_o_x;
    lpoy =c_p_o_y;
}










  


function clearArea()
{

    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}


