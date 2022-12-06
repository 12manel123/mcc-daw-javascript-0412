<?php
$a = array("primavera","estiu","tardor","hivern","esborrar");
$epoca=$_REQUEST['epoca'];
foreach ($a as $key => $value) {

    if($epoca==$value){
        if($epoca=="primavera"){
        echo "Primavera,LavenderBlush,LawnGreen,DarkMagenta";
        }
        if($epoca=="estiu"){
        echo "Estiu,Beige,Crimson,Gold";
        }
        if($epoca=="tardor"){
        echo "Tardor,NavajoWhite,Maroon,Olive";
        }
        if($epoca=="hivern"){
        echo "Hivern,AliceBlue,CadetBlue,DarkBlue";
        }
        if($epoca=="esborrar"){
        echo ",white,black,black";
        }
    }
    
}
?>