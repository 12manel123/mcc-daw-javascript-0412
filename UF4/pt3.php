<?php
$noms=array("Ana","Berta","Borta","Bibi","Beronica","Bebesita");

$q = $_REQUEST["q"];
$resultat= "";

if ($q !== "") {
	
	$q=strtoupper($q);
	$lnom=strlen($q);

	foreach ($noms as $element) {
		if($q == strtoupper(substr($element, 0,$lnom))){
			if($resultat==""){
				$resultat=$element;
			}
			else{
				$resultat .= ", $element";
			}
		}
	}
}

if($resultat===""){echo "Res de res";}
else{echo $resultat;}
?>