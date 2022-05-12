'use strict';


window.addEventListener('DOMContentLoaded', () => {

	const Jennifer = {
		name: 'Jennifer',
		img: '../../assets/image/pets-jennifer.png',
		type: 'Dog',
		breed: 'Labrador',
		description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
		age: '2 months',
		inoculations: ['none'],
		diseases: ['none'],
		parasites: ['none'],
	  }

	  const Sophia = {
		name: 'Sophia',
		img: '../../assets/image/pets-sophia.png',
		type: 'Dog',
		breed: 'Shih tzu',
		description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		age: '1 months',
		inoculations: ['parvovirus'],
		diseases: ['none'],
		parasites: ['none'],
	  }

	  const Woody = {
		name: 'Woody',
		img: '../../assets/image/pets-woody.png',
		type: 'Dog',
		breed: 'Golden Retriever',
		description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		age: '3 years 6 months',
		inoculations: ['adenvirus', 'distemper'],
		diseases: ['right back leg mobility reduced'],
		parasites: ['none'],
	  }

	  const Scarlett = {
		name: 'Scarlett',
		img: '../../assets/image/pets-scarlet.png',
		type: 'Dog',
		breed: 'Jack Russel Terrier',
		description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		age: '3 months',
		inoculations: ['parainfluenza'],
		diseases: ['none'],
		parasites: ['none'],
	  }

	  const Katrine = {
		name: 'Scarlett',
		img: '../../assets/image/pets-katrine.png',
		type: 'Cat',
		breed: 'British Shorthair',
		description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		age: '3 months',
		inoculations: ['parainfluenza'],
		diseases: ['none'],
		parasites: ['none'],
	  }

	  const Timmy = {
		name: 'Timmy',
		img: '../../assets/image/pets-timmy.png',
		type: 'Cat',
		breed: 'British Shorthair',
		description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		age: '2 years 3 months',
		inoculations: ['calicivirus', 'viral rhinotracheitis'],
		diseases: ['kidney stones'],
		parasites: ['none'],
	  }

	  const Freddie = {
		name: 'Freddie',
		img: '../../assets/image/pets-freddie.png',
		type: 'Cat',
		breed: 'British Shorthair',
		description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		age: '2 months',
		inoculations: ['rabies'],
		diseases: ['none'],
		parasites: ['none'],
	  }

	  const Charly = {
		name: 'Charly',
		img: '../../assets/image/pets-charly.png',
		type: 'Dog',
		breed: 'Jack Russel Terrier',
		description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		age: '8 years',
		inoculations: ["bordetella bronchiseptica", "leptospirosis"],
		diseases: ["deafness", "blindness"],
		parasites: ["lice", "fleas"],
	  }



	const jennifer = document.getElementById('Jennifer'),
	  	sophia = document.getElementById('Sophia'),
		woody = document.getElementById('Woody'),
		scarlet = document.getElementById('Scarlett'),
		katrine = document.getElementById('Katrine'),
		timmy = document.getElementById('Timmy'),
		freddie = document.getElementById('Freddie'),
		charly = document.getElementById('Charly');


	const burger = document.querySelector('.burger');

	const hamburger = document.querySelector('.header__hamburger'),
		 menu = document.querySelector('.header__nav'),
		 navFriends = document.querySelector('#nav_friends'),
		 navContact = document.getElementById('nav_contact'),
		 shadow = document.querySelector('.shadow');

	const overflow = document.querySelector('html'),
		 modal = document.querySelector('.overlay'),
		 modalClose = document.querySelector('.modal__close'),
		 overlay = document.querySelector('.overlay'),
		 modalWhite = document.querySelector('.modal');

	const modalImg = document.querySelector('.modal__img'),
	  	modalTitle = document.querySelector('.modal__title'),
	  	modalSubtitle = document.querySelector('.modal__subtitle'),
		modalDescr = document.querySelector('.modal__descr'),
		listAge = document.getElementById('age'),
		listInocul = document.getElementById('inocul'),
		listDiseas = document.getElementById('diseas'),
		listParasit = document.getElementById('parasit');
		
	
	//hamburger
	hamburger.addEventListener('click', () => {
		menu.classList.toggle('header__nav__active');
		hamburger.classList.toggle('header__hamburger__active');
		shadow.style.display='block';
		if (menu.classList.contains('header__nav__active')) {
			overflow.style.overflow='hidden';
		} else {
			overflow.style.overflow='scroll';
			shadow.style.display='none';
		}
		})

	shadow.addEventListener('click', () => {
		menu.classList.remove('header__nav__active');
		shadow.style.display='none';
		overflow.style.overflow='scroll';
	})
	//nav
	navFriends.addEventListener('click', () => {
		menu.classList.remove('header__nav__active');
		overflow.style.overflow="scroll";
		shadow.style.display='none';
	})
	navContact.addEventListener('click', () => {
		menu.classList.remove('header__nav__active');
		overflow.style.overflow="scroll";
		shadow.style.display='none';
	})

	// Modal 
	modalClose.addEventListener('click', () => {
		modal.style.display='none';
		overflow.style.overflow='scroll';
	})

	overlay.addEventListener('click', () => {
		modal.style.display='none';
		overflow.style.overflow='scroll';
	})

	modalWhite.onclick = (e) => e.stopPropagation();

	// popup
	jennifer.addEventListener('click', () => {
		modalTitle.innerHTML = Jennifer.name;
		modalSubtitle.innerHTML = `${Jennifer.type} - ${Jennifer.breed}`;
		modalDescr.innerHTML = Jennifer.description;
		modalImg.src=Jennifer.img;
		listAge.innerHTML = `Age: ${Jennifer.age}`;
		listInocul.innerHTML = `Inoculatuins: ${Jennifer.inoculations}`;
		listDiseas.innerHTML = `Diseases: ${Jennifer.diseases}`;
		listParasit.innerHTML = `Parasites: ${Jennifer.parasites}`;
		modal.style.display='block';
		overflow.style.overflow='hidden';
	})
	
	katrine.addEventListener('click', () => {
		modalTitle.innerHTML = Katrine.name;
		modalSubtitle.innerHTML = `${Katrine.type} - ${Katrine.breed}`;
		modalDescr.innerHTML = Katrine.description;
		modalImg.src = Katrine.img;
		listAge.innerHTML = `Age: ${Katrine.age}`;
		listInocul.innerHTML = `Inoculatuins: ${Katrine.inoculations}`;
		listDiseas.innerHTML = `Diseases: ${Katrine.diseases}`;
		listParasit.innerHTML = `Parasites: ${Katrine.parasites}`;
		modal.style.display='block';
		overflow.style.overflow='hidden';
	})

	woody.addEventListener('click', () => {
		modalTitle.innerHTML = Woody.name;
		modalSubtitle.innerHTML = `${Woody.type} - ${Woody.breed}`;
		modalDescr.innerHTML = Woody.description;
		modalImg.src = Woody.img;
		listAge.innerHTML = `Age: ${Woody.age}`;
		listInocul.innerHTML = `Inoculatuins: ${Woody.inoculations[0]}, ${Woody.inoculations[1]}`;
		listDiseas.innerHTML = `Diseases: ${Woody.diseases}`;
		listParasit.innerHTML = `Parasites: ${Woody.parasites}`;
		modal.style.display='block';
		overflow.style.overflow='hidden';
	})

	sophia.addEventListener('click', () => {
		modalTitle.innerHTML = Sophia.name;
		modalSubtitle.innerHTML = `${Sophia.type} - ${Sophia.breed}`;
		modalDescr.innerHTML = Sophia.description;
		modalImg.src = Sophia.img;
		listAge.innerHTML = `Age: ${Sophia.age}`;
		listInocul.innerHTML = `Inoculatuins: ${Sophia.inoculations}`;
		listDiseas.innerHTML = `Diseases: ${Sophia.diseases}`;
		listParasit.innerHTML = `Parasites: ${Sophia.parasites}`;
		modal.style.display='block';
		overflow.style.overflow='hidden';
	})

	scarlet.addEventListener('click', () => {
		modalTitle.innerHTML = Scarlett.name;
		modalSubtitle.innerHTML = `${Scarlett.type} - ${Scarlett.breed}`;
		modalDescr.innerHTML = Scarlett.description;
		modalImg.src = Scarlett.img;
		listAge.innerHTML = `Age: ${Scarlett.age}`;
		listInocul.innerHTML = `Inoculatuins: ${Scarlett.inoculations}`;
		listDiseas.innerHTML = `Diseases: ${Scarlett.diseases}`;
		listParasit.innerHTML = `Parasites: ${Scarlett.parasites}`;
		modal.style.display='block';
		overflow.style.overflow='hidden';
	})

	timmy.addEventListener('click', () => {
		modalTitle.innerHTML = Timmy.name;
		modalSubtitle.innerHTML = `${Timmy.type} - ${Timmy.breed}`;
		modalDescr.innerHTML = Timmy.description;
		modalImg.src = Timmy.img;
		listAge.innerHTML = `Age: ${Timmy.age}`;
		listInocul.innerHTML = `Inoculatuins: ${Timmy.inoculations[0]}, ${Timmy.inoculations[1]}`;
		listDiseas.innerHTML = `Diseases: ${Timmy.diseases}`;
		listParasit.innerHTML = `Parasites: ${Timmy.parasites}`;
		modal.style.display='block';
		overflow.style.overflow='hidden';
	})

	freddie.addEventListener('click', () => {
		modalTitle.innerHTML = Freddie.name;
		modalSubtitle.innerHTML = `${Freddie.type} - ${Freddie.breed}`;
		modalDescr.innerHTML = Freddie.description;
		modalImg.src = Freddie.img;
		listAge.innerHTML = `Age: ${Freddie.age}`;
		listInocul.innerHTML = `Inoculatuins: ${Freddie.inoculations[0]}`;
		listDiseas.innerHTML = `Diseases: ${Freddie.diseases}`;
		listParasit.innerHTML = `Parasites: ${Freddie.parasites}`;
		modal.style.display='block';
		overflow.style.overflow='hidden';
	})

	charly.addEventListener('click', () => {
		modalTitle.innerHTML = Charly.name;
		modalSubtitle.innerHTML = `${Charly.type} - ${Charly.breed}`;
		modalDescr.innerHTML = Charly.description;
		modalImg.src = Charly.img;
		listAge.innerHTML = `Age: ${Charly.age}`;
		listInocul.innerHTML = `Inoculatuins: ${Charly.inoculations[0]}, ${Charly.inoculations[1]}`;
		listDiseas.innerHTML = `Diseases: ${Charly.diseases[0]}, ${Charly.diseases[1]} `;
		listParasit.innerHTML = `Parasites: ${Charly.parasites[0]}, ${Charly.parasites[1]}`;
		modal.style.display='block';
		overflow.style.overflow='hidden';
	})


	//slider 
	const leftS = document.getElementById('left_s'),
		leftD = document.getElementById('left_d'),
		rightS = document.getElementById('right_s'),
		rightD = document.getElementById('right_d'),
		page = document.getElementById('number');

	//pagination

	// NEW
	
	const imgPets = document.querySelectorAll('.friends__item-img');

	paginationList();

function paginationList() {
  const petLits = document.querySelector(".js-pet-list");
  const currentPageBlock = document.querySelector(".js-current-page");
  const btnUpdatePage = document.querySelectorAll(".js-update-page");

  const totalSlides = 48;
  const limitOnPage = getLimitOnPage();
  const totalPages = totalSlides / limitOnPage;
  const allPets = getSlidesList();

  let currentPage = 1;

  initPagination();

  btnUpdatePage.forEach((el) => {
    el.addEventListener("click", (e) => {
      updateCurrentPage(e.currentTarget.getAttribute("data-page"));
    });
  });

  function initPagination() {
    appendSlides();
  }

  function getLimitOnPage() {
    let browserWidth = document.documentElement.clientWidth;
    if (browserWidth > 1279) return 8;
    if (browserWidth > 767) return 6;
    return 3;
  }

  function updateCurrentPageBlock() {
    currentPageBlock.innerText = currentPage;
  }

  function updateBtnDisabled() {
    btnUpdatePage[0].removeAttribute("disabled");
    btnUpdatePage[1].removeAttribute("disabled");
    btnUpdatePage[2].removeAttribute("disabled");
    btnUpdatePage[3].removeAttribute("disabled");
    if (currentPage == 1) {
      btnUpdatePage[0].setAttribute("disabled", true);
      btnUpdatePage[1].setAttribute("disabled", true);
    } else if (currentPage == totalPages) {
      btnUpdatePage[2].setAttribute("disabled", true);
      btnUpdatePage[3].setAttribute("disabled", true);
    }
  }

  function updateCurrentPage(type) {
    let types = {
      next: currentPage + 1,
      prev: currentPage - 1,
      first: 1,
      last: totalPages,
    };
    currentPage = types[type];
    updateCurrentPageBlock();
    updateBtnDisabled();
    appendSlides();
  }

  function appendSlides() {
    petLits.innerHTML = "";
    allPets[currentPage].forEach((el) => {
      petLits.append(getSlide(el));
    });
  }

  function getSlidesList() {
    let slidesList = [];
    let numberPage = 1;
    let startIndex = 0;
    let endIndex = limitOnPage;

    let allSlides = [];
    let repeatSlides = {};
    for (let i = 0; i < PETS_ITEMS.length; i++) {
      allSlides.push(i);
      repeatSlides[i] = 0;
    }

    function sortStart() {
      if (numberPage > totalPages) return true;

      let possibleSlides = allSlides
        .sort(() => Math.random() - 0.5)
        .filter((el, index) => repeatSlides[el] < 6)
        .sort((a, b) => repeatSlides[a] - repeatSlides[b]);

      let slidesOnPrevPage = possibleSlides.splice(startIndex, endIndex);
      slidesOnPrevPage.forEach((el) => {
        repeatSlides[el] += 1;
      });

      slidesList[numberPage] = slidesOnPrevPage;
      numberPage++;
      sortStart();
    }

    sortStart();

    return slidesList;
  }

  function getSlide(index) {
    let slide = PETS_ITEMS[index];

    let slideImageBlock = document.createElement("div");
    slideImageBlock.classList.add("pet-item__image");

    let slideImage = document.createElement("img");
    slideImage.setAttribute("src", slide["img"]);
    slideImageBlock.append(slideImage);

    let slideTitle = document.createElement("div");
    slideTitle.classList.add("pet-item__title");
    slideTitle.innerText = slide["name"];

    let slideBtn = document.createElement("button");
    slideBtn.classList.add("pet-item__btn");
    slideBtn.innerText = "Learn more";

    let slideWrapper = document.createElement("div");
    slideWrapper.classList.add("pet-item", "js-call-modal-pet");
    slideWrapper.setAttribute("data-pet", index);
    slideWrapper.append(slideImageBlock);
    slideWrapper.append(slideTitle);
    slideWrapper.append(slideBtn);

    let swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.append(slideWrapper);

    return swiperSlide;
  }
}


	// NEW
	// let pets = [katrine, jennifer, woody, sophia, timmy, charly, scarlet, freddie];
	
	// let arr = [];

	// for (let i = 0; i < 48; i++){
	// 	arr[i] = pets[i % 8];  
	// }

	// let i = 0;
	// let countPage = 1;

	// rightS.addEventListener('click', () => {
	// 	const screenWidth = window.screen.width;
	// 	let size = 0;
		
	// 	if (screenWidth >= 1280) {
	// 		size = 8;
	// 	} else if (screenWidth < 1280 && screenWidth >= 768) {
	// 		size = 6;
	// 	}  else if (screenWidth < 768) {
	// 		size = 3;
	// 	}
	// 	// console.log(countPage,i);
	// 	if (47 - i >= size) {
	// 		leftS.classList.remove('friends__pagination-disabled');
	// 		leftD.classList.remove('friends__pagination-disabled');
	// 		countPage++;
	// 		if (countPage > 48 / size)
	// 			countPage = size;
	// 		else
	// 			page.innerHTML = countPage;
	// 		for (let j = 0; j < size; j++, i++) {
	// 			arr[i].style.display='none';
	// 			console.log('tikva')
	// 		}
	// 		let k = i;
	// 		for (let j = 0; j < size; j++, k++) {
	// 			arr[k].style.display='block';
	// 		}
	// 	} else {
	// 		rightS.classList.add('friends__pagination-disabled');
	// 		rightD.classList.add('friends__pagination-disabled');
	// 	}
	// 	if (countPage == 48 / size) {
	// 		rightS.classList.add('friends__pagination-disabled');
	// 		rightD.classList.add('friends__pagination-disabled');
	// 	}
	// })

	// rightD.addEventListener('click', () => {
	// 	const screenWidth = window.screen.width;
	// 	let size = 0;
		

	// 	if (i == 48) {
	// 		rightD.classList.add('friends__pagination-disabled');
	// 	}
	// 	else {
			
	// 		if (screenWidth >= 1280) {
	// 			size = 8;
	// 		} else if (screenWidth < 1280 && screenWidth >= 768) {
	// 			size = 6;
	// 		}  else if (screenWidth < 768) {
	// 			size = 3;
	// 		}
	// 		countPage = 48 / size;
	// 		page.innerHTML = countPage;
	// 		for (let j = 0; j < size; j++, i++) {
	// 			arr[i].style.display='none';
	// 		}
	// 		i = 48 - size;
	// 		for (; i < 48; i++) {
	// 			arr[i].style.display='block';
	// 		}
	// 	}
	// 	leftS.classList.remove('friends__pagination-disabled');
	// 	leftD.classList.remove('friends__pagination-disabled');
	// 	rightD.classList.add('friends__pagination-disabled');
	// 	rightS.classList.add('friends__pagination-disabled');
	// })

	// // left

	// leftS.addEventListener('click', () => {
	// 	const screenWidth = window.screen.width;
	// 	let size = 0;

	// 	if (screenWidth >= 1280) {
	// 		size = 8;
	// 	} else if (screenWidth < 1280 && screenWidth >= 768) {
	// 		size = 6;
	// 	}  else if (screenWidth < 768) {
	// 		size = 3;
	// 	}

	// 	if (i >= size){
	// 		countPage--;
	// 		if (countPage < 1){
	// 			countPage = 1;
	// 		}
	// 		else {
	// 			page.innerHTML = countPage;
	// 			let y = i;
	// 			let k;
	// 			if (i == 48){
	// 				i -= size;
	// 			}
	// 			k = i - 1;
	// 			for (let j = 0; j < size; j++, i++) {
	// 				arr[i].style.display='none';
	// 			}
	// 			console.log(i);
	// 			for (let j = 0; j < size; j++, k--) {
	// 				arr[k].style.display='block';
	// 			}
	// 			i = y - size;
	// 			console.log(i);
	// 			if (i < 0){
	// 				i = 0;
	// 			}
	// 		}
	// 	}
	// 	if (countPage == 1) {
	// 		leftS.classList.add('friends__pagination-disabled');
	// 		leftD.classList.add('friends__pagination-disabled');
	// 	}
	// 	rightS.classList.remove('friends__pagination-disabled');
	// 	rightD.classList.remove('friends__pagination-disabled');
	// })

	// leftD.addEventListener('click', () => {
	// 	const screenWidth = window.screen.width;
	// 	let size = 0;
		

	// 	if (countPage == 1) {
	// 		leftD.classList.add('friends__pagination-disabled');
	// 		leftS.classList.add('friends__pagination-disabled');
	// 	}
	// 	else {
			
	// 		if (screenWidth >= 1280) {
	// 			size = 8;
	// 		} else if (screenWidth < 1280 && screenWidth >= 768) {
	// 			size = 6;
	// 		}  else if (screenWidth < 768) {
	// 			size = 3;
	// 		}
	// 		countPage = 1;
	// 		page.innerHTML = countPage;
	// 		if (i == 48){
	// 			i -= size;
	// 		}
	// 		for (let j = 0; j < size; j++, i++) {
	// 			arr[i].style.display='none';
	// 		}
	// 		i = 0;
	// 		for (; i < size; i++) {
	// 			arr[i].style.display='block';
	// 		}
	// 		i = 0;
	// 	}
	// 	leftS.classList.add('friends__pagination-disabled');
	// 	leftD.classList.add('friends__pagination-disabled');
	// 	rightD.classList.remove('friends__pagination-disabled');
	// 	rightS.classList.remove('friends__pagination-disabled');
	// })
	
})
