var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [0, 1, 2], 
    y: [6, 10, 2], 
    error_y: {
      array: [1, 2, 3], 
      type: "data", 
      visible: true
    }, 
    type: "scatter"
  }
];

var graph_options = {filename: "basic-error-bar", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});