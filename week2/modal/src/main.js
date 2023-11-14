const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal_wrapper");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  console.log("hi");
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
