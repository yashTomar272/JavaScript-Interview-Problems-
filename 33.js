//Throttle

function scroll() {
    console.log("Scroll");
}

let handleScroll = throttle(scroll, 1000);


function throttle(fn, delay) {
    let lastTime = 0;

    return function () {
        let now = Date.now();

        if (now - lastTime >= delay) {
            fn();
            lastTime = now;
        }
    };
}


handleScroll();
handleScroll();
handleScroll();