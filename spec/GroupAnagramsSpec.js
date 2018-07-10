describe("GroupAnagram", function() {
	var groupAnagram = require('../GroupAnagram');

	it("should work for happy path", function() {
    
    var arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
    var val = groupAnagram(arr);
    expect(val).toEqual(["eat", "tea", "ate", "tan", "nat", "bat"]);
  });

	it("negative case", function() {
    
    var arr = ["eat","nat","bat"];
    var val = groupAnagram(arr);
    expect(val).toEqual(["eat","nat","bat"]);
  });

	it("Empty case", function() {
    
    var arr = [];
    var val = groupAnagram(arr);
    expect(val).toEqual([]);
  });
	it("Invalid case check", function() {
    
    var arr = ["1","2","3"];
    var val = groupAnagram(arr);
    expect(val).toEqual([]);
  });

});