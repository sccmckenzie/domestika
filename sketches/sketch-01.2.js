const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    // background
    context.fillStyle = '303841';
    context.fillRect(0, 0, width, height);

    // 1st layer
    context.strokeStyle = "#2E4750";
    context.lineWidth = 1;

    let xi, yi, di;
    for (let i = 0; i < 1000; i++) {
      di = Math.round(Math.random());
      xi = width * di * Math.random();
      yi = width * (1 - di) * Math.random();
      
      context.beginPath();
      context.moveTo(xi, yi);
      context.lineTo(xi + (1 - di) * width, yi + di * height);
      context.stroke()
    };


    // 2nd layer
    context.strokeStyle = "#F6C90E";
    context.lineWidth = 1;
    for (let i = 0; i < 100; i++) {
      di = Math.round(Math.random());
      xi = width * di * Math.random();
      yi = width * (1 - di) * Math.random();
      
      context.beginPath();
      context.moveTo(xi, yi);
      context.lineTo(xi + (1 - di) * width, yi + di * height);
      context.stroke()
    }
  };
};

canvasSketch(sketch, settings);
