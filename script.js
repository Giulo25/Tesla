/*  -----------------------------------------------------------------------------------------------
apertura menu mobile
--------------------------------------------------------------------------------------------------- */

let hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", function () {
	document.body.classList.toggle("menu-open");
});

window.addEventListener("scroll", function (e) {
	if (window.scrollY > 300) {
		document.body.classList.add("scroll-down");
	} else {
		document.body.classList.remove("scroll-down");
	}
});
/*  -----------------------------------------------------------------------------------------------*/
/*  SCROLL SIDE NAVIGATION */
/*--------------------------------------------------------------------------------------------------- */

let links = document.querySelectorAll(".nav-dots a");

links.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();

		links.forEach((item) => {
			item.classList.remove("nav-dot--active");
		});

		this.classList.add("nav-dot--active");
		let selector = this.getAttribute("href");
		let selectorElement = document.querySelectorAll(selector);

		window.scroll({
			top: selectorElement[0].offsetTop,
			behavior: "smooth",
		});
	});
});

/*  -----------------------------------------------------------------------------------------------
    set dot on scroll
  --------------------------------------------------------------------------------------------------- */
let covers = document.querySelectorAll(".section");
let dots = document.querySelectorAll(".nav-dots a");

window.addEventListener("scroll", function () {
	covers.forEach((cover) => {
		let checkedCover = isInWiew(cover);
		if (checkedCover == true) {
			dots.forEach((item) => {
				item.classList.remove("nav-dot--active");
			});

			//[href="#section-2"]
			let currentDot = document.querySelector('[href="#' + cover.id + '"]');

			currentDot.classList.add("nav-dot--active");
		}
	});
});

function isInWiew(element) {
	let myElement = element.getBoundingClientRect();
	if (myElement.top < window.innerHeight / 2 && myElement.top >= 0) {
		//console.log(element.id + " sono dentro");
		return true;
	} else {
		return false;
	}
}

let screenSize;

// window.addEventListener("resize", function () {
// 	screenSize = window.innerWidth;
// 	if (screenSize < 768) {
// 		document.querySelector("#section-1").style.backgroundImage =
// 			"url('img/cover-1-mobile.jpg')";
// 		console.log("ok");
// 	}
// });
