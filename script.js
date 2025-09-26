let a ;
let b ;
let operator ;
let shouldReset = false;
let questionReset = false;


const allButtons = document.querySelectorAll("calculator button");
const buttons = document.querySelectorAll(".number , .operator");
const numbers = document.querySelectorAll(".numbers button , .bottom button");
const display = document.querySelector(".display");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector(".equals"); 
const allClear = document.querySelector(".AC");
const clear = document.querySelector(".C");

const add = (a , b)=> {
    return a+b;
}

const subtract = (a , b)=> {
    return a-b;
}

const multiply = (a , b)=> {
    return a*b;
}

const divide = (a , b)=> {
    if(b===0){
        
        return "ERORR";
    }
    return a/b;
}

const modulo = ()=>{
    if(b===0){
        return "ERORR";
    }
    return (b/100)*a;
}




numbers.forEach(number => {
    number.addEventListener("click" , ()=>{


        if(number.textContent === "." && answer.textContent.includes(".") ){
            return;
        }
        
        
        if (answer.textContent === "0" || shouldReset){
            answer.textContent = number.textContent;
            shouldReset = false;
        }
        else{ answer.textContent+=number.textContent}
    })

})

operators.forEach(op=>{
    op.addEventListener("click" , ()=>{

                if (answer.textContent =="ERORR"){
                     reset();
                   }
                   
        if(shouldReset){
            a = Number(answer.textContent);
            operator = op.textContent;
            
            question.textContent = a ;
            
            return;
        }
        else{

        if(operator){
            b = Number(answer.textContent);
            a = evaluate(a , b , operator);
            answer.textContent = a;
        }
        else{
        a = Number(answer.textContent);
       
        
        }}
    operator = op.textContent;
    shouldReset = true;
    })
})

buttons.forEach(button=>{
    button.addEventListener("click" , ()=> {

        if(button.textContent =="."){

            let parts = question.textContent.split(/[+\-×÷%]/);
            let lastPart = parts[parts.length-1];

            if(lastPart.includes(".")){
                return;
            }
        }


         if(questionReset){
            if(!operator){
                question.textContent = answer.textContent;
                questionReset = true;
            }
            else{
            question.textContent = answer.textContent+operator;
            questionReset = false
        }
        }
        else{
        question.textContent += button.textContent;
       }
       
    })
    
})

equals.addEventListener("click" , ()=>{


    if (answer.textContent =="ERORR"){
    reset();
    }    

    if (!operator){
        return;
    }
    if (shouldReset) {
        return ;
    }

       
                b = Number(answer.textContent);
                
              answer.textContent = evaluate(a , b, operator);

    
              shouldReset = true;
              questionReset= true;
              operator = null ; 
        

    }
);




function evaluate (a , b , operator){
    let result ;
    if (operator == "+") result = add(a ,b);
    else if (operator == "−") result = subtract(a ,b);
    else if (operator == "×") result = multiply(a ,b);
    else if (operator == "÷") result = divide(a ,b);
    else if (operator == "%") result = modulo(a ,b);
    if(!operator){
        return b;
    } 
    else{
    
    return result;
    }
}

const reset =()=> { 
    
    a = null;
    b = null;
    operator = null ;
    shouldReset = false;
    questionReset = false;
    question.textContent = "";
    answer.textContent = 0;

}


const del = ()=>{
    
    answer.textContent = answer.textContent.slice(0,-1);
    question.textContent = question.textContent.slice(0,-1);

    if(answer.textContent===""){
        answer.textContent = 0;
    }
}

allClear.addEventListener("click" , ()=>{
    
    reset();
})

clear.addEventListener("click" , ()=>{
    
    del();
}
)


