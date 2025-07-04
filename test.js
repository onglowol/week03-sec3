import {getContext,keys} from "./week03-module.js";

document.addEventListener("DOMContentLoaded", (ev) => {
    //coding here!
    const ctx = getContext("#myCanvas");

    const player = {
        x : 400,
        y : 300,
        size : 80, // width and height
        color : 'red',
    }

    function draw() {
        //clear canvas (clear render buffer)
        ctx.fillstyle = "rgb(200, 255, 255)"
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        //clear data/input
        if (keys["a"]) {
            player.x -= 0.1;
        }

        //transform & render
        ctx.save();
        //transform
        ctx.translate(player.x, player.y);
        //render
        ctx.fillstyle = player.color;
        ctx.fillRect(
            -player.size
            -player.size
            player.fillstyle()
            player.fillRect(0,0)
            ctx.restore()
        );


        requestAnimationFrame(draw);
    }
    draw();
});