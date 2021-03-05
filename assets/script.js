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


(function() {
	var stil = document.getElementById("dit");
	var style = stil.style;
	style.transform = "translateX(-170px) translateY(370px)";
	var sti = document.getElementById("did");
	var style = sti.style;
	style.transform = "translateY(1000px)";
	var stif = document.getElementById("olk");
	var style = stif.style;
	style.transform = "translateY(600px)";
	var stibub = document.getElementById("bub");
	var style = stibub.style;
	style.transform = "translateY(500px)";
	var stikk = document.getElementById("kk");
	var style = stikk.style;
	style.transform = "translateY(500px)";
})();

function myFunction() {
	var x = document.getElementsByClassName("dot");
	for (let i=0; i<x.length; i++) {
		var style = x[i].style;
	   if (i==0) {
	   	style.transform = "translateX(1000px)";
	   }
	   if (i==1) {
	   	style.cssText = "transform: translateX(-170px) translateY(-570px); bottom: 100;";
	   }
	   if (i==2) {
	   	style.transform = "translateX(-1000px)";
		}
		if (i==3) {
	   	style.transform = "translateY(0px)";
		}
		if (i==4) {
	   	style.transform = "translateY(0px)";
		}
		if (i==5) {
	   	style.transform = "translateY(0px)";
		}
		if (i==6) {
	   	style.transform = "translateY(0px)";
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

window.onunload=function(){
history.go(location.href);
}

