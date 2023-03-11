let hamburger = document.querySelector(".hamburger");
let lineOne = document.getElementById("line-1");
let lineTwo = document.getElementById("line-2");
let lineThree = document.getElementById("line-3");

let links = document.querySelector(".links")

const lines = new TimelineMax({ paused: true, reversed: true });

lines
	.to(lineTwo, 0.5, {
		x: -100,
		transformOrigin: "center",
		transformStyle: "preserve-3d",
		opacity: 0,
	})
	.to(
		lineThree,
		0.5,
		{
			y: "200%",
			delay: 0.125,
		},
		0
	)
	.to(
		lineOne,
		0.5,
		{
			y: "-200%",
			delay: 0.125,
		},
		0
	)
	.to(
		lineThree,
		0.5,
		{
			rotate: 45,
			transformOrigin: "center",
		},
		"rotate"
	)
	.to(
		lineOne,
		0.5,
		{
			rotate: -45,
			transformOrigin: "center",
		},
		"rotate"
	);


    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("cross");
        
        lines.reversed() ? lines.play() : lines.reverse();
        showLinks()
    });




    const showLinks = ()=>{

        if(hamburger.classList.contains("cross")){
            links.style.display = "flex"

        }else{
            links.style.display = "none"

        }

    }



    addEventListener("resize", () => {
        if(window.innerWidth < 650){
            links.style.display = "none"
        }else{
            links.style.display = "flex"

        }
    });