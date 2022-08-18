
let mainLocale = document.getElementById('main-locale');
let menu = document.querySelector('.drop');

mainLocale.addEventListener('click', () => menu.classList.toggle('drop_opacity'))

document.getElementById('locale').addEventListener('click', e => {
	e.preventDefault();
	let mainPath = mainLocale.src;
	let element = e.target;
	let imgPath = element.src;

	if (element.className === 'dropImg' && element.id !== 'main-locale') {
		changeLanguage(getLocale(imgPath));
		mainLocale.src = imgPath;
		element.src = mainPath;
		menu.classList.remove('drop_opacity');
	}
});
document.addEventListener('click', e => {
	const withLocale = e.composedPath().includes(mainLocale);
	if (!withLocale && menu.classList.contains('drop_opacity')) {
		menu.classList.remove('drop_opacity');
	}
})

function changeLanguage(locale) {
	fetch(`translations/translate_${locale}.json`)
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
	});
}

function getLocale(fullPath) {
	return removeExtension(fullPath.replace(/^.*[\\\/]/, ''));
}
function removeExtension(filename) {
	return filename.substring(0, filename.lastIndexOf('.')) || filename;
}