// Callback function 
function dataFetcher(url , callBack){
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        callBack(result);
    });
};
// calling call back function 
dataFetcher('https://randomuser.me/api/', function(result){
    console.log(result);
});

// from promises
function dataFetcher(url){
    const parchi = new Promise(function(resolve , reject){
        fetch(url)
        .then(raw => raw.json())
        .then(result => {
            resolve(result);
        })
    })
    return parchi;
}
dataFetcher("https://randomuser.me/api/")
.then(function(result){
    console.log(result);
});

// Async
async function dataFetcher(url){
    let data = await fetch(url);
    let prachi = await data.json();
    return prachi;
};
async function runner(){
    let data = await dataFetcher(`https://randomuser.me/api/`);
    console.log(data);
}


