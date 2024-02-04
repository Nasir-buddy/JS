fetch(`https://randomuser.me/api/`)
.then(row => row.json())
.then(readable => console.log(readable));