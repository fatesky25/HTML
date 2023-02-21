var calc = {};

calc.x = 0;
calc.y = 0;

calc.setValue = function(p1,p2){
    this.x = p1;
    this.y = p2;
};

calc.minus = function(){
    return this.x - this.y;
};

calc.plus = function() {
    return this.x + this.y;
};

calc.result = function(){
    var val1 = this.minus();
    var val2 = this.plus();
    document.write("<p>뺄셈결과 : "+val1+"</p>");
    document.write("<p>덧셈결과 : "+val2+"</p>");
};



