console.log("calcy loaded")
let display= document.getElementById("inputField")
let buttons= document.querySelectorAll('button')
let screenVal='';

for(btni of buttons){
    btni.addEventListener('click',(e)=>{
        btnTxt=e.target.innerText;
        if(btnTxt=='x'){
            btnTxt='*';
            screenVal+=btnTxt;
            display.value=screenVal;
        }
        else if(btnTxt=='÷'){
            btnTxt='/';
            screenVal+=btnTxt;
            display.value=screenVal;
        }
        else if(btnTxt=='C'){
            screenVal="";
            display.value=screenVal;
        }
        else if(btnTxt=='='){
            display.value=eval(screenVal);
        }
        else if(btnTxt==''){
            display.value=screenVal.slice(0,-1);
            screenVal=display.value;
        }
        else{
            screenVal+=btnTxt;
            display.value=screenVal;
        }
        console.log(btnTxt);
    })
}