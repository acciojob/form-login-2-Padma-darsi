//your JS code here. If required.
const first=document.getElementById("first").value;
const last=document.getElementById("last").value;
const number=document.getElementById("num").value;
const email=document.getElementById("email".value);

const btn=document.getElementById("data").addEventListener("click",()=>
	{
		alert(`
		       First Name: ${first} 
			   Last Name: ${last}
			   Phone Number: ${number}
			   Email Id: ${email}`);
		
	});
