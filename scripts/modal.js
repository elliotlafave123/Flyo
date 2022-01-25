const modal = document.getElementById("modalWindow");
const btnCloseModal = document.getElementById("close-modal");

const btnsOpenModal = document.querySelectorAll(".openmodal");
console.log(btnsOpenModal);

btnCloseModal.addEventListener("click", () => {
	modal.style.display = "none";
});

btnsOpenModal.forEach((btn) => {
	btn.addEventListener("click", () => {
		modal.style.display = "flex";
	});
});
