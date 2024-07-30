// SOLVING PREVIOUS BY CALLBACKS
console.log("start");

function importantAction(name, cb) {
   setTimeout(() => {
      cb(name);
   }, 1000);
}

const message = importantAction("subscribe", function (message) {
   console.log(message);
});

console.log("stop");
