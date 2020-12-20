// (function() {
// 	var cum = document.getElementById("dot");
// 	var style = cum.style;
// 	style.transform = "translateX(1700px)";
// })();

// function myFunction() {
// 	var cum = document.getElementById("dot");
// 	var cont = document.getElementsByClassName("dot");
// 	for (let i=0; i<cont.length; i++) {
// 		var stylei = cont[i].style;
// 		if (i==1) {
// 			stylei.opacity = "0";
// 		}
// 		if (i==2) {
// 			stylei.opacity = "0";
// 		}
// 	}
// 	var style = cum.style;
// 	style.transform = "translateX(0px)";
// 	style.opacity = "0";
// }

function myFunction() {
	var x = document.getElementsByClassName("dot");
	for (let i=0; i<x.length; i++) {
		var style = x[i].style;
	   if (i==0) {
	   	style.transform = "translateX(1000px)";
	   }
	   if (i==1) {
	   	style.transform = "translateX(-800px)";
	   }
	   if (i==2) {
	   style.transform = "translateX(-1000px)";
		}
	}
}



document.addEventListener("mousemove" , parallax);
function parallax(e){
	this.querySelectorAll(".layer").forEach(layer => {
		const speed = layer.getAttribute('data-speed')

		const x = (window.innerWidth - e.pageX*speed)/100
		const y = (window.innerHeight - e.pageY*speed)/100

		layer.style.transform = `translateX(${x}px) translateY(${y}px)`
	})
}

