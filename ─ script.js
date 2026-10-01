const fireworks =
    document.querySelector(".fireworks");



function createFirework() {

    const centerX =
        Math.random() *
        window.innerWidth;


    const centerY =
        80 +
        Math.random() *
        (window.innerHeight * 0.55);



    // 28 particles
    for (let i = 0; i < 28; i++) {

        const spark =
            document.createElement("span");


        spark.className = "spark";


        const angle =
            (Math.PI * 2 * i) / 28;


        const distance =
            60 +
            Math.random() * 100;


        spark.style.left =
            centerX + "px";


        spark.style.top =
            centerY + "px";


        spark.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance + "px"
        );


        spark.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance + "px"
        );


        fireworks.appendChild(spark);



        setTimeout(() => {

            spark.remove();

        }, 1200);

    }

}



/* CELEBRATE BUTTON */

function celebrate() {

    for (let i = 0; i < 8; i++) {

        setTimeout(
            createFirework,
            i * 180
        );

    }

}



/* AUTOMATIC FIREWORKS */

setInterval(
    createFirework,
    1500
);


createFirework();