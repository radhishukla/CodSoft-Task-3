let screen= document.getElementById('screen');

buttons= document.querySelectorAll('button');

screenValue='';

for(item of buttons)

{

item.addEventListener('click', (e)=>{

buttonText- e.target.innerText;

console.log('button text is' + buttonText);

if(buttonText=='C')

{

screenValue='';

screen.value-screenValue;

}

else if(buttonText==''){

screen.value-eval(screenValue);

}

else if(buttonText=='<-'){

screen.value-screen.value.substr(0,screen.value.length-1);

}

else

screenValue +-buttonText;

screen.value-screenValue;

})

}