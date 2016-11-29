/*Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 // Accepted in 192 ms
 var isAnagram = function(s, t) {

  var map={};
  if(s.length != t.length) return false; 
  if(s.length === 0 && t.length===0) return true;
  for(var i=0;i<s.length;i++){
    if(map[s[[i]]]==null)
      map[s[i]]=1;
    else
      map[s[i]]=map[s[i]]+1;
  }

  for(var j=0;j<t.length;j++){
   if(map[t[j]] == null) return false;
   if(map[t[j]] !=null)
   {
     if(map[t[j]]!==0){
       map[t[j]]=map[t[j]]-1;
     }

   }
 }
 for (key in map)
{
    if(map[key] == 0)
    delete map[key];
}
if(Object.keys(map).length != 0) return false
   else
     return true;
 };