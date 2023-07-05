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

// the function below returns song lyrics
// input song id
// output song lyrics
// be sure to add songId as a parameter and this -> ${songId}
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
// function lyricsCard(lyricData) {
// 	const lyricsSection = document.querySelector("lyrics-section");
// 	lyricsSection.innerHTML = `<p>${lyricData}</p>`;
// 	return lyricsSection;
// }
// lyricsCard(returnSongLyrics(291696));

// export default async function productCardTemplate(product) {
//     return `<li class="product-card">
//     <a href="../product_pages/index.html?product=${product.Id}">
//     <img
//       src="${product.Image}"
//       alt="Image of ${product.Name}"
//     />
//     <h3 class="card__brand">${product.Brand.Name}</h3>
//     <h2 class="card__name">${product.NameWithoutBrand}</h2>
//     <p class="product-card__price">$${product.FinalPrice}</p></a>
//   </li>`;
// }
// document.querySelector("#productName").innerText = product.Brand.Name;
