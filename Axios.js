axios.get(`https://randomuser.me/api/`)
.then(result => console.log(result.data.results[0]))