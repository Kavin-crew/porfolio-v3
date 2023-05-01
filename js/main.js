$(document).ready(function () {
    var webHeight = $(document).height(),
      window_width = $(window).width();
    // console.log(webHeight, window_width);
  
    // window resize
    $(window).resize(function () {
      window_width = $(this).width();
      changeSlide("up");
      changeSlide("down");
    });
  
    $(window).scroll(function () {});
  
    const sliderContainer = document.querySelector(".slider-container");
    const slideRight = document.querySelector(".right_slide");
    const slideLeft = document.querySelector(".left_slide");
    const upButton = document.querySelector(".action_buttons--up_button");
    const downButton = document.querySelector(".action_buttons--down_button");
    const slidesLength = slideRight.querySelectorAll("article").length;
  
    const navList1 = document.querySelector(".nav__list_item--1");
    const navList2 = document.querySelector(".nav__list_item--2");
    const navList3 = document.querySelector(".nav__list_item--3");
    const navList4 = document.querySelector(".nav__list_item--4");
  
  
    const addActiveStyles = function (slide = 1) {
      const links = [...document.querySelectorAll(".nav__list .nav__list_item")];
      links.forEach((e) => e.classList.remove("active"));
      document.querySelector(`.nav__list_item--${slide}`).classList.add("active");
    };
  
    const addActiveStyles2 = function (slide) {
      if (slide == -1) slide = 4;
      if (slide == 4) slide = 1;
      const links = [...document.querySelectorAll(".nav__list .nav__list_item")];
      links.forEach((e) => e.classList.remove("active"));
      document.querySelector(`.nav__list_item--${slide + 1}`).classList.add("active");
    };
  
    navList1.addEventListener("click", function () {
      changeSlide("1");
      addActiveStyles(1);
    });
  
    navList2.addEventListener("click", function () {
      changeSlide("2");
      addActiveStyles(2);
    });
  
    navList3.addEventListener("click", function () {
      changeSlide("3");
      addActiveStyles(3);
    });
  
    navList4.addEventListener("click", function () {
      changeSlide("4");
      addActiveStyles(4);
    });
  
    let activeSlideIndex = 0;
  
    slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
  
    upButton.addEventListener("click", () => changeSlide("up"));
    downButton.addEventListener("click", () => changeSlide("down"));
  
    const changeSlide = (direction) => {
      const sliderHeight = sliderContainer.clientHeight;
      if (direction === "up") {
        activeSlideIndex--;
        
        if (activeSlideIndex == -1) {
          activeSlideIndex = 3;
        }
        addActiveStyles2(activeSlideIndex);
        
      } else if (direction === "down") {
        activeSlideIndex++;
        
        if (activeSlideIndex == 4) {
          activeSlideIndex = 0;
        }
        
        addActiveStyles2(activeSlideIndex);
        
      } else if (direction === "1") {
        activeSlideIndex = 0;
      } else if (direction === "2") {
        activeSlideIndex = 1;
      } else if (direction === "3") {
        activeSlideIndex = 2;
      } else if (direction === "4") {
        activeSlideIndex = 3;
      }
      slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
      }px)`;
      slideLeft.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
      }px)`;
    };
  });
  