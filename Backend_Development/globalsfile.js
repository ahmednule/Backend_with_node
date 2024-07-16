// console.log(global);
// clearInterval -- clears the intrval specified
// setInterval -- runs after the time speciefied continously untill one clears it
// setTimeout --> only runs once
// arrow functions
// const greet = (name) => {
//     console.log(`hello, ${name}`);
// };
// greet('Neon');
// greet('Harry');
// greet('Denzel');

//the code is usually run from top to bottom
setTimeout(() => {
    console.log("This is inside the timeoiut");
    clearInterval(setinteval);
}, 3000
);

console.log("I'll be the first one to be printed");

 const setinteval = setInterval(() => {
    console.log("I'll be printed after 1 seconds");
}, 1000
);
