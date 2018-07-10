describe("HouseRobber", function() {
	var hr = require('../HouseRobber');

	it("should work for happy path", function() {
    
    var arr = [10,5,12,50,9];
    var val = hr(arr);
    expect(val).toEqual(100);
  });
});