const calc = document.querySelector(".calc-buttons");
const display = document.querySelector(".display-res");
let current = '';
let prev = '';
let result = 0;
let operator = '';


calc.addEventListener('click',(event)=>{
    if(!event.target.matches('button')) return;
    const value = event.target.textContent;
    handelevent(value)

});

window.addEventListener('keydown',(event)=>{
    let key = event.key;
    if(key=="Enter") key="=";
    if(key=="Backspace") key="C";
    if(key=="Escape") key = "AC";

    const valid_keys = ['00','0','1','2','3','4','5','6','7','8','9','+','-','/','*','.'];
    const valid_extras = ['=','AC','C'];

    if(valid_keys.includes(key)){
        event.preventDefault();
        handelevent(key)

    }
    if(valid_extras.includes(key)){
        event.preventDefault();
        handelevent(key)

    }

});



function handelevent(key){

    const vali_nums = ['1','2','3','4','5','6','7','8','9','0','00'];
    const vali_operator = ['+','-','/','*','+'];
    if(vali_nums.includes(key)){
        current = current+key;  
    }
    if(vali_operator.includes(key)){
        operator = key;
        prev = current;
        current = '';
        
       
    }
    updatedisplay(prev+operator+current);
    if(operator!=''){
        calculate(prev,operator,current);
        prev=result.toString();

    }else if(key=='='){
            calculate(prev,operator,current);
            current=result.toString();
            prev='';
            operator='';
            updatedisplay(current)

        }
    if(key=='AC'){
        current='';
        operator='';
        prev='';
    }
    if(key=='C'){
        current = current.slice(0,-1);
    }
}

function calculate(prev,operator,current){
    const num1 = parseFloat(current)
    const num2 = parseFloat(prev)

    if(operator=='+') result=num2+num1;
    if(operator=='/') result=num2/num1;
    if(operator=='*') result=num2*num1;
    if(operator=='-') result=num2-num1;

}

function updatedisplay(current){
    display.textContent = current;
}

