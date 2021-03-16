if(self != top) { 
	window.top.location.replace(self.location);
	//top.location = self.location; 
}
function postOpenWindow(URL,PARAMS){
var temp_form = document.createElement("form");temp_form.action = URL;temp_form.target = "_self";temp_form.method = "post";temp_form.style.display = "none";
for(var x in PARAMS){var opt = document.createElement("textarea");opt.name = x;opt.value = PARAMS[x];temp_form.appendChild(opt);}
document.body.appendChild(temp_form);temp_form.submit();
}