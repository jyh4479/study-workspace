const workerButton = document.getElementById("worker-button");
const workerStatus = document.getElementById("worker-status");

let myWorkerStatus = "ready";
let count = 0;

const onClickWorker = () => {
    const myWorker = new Worker("worker.js");
    myWorker.postMessage(count++);
    myWorkerStatus = "run";
    workerStatus.textContent = myWorkerStatus;

    myWorker.onmessage = (e) => {
        console.log(e.data);
        myWorkerStatus = "ready";
        workerStatus.textContent = myWorkerStatus;
    }
}

workerButton.addEventListener("click", onClickWorker);

setInterval(() => {
    console.log("normal console");
}, 500);