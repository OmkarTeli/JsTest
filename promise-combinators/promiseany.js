//  IT RETURNS FIRST FULLFILLED PROMISE AND IGNORES REJECTED

// if all promises are failed it returns error
console.log("start");

function importantAction(name) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         reject(`subscribe to ${name}`);
      }, 1000);
   });
}

function likeVideo(name) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(`like to ${name}`);
      }, 100);
   });
}

function shareVideo(name) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(`share to ${name}`);
      }, 1000);
   });
}

Promise.allSettled([
   importantAction("fastasdiavel"),
   likeVideo("fastasdiavel"),
   shareVideo("fastasdiavel"),
])
   .then((res) => {
      console.log(res);
   })
   .catch((error) => {
      console.log(error);
   });

console.log("stop");
