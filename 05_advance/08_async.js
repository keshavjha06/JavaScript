const uno = () => {
    console.log("I am One");
}

const dos = () => {
    setTimeout(() => {
        console.log("Wooooohooooo");
    }, 3000); // loading
    console.log("I am Two"); // this will be called first and after this setTimeout() will be executed
}


const tres = () => {
    console.log("I am Three");
}

uno()
dos()
tres()