const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

  const previous = document.getElementById("previous");
  const next = document.getElementById("next");
  const currentImg = document.getElementById("banner-img");
  const titleImg = document.getElementById("banner").querySelector("p");
  const dots = document.querySelectorAll(".dot");
  console.log({ dots });
  
  let index = 0;
  const nbSlides = slides.length - 1;
  
  const renderCarousel = () => {
	currentImg.src = `./assets/images/slideshow/${slides[index].image}`;
	titleImg.innerHTML = slides[index].tagLine;
	dots[index].classList.add("dot_selected");
  };
  
  next.addEventListener("click", (evt) => {
	dots[index].classList.remove("dot_selected");
  
	if (index >= nbSlides) {
	  index = 0;
	} else {
	  index += 1;
	}
  
	renderCarousel();
  });
  
  previous.addEventListener("click", () => {
	dots[index].classList.remove("dot_selected");
  
	if (index === 0) {
	  index = nbSlides;
	} else {
	  index -= 1;
	}
  
	renderCarousel();
  });

   
   





