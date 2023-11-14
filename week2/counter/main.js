const number = document.getElementById("number");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
let count = 0;

// console.log(number);
// console.log(increaseBtn);
// console.log(decreaseBtn);

increaseBtn.addEventListener("click", () => {
  count = count + 1;
  number.innerText = count;
});
decreaseBtn.addEventListener("click", () => {
  count = count - 1;
  number.innerText = count;
});
