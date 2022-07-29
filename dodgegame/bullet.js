import GameObject from '/GameObject.js';
import {Stage as S} from '/Info.js';

export default class Bullet extends GameObject 
{
  constructor(x, y, w, h, speed, img, delay)
  {
    super(x, y, w, h, speed);
    // this.localSpeed = Math.random() * this.speed + 100; 
    this.img = img;
    this.active = false;
    this.speedFactor = 1; ///스피드 팩터 추가

    setTimeout(()=>{
      this.active = true;
      this.reset();
    }, delay * 1000); //딜레이 시간만큼 기다렸다가 총알을 액티브 해줄꺼다.
  }

  addSpeedFactor(value)  //스피드 팩터 조정 매서드 추가
  {
    this.speedFactor += value;
  }

  reset(){
    this.y = S.startY;
    this.x = Math.random() * (S.width - this.w) + S.startX;
  }
  update(d){
    if(this.active == false)  return;
    this.y += this.speed * d * this.speedFactor;
    if(this.y >= S.startY + S.height - this.h) {
      this.reset(); //땅바닥에 닿은거
    }
  }
  render(ctx)
  {
    if(this.active == false)  return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  checkColl({x:px, y:py, w:pw, h:ph})
  {
    return px < this.x + this.w 
      && px + pw > this.x
      && py < this.y + this.h
      && py + ph > this.y;
  }
}