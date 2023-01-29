<img height="128" src="img/logo_text.svg">

## Features
* ✅ Easy to add new language
* ✅ Jquery not required

## How to use
* In your HTML page, add script
```html
<script src="/translate.js" type="text/javascript"></script>
```
* Create new JSON file for translation
```json
{
	"key": "translation",
	"key": "translation",
	...
}
```
* Add meta property to your HTML page
```html
<meta property="fr-lang" content="/lang/fr.json"/>
```
* Change your text in your HTML page
```html
<p>translate.key</p>
```

## Exemple
### HTML
```html
<html>
	<head>
		<title>Translate.js</title>
		<script src="/translate.js"></script>
		<meta property="fr-lang" content="/fr.json"/>
		<meta property="en-lang" content="/en.json"/>
	</head>
	<body>
		<h1>translate.title</h1>
		<p>translate.paragraph</p>
	</body>
</html>
```
### en.json
```json
{
	"title": "Translate.js demonstration page",
	"paragraph": "Learn how to use Translate.js in your pages !"
}
```
### fr.json
```json
{
	"title": "Page de demonstration Translate.js",
	"paragraph": "Apprenez à utiliser Translate.js dans vos pages !"
}
```