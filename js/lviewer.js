window.onload = function() {
  var ldemo = demo();
  for(var i = 0; i < 10; i++){
    ldemo.nextIteration();
  }
  var tree = ldemo.tree;


	var canvas = document.getElementById('viewer');
	paper.setup(canvas);

  var path = new paper.Path();
  path.strokeColor = 'black';

  var start = new paper.Point(100, 100);
	// Move to start and draw a line from there
	path.moveTo(start);
	// Note that the plus operator on Point objects does not work
	// in JavaScript. Instead, we need to call the add() function:
	path.lineTo(start.add([ 200, -50 ]));
  paper.view.draw();
}

demo = function(){
  var variables = [1,2,3,4];
  var constants = [];
  var axiom = 1;
  var rules = [];
  rules.push(new LRule(1,[2,3]));
  rules.push(new LRule(2,[2,1]));
  return new LSystem(variables, constants, axiom, rules);
}
