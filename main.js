const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

const faqItem = document.querySelectorAll(".faq-item");

const activeToggle = (element) => {
	faqItem.forEach((item) => {
		item.classList.remove("active");
	});
	element.classList.toggle("active");
};

faqItem.forEach((item) => {
	item.addEventListener("click", () => activeToggle(item));
});
