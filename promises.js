const parchi = new Promise(function(res, ref){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        if(result.results[1] === "male") resolve();
        else reject();
    });
});
parchi
.then(function(){
    console.log("hara button");
})
.catch(function(){
    console.log("green button ");
})