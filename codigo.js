{const button = document.getElementById("menuBtn");
const menu = document.getElementById("enlace-menu");


button.addEventListener("click",() => {
	menu.classList.toggle('esconder');
})
}
const button = document.getElementById("menuBtn");
const menu = document.getElementById("enlace-menu");

menu.addEventListener("mouseleave", (e)=>{
	document.getElementById("enlace-menu").classList.remove('esconder')
})


// {
// 	const menu = document.getElementById("enlace-menu");
// 	const mainImg = document.getElementById("navbarImg");
// 	const button = document.getElementById("menuBtn");

// 	if(menu.matches(".esconder") == true) {
// 		mainImg.style.opacity = "50%";
// 		document.getElementById("enlace-menu").classList.add('esconder')
// 	}		
// 						no me funciono :(

// }





