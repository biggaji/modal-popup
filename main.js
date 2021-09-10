"use strict";

let openModal = document.getElementById("open_modal");
let closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
    document.getElementById("modal_cont").style.display = "flex";
});

closeModal.addEventListener("click", () => {
    document.getElementById("modal_cont").style.display = "none";
});