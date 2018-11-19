var svgWidth = 1200, svgHeight = 600;

var board = d3.select('.board').append('svg:svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);
 
var circle = board.append('circle')
  .attr('cx', Math.random()*svgWidth)
  .attr('cy', Math.random()*svgHeight)
  .attr('r', 10)
  .attr('fill', 'red');

