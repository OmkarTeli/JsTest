//CODE TO AVOID PYRAMID LIKE STRUCTURE BY USING PROMISEs CHAINING

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

importantAction("fastasdiavel")
   .then((res) => {
      console.log(res);
      return likeVideo("fastasdiavel");
   })
   .then((res) => {
      console.log(res);
      return shareVideo("fastasdiavel");
   })
   .then((res) => {
      console.log(res);
   })
   .catch((error) => {
      console.log(error);
   });

console.log("stop");
