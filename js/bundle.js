!function t(e,r,i){function s(n,a){if(!r[n]){if(!e[n]){var o="function"==typeof require&&require;if(!a&&o)return o(n,!0);if(c)return c(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var u=r[n]={exports:{}};e[n][0].call(u.exports,(function(t){return s(e[n][1][t]||t)}),u,u.exports,t,e,r,i)}return r[n].exports}for(var c="function"==typeof require&&require,n=0;n<i.length;n++)s(i[n]);return s}({1:[function(t,e,r){"use strict";var i=document.querySelectorAll(".slider-item"),s=document.querySelector(".main-screen");function c(t){!t.target.classList.contains("active")&&t.target.classList.contains("slider-item")?(t.target.classList.add("active"),s.classList.remove("active"),s=t.target):t.target.closest(".slider-item").classList.contains("active")||t.target.classList.contains("slider-item")||!t.target.closest(".slider-item")||(t.target.closest(".slider-item").classList.add("active"),s.classList.remove("active"),s=t.target.closest(".slider-item"))}i.forEach((function(t){t.addEventListener("click",c)}))},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map