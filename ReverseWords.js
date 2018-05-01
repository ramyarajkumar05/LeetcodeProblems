var reverseWords1 = function(s) {
    console.log("Entered");
    var sArr = split(s);
    s="";
    for(var i=0;i<sArr.length;i++){
        console.log("Value in String array to be reserved is "+sArr[i]);
        s+= reverseString(sArr[i]);
        console.log("After reversing is "+ s);

        s+=" ";

    }
    return s;
};

var reverseWords2 = function(str){
    str = str.trim();
    str = reverseString(str);
    console.log("Initial reverse is "+str);

    var strArr = split(str);
    //var strArr = str.split(" ");

    console.log(strArr[0]);
    console.log(strArr[1]);
    console.log(strArr[2]);
    //console.log(strArr[3]);
    str="";
    for(var i=0;i<strArr.length;i++){
        str+= reverseStrin(strArr[i]) + " ";
    }

    console.log(str);
    return str.replace(/\s\s*$/, '');
}
var reverseWordss = function(str) {
    //if(str.length == 0 || str.length == 1) return str;
   console.log(str+".");
    str = str.trim();
    console.log(str+".");
    if(str.length > 0 && str[0] == ' ') return "";
    str=cleanSpaces1(str); 
    console.log(str+".");
   str = reverseStrin(str);
   console.log(str+".");     
    var strArr = str.split(" ");
    str="";
    for(var i=0;i<strArr.length;i++){
        str+= reverseStrin(strArr[i]) + " ";
    }
    str=str.trim();
    console.log(str+".");
    return str;
};

var reverseStrin = function(s){
    s = s.split('');
    var low = 0;
    var high = s.length-1;
    var temp = "";
    
   // console.log("Org string is "+s);
    while(low<high){
        temp = s[low];
        s[low] = s[high];
        s[high] = temp;
        low++;
        high--;
    }
    //console.log("Reverse is "+s.join(''));
    return s.join('');
}

var split = function(str){
    var strArray = [];
    var s ="";
    for(var i=0; i<str.length; i++){
        if(str[i] != ' ')
        {
            s += str[i];
        }
        else
        {
            strArray.push(s);
            s="";
        }

    }
    strArray.push(s);
   
    return strArray;
}
var cleanSpaces1 = function(str){
    var i=0;var pos=0;
    var a = str.split('');
    var n = a.length;
    while(i<n){
       
       while(i<n && a[i] == ' ')i++;
       while(i<n && a[i] != ' '){
        a[pos] = a[i];
        pos++;
        i++;
       }
       while(i<n && a[i] == ' ') i++;
       if(i<n){
        a[pos] = ' ';
        pos++;
       }
    }
    return a.join('').substr(0,pos);
}