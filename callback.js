function getData(url, rej){
    fetch(url)
        .then(raw => raw.json())
        .then(result =>{
            rej(result)
        })
    }
getData("https://randomuser.me/api/", function(result){
    console.log(result.results[0].gender, result.results[0].email, result.results[0].name.first);
});