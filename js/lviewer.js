window.onload = function() {
  var canvas = document.getElementById('viewer');
  paper.setup(canvas);

  var ldemo = demo();
  for(var i = 0; i < 10; i++){
    ldemo.nextIteration();
  }
  var tree = ldemo.tree;
  var start = new paper.Point(400,500);

  drawTree(tree, start, 100);
  paper.view.draw();
}

drawTree = function(tree,startPoint,startLength){
  drawBranch(tree.getRoot(), startPoint, 0, startLength);
}

drawBranch = function(node, point, angle, length){
  var children = node.getChildren();
  var childrenLength = children.length;
  var deltaAngle = 360/(childrenLength);
  var endPoint = new paper.Point(0,-length);
  endPoint = endPoint.rotate(angle, new paper.Point(0,0));
  endPoint = endPoint.add(point);
  for(var childIndex = 0; childIndex < childrenLength; childIndex++){
    var child = children[childIndex];
    var childPoint = endPoint.rotate(deltaAngle*(childIndex),point);
    var path = new paper.Path();
    path.strokeColor = 'white';

    path.add(point);
    path.lineTo(childPoint);

    drawBranch(child,childPoint,angle-deltaAngle,length/2);
    //drawBranch(child,childPoint,4*individualLength/5);
  }
}

demo = function(){
  var variables = [1,2,3,4];
  var constants = [];
  var axiom = 1;
  var rules = [];
  rules.push(new LRule(1,[2]));
  rules.push(new LRule(2,[2,3,4]));
  rules.push(new LRule(3,[2,3,4]));
  rules.push(new LRule(4,[2,3,4]));
  return new LSystem(variables, constants, axiom, rules);
}
