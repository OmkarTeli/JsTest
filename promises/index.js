console.log("start");

function importantAction(name) {
  setTimeout(() => {
    return `subscribe to ${name}`;
  }, 1000);
}

const message = importantAction("Roadside Coader");
console.log(message);

console.log("stop");
