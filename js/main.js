"use strict";

const header = document.querySelector(".header");
const burger = header.querySelector(".header__burger");
const nav = header.querySelector(".header__nav");

burger.addEventListener("click", (evt) => {
  evt.preventDefault();
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});