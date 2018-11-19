var svgWidth = 1200, svgHeight = 600, enemiesCount = 30;

// var enemiesData = _.range(enemiesCount);

var board = d3.select('.board').append('svg:svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

for (let i = 0; i < enemiesCount; i++){
  var enemyCircle = board.append('circle')
  .attr('cx', Math.random()*svgWidth)
  .attr('cy', Math.random()*svgHeight)
  .attr('r', 10)
  .attr('fill', 'red');

}
 
var playerCircle = board.append('circle')
  .attr('cx', Math.random()*svgWidth)
  .attr('cy', Math.random()*svgHeight)
  .attr('r', 10)
  .attr('fill', 'green');

