'use strict'

const btn = document.getElementsByClassName("submit-rating");
const thanksMsg = document.querySelector("#msg");
const starRating = document.getElementsByClassName("star-input");
// console.log(btn);
// console.log(thanksMsg);
// console.log(starRating);

function myFunction() {
    starRating.style.display="none";
    thanksMsg.style.display="table";
    return false;
  }
// btn.addEventListener("click", Feedback);
// onclick=()=> {
//     starRating.style.display="none";
//     thanksMsg.style.display="table";
// return false;
// };