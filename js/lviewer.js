window.onload = function() {
  var canvas = document.getElementById('viewer');
  paper.setup(canvas);

  var ldemo = demo();
  for(var i = 0; i < 10; i++){
    ldemo.nextIteration();
  }
  var tree = ldemo.tree;
  var start = new paper.Point(400,500);

  drawTree(tree, start, 40);

  /*var path = new paper.Path();
  path.strokeColor = 'green';

  // Move to start and draw a line from there
	path.moveTo(start);
	// Note that the plus operator on Point objects does not work
	// in JavaScript. Instead, we need to call the add() function:
	path.lineTo(start.add([ 200, -50 ]));
  */paper.view.draw();
}

drawTree = function(tree,startPoint,startLength){
  drawBranch(tree.getRoot(), startPoint, startLength);
}

drawBranch = function(node, point, length){
  var children = node.getChildren();
  var childrenLength = children.length;
  var individualLength = length / childrenLength;
  var curPoint = new paper.Point(point.x-(individualLength*childrenLength/2),point.y-length);
  for(var childIndex = 0; childIndex < childrenLength; childIndex++){
    var child = children[childIndex];
    var childPoint = new paper.Point(curPoint.x+individualLength,curPoint.y);

    var path = new paper.Path();
    path.strokeColor = 'white';

    path.add(point);
    path.lineTo(childPoint);

    curPoint = childPoint;

    drawBranch(child,childPoint,2*length/2);
  }
}

demo = function(){
  var variables = [1,2,3,4];
  var constants = [];
  var axiom = 1;
  var rules = [];
  rules.push(new LRule(1,[1,2]));
  rules.push(new LRule(2,[3,4]));
  rules.push(new LRule(3,[1,2]));
  rules.push(new LRule(4,[3,4]));
  return new LSystem(variables, constants, axiom, rules);
}
