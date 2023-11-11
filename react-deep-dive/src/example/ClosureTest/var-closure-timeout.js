for (var i = 0; i < 5; i++) {
    setTimeout(
        (function (sec) {
            return function () {
                console.log(sec);
            }
        })(i),
        i * 1000
    )
}