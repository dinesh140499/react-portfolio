import { useEffect } from "react";

const rand = (min, max) => Math.random() * (max - min) + min;

class Firefly {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset(true);
  }

  reset(init) {
    this.x = rand(0, this.canvas.width);
    this.y = rand(0, this.canvas.height);
    this.r = rand(1.2, 2.8);
    this.alpha = 0;
    this.targetAlpha = rand(0.4, 1);
    this.fadeSpeed = rand(0.005, 0.018);
    this.vx = rand(-0.35, 0.35);
    this.vy = rand(-0.35, 0.35);
    this.glowR = this.r * rand(5, 10);
    this.phase = init ? rand(0, Math.PI * 2) : 0;
    this.fadeIn = true;
    this.life = 0;
    this.maxLife = rand(180, 400);
    const hue = rand(50, 100);
    this.color = `hsl(${hue}, 90%, 70%)`;
    this.glowColor = `hsl(${hue}, 90%, 60%)`;
  }

  update() {
    this.life++;
    if (this.fadeIn) {
      this.alpha = Math.min(this.alpha + this.fadeSpeed, this.targetAlpha);
      if (this.alpha >= this.targetAlpha) this.fadeIn = false;
    } else {
      this.alpha = Math.max(this.alpha - this.fadeSpeed * 0.6, 0);
    }

    const drift = Math.sin(this.life * 0.02 + this.phase) * 0.12;
    this.x += this.vx + drift;
    this.y += this.vy + Math.cos(this.life * 0.015 + this.phase) * 0.1;

    if (this.life > this.maxLife || this.alpha <= 0) this.reset(false);
    if (this.x < -10) this.x = this.canvas.width + 10;
    if (this.x > this.canvas.width + 10) this.x = -10;
    if (this.y < -10) this.y = this.canvas.height + 10;
    if (this.y > this.canvas.height + 10) this.y = -10;
  }

  draw(ctx) {
    ctx.save();

    ctx.globalAlpha = this.alpha * 0.25;
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.glowR,
    );
    g.addColorStop(0, this.glowColor);
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.glowR, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

/**
 * useJugnu — firefly canvas animation hook
 *
 * @param {React.RefObject} canvasRef - ref attached to a <canvas> element
 * @param {number} count - number of fireflies (default: 55)
 */
const useJugnu = (canvasRef, count = 55) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const flies = Array.from({ length: count }, () => new Firefly(canvas));

    let raf;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      flies.forEach((f) => {
        f.update();
        f.draw(ctx);
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef, count]);
};

export default useJugnu;
