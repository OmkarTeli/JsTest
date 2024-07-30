console.log("start");

function importantAction(name, cb) {
  setTimeout(() => {
    cb(`subscribe to ${name}`);
  }, 1000);
}

function likeVideo(video, cb) {
  setTimeout(() => {
    cb(`like ${video}`);
  }, 1000);
}

function shareVideo(video, cb) {
  setTimeout(() => {
    cb(`share ${video}`);
  }, 1000);
}

const message = importantAction("fastasdiavel", (message) => {
  console.log(message);
  likeVideo("fastasdiavel", (message) => {
    console.log(message);
    shareVideo("fastasdiavel", (message) => {
      console.log(message);
    });
  });
});

console.log("stop");
