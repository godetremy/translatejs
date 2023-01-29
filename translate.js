const defaultLanguage = "en";
var englishPath = "";
var frenchPath = "";

window.addEventListener('DOMContentLoaded', (event) => {
	console.info('Translate.js loaded successfully')
	try {
	  englishPath = document.head.querySelector("[property~=en-lang][content]").content;
	} catch (error) {
	  console.warn("English language meta is not avaible")
	}
	try {
	  frenchPath = document.head.querySelector("[property~=fr-lang][content]").content;
	} catch (error) {
	  console.warn("French language meta is not avaible")
	}
	
	const urlParameters = new URLSearchParams(window.location.search);
	
	var choiceLang = urlParameters.get('lang');
	
	if (choiceLang == null) {
		choiceLang = defaultLanguage
	}
	
	if (choiceLang=="en") {
		fetch(englishPath)
		.then(res => res.json())
		.then(lang => {
			var elements = document.querySelectorAll( 'body *' );
			for (i=0; i < elements.length; i+=1) {
				if (elements[i].innerHTML.includes('translate.')) {
					var name = elements[i].innerHTML.slice(10);
					if (lang[name] != null) {
						elements[i].innerHTML = lang[name]
					} else {
						console.error('Unable to find a translation for "translation.' + name + '"')
					}
				}
			}
		})
	}
	
	if (choiceLang=="fr") {
		fetch(frenchPath)
		.then(res => res.json())
		.then(lang => {
			var elements = document.querySelectorAll( 'body *' );
			for (i=0; i < elements.length; i+=1) {
				if (elements[i].innerHTML.includes('translate.')) {
					var name = elements[i].innerHTML.slice(10);
					if (lang[name] != null) {
						elements[i].innerHTML = lang[name]
					} else {
						console.error('Unable to find a translation for "translation.' + name + '"')
					}
				}
			}
		})
	}
	
});