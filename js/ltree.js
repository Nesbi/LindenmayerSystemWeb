function LTree(data){
  var _root = new LNode(data);
  var _depth = 0;
  var _depestLevel = _root;

  this.applyRules = function(rules){

    if(_depestLevel === _root){
      _depestLevel.applyRules(rules);
      _depestLevel = _depestLevel.getChildren();
    }else{
      var curLevel = null;
      for (var levelIndex = 0, levelLength = _depestLevel.length;
        levelIndex < levelLength; levelIndex++) {
          var curNode = _depestLevel[levelIndex];
          curNode.applyRules(rules);

          if(curLevel === null){
            curLevel = curNode.getChildren().slice();
          }else{
            curLevel = curLevel.concat(curNode.getChildren());
          }
        }
      _depestLevel = curLevel;
    }
    _depth++;
  }

  this.getDepth = function(){
    return _depth;
  }

  this.getRoot = function(){
    return _root;
  }
};
