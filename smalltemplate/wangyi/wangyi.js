function onUnamefocus(){
	var div = document.getElementById("username") ;
	div.className = "prompt" ;
	div.innerHTML = "1.由字母·数字·下滑线·点·减号组成<br>2.只能以数字·字母开头或结尾，且长度为4-18" ;
	
}
function onUnameblur(){
	var reg=/^[0-9a-zA-Z][0-9a-zA-Z_.-]{2,16}[0-9a-zA-Z]$/;
	var username = document.getElementById("unameId") ;
	if (reg.test(username.value) == false) {
		var div = document.getElementById("username") ;
		div.className = "error" ;
		div.innerHTML = "1.由字母·数字·下滑线·点·减号组成<br>2.只能以数字·字母开头或结尾，且长度为4-18" ;
	return false;
	}
	if (username.value == ""||username.value == null) {
		var div =  document.getElementById("username") ;
		div.className = "error" ;
		div.innerHTML = "用户名不能为空"
	return false;
	}
		var div =  document.getElementById("username") ;
		div.className = "ok_pro" ;
		div.innerHTML = "用户名验证通过" ;
		return true ;

}
//用户名的聚焦与离焦事件

//密码的聚焦与离焦事件
function onPasswordfocus() {
	var div = document.getElementById("password") ;
	div.innerHTML = "密码长度为6-16" ;
	div.className = "prompt" ;
}
function onPasswordblur() {
	var div =  document.getElementById("password") ;
	var pwd = document.getElementById("pwdId") ;
	if (pwd.value == ""||pwd.value == null) {		
		div.innerHTML = "密码不能为空"
		div.className = "error" ;
		return false ;
	}
	if (pwd.value.length<6||pwd.value.length>16) {
		div.className = "error" ;
		div.innerHTML = "密码长度为6-16" ;
		return false;
	}
	div.className = "ok_pro" ;
	div.innerHTML = "密码可用" ;
	return true ;
}

//重复密码的聚焦与离焦事件

function onPasswordsfocus() {
	var div = document.getElementById("passwords") ;
	div.innerHTML = "请再输入一遍登录密码" ;
	div.className = "prompt" ;
}
function onPasswordsblur() {
	var pwds = document.getElementById("pwdsId") ;
	var password =  document.getElementsByName("password") ;
	var div =  document.getElementById("passwords") ;
	if (pwds.value == ""||pwds.value == null) {
		div.innerHTML = "重复密码不能为空,请重复输入密码"
		div.className = "error" ;
		return false ;
	}
	if (pwds.value != password[0].value) {
		div.innerHTML = "两次输入密码不一致，请重新输入"
		div.className = "error" ;
		return false ;
	}
	div.className = "ok_pro" ;
	div.innerHTML = "密码一致" ;
	return true ;


	
}
//昵称的聚焦与离焦事件
function onVnamefocus() {
	var div = document.getElementById("vname") ;
	div.innerHTML = "1.包含汉字·字母·数字·下划线·及部分特殊字符<br>2.长度为4-20个字符<br>3.一个汉字占两个字符" ;
	div.className = "prompt" ;
}
function onVnameblur() {
	var vname = document.getElementById("vnameId") ;
	var div =  document.getElementById("vname") ;
	if (vname.value == ""||vname.value == null) {		
		div.innerHTML = "昵称不能为空"
		div.className = "error" ;
		return false ;
	}
	if(vname.value.length<4||vname.value.length>20){
		div.className = "error" ;
		div.innerHTML = "1.包含汉字·字母·数字·下划线·及部分特殊字符<br>2.长度为4-20个字符<br>3.一个汉字占两个字符" ;
		return false ;
	}
	div.className = "ok_pro" ;
	div.innerHTML = "可以使用" ;
	return true ;
}
//手机号码的聚焦与离焦事件
function onTelfocus() {
	var div = document.getElementById("tel") ;
	div.innerHTML = "1.手机号码以13,15,18开头<br>2.手机号码由11位数字组成" ;
	div.className = "prompt" ;
}
function onTelblur() {
	var reg = /^(13|15|18)[0-9]{9}/ ;
	var tel = document.getElementById("telId") ;
	var div =  document.getElementById("tel") ;
	if (tel.value == ""||tel.value == null) {	
		div.innerHTML = "手机号码不能为空"
		div.className = "error" ;
		return false ;
	}
	if (reg.test(tel.value) == false) {
		div.className = "error" ;
		div.innerHTML = "1.手机号码以13,15,18开头<br>2.手机号码由11位数字组成" ;
		return false ;
	}
	div.className = "ok_pro" ;
	div.innerHTML = "验证通过" ;
	return true ;
}
//邮箱的聚焦与离焦事件
function onEmailfocus() {
	var div = document.getElementById("email") ;
	div.innerHTML = "密码长度为6-16" ;
	div.className = "prompt" ;
}
function onEmailblur() {
	var reg = /(@qq.com|@163.com|@sina.com|@gmail.com|@hotmail.com)$/
	var email = document.getElementById("emailId") ; 
	var div =  document.getElementById("email") ;
	if (email.value == ""||email.value == null) {		
		div.innerHTML = "用户名不能为空"
		div.className = "error" ;
		return false ;
	}
	if (reg.test(email.value) == false) {
		div.className = "error" ;
		div.innerHTML = "邮箱格式不正确，请重新输入" ;
		return false ;
	}
	div.className = "ok_pro" ;
	div.innerHTML = "可以使用" ;
	return true ;
}
function checkForm(){
	var flagUname = onUnameblur() ;
	var flagPassword = onPasswordblur() ;
	var flagPasswords = onPasswordsblur() ;
	var flagVname = onVnameblur() ;
	var flagTel = onTelblur() ;
	var flagEmail = onEmailblur() ;

	onUnameblur() ;
	onPasswordblur() ;
	onPasswordsblur() ;
	onVnameblur() ;
	onTelblur() ;
	onEmailblur() ;
	if (flagUname==true && flagPassword==true && flagPasswords==true && flagVname==true && flagTel==true && flagEmail== true) {
		return true ;
	}

	else{
		return false ;
	} 
}