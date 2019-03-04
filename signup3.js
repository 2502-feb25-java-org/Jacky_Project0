/*function functionstore(val) {
	sessionStorage.search=val;
}
function loadstore(val) {
	val=sessionStorage.search
}*/
function functionstore() {
	if(document.getElementById("fname").value!=undefined&&document.getElementById("lname").value!=undefined&&document.getElementById("fname").value==document.getElementById("lname").value&&document.getElementById("fname").value!=""&&document.getElementById("fname").value!=""){
			console.log("First name and Last name can't be the same");
			document.getElementById("fname").value="";
			document.getElementById("lname").value="";
	}
	localStorage.fname=document.getElementById("fname").value;
	localStorage.lname=document.getElementById("lname").value;
	localStorage.email1=document.getElementById("email1").value;
	localStorage.password=document.getElementById("password").value;
	localStorage.phone=document.getElementById("phone").value;
	localStorage.age=document.getElementById("age").value;
/*	localStorage.malegender=document.getElementById("malegender").checked;
	localStorage.femalegender=document.getElementById("femalegender").checked;
	localStorage.othergender=document.getElementById("othergender").checked;*/
	var check1=document.getElementById("malegender");
	localStorage.setItem("malegender", check1.checked);
	var check2=document.getElementById("femalegender");
	localStorage.setItem("femalegender", check2.checked);
	var check3=document.getElementById("othergender");
	localStorage.setItem("othergender", check3.checked);
	localStorage.name=document.getElementById("name").value;
	localStorage.email=document.getElementById("email").value;
	localStorage.message=document.getElementById("message").value;
}
function loadstore(val) {
	if(document.getElementById("fname").value!=undefined&&document.getElementById("lname").value!=undefined&&document.getElementById("fname").value==document.getElementById("lname").value&&document.getElementById("fname").value!=""&&document.getElementById("fname").value!=""){
			console.log("First name and Last name can't be the same");
			document.getElementById("fname").value="";
			document.getElementById("lname").value="";
	}
	while(val==undefined)
	{
		val="";
	}
	document.getElementById("fname").value=localStorage.fname;
	document.getElementById("lname").value=localStorage.lname;
	document.getElementById("email1").value=localStorage.email1;
	document.getElementById("password").value=localStorage.password;
	document.getElementById("phone").value=localStorage.phone;
	document.getElementById("age").value=localStorage.age;
	document.getElementById("malegender").checked=localStorage.malegender;
	document.getElementById("femalegender").checked=localStorage.femalegender;
	document.getElementById("othergender").checked=localStorage.othergender;
	document.getElementById("othergender").checked=checked3;
	document.getElementById("name").value=localStorage.name;
	document.getElementById("email").value=localStorage.email;
	document.getElementById("message").value=localStorage.message;
}
