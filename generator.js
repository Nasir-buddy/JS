function* allnum(){
    for(var i = 0; i <= 10; i++){
        yield ;
    }
}
const gen = allnum();
console.log(gen.next().value);
