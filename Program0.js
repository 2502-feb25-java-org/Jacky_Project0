/*function functionstore(val) {
	sessionStorage.search=val;
}
function loadstore(val) {
	val=sessionStorage.search
}*/
function entry() {
	if((document.getElementById("user").value)==="Admin"&&document.getElementById("pass").value==="Password123"){
		window.location.replace("Project0.5.html");
	}
}
function signupgo() {
	if(document.getElementById("fname").value,
		document.getElementById("lname").value,
		document.getElementById("mname").value,
		document.getElementById("zipcode").value,
		document.getElementById("email1").value,
		document.getElementById("phone").value,
		document.getElementById("age").value,
		document.getElementById("add1").value,
		document.getElementById("add2").value,
		document.getElementById("city").value,
		document.getElementById("state").value,
		document.getElementById("country").value!=0
		){
		window.location.replace("Project0.1.html");
}
else window.alert("Please fill in all the fields"); 
}

function functionstore() {
	if(document.getElementById("fname").value!=undefined&&document.getElementById("lname").value!=undefined&&document.getElementById("fname").value==document.getElementById("lname").value&&document.getElementById("fname").value!=""&&document.getElementById("fname").value!=""&&document.getElementById("mname").value!=""&&document.getElementById("mname").value!=undefined&&document.getElementById("fname").value==document.getElementById("mname").value){ 
		console.log("First, Middle, and Last name can't be the same");
		document.getElementById("fname").value="";
		document.getElementById("lname").value="";
		document.getElementById("mname").value="";
	}
	localStorage.fname=document.getElementById("fname").value;
	localStorage.lname=document.getElementById("lname").value;
	localStorage.mname=document.getElementById("mname").value;
	localStorage.zipcode=document.getElementById("zipcode").value;
	localStorage.email1=document.getElementById("email1").value;
	localStorage.phone=document.getElementById("phone").value;
	localStorage.age=document.getElementById("age").value;
	localStorage.add1=document.getElementById("add1").value;
	localStorage.add2=document.getElementById("add2").value;
	localStorage.city=document.getElementById("city").value;
	localStorage.state=document.getElementById("state").value;
	localStorage.country=document.getElementById("country").value;

	/*	localStorage.password=document.getElementById("password").value;*/
/*	localStorage.malegender=document.getElementById("malegender").checked;
	localStorage.femalegender=document.getElementById("femalegender").checked;
	localStorage.othergender=document.getElementById("othergender").checked;*/
	var check1=document.getElementById("malegender");
	localStorage.setItem("malegender", check1.checked);
	var check2=document.getElementById("femalegender");
	localStorage.setItem("femalegender", check2.checked);
	var check3=document.getElementById("othergender");
	localStorage.setItem("othergender", check3.checked);
	/*	localStorage.name=document.getElementById("name").value;*/
	/*	localStorage.email=document.getElementById("email").value;*/
	/*	localStorage.message=document.getElementById("message").value;*/
}

function functionstoreone() {

	localStorage.name=document.getElementById("name").value;
	localStorage.email=document.getElementById("email").value;
	localStorage.message=document.getElementById("message").value;
}

/*function loadstore(val) {
	if(document.getElementById("fname").value!=undefined&&document.getElementById("lname").value!=undefined&&document.getElementById("fname").value==document.getElementById("lname").value&&document.getElementById("fname").value!=""&&document.getElementById("fname").value!=""&&document.getElementById("mname").value!=""&&document.getElementById("mname").value!=undefined&&document.getElementById("fname").value==document.getElementById("mname").value){
		console.log("First, Middle, and Last name can't be the same");
		document.getElementById("fname").value="";
		document.getElementById("lname").value="";
		document.getElementById("mname").value="";
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
}*/

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else { 
		document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	//statute miles
	lat1 = position.coords.latitude;
	lon1 = position.coords.longitude;
	lat2 = 38.95339765609601;
	lon2 = -77.35051184892654;
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		kdist = dist * 1.609344
		ndist = dist * 0.8684
		/*//kilometers
		if (unit=="K") { dist = dist * 1.609344 }
		//nautical miles
	if (unit=="N") { dist = dist * 0.8684 }*/
		return document.getElementById("demo").innerHTML = Math.ceil(dist) +" statute miles\r" + Math.ceil(kdist) +" kilometers\r" + Math.ceil(ndist) +" nautical miles\r"  ;
	}/*  document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude + 
	"<br>Longitude: " + position.coords.longitude;*/
}

function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31 
		&& (charCode < 48 || charCode > 57))
		return false;
	return true;
}  

function isNumericKey(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31 
		&& (charCode < 48 || charCode > 57))
		return true;
	return false;
} 

function isNumberKeyhyphen(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31 
		&& (charCode < 45 || charCode > 57))
		return false;
	return true;
}  
/*function zip() {
		var clientKey = "VwDORvOmqS8uJFQ3eNn47BU2h99SURFVvIPz58vCqKwn0uRiwLs5P0hGhSsCFVAG";
		var cache = {};
		var container = $("#example1");
		var errorDiv = container.find("div.text-error");
		
		/** Handle successful response 
		function handleResp(data)
		{
			// Check for error
			if (data.error_msg)
				errorDiv.text(data.error_msg);
			else if ("city" in data)
			{
				// Set city and state
				container.find("input[name='city']").val(data.city);
				container.find("input[name='state']").val(data.state);
			}
		}
		
		// Set up event handlers
		container.find("input[name='zipcode']").on("keyup change", function() {
			// Get zip code
			var zipcode = $(this).val().substring(0, 5);
			if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
			{
				// Clear error
				errorDiv.empty();
				
				// Check cache
				if (zipcode in cache)
				{
					handleResp(cache[zipcode]);
				}
				else
				{
					// Build url
					var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/info.json/" + zipcode + "/radians";
					
					// Make AJAX request
					$.ajax({
						"url": url,
						"dataType": "json"
					}).done(function(data) {
						handleResp(data);
						
						// Store in cache
						cache[zipcode] = data;
					}).fail(function(data) {
						if (data.responseText && (json = $.parseJSON(data.responseText)))
						{
							// Store in cache
							cache[zipcode] = json;
							
							// Check for error
							if (json.error_msg)
								errorDiv.text(json.error_msg);
						}
						else
							errorDiv.text('Request failed.');
					});
				}
			}
		}).trigger("change");
	};*/