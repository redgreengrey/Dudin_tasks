(function () {
  const canvas = document.querySelector("#pong");
  canvas.setAttribute("width", 800);
  canvas.setAttribute("height", 600);
  const context = canvas.getContext("2d");
  const fps = 75;
  const computerLevel = 0.1;
  let paused = false;
  let isPlaying = false;

  const user = {
    x: 0,
    y: canvas.height / 2 - 100 / 2,
    width: 10,
    height: 100,
    color: "white",
    score: 0,
  };
  const computer = {
    x: canvas.width - 10,
    y: canvas.height / 2 - 100 / 2,
    width: 10,
    height: 100,
    color: "white",
    score: 0,
  };
  const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 0,
    color: "white",
  };
  const net = {
    x: canvas.width / 2 - 1,
    y: 0,
    width: 2,
    height: 10,
    color: "white",
  };

  function drawNet() {
    for (let i = 0; i <= canvas.height; i += 15) {
      drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
  }

  function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  }

  function drawCircle(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
  }

  function drawText(text, x, y, color) {
    context.fillStyle = color;
    context.font = "45px roboto";
    context.fillText(text, x, y);
  }

  canvas.addEventListener("mousemove", moveUserPaddle);

  function moveUserPaddle(event) {
    let rect = canvas.getBoundingClientRect();
    user.y = event.clientY - rect.top - user.height / 2;
  }

  function render() {
    drawRect(0, 0, canvas.width, canvas.height, "black");
    drawNet();
    drawText(user.score, canvas.width / 4, canvas.height / 5, "white");
    drawText(
      computer.score,
      (3 * canvas.width) / 4,
      canvas.height / 5,
      "white"
    );
    drawRect(user.x, user.y, user.width, user.height, "white");
    drawRect(computer.x, computer.y, computer.width, computer.height, "white");
    drawCircle(ball.x, ball.y, 10, "white");
  }

  function collision(ball, paddle) {
    ball.top = ball.y - ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;
    ball.right = ball.x + ball.radius;

    paddle.top = paddle.y;
    paddle.bottom = paddle.y + paddle.height;
    paddle.left = paddle.x;
    paddle.right = paddle.x + paddle.width;

    let proximityFactor = Math.sqrt(Math.pow(ball.speed, 1.4));

    return (
      ball.right > paddle.left - proximityFactor &&
      ball.bottom > paddle.top &&
      ball.left < paddle.right + proximityFactor &&
      ball.top < paddle.bottom
    );
  }

  function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    ball.speed = 5;
    ball.velocityX = 5;
    ball.velocityY = 0;
  }

  function update() {
    if (ball.x - ball.radius < 0) {
      computer.score++;
      resetBall();
    } else if (ball.x + ball.radius > canvas.width) {
      user.score++;
      resetBall();
    }

    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    computer.y += (ball.y - (computer.y + computer.height / 2)) * computerLevel;

    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
      ball.velocityY = -ball.velocityY;
    }

    let player = ball.x + ball.radius < canvas.width / 2 ? user : computer;

    if (collision(ball, player)) {
      let collidePoint = ball.y - (player.y + player.height / 2);

      // normalize the value of collidePoint, need to get numbers between -1 and 1.
      collidePoint = collidePoint / (player.height / 2);

      let angleRad = (Math.PI / 4) * collidePoint;

      let direction = ball.x + ball.radius < canvas.width / 2 ? 1 : -1;
      ball.velocityX = direction * ball.speed * Math.cos(angleRad);
      ball.velocityY = ball.speed * Math.sin(angleRad);

      ball.speed += 0.5;
    }
  }

  function init() {
    if (!paused) {
      update();
      render();
      if (isPlaying) {
        requestAnimationFrame(init);
      }
      startButton.disabled = false;
      stopButton.disabled = false;
    }
    if (paused) {
      drawRect(0, 0, canvas.width, canvas.height, "black");
      drawText(`Game was paused`, canvas.width / 4, canvas.height / 5, "white");
      drawText(
        `Press resume to continue`,
        canvas.width / 4,
        canvas.height / 2,
        "white"
      );
      startButton.disabled = true;
      stopButton.disabled = true;
    }
    if (!isPlaying) {
      drawRect(0, 0, canvas.width, canvas.height, "black");
      drawText(
        `Game was stopped`,
        canvas.width / 4,
        canvas.height / 5,
        "white"
      );
      drawText(
        `Press start to run again`,
        canvas.width / 4,
        canvas.height / 2,
        "white"
      );
      pauseButton.disabled = true;
      stopButton.disabled = true;
    }
    if (isPlaying) {
      startButton.disabled = true;
      if (user.score > 1) {
        drawRect(0, 0, canvas.width, canvas.height, "black");
        drawText(`Game over`, canvas.width / 4, canvas.height / 5, "white");
        drawText("You win!", canvas.width / 4, canvas.height / 3, "white");
      }
      if (computer.score > 1) {
        drawRect(0, 0, canvas.width, canvas.height, "black");
        drawText(`Game over`, canvas.width / 4, canvas.height / 5, "white");
        drawText("You lose!", canvas.width / 4, canvas.height / 3, "white");
        startButton.disabled = false;
        pauseButton.disabled = true;
        stopButton.disabled = true;
        setTimeout(stop, 3000);
      }
    }
  }

  function start() {
    if (!isPlaying) {
      drawRect(user.x, user.y, user.width, user.height, "white");
      isPlaying = true;
      init();
      pauseButton.disabled = false;
    }
  }

  function stop() {
    isPlaying = false;
    user.score = 0;
    computer.score = 0;
    resetBall();
  }

  function addClickEventOnButton(buttonName, buttonText, func) {
    buttonName.textContent = buttonText;
    buttonName.addEventListener("click", func);
  }

  const pauseButton = document.querySelector(".pause-button");
  addClickEventOnButton(pauseButton, "pause", togglePause);

  const startButton = document.querySelector(".start-button");
  addClickEventOnButton(startButton, "start", start);

  const stopButton = document.querySelector(".stop-button");
  addClickEventOnButton(stopButton, "stop", stop);

  function togglePause() {
    if (!paused) {
      paused = true;
      pauseButton.textContent = "resume";
    } else if (paused) {
      paused = false;
      requestAnimationFrame(init);
      pauseButton.textContent = "pause";
    }
  }

  function initialRender() {
    drawRect(0, 0, canvas.width, canvas.height, "black");
    drawText(
      `Press start to run the game`,
      canvas.width / 6,
      canvas.height / 2,
      "white"
    );
    pauseButton.disabled = true;
    stopButton.disabled = true;
  }

  initialRender();
})();
