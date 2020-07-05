var data = '', number, decimal, equal, operator, allowSQR = true;
var textview = document.forms['form']['textview'];

function insertNumber(num){
	if (equal){
		data = num;
		textview.value = data;
		number = true;
		equal = false;
	}
	else{
		data = textview.value + num;
		textview.value = data;
		number = true;
	}
	if(operator) decimal = false;
	SQR('a');
}


function insertOperator(op){
	textview.value = data + op;
	operator = true;
	equal = false;
	allowSR = false;
	SQR('a');
}

function insertDecimal(){
	if(number && !decimal){
		textview.value = data + '.';
		decimal = true;
		operator = false;
	}
}

function equalTo(){
	if(data){
		data = eval(data);
		textview.value = data;
		equal = true;
		decimal = false;
		number = false;
		allowSQR = true;
		SQR('a');
	}
}

function clear(){
	data = '';
	textview.value = data;
	decimal = false;
}

function SQR(n){
	if(n == 'r'){
		data = Math.sqrt(data);
		textview.value = data;
	}
	else if(x=='a' && allowSQR){
		document.getElementById('r').disabled = false;
	}
	else if(!allowSQR){
		document.getElementById('r').disabled = true;
	}

}


function validForm(){
	var form = document.getElementById('form').value;
	var username = document.getElementById('username');
	var email = document.getElementById('email');
	var mobNumber = document.getElementById('mobNumber');

	var nletters = /^[^0-9][0-9a-zA-Z]+$/;
	var eletters = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	var mletters = /^[0-9]\d{9}$/;
	
	if(!username.value.match(nletters)){
		alert('Invalid Username');
		return false;
	}

	if(!email.value.match(eletters)){
		alert('Invalid Email ID');
		return false;
	}

	if(!mobNumber.value.match(mletters)){
		alert('Invalid Mobile Number');
		return false;
	}
	
	alert('Successful!!');
	return true
	
			
	}


function palindrome(text){
	var lowerCasedString = text.toLowerCase();
    var reversedString = lowerCasedString.split("").reverse().join("");
    if (reversedString === lowerCasedString){
    	alert('Palindrome');
    }
    else{
    	alert('Not Palindrome');
    }
} 


function anagram(text1, text2){
	var newtext1 = text1.toLowerCase().split('').sort().join();
	var newtext2 = text2.toLowerCase().split('').sort().join(); 

	if(newtext1 == newtext2){
		alert('Anagram');
	}
	else{
		alert('Not Anagram');
	}
}   

			
