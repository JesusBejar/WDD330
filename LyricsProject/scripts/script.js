// the function below returns song id
// input q string
// output song id
async function returnSongId() {
	const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=thunderstruck&per_page=10&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9fa47c65e6msh6013516bc42c8bbp177bd0jsnfe677f674a14',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};
let lyricsSection = document.querySelector("lyrics-section");

  try {
	const response = await fetch(url, options);
	console.log(response);
	// .json converts response to json!
	const result = await response.json();
	// console.log(result.hits[0].result.id);
	return result.hits[0].result.id;
} catch (error) {
	console.log(error);
  }
};
returnSongId();
