console.log("start");

const p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      const result = false;
      if (result) {
         resolve("subscribe");
      } else {
         reject(new Error("Not Subscribed"));
      }
   }, 2000);
});

p1.then((res) => {
   console.log(res);
}).catch((error) => {
   console.log(error);
});

console.log("end");
