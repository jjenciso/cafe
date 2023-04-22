const buttons = document.querySelectorAll(".pause-play");
const background = document.getElementById("background");
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

const setVideoSize = () => {
  const vidWidth = 1920;
  const vidHeight = 1080;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const tempVidWidth = windowHeight * vidWidth/vidHeight;
  const tempVidHeight = windowWidth * vidHeight/vidWidth;
  const newVidWidth = tempVidWidth > windowWidth ? tempVidWidth : windowWidth;
  const newVidHeight = tempVidHeight > windowHeight ? tempVidHeight : windowHeight;

  background.style.width = newVidWidth + 'px';
  background.style.height = newVidHeight + 'px';
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (background.paused) {
      background.play();
      play.style.display = "none";
      pause.style.display = "block";
    } else {
      background.pause();
      play.style.display = "block";
      pause.style.display = "none";
    }
  });
});


 // PLAY-PAUSE BUTTONS
// pausePlayButtons.forEach((pausePlayButton) => {
//   pausePlayButton.addEventListener("click", () => {
//     if (video.paused) {
//       video.play();
//       playButton.style.display = "none";
//       pauseButton.style.display = "block";
//     } else {
//       video.pause();
//       playButton.style.display = "block";
//       pauseButton.style.display = "none";
//     }
//   });
// });

// const video = document.getElementById("background");
// const playButton = document.querySelector(".play");
// const pauseButton = document.querySelector(".pause");
// const pausePlayButtons = document.querySelectorAll(".pausePlay");
// // CONTAINERS
// const containers = document.querySelectorAll(".container_container button");
// const menu = document.getElementById('menu');

// menu.addEventListener('click', () => {
//   const rightContainers = document.querySelectorAll('.right_container div');
//   console.log('gwapo')
//   rightContainers.forEach(rightContainer => {
//     if (rightContainer.classList.contains('drink_menu')) {
//       rightContainer.style.display = 'block';
//     } else {
//       rightContainer.style.display = 'none';
//     }
//   })
// });

// containers.forEach((container) => {
//   container.addEventListener("click", () => {
//     const className = container.className;
//     const rightContainers = document.querySelectorAll('.right_container div');
    

//     rightContainers.forEach(rightContainer => {
//       if (rightContainer.classList.contains(className)) {
//         rightContainer.style.display = 'block';
//       } else {
//         rightContainer.style.display = 'none';
//       }

//     });

//     containers.forEach((container) => {
//       container.classList.remove("active");
//     });

//     container.classList.add("active");
//   })
// });

// // PLAY-PAUSE BUTTONS
// pausePlayButtons.forEach((pausePlayButton) => {
//   pausePlayButton.addEventListener("click", () => {
//     if (video.paused) {
//       video.play();
//       playButton.style.display = "none";
//       pauseButton.style.display = "block";
//     } else {
//       video.pause();
//       playButton.style.display = "block";
//       pauseButton.style.display = "none";
//     }
//   });
// });

// // CONTAINER_CONTAINER

