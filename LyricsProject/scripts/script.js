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
	// console.log(response);
	// .json converts response to json!
	const result = await response.json();
	// console.log(result.hits[0].result.id);
	return result.hits[0].result.id;
} catch (error) {
	console.log(error);
  }
};
returnSongId();

async function returnSongLyrics(songId) {
	// 2396871
	const url = 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=291696';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9fa47c65e6msh6013516bc42c8bbp177bd0jsnfe677f674a14',
			'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		// console.log(result);
		console.log(result.lyrics.lyrics.body.html);
		const lyricData = result.lyrics.lyrics.body.html;
		document.querySelector("#lyrics-section").innerText = `${result.lyrics.lyrics.body.html}`;
		
		return lyricData;
	} catch (error) {
		console.error(error);
	}
}

returnSongLyrics();
