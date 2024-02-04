const newuser = document.querySelector('#getuser');
function getNewUser(){
    fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result => {
    const{name, gender , email, picture} = result.results[0];
    
    document.querySelector('#parent').innerHTML += `
    <div class="card w-60 p-4 rounded-md bg-zinc-600">
    <div class="w-20 h-20 bg-zinc-700 rounded-xl overflow-hidden">
        <img src="${picture.large}" class="w-full h-full fit-cover " alt="">
    </div>
    <h3 class="font-semibold text-2xl">${name.first}</h3>
    <h4 class="text-sm font-semibold opacity-60">${gender}</h4>
    <h5 class="text-sm font-semibold opacity-40">${email}</h5>
    <p class="mt-4 text-xs opacity-80 font-semibold">Lorem ipsum dolor sit 
        amet, consectetur adipisicing elit
    </p>
</div>`;
});
};
newuser.addEventListener("click", function(){
    getNewUser();
})