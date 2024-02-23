"use strict";

const main = document.querySelector(".intro");
const skl = document.querySelector(".skill");
const pro = document.querySelector(".project");
const res = document.querySelector(".resume");
const back1 = document.querySelector(".back1");
const back2 = document.querySelector(".back2");
const propg = document.querySelector(".projpage");
const sklpg = document.querySelector(".skillpage");

skl.addEventListener("click", function () {
  main.classList.add("hide");
  sklpg.classList.remove("hide");
});

back1.addEventListener("click", function () {
  sklpg.classList.add("hide");
  main.classList.remove("hide");
});

pro.addEventListener("click", function () {
  main.classList.add("hide");
  propg.classList.remove("hide");
});

back2.addEventListener("click", function () {
  propg.classList.add("hide");
  main.classList.remove("hide");
});
