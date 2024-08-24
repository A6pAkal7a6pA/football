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
document.addEventListener('DOMContentLoaded', () => {
	const sections = Array.from(document.querySelectorAll('section'));
	const sectionInView = new Set();
	let loading = false;

	function loadSection(section) {
		if (section.dataset.loaded) return;
		section.dataset.loaded = true;
	}

	function checkSectionsInView() {
		const viewportHeight = window.innerHeight;

		sections.forEach(section => {
			const { top, bottom } = section.getBoundingClientRect();
			const isInView = top < viewportHeight && bottom > 0;

			if (isInView && !sectionInView.has(section)) {
				sectionInView.add(section);
				loadSection(section);
			} else if (!isInView && sectionInView.has(section)) {
				sectionInView.delete(section);
			}
		});

		if (!loading && sectionInView.size > 0) {
			loading = true;
			requestAnimationFrame(() => {
				loading = false;
				checkSectionsInView();
			});
		}
	}

	window.addEventListener('scroll', checkSectionsInView);
	window.addEventListener('resize', checkSectionsInView);

	checkSectionsInView();
});