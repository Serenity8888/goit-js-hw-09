function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startBtn');
  const stopButton = document.getElementById('stopBtn');
  let intervalId;

  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;

    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

  stopButton.addEventListener('click', () => {
    startButton.disabled = false;
    stopButton.disabled = true;

    clearInterval(intervalId);
  });
});
