const colors = ["pink", "aqua", "purple", "grey", "blue"];

const numBalls = 100;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
for (var i = 0; i < balls.length; i++) {
  var toX = Math.random() * (i % 2 === 0 ? -11 : 11);
  var toY = Math.random() * 12;
  
  var anim = balls[i].animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${toX}rem, ${toY}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
}