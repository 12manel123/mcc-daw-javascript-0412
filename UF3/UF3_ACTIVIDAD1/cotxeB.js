document.getElementsByTagName("body")[0].onload=function(){
	actualitzaTotal()	
}
//------------------ ELECCION MOTOR ----------------------------------------------------
document.getElementById("motor").onchange=function(){	
	actualitzaTotal()
}
//------------------ ELECCION PORTES ----------------------------------------------------
document.getElementById("model").onchange=function(){
	if(this.value=="3"){ //3portes, solo gasolina, no tiene DVD		
		document.getElementById("motor").getElementsByTagName("option")[0].disabled=false //gasolina
		document.getElementById("motor").getElementsByTagName("option")[0].selected=true
		document.getElementById("motor").getElementsByTagName("option")[1].disabled=true //diesel
		document.getElementById("motor").getElementsByTagName("option")[2].disabled=true //hibrido
		document.getElementById("dvd").disabled=true //desactivo DVD
		document.getElementById("dvd").checked=false //Desmarco DVD	 
		
	}else{ //admite todos los motores 
	 	document.getElementById("motor").getElementsByTagName("option")[0].disabled=false //gasolina		
		document.getElementById("motor").getElementsByTagName("option")[1].disabled=false //diesel
		document.getElementById("motor").getElementsByTagName("option")[2].disabled=false //hibrido	
		document.getElementById("dvd").disabled=true //desactivo DVD
		document.getElementById("dvd").checked=false //Desmarco DVD			
	}
	if(this.value=="5"){//familiar, activamos DVD
		document.getElementById("dvd").disabled=false //Activo DVD		
	}

	actualitzaTotal()
}

//------------------ ELECCION COLOR ----------------------------------------------------
for(i=0;i<document.getElementsByName("color").length;i++){
	document.getElementsByName("color")[i].onchange=function(){
		if(this.value=="blanc" && this.checked){
			document.getElementById("metalitzada").disabled=true
			document.getElementById("metalitzada").checked=false			
		}
		else if(this.value=="negre" && this.checked){
			document.getElementById("metalitzada").disabled=true
			document.getElementById("metalitzada").checked=false			
		}else{
			document.getElementById("metalitzada").disabled=false
		}
		actualitzaTotal()
	}
}
	
//------------------ ELECCION METALIZADO ----------------------------------------------------	
document.getElementById("metalitzada").onchange=function(){
	actualitzaTotal()
}

//------------------ ELECCION LLANTAS ----------------------------------------------------
document.getElementById("llantes").onchange=function(){
	actualitzaTotal()
}
//------------------ ELECCION CLIMATIZADOR ----------------------------------------------------
document.getElementById("climatitzador").onchange=function(){
	actualitzaTotal()
}
//------------------ ELECCION GPS ----------------------------------------------------
document.getElementById("gps").onchange=function(){
	actualitzaTotal()
}
//------------------ ELECCION DVD ----------------------------------------------------
document.getElementById("dvd").onchange=function(){
	actualitzaTotal()
}
//-------------------------------------------------------------------------------------------
//------------------ CALCULAR PREU FINAL ----------------------------------------------------
//------------------------------------------------------------------------------------------- 
function actualitzaTotal(){	
	total=12000 //Base 

	//-------------------Motor------------------    
    motor=document.getElementById("motor").value
    switch (motor){
       case "d": //diesel
           total+=1500
           break
       case "h": //hibrido   
           total+=3000
           break
    }

    //-------------------Portes------------------
	portes=document.getElementById("model").value
    switch (portes){
       case "3": //3 portes           
           total-=2000
           break
       case "5": //5 portes   
           total+=1500
           break
    }    

    //-------------------Color------------------
    co=document.getElementsByName("color")
    for(x=0;x<co.length;x++){
       if(co[x].checked){       	
          total=(x==4)?total-600:total-500 //es negre
          break
       }	
    }
    

    ////-------------------Complements------------------
    comple=document.getElementsByTagName("input") //Todos los input       
    for(x=0;x<comple.length;x++){
    	if (comple[x].type=="checkbox" && comple[x].checked){ 
    	   total+=parseInt(comple[x].value)
    	}
    }

    //----------ACTUALIZAR PREU
	document.getElementById("total").value=total+" €"


}