window.onload = function() {
  var canvas = document.getElementById('viewer');
  paper.setup(canvas);

  var ldemo = demo();
  for(var i = 0; i < 10; i++){
    ldemo.nextIteration();
  }
  var tree = ldemo.tree;
  var start = new paper.Point(100, 100);

  drawTree(tree, start, 100);

  var path = new paper.Path();
  path.strokeColor = 'green';

  // Move to start and draw a line from there
	path.moveTo(start);
	// Note that the plus operator on Point objects does not work
	// in JavaScript. Instead, we need to call the add() function:
	path.lineTo(start.add([ 200, -50 ]));
  paper.view.draw();
}

drawTree = function(tree,startPoint,startLength){
  drawBranch(tree.getRoot(), startPoint, startLength);
}

drawBranch = function(node, point, length){
  var children = node.getChildren();
  var childrenLength = children.length;
  alert(node.data);
  var individualLength = length / childrenLength;
  var curPoint = paper.Point(point);
  for(var childIndex = 0; childIndex < childrenLength; childIndex++){
    alert("test");
    var path = new paper.Path();
    path.strokeColor = 'black';
    path.add(curPoint);
    path.add(curPoint.add([curPoint.x+length,curPoint.y+individualLength]));
  }
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
