function draw(){
    var c = document.getElementById("zdzislaw");  
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.arc(152,152,151,0.5 * Math.PI, 1.5 * Math.PI);
    ctx.arc(452,152,151, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.fillStyle = "#C2C0BC";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fill();
    ctx.moveTo(360,212);
    ctx.lineTo(360,302);
    ctx.stroke();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250,303);
    ctx.lineTo(380,303);
    ctx.stroke();       
    ctx.beginPath();
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.arc(162,152,61,0.5 * Math.PI, 1.5 * Math.PI);
    ctx.arc(442,152,61, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.fillStyle = "#58BD6D";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}