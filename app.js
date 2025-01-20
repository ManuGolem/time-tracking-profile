//Definicion de variables y constantes
const tres = document.querySelectorAll(".tres");
const info = document.querySelectorAll(".info");
const day = document.querySelector(".daily");
const semana = document.querySelector(".weekly");
const mes = document.querySelector(".monthly");
const work = document.querySelector(".work");
const play = document.querySelector(".play");
const study = document.querySelector(".study");
const exercise = document.querySelector(".exercise");
const social = document.querySelector(".social");
const self = document.querySelector(".self");
document.addEventListener("DOMContentLoaded", () => {
	info.forEach((info) => {
		info.addEventListener("mouseenter", () => {
			info.classList.add("info-hover");
		});
		info.addEventListener("mouseleave", () => {
			info.classList.remove("info-hover");
		});
	});
	tres.forEach((boton) => {
		boton.addEventListener("mouseenter", () => {
			boton.parentElement.parentElement.classList.remove("info-hover");
		});
		boton.addEventListener("mouseleave", () => {
			boton.parentElement.parentElement.classList.add("info-hover");
		});
	});
	day.addEventListener("click", () => {
		cambiarDatos(1);
		day.classList.add("selected");
		semana.classList.remove("selected");
		mes.classList.remove("selected");
	});
	semana.addEventListener("click", () => {
		cambiarDatos(2);
		semana.classList.add("selected");
		day.classList.remove("selected");
		mes.classList.remove("selected");
	});
	mes.addEventListener("click", () => {
		cambiarDatos(3);
		mes.classList.add("selected");
		day.classList.remove("selected");
		semana.classList.remove("selected");
	});
});
function cambiarDatos(id) {
	if (id == 1) {
		work.childNodes[1].childNodes[3].childNodes[1].textContent = "5hrs";
		work.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 7hrs";
		play.childNodes[1].childNodes[3].childNodes[1].textContent = "1hrs";
		play.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 2hrs";
		study.childNodes[1].childNodes[3].childNodes[1].textContent = "0hrs";
		study.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 1hrs";
		exercise.childNodes[1].childNodes[3].childNodes[1].textContent = "1hrs";
		exercise.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 1hrs";
		social.childNodes[1].childNodes[3].childNodes[1].textContent = "1hrs";
		social.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 3hrs";
		self.childNodes[1].childNodes[3].childNodes[1].textContent = "0hrs";
		self.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 1hrs";
	} else if (id == 2) {
        work.childNodes[1].childNodes[3].childNodes[1].textContent = "32hrs";
		work.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 36hrs";
		play.childNodes[1].childNodes[3].childNodes[1].textContent = "10hrs";
		play.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 8hrs";
		study.childNodes[1].childNodes[3].childNodes[1].textContent = "4hrs";
		study.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 7hrs";
		exercise.childNodes[1].childNodes[3].childNodes[1].textContent = "4hrs";
		exercise.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 5hrs";
		social.childNodes[1].childNodes[3].childNodes[1].textContent = "5hrs";
		social.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 10hrs";
		self.childNodes[1].childNodes[3].childNodes[1].textContent = "2hrs";
		self.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 2hrs";
	} else {
        work.childNodes[1].childNodes[3].childNodes[1].textContent = "103hrs";
		work.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 128hrs";
		play.childNodes[1].childNodes[3].childNodes[1].textContent = "23hrs";
		play.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 29hrs";
		study.childNodes[1].childNodes[3].childNodes[1].textContent = "13hrs";
		study.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 19hrs";
		exercise.childNodes[1].childNodes[3].childNodes[1].textContent = "11hrs";
		exercise.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 18hrs";
		social.childNodes[1].childNodes[3].childNodes[1].textContent = "21hrs";
		social.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 23hrs";
		self.childNodes[1].childNodes[3].childNodes[1].textContent = "7hrs";
		self.childNodes[1].childNodes[3].childNodes[3].textContent = "Last Week - 11hrs";
	}
}
