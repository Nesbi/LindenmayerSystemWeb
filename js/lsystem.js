var lsystem = function(variables, constants, axiom, rules){
  this.variables = variables;
  this.constants = constants;
  this.axiom = axiom;
  this.rules = rules;

  this.nextIteration = function(){

  };
};

/* A rule is defind as input->targetset e.g. input=A, targetset=[A,B] => A->AB */
var LRule = function(input, targetset){
  this.input = input;
  this.targetset = targetset;

  /* Create a string representation of a rule eg. A->A,B*/
  this.toString = function(){
    var outputString

    outputString = input+"->";

    for (var targetIndex = 0; targetLength = this.targetset.length; targetIndex < targetLength; targetIndex++) {
      outputString += targetset[targetIndex];
      if(targetIndex !== targetLength) outputString += ",";
    }
  };
};
