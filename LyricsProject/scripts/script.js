const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=thunderstruck&per_page=10&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9fa47c65e6msh6013516bc42c8bbp177bd0jsnfe677f674a14',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};
let lyricsSection = document.querySelector("lyrics-section");

async function getLyrics() {
  try {
	const response = await fetch(url, options);
	const result = await response.text();
  console.log("hola");
  console.log(result);
	lyricsSection.innerHTML = result;
  console.log("bye bye");
} catch (error) {
	console.log(error);
  }
};
getLyrics();
