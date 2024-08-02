//RETURN RESULT OF ALL PROMISES IN ARRAY. IF AT LEAST ONE OF THE PROMISE IS FAILED . ITS GONNNA FAILED ENTIRE PROMISE ALL
console.log("start");

function importantAction(name) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(`subscribe to ${name}`);
      }, 1000);
   });
}

function likeVideo(name) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(`like to ${name}`);
      }, 1000);
   });
}

function shareVideo(name) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(`share to ${name}`);
      }, 1000);
   });
}

Promise.all([
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

// importantAction("fastasdiavel");

// likeVideo("fastasdiavel");

// shareVideo("fastasdiavel");

console.log("stop");
