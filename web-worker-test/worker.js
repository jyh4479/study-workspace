onmessage = (e) => {
    console.log('Worker: Message received from main script');
    for (let i = 0; i < 10000000000; i++) ;
    postMessage(`bye worker! ${e.data}`);
}