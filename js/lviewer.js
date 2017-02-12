window.onload = function() {
  var canvas = document.getElementById('viewer');
  paper.setup(canvas);

  var ldemo = demo();
  /*for(var i = 0; i < 8; i++){
    ldemo.nextIteration();
  }*/
  var tree = ldemo.tree;
  var start = new paper.Point(400,500);

  drawTree(tree, start, 280);
  paper.view.draw();

  window.onmousedown = function(){
    ldemo.nextIteration();
    paper.project.clear();
    drawTree(tree,start,280);
};
}

drawTree = function(tree,startPoint,startLength){
  drawBranch(tree.getRoot(), startPoint, 0, startLength, 2/5);
}

drawBranch = function(node, point, angle, length, shortening){
  if(length > 1){
    var children = node.getChildren();
    var childrenLength = children.length;
    var deltaAngle = (360/(childrenLength));
    var endPoint = new paper.Point(0,-length);
    endPoint = endPoint.rotate(angle, new paper.Point(0,0));
    endPoint = endPoint.add(point);
    for(var childIndex = 0; childIndex < childrenLength; childIndex++){
      var child = children[childIndex];
      var childPoint = endPoint.rotate(deltaAngle*(childIndex+1),point);
      var path = new paper.Path();
      path.strokeColor = 'white';

      path.add(point);
      path.lineTo(childPoint);

      drawBranch(child,childPoint,angle-deltaAngle,length*shortening, shortening);
    }
  }
}

demo = function(){
  var variables = [1,2,3,4];
  var constants = [];
  var axiom = 1;
  var rules = [];
  rules.push(new LRule(1,[2]));
  rules.push(new LRule(2,[2,2,2,2,2]));
  rules.push(new LRule(3,[3,2,3]));
  rules.push(new LRule(4,[2,2,2]));
  return new LSystem(variables, constants, axiom, rules);
}
