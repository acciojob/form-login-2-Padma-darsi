

function info(event)
	{
		 event.preventDefault();
	   const fname=document.getElementById("f-name").value;
       const lname=document.getElementById("l-name").value;
       const num=document.getElementById("num").value;
       const mail=document.getElementById("mail").value;
	   const alertMessage=`First Name:${fname} Last Name: ${lname} Phone Number: ${num} Email ID: ${mail}`;
	alert(alertMessage);
	}