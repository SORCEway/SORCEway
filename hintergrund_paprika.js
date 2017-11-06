function P_A_P_R_I_K_A(count) {
    let canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = -1;
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    document.body.insertBefore(canvas, document.body.firstChild);

    let img = new Image();
    let ctx = canvas.getContext("2d");

    let i = 0;

    let freedoms = new Array(count);

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        for (let i = 0; i < freedoms.length; i++) {
            if (typeof freedoms[i] == "undefined") {
                let pos = randInt(-canvas.height, canvas.width);
                freedoms[i] = {
                    x: (pos < 0) ? 0 : pos,
                    y: (pos < 0) ? -pos : 0,
                    scale: rand(0.4, 1.3),
                    speed: rand(0.5, 6),
                    angle: rand(-0.2, 0.2)
                };
            }
            let freedom = freedoms[i];
            let width = img.width * freedom.scale;
            let height = img.height * freedom.scale;
            ctx.drawImage(img, freedom.x - width, freedom.y - height, width, height);
            freedom.x += freedom.speed * (1+freedom.angle);
            freedom.y += freedom.speed * (1-freedom.angle);
            if (freedom.x >= canvas.width+width || freedom.y >= canvas.height+height) {
                delete freedoms[i]
            }
        }

        window.requestAnimationFrame(draw);
    }

    img.src = "___FREIHEIT___.png";
    img.onload = draw;

    window.addEventListener("resize", () => {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    })
};