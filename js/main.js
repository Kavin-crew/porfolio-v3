$(document).ready(function () {
  var webHeight = $(document).height(),
    window_width = $(window).width();

  // window resize
  $(window).resize(function () {
    window_width = $(this).width();
    changeSlide("up");
    changeSlide("down");

    swapElements();
  });

  $(window).scroll(function () {
    swapElements();
  });

  //for swaping
  function swapElements() {
    if (window_width <= 1024) {
      // for left side
      $(".bottom__content").insertAfter(".bottom-swapping-mobile");
      $(".middle__content").insertAfter(".middle-swapping-mobile");
      $(".main__content").insertAfter(".main-swapping-mobile");
      $(".banner__content").insertAfter(".banner-swapping-mobile");

      // for right side
      $(".blog").insertAfter(".bottom__content");
      $(".work").insertAfter(".middle__content");
      $(".about__container").insertBefore(".main__content");
      $(".banner__image-container").append($(".banner__hero"));
    } else {
      // for left side
      $(".bottom__content").insertAfter(".bottom-swapping-desktop");
      $(".middle__content").insertAfter(".middle-swapping-desktop");
      $(".main__content").insertAfter(".main-swapping-desktop");
      $(".banner__content").insertAfter(".banner-swapping-desktop");

      // for right side
      $(".blog").insertAfter(".right_slide__video");
      $(".right_slide__content--3").append($(".work"));
      $(".right_slide__content--2").append($(".about__container"));
      $(".right_slide__content--1").append($(".banner__hero"));
    }
  }
  swapElements();
  // swaping elements

  // variables for dual slider
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
    document
      .querySelector(`.nav__list_item--${slide + 1}`)
      .classList.add("active");
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

  // for burger
  // for overflow upon active of navigation mobile
  const htmlEl = document.querySelector("html");
  const bodyEl = document.querySelector("body");

  //for scrolling a:link for every section and works with safari
  const allLinks = document.querySelectorAll("a:link");
  
  // console.log(allLinks);
  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const href = link.getAttribute("href");

      // smooth scrolling to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      // scroll to other link
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
      // close mobile navigation
      if ($(".navigation__checkbox").is(":checked"))
        $("input[type=checkbox]").trigger("click");
    });
  });
  // for burger
});
