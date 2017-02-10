function LNode(data){
  this.data = data;
  var _parent = null;
  var _children = [];

  this.setParent = function(parent){
    if(parent instanceof LNode) _parent = parent;
  }

  this.addChild = function(child){
    _children.push(child);
  }

  this.getChildren = function(){
    return _children;
  }

  this.applyRules = function(rules){
    for (var ruleIndex = 0, ruleLength = rules.length;
      ruleIndex < ruleLength; ruleIndex++) {

        var curRule = rules[ruleIndex];
        if(curRule instanceof LRule){
          if(curRule.input === this.data){
            var targetset = curRule.targetset;
            //Apply rule and create all children
            for (var targetIndex = 0, targetLength = targetset.length;
              targetIndex < targetLength; targetIndex++) {
                var child = new LNode(targetset[targetIndex]);
                child.setParent(this);
                this.addChild(child);
            }
          }
        }
      }
    }
};
