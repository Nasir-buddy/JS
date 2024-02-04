var nums = Array.from({length: 1000000}, (_, b) => b + 1);
const worker = new Worker("worker.js")
worker.postMessage(nums);

worker.onmessage = (function(data){
    console.log(data.data)
})