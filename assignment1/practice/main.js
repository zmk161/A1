
var first;
var second;

function getValue(){
	first=document.getElementById("number1").value;
	
		
	
	second=document.getElementById("number2").value;
	
	
}

function valudation(value){
	//alert(value);
	/*var valuefilter=/^[a-zA-Z_\']*$/   

    if (valuefilter.test(value)) {
    	document.getElementById("result2").innerHTML="Invalid characters";	
        //alert("Invalid characters");       
        return true;
    }*/

    if(isNaN(value)){
    	return false;}
    	else
    		{return true;}
    
}

window.onload=function(){

	document.getElementById("multiply").onclick=function(){
		multiply();
	};

	document.getElementById("divide").onclick=function(){
		divide();
	};

}
function showError(message){
document.getElementById('errors').classList.remove('hidden');
document.getElementById("result2").innerHTML="Invalid characters";

}
function multiply(){

    getValue();
    if (valudation(first)&&valudation(second)){
    	document.getElementById("result").innerHTML=first*second;
    }
    else{
    	showError();
    	//document.getElementById('errors').classList.removeClass('hidden');
		document.getElementById("result2").innerHTML="Invalid characters";
    	
    	//document.getElementById("errors").classList.removeClass=("hidden");	
    }

		
}

function divide(){
	getValue();
	if (valudation(first)&&valudation(second)){
	document.getElementById("result").innerHTML=first/second;

}
 else{
 	    document.getElementById('errors').classList.remove('hidden');
		document.getElementById("result2").innerHTML="Invalid characters";
    	document.getElementById("result2").innerHTML="Invalid characters";	
    }

	
}


