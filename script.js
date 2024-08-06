const btn = document.querySelector('#searchBtn');

btn.addEventListener('click', async () => {
  const searchQuery = document.querySelector('#userSearch').value;
  if (!searchQuery) {
    alert('Please Enter Something');
  } else {
    const url = `https://google-search74.p.rapidapi.com/?query=${searchQuery}&limit=10&related_keywords=true`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b1e1650556mshdb3e1358b9b5c3bp11d20bjsn5e12d66fbeb1',
        'x-rapidapi-host': 'google-search74.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const data = result.results;
      const img=result.image
      console.log(img)
      // Clear previous results
      document.querySelector('#result').innerHTML = '';
      document.querySelector("#img").innerHTML=`<img src="${result.knowledge_panel.image.url}">`
      console.log()

      data.forEach((val) => {
        const imageUrl = val.image ? val.image : url.imageUrl; 
        document.querySelector('#result').innerHTML += `
          <div class="border-b border-gray-300 py-4">
            <h1 class="text-xl text-black font-bold"><a href="${val.url}" target="_blank" class="hover:underline">${val.title}</a></h1>
            <p class="text-gray-600">${val.description}</p>
          </div>
        `;
      });
    } catch (error) {
      console.error(error);
    }
  }
});
