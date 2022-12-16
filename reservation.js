"use strict";

$(document).ready(function() { 	function IsEmail(email) { 	
let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/; 
if(!emailPattern.test(email)) { return false; }else{ return true; } } 					 			


$('#submit').on('click', function() { 				
let arrival = document.forms["reservation_form"]["arrival_date"].value; 				
let nights = document.forms["reservation_form"]["nights"].value; 				
let adults = document.forms["reservation_form"]["adults"].value; 				
let children = document.forms["reservation_form"]["children"].value; 				
let name = document.forms["reservation_form"]["name"].value; 				
let email = document.forms["reservation_form"]["email"].value; 				
let phone=document.forms["reservation_form"]["phone"].value; 				 				

$(".error").remove();
 				
if (arrival==null || arrival=="") { 					
$('#arrival_date').after('<span class="error">This field is required</span>'); 					
}

if (nights==null || nights=="") {
$('#nights').after('<span class="error">This field is required</span>');
}
else if(!($.isNumeric(nights))) 
{ 
$('#nights').after('<span class="error">Nights should be numeric</span>');	 					
} 				
if (adults==null || adults==""){ 					
$('#adults').after('<span class="error">This field is required</span>'); 
}
if (children==null || children==""){ 
$('#children').after('<span class="error">This field is required</span>'); 
}
if (name==null || name==""){ 					
$('#name').after('<span class="error">This field is required</span>'); 					
}
if (email==null || email==""){ 					
$('#email').after('<span class="error">This field is required</span>'); 
}
if(IsEmail(email)==false){
$('#email').after('<span class="error">Must be a valid email address.</span>'); 
} 
				
if (phone==null || phone=="") { 					
$('#phone').after('<span class="error">This field is required</span>'); 					
return false;}

});
});