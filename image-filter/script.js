const image = document.getElementById("image");
const upload = document.getElementById("upload");
const sliders = document.querySelectorAll("input[type='range']");

let filters = {
	brightness: 100,
	contrast: 100,
	saturate: 100,
	"hue-rotate": 0,
	blur: 0,
	grayscale: 0,
	sepia: 0,
	opacity: 100,
	invert: 0,
};

upload.addEventListener("change", () => {
	const file = upload.files[0];
	if (!file) return;
	image.src = URL.createObjectURL(file);
});

sliders.forEach((slider) => {
	slider.addEventListener("input", () => {
		filters[slider.dataset.filter] = slider.value;
		applyFilters();
	});
});

function applyFilters() {
	image.style.filter = `
      brightness(${filters.brightness}%)
      contrast(${filters.contrast}%)
      saturate(${filters.saturate}%)
      hue-rotate(${filters["hue-rotate"]}deg)
      blur(${filters.blur}px)
      grayscale(${filters.grayscale}%)
      sepia(${filters.sepia}%)
      opacity(${filters.opacity}%)
      invert(${filters.invert}%)
    `;
}

function resetFilters() {
	sliders.forEach((slider) => {
		slider.value = slider.defaultValue;
		filters[slider.dataset.filter] = slider.value;
	});
	applyFilters();
}

function downloadImage() {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	canvas.width = image.naturalWidth;
	canvas.height = image.naturalHeight;

	ctx.filter = image.style.filter;
	ctx.drawImage(image, 0, 0);

	const link = document.createElement("a");
	link.download = "filtered-image.png";
	link.href = canvas.toDataURL();
	link.click();
}
