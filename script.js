const ghost = document.getElementById("ghost");

window.addEventListener("click", moveGhost);

function moveGhost(move) {
  ghost.style.left = move.clientX + "px";
  ghost.style.top = move.clientY + "px";
  ghost.classList.toggle("animation");

  ghost.addEventListener("animationend", () => {
    ghost.classList.remove("animation");
  });
}

// const width = window.innerWidth;
// const heigh = window.innerHeight;
// const ghostWidth = ghost.offsetWidth;
// const ghostHeight = ghost.offsetHeight;
const direction = 10;

window.addEventListener("keydown", (e) => {
  const currentLeft = parseInt(ghost.style.left) || 0;
  const currentTop = parseInt(ghost.style.top) || 0;

  switch (e.key) {
    case "ArrowRight":
    case "d":
      // currentLeft = Math.min(currentLeft + direction, window.innerWidth);
      ghost.style.left = parseInt(ghost.style.left) + direction + "px";
      break;
    case "ArrowLeft":
    case "a":
      // currentLeft = Math.min(currentLeft + direction, window.innerWidth);
      ghost.style.left = parseInt(ghost.style.left) - direction + "px";
      break;
    case "ArrowUp":
    case "w":
      // currentTop = Math.min(currentTop + direction, window.innerHeight);
      ghost.style.top = parseInt(ghost.style.top) - direction + "px";
      break;
    case "ArrowDown":
    case "s":
      // currentTop = Math.min(currentTop + direction, window.innerHeight);
      ghost.style.top = parseInt(ghost.style.top) + direction + "px";
      break;
  }
});

//

//

//

//

//

// const left = (Event.key = "enter")

// ghost.addEventListener("keydown", (e) => {
// ghost.style.left X + "px"
// })
