const workerButton = document.getElementById("worker-button");
const workerStatus = document.getElementById("worker-status");

const myWorker = new Worker("worker.js");
let myWorkerStatus = "ready";

const onClickWorker = () => {
    myWorker.postMessage("hi worker!");
    myWorkerStatus = "run";
    workerStatus.textContent = myWorkerStatus;
}

myWorker.onmessage = (e) => {
    console.log(e.data);
    myWorkerStatus = "ready";
    workerStatus.textContent = myWorkerStatus;
}

workerButton.addEventListener("click", onClickWorker);


// if (window.Worker) {
//     const myWorker = new Worker("worker.js");
//
//     [first, second].forEach(input => {
//         input.onchange = function() {
//             myWorker.postMessage([first.value, second.value]);
//             console.log('Message posted to worker');
//         }
//     })
//
//     myWorker.onmessage = function(e) {
//         result.textContent = e.data;
//         console.log('Message received from worker');
//     }
// } else {
//     console.log('Your browser doesn\'t support web workers.');
// }