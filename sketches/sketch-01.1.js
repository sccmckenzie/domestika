const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {

    // bg
    context.fillStyle = '#251923';
    context.fillRect(0, 0, width, height);
    

    // stroke
    // var grd = context.createLinearGradient(0, 0, 200, 0);
    // grd.addColorStop(0, '#251923');
    // grd.addColorStop(1, '#FF3F12');
    // context.strokeStyle = grd;
    context.strokeStyle = "#FF3F12";
    context.lineWidth = 3;
    const numLines = 1000;
    const lineLength = 400;
    let x0, y0, x1, x2, y1, y2, d1, d2;

    for (let i = 0; i < numLines; i++) {
      directionSwitch = Math.round(Math.random());
      context.beginPath();

      x0 = Math.random() * width;
      y0 = Math.random() * height;

      d1 = [-1, 1][Math.round(Math.random())];
      x1 = x0 + d1 * [0, lineLength][directionSwitch];
      y1 = y0 + d1 * [lineLength, 0][directionSwitch];

      d2 = [-1, 1][Math.round(Math.random())];
      x2 = x1 + d2 * [lineLength, 0][directionSwitch];
      y2 = y1 + d2 * [0, lineLength][directionSwitch];

      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    }

  
  };
};

canvasSketch(sketch, settings);
