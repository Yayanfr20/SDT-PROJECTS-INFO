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