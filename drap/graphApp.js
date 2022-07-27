// dataset, foreach, ctx 
// 배열 함수들 연습하기 
window.onload = () => {

  document.querySelectorAll(".graph_box > canvas").forEach(canvas => {
    const ctx = canvas.getContext("2d");
    const percent = canvas.dataset.percent * 1;
    const color = canvas.dataset.color;
    StartAnimation(ctx, percent, color);
  });
}

function StartAnimation(ctx, percent, color)
{
  const step = percent / 30;
  let now = 0;
  let id = setInterval(() => {
    now += step;
    if(now >= percent) {
      now = percent;
      clearInterval(id);
    }
    DrawGraph(ctx, now, color);
  }, 500 / 30);
}

function DrawGraph(ctx, percent, color)
{
  ctx.clearRect(0, 0, 150, 150);

  ctx.beginPath();
  ctx.moveTo(75, 75);
  ctx.arc(75, 75, 60, 0, Math.PI * 2 );
  ctx.fillStyle = "#ddd";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(75, 75);
  ctx.arc(75, 75, 60, -Math.PI / 2, Math.PI * 2 * (percent / 100) - Math.PI / 2);
  ctx.fillStyle = color;
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(75, 75, 45, 0, Math.PI * 2);
  ctx.fillStyle ="#fff";
  ctx.fill();

  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle=color;
  let temp = percent.toFixed(1);
  ctx.fillText(`${temp}%`, 75, 75);
}