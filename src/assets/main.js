const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9a4_tuqbgaKhsN_tx-W22g&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b355cbf626msh1fb6c9dc5ee9ed5p10bee9jsn1d92631b30c3',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
/*
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/
async function fetchData(urlAPI) {
	const response = await fetch(urlAPI, options);
	const data = await response.json();
	return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
         let view = `
         ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.tittle}
                    </h3>
                </div>
            </div>
         `).slice(0,4).join('')}
            
        `;
        content.innerHTML = view;

    } catch (error) {
        console.log(error);
    }

})();