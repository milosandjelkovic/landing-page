var navBarItems = document.getElementsByClassName('nav-link');
for (var i = 0; i < navBarItems.length; i++) {
	navBarItems[i].addEventListener('click', 
	function(){
		var active = document.getElementsByClassName('default');
		active[0].className = active[0].className.replace(' default', '');
		this.className += ' default';
	});
}
