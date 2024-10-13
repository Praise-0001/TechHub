document.getElementById('searchButton').addEventListener('click', function() {
  const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
  
  fetch('search-data.json') // Load the JSON file
    .then(response => response.json())
    .then(data => {
      const results = data.filter(page => 
        page.title.toLowerCase().includes(searchQuery) || 
        page.content.toLowerCase().includes(searchQuery)
      );

      const resultsList = document.getElementById('results');
      resultsList.innerHTML = ''; // Clear previous results
      
      if (results.length > 0) {
        results.forEach(page => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
          resultsList.appendChild(listItem);
        });
      } else {
        resultsList.innerHTML = '<li>No results found.</li>';
      }
    });
});
