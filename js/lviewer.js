window.onload = function() {
  var canvas = document.getElementById('viewer');
  paper.setup(canvas);

  var ldemo = demo();
  for(var i = 0; i < 10; i++){
    ldemo.nextIteration();
  }
  var tree = ldemo.tree;
  var start = new paper.Point(400,500);

  drawTree(tree, start, 60);

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
  drawBranch(tree.getRoot(), startPoint, new paper.Point(0,1), startLength);
}

drawBranchx = function(node, point, length){
  if(length > 1){
    var children = node.getChildren();
    var childrenLength = children.length;
    var individualLength = 3*length / childrenLength;
    var curPoint = new paper.Point(point.x-(individualLength*childrenLength/2),point.y-length);
    for(var childIndex = 0; childIndex < childrenLength; childIndex++){
      var child = children[childIndex];
      //var childPoint = new paper.Point(point);
      var childPoint = new paper.Point(curPoint.x+individualLength,curPoint.y);

      var path = new paper.Path();
      switch (child.data) {
        case 1:
          path.strokeColor = 'green';
          break;
        case 2:
          path.strokeColor = 'blue';
          break;
        case 3:
          path.strokeColor = 'red';
          break;
        case 4:
          path.strokeColor = 'yellow';
          break;
        default:
          path.strokeColor = 'white';
      }

      path.add(point);
      path.lineTo(childPoint);

      curPoint = childPoint;

      drawBranch(child,childPoint,4*length/5);
      //drawBranch(child,childPoint,4*individualLength/5);
    }
  }
}

drawBranch = function(node, point, vector, length){
  var children = node.getChildren();
  var childrenLength = children.length;
  var deltaAngle = 360/(childrenLength+1);
  var endPoint = new paper.Point(vector);
  endPoint.length = length;
  endPoint = endPoint.add(point);
  for(var childIndex = 0; childIndex < childrenLength; childIndex++){
    var child = children[childIndex];
    var childPoint;
/*    if(childrenLength === 1){
      childPoint = endPoint.rotate(180,point);
    }else{*/
      childPoint = endPoint.rotate(deltaAngle*(childIndex+1),point);
    //}
    var path = new paper.Path();
    path.strokeColor = 'white';

    path.add(point);
    path.lineTo(childPoint);

    drawBranch(child,childPoint,endPoint.subtract(point),4*length/5);
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
