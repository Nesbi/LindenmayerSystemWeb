var LTree = function(data){
  var _root = new Node(data);
  var _depth = 0;
  var _depestLevel = _root;

  this.applyRules = function(rules){
    if(_depestLevel === _root){
      _depestLevel.applyRules(rules);
      _depestLevel = _depestLevel.getChildren();
    }else{
      var curLevel = [];
      for (var levelIndex = 0; levelLength = targetset.length;
        levelIndex < levelLength; levelIndex++) {
          var curNode = _depestLevel[levelIndex];
          curNode.applyRules(rules);
          curLevel.push(curNode.getChildren());
      }
      _depestLevel = curLevel;
    }
    _depth++;
  }

};

var LNode = function(data){
  this.data = data;
  var _parent = NULL;
  var _children = [];

  this.setParent = function(parent){
    if(parent instanceof LNode) _parent = parent;
  }

  this.addChild = function(child){
    if(parent instanceof LNode) _children.push(child);
  }

  this.getChildren = function(){
    return _children;
  }

  this.applyRules = function(rules){
    for (var ruleIndex = 0; ruleLength = rules.length;
      ruleIndex < ruleLength; ruleIndex++) {

        var curRule = rules[ruleIndex];
        if(curRule instanceof LRule){
          if(curRule.input === data){
            var targetset = curRule.targetset;
            //Apply rule and create all children
            for (var targetIndex = 0; targetLength = targetset.length;
              targetIndex < targetLength; targetIndex++) {
                var child = new LNode(targetset[targetIndex]);
                child.setParent(this);
                this.addChildren(child);
            }
          }
        }
      }
    }
};
