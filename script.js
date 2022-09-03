function closeSidebar() {
	let sidebar = document.getElementById('sidebar');
	let sidebar2 = document.getElementById('sidebar2');
	let main = document.getElementById('main');
	let content = document.getElementById('content');
	let btnOpen = document.getElementById('btnOpen');
	let btnClose = document.getElementById('btnClose');

	function hide() {
		sidebar.setAttribute("style", "display:none");
	}

	btnOpen.setAttribute("style", "");
	btnClose.setAttribute("style", "display:none;");
	content.setAttribute("style", "width:90%;box-shadow: 0 .2rem .8rem rgba(0,0,0,.4)!important; margin:70px 0px 5% 5%; animation: move 1.5s;");
	sidebar.setAttribute("style", "animation:move3 1.2s;")
	setTimeout(hide, 1000);
	
	sidebar2.setAttribute("style", "display:none");
}

function openSidebar() {
	let sidebar = document.getElementById('sidebar');
	let sidebar2 = document.getElementById('sidebar2');
	let main = document.getElementById('main');
	let content = document.getElementById('content');
	let btnOpen = document.getElementById('btnOpen');
	let btnClose = document.getElementById('btnClose');

	btnOpen.setAttribute("style", "display:none;");
	btnClose.setAttribute("style", "");
	content.setAttribute("style", "animation: move2 1s;");
	sidebar.setAttribute("style", "animation: move2 1s;");
	sidebar2.setAttribute("style", "");
}

let icon = document.getElementById("icon");
let srcIcon = localStorage.getItem('icon');

if(!srcIcon) {
	srcIcon = "bi bi-brightness-high";
}
icon.setAttribute("class", srcIcon);

let icon2 = document.getElementById("icon2");
let srcIcon2 = localStorage.getItem('icon');

if(!srcIcon2) {
	srcIcon2 = "bi bi-brightness-high";
}

icon2.setAttribute("class", srcIcon2);

let btnModeTheme = document.getElementById("btn-mode");
let srcBtn = localStorage.getItem('btn');

if(!srcBtn) {
	srcBtn = "themeMode(false);";
}

btnModeTheme.setAttribute("onclick", srcBtn);

let btnModeTheme2 = document.getElementById("btn-mode2");
let srcBtn2 = localStorage.getItem('btn');

if(!srcBtn2) {
	srcBtn2 = "themeMode(false);";
}

btnModeTheme2.setAttribute("onclick", srcBtn2);

let conBody = document.getElementById("con");
let theme = localStorage.getItem('theme');
if(!theme) {
	theme = "white-mode";
}

conBody.setAttribute("class",theme);

function themeMode(mode) {
	if(mode == true) {
		localStorage.setItem('icon', 'bi bi-brightness-high');
		localStorage.setItem('theme', 'dark-mode');
		localStorage.setItem('btn', "themeMode(false);");
		document.location.href = 'index.html';

	}else if (mode == false) {
		localStorage.setItem('icon', 'bi bi-moon');
		localStorage.setItem('theme', 'white-mode');
		localStorage.setItem('btn', "themeMode(true);");
		document.location.href = 'index.html';
	}
}