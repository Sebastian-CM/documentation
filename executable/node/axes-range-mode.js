var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [2, 4, 6], 
    y: [-3, 0, 3], 
    type: "scatter"
  }
];
var layout = {
  xaxis: {
    autorange: true, 
    rangemode: "tozero"
  }, 
  yaxis: {
    autorange: true, 
    rangemode: "nonnegative"
  }, 
  showlegend: false
};

var graph_options = {filename: "axes-range-mode", fileopt: "overwrite", layout: layout}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});