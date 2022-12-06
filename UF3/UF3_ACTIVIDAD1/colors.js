for(i=0;i<document.getElementsByClassName("colors").length;i++)
		document.getElementsByClassName("colors")[i].onmouseover=function(){
			document.getElementsByTagName("body")[0].style.backgroundColor=this.style.backgroundColor
		}