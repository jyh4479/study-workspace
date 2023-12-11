const sumModulePromise = import("./sum.js");
const mulModulePromise = import("./mul.js");

// 다이나믹 임포트로 가져온 모듈을 사용
Promise.all([sumModulePromise, mulModulePromise])
    .then(([sumModule, mulModule]) => {
        const sum = sumModule.sum;
        const mul = mulModule.mul;

        // 사용 예시
        console.log(sum(2, 3)); // 5
        console.log(mul(2, 3)); // 6
    })
    .catch((error) => {
        console.error("Error during dynamic import:", error);
    });

console.log("This is index.js!");

// console.log(`5 + 3 = ${sum(5, 3)}`);
// console.log(`5 * 3 = ${mul(5, 3)}`);