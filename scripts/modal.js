// Modal Window Opening
const modal = document.getElementById("modalWindow");
const btnCloseModal = document.getElementById("close-modal");

const btnsOpenModal = document.querySelectorAll(".openmodal");
console.log(btnsOpenModal);
modal.style.display = "none";

btnCloseModal.addEventListener("click", (e) => {
	e.preventDefault();
	modal.style.display = "none";
});

btnsOpenModal.forEach((btn) => {
	btn.addEventListener("click", () => {
		modal.style.display = "flex";
	});
});

const btnLogIn = document.getElementById("logInBtn");
btnLogIn.addEventListener("click", () => {
	window.location = "app.html";
});
