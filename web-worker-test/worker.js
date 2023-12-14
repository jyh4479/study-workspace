onmessage = (e) => {
    console.log('Worker: Message received from main script');
    console.log(e.data);
    for (let i = 0; i < 1000000000; i++) ;
    postMessage("bye worker!");
}

// onmessage = function(e) {
//     console.log('Worker: Message received from main script');
//     const result = e.data[0] * e.data[1];
//     if (isNaN(result)) {
//         postMessage('Please write two numbers');
//     } else {
//         const workerResult = 'Result: ' + result;
//         console.log('Worker: Posting message back to main script');
//         postMessage(workerResult);
//     }
// }