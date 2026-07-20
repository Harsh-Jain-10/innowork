import React, { useEffect, useRef } from 'react';

export default function DigitalWaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Grid configuration
    const cols = 38;
    const rows = 24;
    const spacingX = 40;
    const spacingZ = 35;
    const focalLength = 350; // Camera focal length
    const yOffset = 60; // Shifting the grid down for better perspective

    // Particle class for floating light dust
    class DustParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(Math.random() * 0.6 + 0.3);
        this.size = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.maxAlpha = this.alpha;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Slow fade out near top
        if (this.y < 50) {
          this.alpha -= 0.01;
        }

        if (this.y < 0 || this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#00f0ff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const dustArray = Array.from({ length: 40 }, () => new DustParticle());

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      // Deep tech-dark background
      ctx.fillStyle = '#020306';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle ambient background light
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 2, 10,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, 'rgba(8, 18, 45, 0.6)');
      bgGrad.addColorStop(0.5, 'rgba(3, 7, 20, 0.95)');
      bgGrad.addColorStop(1, '#020306');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      time += 0.02;

      // Project grid points
      const points = [];
      const centerX = width / 2;
      const centerY = height / 2;

      for (let r = 0; r < rows; r++) {
        points[r] = [];
        for (let c = 0; c < cols; c++) {
          // Calculate 3D position relative to center
          const x3d = (c - cols / 2) * spacingX;
          const z3d = (r - rows / 2) * spacingZ + 200; // Shift forward in Z

          // Combined sine-cosine wave calculation
          const wave1 = Math.sin(time + c * 0.2 + r * 0.1) * 35;
          const wave2 = Math.cos(time * 0.8 + r * 0.15) * 15;
          const y3d = wave1 + wave2;

          // 3D to 2D Perspective Projection
          const scale = focalLength / (focalLength + z3d);
          const screenX = centerX + x3d * scale;
          const screenY = centerY + (y3d + yOffset) * scale;

          // Color calculation based on position/depth
          // Let's create a beautiful gradient spectrum: Cyan -> Violet
          const hue = 180 + (c / cols) * 80; // Ranges from 180 (Cyan) to 260 (Violet/Purple)
          const brightColor = `hsla(${hue}, 100%, 65%, ${scale * 0.7})`;

          points[r][c] = {
            x: screenX,
            y: screenY,
            scale,
            color: brightColor,
            visible: screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height
          };
        }
      }

      // Create a single linear gradient across the canvas for grid lines
      const gridGradient = ctx.createLinearGradient(0, 0, width, 0);
      gridGradient.addColorStop(0, 'rgba(0, 240, 255, 0.6)');
      gridGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.6)');
      gridGradient.addColorStop(1, 'rgba(168, 85, 247, 0.6)');

      // Draw Grid Mesh Lines
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = gridGradient;

      for (let r = 0; r < rows; r++) {
        const scale = points[r][0].scale;
        ctx.globalAlpha = scale * 0.22;

        // Horizontal lines in this row
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];
          if (!p.visible) continue;

          if (c < cols - 1) {
            const pRight = points[r][c + 1];
            if (pRight.visible) {
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(pRight.x, pRight.y);
            }
          }
        }
        ctx.stroke();

        // Vertical lines connecting to the bottom row
        if (r < rows - 1) {
          ctx.beginPath();
          for (let c = 0; c < cols; c++) {
            const p = points[r][c];
            const pBottom = points[r + 1][c];
            if (p.visible && pBottom.visible) {
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(pBottom.x, pBottom.y);
            }
          }
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1.0; // Reset globalAlpha

      // Draw Grid Points (Glowing Nodes)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];
          if (!p.visible) continue;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          // Dot size scales with distance
          const dotRadius = p.scale * 3.5;
          ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
          ctx.fill();

          // Add extra glow for closer nodes by drawing a larger transparent circle
          if (p.scale > 0.6 && (r + c) % 4 === 0) {
            ctx.save();
            ctx.globalAlpha = p.scale * 0.15;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, dotRadius * 2.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      }

      // Draw and update dust particles
      dustArray.forEach(dust => {
        dust.update();
        dust.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
