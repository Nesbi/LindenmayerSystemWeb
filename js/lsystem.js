function LSystem(variables, constants, axiom, rules){
  this.variables = variables;
  this.constants = constants;
  this.axiom = axiom;
  this.rules = rules;
  this.tree = new LTree(axiom);

  this.nextIteration = function(){
    this.tree.applyRules(rules);
  };
};

/* A rule is defind as input->targetset e.g. input=A, targetset=[A,B] => A->AB */
function LRule(input, targetset){
  this.input = input;
  this.targetset = targetset;

  /* Create a string representation of a rule eg. A->A,B*/
  this.toString = function(){
    var outputString

    outputString = input+"->";

    for (var targetIndex = 0, targetLength = this.targetset.length; targetIndex < targetLength; targetIndex++) {
      outputString += targetset[targetIndex];
      if(targetIndex !== targetLength) outputString += ",";
    }
  };
};
