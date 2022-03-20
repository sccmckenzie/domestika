const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    
    // parameters
    const numSquares = 4;
    const gapRatio = 0.1;
    const clr = ['#2E8EEC', '#01DADE', '#F6EBF8', '#EAA7FD'];
    const bg = '#094775';


    const s = 1 / (numSquares + (numSquares + 1) * gapRatio);
    const w = width * s;
    const h = height * s;
    const gap = w * gapRatio;
    const ix = gap;
    const iy = gap;


    context.fillStyle = bg;
    context.fillRect(0, 0, width, height);

    let x, y;

    for (let i = 0; i < numSquares; i++) {
      for (let j = 0; j < numSquares; j++) {

        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);


        context.fillStyle = clr[Math.floor(Math.random() * clr.length)];

        context.fill();
      }
    }
  };
};

canvasSketch(sketch, settings);
