document.body.style.overflow = 'hidden';
setTimeout(() => {
	document.getElementById('preloader')?.remove();
	document.body.style.overflow = 'visible';
}, 17000);

document.addEventListener('DOMContentLoaded', () => {
	const preloader = document.getElementById('preloader');
	const mediaFiles = document.querySelectorAll('gif,img, scripts, json, svg, video');
	const preloaderPercent = document.querySelector('.preloader__percent');
	const preloaderProgressbarLine = document.querySelector('.preloader__progressbar_line');
	let i = 1;

	function calcLoader() {
		let percent = ((i * 100) / mediaFiles.length).toFixed() + '%';
		preloaderPercent.innerText = percent;
		preloaderProgressbarLine.style.width = percent;
		if (i === mediaFiles.length) {
			preloaderPercent.innerText = 100 + '%';
			preloaderProgressbarLine.style.width = 100 + '%';
			preloader.remove();
			document.body.style.overflow = 'visible';
		}
	}

	Array.from(mediaFiles).forEach((file) => {
		if (file.complete) {
			i++
			calcLoader()
		} else {
			file.onload = () => {
				i++
				calcLoader()
			}
		}
	});
});