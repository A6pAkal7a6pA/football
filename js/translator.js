document.querySelectorAll('.header__locale').forEach(locale => {
	locale.addEventListener('click', () => {
		let lang = locale.innerText.toLowerCase();
		getSiblings(locale).forEach(loc => loc.classList.remove('active'));
		locale.classList.add('active');
		changeLanguage(lang);
	});
});

function changeLanguage(locale) {
	fetch(`translations/translation_${locale}.json`)
		.then(response => response.json())
		.then(data => translate(data))
		.catch(error => console.log(error));
}

function translate(data) {
	data.forEach(element => {
		let elementId = document.getElementById(element.id);
		if (elementId !== null) {
			elementId.innerHTML = element.text;
		}
		Array.from(document.querySelectorAll('.unique-slider__text'))
		.filter(e => e.id === element.id)
		.forEach(e => e.innerHTML = element.text)
	});

}

function getLocale(fullPath) {
	return removeExtension(fullPath.replace(/^.*[\\\/]/, ''));
}
function removeExtension(filename) {
	return filename.substring(0, filename.lastIndexOf('.')) || filename;
}