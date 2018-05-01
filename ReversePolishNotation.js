/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];    
   
    for(var i=0; i<tokens.length; i++){
        if(!isNaN(tokens[i]))
            stack.push(parseInt(tokens[i]));
            else if(tokens[i] === "+" && stack.length > 1 ){                  
                stack.push(stack.pop() + stack.pop());            
            }
             else if(tokens[i]=== "*" && stack.length > 1 ){               
                stack.push(stack.pop() * stack.pop());            
            }
             else if(tokens[i] === "/" && stack.length > 1 ){  
                 var op2 = stack.pop();               
                 var op1 = stack.pop();                
                 
                 if(op1<0 && op2>0 || op1>0 && op2<0)
                     {
                      op2 = (op2 < 0) ? op2 * -1 : op2;
                      op1 = (op1 < 0) ? op1 * -1 : op1;
                      stack.push(- Math.floor(op1 / op2));  
                     }
                 else
                  stack.push(Math.floor(op1 / op2));                            
            }
             else if(tokens[i] === "-" && stack.length > 1 ){  
                  var op2 = stack.pop();
                 var op1 = stack.pop();
                stack.push(op1 - op2);            
            }
        }
   
    if(stack.length === 1) 
    return stack.pop();
    else
    return 0;
};