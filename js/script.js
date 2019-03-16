function scale(el){
	var idName = el.id;
	el.className = "active"+idName;
	var tailleContenu = el.children.length;
	el.children[2].className = "";
	el.children[1].className = "iconOff";
}


function retour(){
	for(var i = 1; i < 9; i++){
		var caseActive = document.getElementsByClassName('activec'+i);
		if((caseActive.length) == 1){
			for(var j = 1; j < ((caseActive)[0].children.length); j++){
			caseActive[0].children[2].className = "containerCase";
			caseActive[0].children[1].className = "icon";
		}
		(caseActive)[0].className = "case";
		}
	}
}


function changeClass(el){
	el.children[1].className = "text";
}
function initialClass(el){
	el.children[1].className = "noText";
}

function shake(el){

	
}


/*
var back = document.getElementsByClassName(/activec/g);
new regExp
VOIR METHACARACTERE POUR LE RETOUR !!!
*/



function ancre(el){
	var cible = ((el).innerHTML);
	console.log("cible = "+cible);

	var listePointeurs = document.getElementsByTagName("a");/*
	console.log((listePointeurs)[p].innerHTML);
	var pointeur = listePointeurs[p].innerHTML;
	console.log(pointeur);*/

	for(var p = 0; p < listePointeurs.length; p++) {
		var pointeur = listePointeurs[p].innerHTML;
			if(cible == pointeur){
				/*APPELER LA FONCTION RETOUR + OUVRIR LA DIV Où H1 = CIBLE*/
				console.log("Le pointeur N°"+[p+1]+" est "+pointeur);
				console.log((el));
				var testCase = document.getElementsClassName('case')[0];
				console.log((testCase)[0]);
			}
				else console.log("aieaieae");
		}
}










