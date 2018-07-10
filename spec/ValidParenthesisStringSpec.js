describe("ValidParenthesisString", function() {
	var validParenthesis = require('../ValidParenthesisString');

	it("TC1", function() {
    
    var str = "(*)" ;
    var val = validParenthesis(str);
    expect(true).toEqual(true);
  });

	it("TC2", function() {
    
    var str = "*)(*";
    var val = validParenthesis(str);
    expect(val).toEqual(true);
  });

	it("TC3", function() {
    
    var str = "((*))";
    var val = validParenthesis(str);
    expect(val).toEqual(true);
  });
	it("TC4", function() {
    
    var str = "()*(";
    var val = validParenthesis(str);
    expect(val).toEqual(false);
  });
  it("TC5", function() {
    
    var str = "()**";
    var val = validParenthesis(str);
    expect(val).toEqual(true);
  });
  it("TC6", function() {
    
    var str = ")**";
    var val = validParenthesis(str);
    expect(val).toEqual(false);
  });
  it("TC7", function() {    
    var str = "******";
    var val = validParenthesis(str);
    expect(val).toEqual(true);
  });
  it("TC8", function() {    
    var str = "*(**ab***";
    var val = validParenthesis(str);
    expect(val).toEqual(false);
  });
  it("TC8", function() {    
    var str = "((*))))";
    var val = validParenthesis(str);
    expect(val).toEqual(false);
  });
  it("TC9", function() {    
    var str = "(*))";
    var val = validParenthesis(str);
    expect(val).toEqual(true);
  });


});
