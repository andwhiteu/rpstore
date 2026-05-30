let x = 0;
let y = 0;
let step = 20;
let message = "richsanky".split("");
let xpos = [];
let ypos = [];

for(let i=0; i<message.length; i++){
    xpos[i] = -50;
    ypos[i] = -50;
}

document.addEventListener("mousemove", function(e){
    x = e.pageX;
    y = e.pageY;
});

function textfollow(){
    for(let i=message.length-1; i>0; i--){
        xpos[i] = xpos[i-1] + step;
        ypos[i] = ypos[i-1];
    }
    xpos[0] = x + step;
    ypos[0] = y;

    for(let i=0; i<message.length; i++){
        let span = document.getElementById("span"+i);
        if(span){
            span.style.left = xpos[i] + "px";
            span.style.top = ypos[i] + "px";
        }
    }
    setTimeout(textfollow, 30);
}

for(let i=0; i<message.length; i++){
    document.write("<span class='spanstyle' id='span"+i+"'>" + message[i] + "</span>");
}