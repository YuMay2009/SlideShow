window.onload=function(){
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	
	function shoBtn(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className == 'on'){
			buttons[i].className = '';
			break;
			}
		}
		buttons[index-1].className = 'on';
		
	}
	
	function animate(offset){
		var newLeft = parseInt(list.style.left) +offset;
		list.style.left = newLeft +'px';

		if(newLeft>-600){
			list.style.left = -3000 +'px';
		}
		if(newLeft<-3000){
			list.style.left = -600 +'px';
		}
		
	}
	next.onclick = function(){
		
		if(index<buttons.length){
		   index = index + 1;
		}
		else{
			index = 1;
		}
		animate(-600);
		shoBtn();
		
	}
	
	prev.onclick = function(){
		if(index>1){
		   index = index - 1;
		}
		else{
			index = buttons.length;
		}
		animate(600);
		shoBtn();
	}
	
	for(var i=0;i<buttons.length;i++){
		buttons[i].onmouseover= function(){
			if(this.className=='on'){
				return;
			}
			var myIndex = this.getAttribute('index');
			var offset = -600*(myIndex-index);
			index = myIndex;
            animate(offset);
            shoBtn();
		}
	}
	
	
	
	
}
