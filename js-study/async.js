const main = async () => {
    const asyncFunction = async () => {
        console.log(2);

        // await 아래 코드는 then의 callback처럼 사용됨
        await fetch('https://dummyjson.com/products').then(r => {
            console.log(2);
        });
    }

    console.log(1);

    await asyncFunction();

    console.log(3);
}

main();