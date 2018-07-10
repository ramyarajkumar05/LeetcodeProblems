/**
 * @param {string} s
 * @return {number}
 */
var calculate1 = function(s) {
    s=s.trim().replace(/ /g,"");;
    var i=0;
    var val="";
    var stack =[];
    while(i<s.length){
        while(i<s.length && s[i]>=0 && s[i]<=9){
            val += s[i];
            i++;            
        }
        
            if(val.length != 0)
                stack.push(val-'0');
            
            if(s[i] == '/'){
                i++;
                val = "";
                 while(i<s.length && s[i]>=0 && s[i]<=9){
                    val += s[i];
                    i++;            
                    }
                
                stack.push(stack.pop() / val);

                i = i + val.length-1;
                val = "";
            }
            else if(s[i] == '*'){
                val = "";
                stack.push('*');
                i++;
                }
        else{
            if(i<s.length){
            val = "";
            stack.push(s[i]);
            i++;
        }
        }        
    }
    if(stack.length == 1) return stack.pop();
    var stackB = [];
    while(stack.length > 0){
        val = stack.pop();
        if(val != '*')
            stackB.push(val);
        else{
            val = stack.pop() * stackB.pop();
            stackB.push(val);
         }
    }
    
    while(stackB.length > 1){
        val = stackB.pop();
        var sign = stackB.pop();
        
        if(sign == '-')
            stackB.push(val - stackB.pop());
        else
            stackB.push(val + stackB.pop());
    }
    
    return stackB.pop();
};

var calculate = function(s){
    s=s.trim().replace(/ /g,"");;
    var i=0;
    var val="";
    var stack =[];
    var sign = '+';
    while(i<s.length){
        while(i<s.length && s[i]>=0 && s[i]<=9){
            val += s[i];
            i++;            
        }
        
        if(sign == '-')
            stack.push(-(val-'0'));

        else if(sign == '+')
            stack.push(val-'0');

        else if(sign == "/")
            stack.push(Math.floor(stack.pop() / val-'0'));           
        
        else
            stack.push(stack.pop() * val-'0');        

        sign = s[i];
        val = "";
        i++;
    }
    var res = 0;
    while(stack.length > 0){
        res += stack.pop();
    }
    return res;
}