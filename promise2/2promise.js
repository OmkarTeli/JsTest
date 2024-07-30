// DIRECTLY RESOLVE/ REJECT PROMISE
console.log("start");

const p1 = Promise.resolve("subscribe");
p1.then((res) => {
   console.log(res);
});

const p2 = Promise.reject("not subscribe");
p2.catch((res) => {
   console.log(res);
});

console.log("end");
