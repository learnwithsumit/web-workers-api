onmessage = function (message) {
    console.log("Worker has started working...");

    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
        total += i;
    }

    console.log("Worker has finished working...");

    postMessage(total);
};
