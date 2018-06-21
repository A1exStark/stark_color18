window.onload= function () {

	document.getElementById('toggler2').onclick = function () 
	{
		openbox('box2', this);
		return false;
	};

};

function openbox(id, toggler2) {
	var div = document.getElementById(id);
	if(div.style.opacity == '1') {
		div.style.opacity = '0';
		toggler2.innerHTML = 'Фотопечать выключена';
	}
	else {
		div.style.opacity = '1';
		toggler2.innerHTML = 'Фотопечать включена';
	}
}