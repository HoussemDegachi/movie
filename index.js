//api: http://www.omdbapi.com/?i=tt3896198&apikey=3b968e7f

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3b968e7f")
.then(response => response.json())
.then((data) => console.log((data)))