//INITIALISATION 
function initialisation()
{
	
	//get_debut_interview:
	var currentTime = new Date()
	var day = currentTime.getDate()
	var mths = currentTime.getMonth()
	var hrs=currentTime.getHours()
	var min = currentTime.getMinutes()
	$("#debut").val( day + "/" + mths + " "+ hrs + ":" + min )
	
	$('#identifiant').focus();
	//$.ajax("date_interview.php", {
	//	"type": "GET",
	//	"dataType": "text"
	//}).done( function(txt) {
	//	$("#debut").val(txt);
	//}); 
	
}
//fonction pour avoir la fin de l'interview:
function get_fin_interview ()
{
	var currentTime = new Date()
	var day = currentTime.getDate()
	var mths = currentTime.getMonth()
	var hrs=currentTime.getHours()
	var min = currentTime.getMinutes()
	$("#fin").val( day + "/" + mths + " "+ hrs + ":" + min )
	
	//$.ajax("date_interview.php", {
	//	"type": "GET",
	//	"dataType": "text"
	//}).done( function(txt) {
	//	$("#fin").val(txt);
	//});
}
//POUR VIDER LE FORMULAIRE:
function vider() 
{
	$('form').trigger('reset');
	
	var currentTime = new Date()
	var day = currentTime.getDate()
	var mths = currentTime.getMonth()
	var hrs=currentTime.getHours()
	var min = currentTime.getMinutes()
	$("#debut").val( day + "/" + mths + " "+ hrs + ":" + min )
	$("#debut").val(txt);
		$("#identifiant").focus();
		$('#idfreqB3').prop('disabled',false).removeClass('ui-disabled');
		$('#id_act1213').val('');
		$( "#id_act1213" ).selectmenu( "refresh" );
		$('#id_actpr1213').html('');
		$('#id_actpr1213').val('');
		$( "#id_actpr1213" ).selectmenu( "refresh" );
	
	//$.ajax("date_interview.php", {
	//	"type": "GET",
	//	"dataType": "text"
	//}).done( function(txt) {
	//	$("#debut").val(txt);
	//	$("#identifiant").focus();
	//	$('#idfreqB3').prop('disabled',false).removeClass('ui-disabled');
	//	$('#id_act1213').val('');
	//	$( "#id_act1213" ).selectmenu( "refresh" );
	//	$('#id_actpr1213').html('');
	//	$('#id_actpr1213').val('');
	//	$( "#id_actpr1213" ).selectmenu( "refresh" );
	//});
}
//SAUTS automatique:
function next(nom,target,longueur)
{
	var myname=document.getElementsByName(nom)[0].value;
	if ( myname.length==longueur-1 ) {
		$('#'+target).focus();
	}
}
//LES SAUTS SPECIAUX: (tsy mandeha mila jerena)
// set focus after change in select tag jQuery
function saut_C9()
{
	$('#idperiode_repos').focus();
}

function saut_B2()
{
	$('#idB3').focus();
}
function saut_B3()
{
    //var code=document.forms[0].elements["B3"].options[document.forms[0].elements["B3"].selectedIndex].value
    var code=$( "#idB3 option:selected" ).val();
    console.log(code);
	if ( code=="1" ){
        //document.forms[0].elements["fonction_cm"].focus();
        $('#fonction_cm').focus();
        $( "#idfreqB3" ).val('');
        $('#idfreqB3').prop('disabled',true).addClass('ui-disabled');
        $( "#idfreqB3" ).selectmenu( "refresh" );
    } else {	
    	 $('#idfreqB3').prop('disabled',false).removeClass('ui-disabled');
    	 $( "#idfreqB3" ).selectmenu( "refresh" );
    	 
    }
}
function saut_B4()
{
    //var code=document.forms[0].elements["frequence_B3"].options[document.forms[0].elements["frequence_B3"].selectedIndex].value
    var code=$('#frequence_B3 option:selected').val();
    if ( code=="1" ){
        //document.forms[0].elements["fonction_cm"].focus();
        $('#fonction_cm').focus();
        
    } 
    if ( code=="2" ) {
    	window.location.assign("#page_8");    	
    }
}
function saut_C2() {
	$('#id_carte_stat').focus();
}
function saut_C21()
{
	//var code=document.forms[0].elements["carte_stat"].options[document.forms[0].elements["carte_stat"].selectedIndex].value
	var code = $('#id_carte_stat option:selected').val();
	if (code=="1") {
        $('#numcart').prop('disabled',false).removeClass('ui-disabled');	
        $('#numcart').focus();
	} else {
		$( "#numcart" ).val('');
		$('#numcart').prop('disabled',true).addClass('ui-disabled');
		$('#idnif').focus();
	}
}
function saut_C3()
{
	//var code=document.forms[0].elements["si_a_emploi"].options[document.forms[0].elements["si_a_emploi"].selectedIndex].value
	var code = $('#idsi_a_emploi option:selected').val();
	if (code=="2") {
		$('#emploi_input').val('');
		$('#emploi_input').prop('disabled',true).addClass('ui-disabled');		
		$('#idfonctionph1').val('');
		$('#idfonctionph1').prop('disabled',true).addClass('ui-disabled');
		$('#idfonctionph2').val('');
		$('#idfonctionph2').prop('disabled',true).addClass('ui-disabled');
		$('#idfonctionph3').val('');
		$('#idfonctionph3').prop('disabled',true).addClass('ui-disabled');		
		$('#idfonctionpf1').val('');
		$('#idfonctionpf1').prop('disabled',true).addClass('ui-disabled');
		$('#idfonctionpf2').val('');
		$('#idfonctionpf2').prop('disabled',true).addClass('ui-disabled');
		$('#idfonctionpf3').val('');
		$('#idfonctionpf3').prop('disabled',true).addClass('ui-disabled');		
		$('#idfonctionnph1').val('');
		$('#idfonctionnph1').prop('disabled',true).addClass('ui-disabled');
		$('#idfonctionnph2').val('');
		$('#idfonctionnph2').prop('disabled',true).addClass('ui-disabled');
		$('#idfonctionnph3').val('');
		$('#idfonctionnph3').prop('disabled',true).addClass('ui-disabled');		
		$('#idfonctionnpf1').val('');
		$('#idfonctionnpf1').prop('disabled',true).addClass('ui-disabled');
		$('#idfonctionnpf2').val('');
		$('#idfonctionnpf2').prop('disabled',true).addClass('ui-disabled');
		$('#idfonctionnpf3').val('');
		$('#idfonctionnpf3').prop('disabled',true).addClass('ui-disabled');
		
		//
		$('#idnbph1').val('');
		$('#idnbph1').prop('disabled',true).addClass('ui-disabled');
		$('#idnbph2').val('');
		$('#idnbph2').prop('disabled',true).addClass('ui-disabled');
		$('#idnbph3').val('');
		$('#idnbph3').prop('disabled',true).addClass('ui-disabled');
		
		$('#idnbpf1').val('');
		$('#idnbpf1').prop('disabled',true).addClass('ui-disabled');
		$('#idnbpf2').val('');
		$('#idnbpf2').prop('disabled',true).addClass('ui-disabled');
		$('#idnbpf3').val('');
		$('#idnbpf3').prop('disabled',true).addClass('ui-disabled');
		
		
		
		
		$('#idnbnph1').val('');
		$('#idnbnph1').prop('disabled',true).addClass('ui-disabled');
		$('#idnbnph2').val('');
		$('#idnbnph2').prop('disabled',true).addClass('ui-disabled');
		$('#idnbnph3').val('');
		$('#idnbnph3').prop('disabled',true).addClass('ui-disabled');
		
		$('#idnbnpf1').val('');
		$('#idnbnpf1').prop('disabled',true).addClass('ui-disabled');
		$('#idnbnpf2').val('');
		$('#idnbnpf2').prop('disabled',true).addClass('ui-disabled');
		$('#idnbnpf3').val('');
		$('#idnbnpf3').prop('disabled',true).addClass('ui-disabled');
		$('#idnbannee').focus();
    }	else {
    	$('#emploi_input').prop('disabled',false).removeClass('ui-disabled');
    	$('#emploi_input').val('');
    	
    	$('#idfonctionph1').val('');
		$('#idfonctionph1').prop('disabled',false).removeClass('ui-disabled');
		$('#idfonctionph2').val('');
		$('#idfonctionph2').prop('disabled',false).removeClass('ui-disabled');
		$('#idfonctionph3').val('');
		$('#idfonctionph3').prop('disabled',false).removeClass('ui-disabled');
    	
		$('#idfonctionpf1').val('');
		$('#idfonctionpf1').prop('disabled',false).removeClass('ui-disabled');
		$('#idfonctionpf2').val('');
		$('#idfonctionpf2').prop('disabled',false).removeClass('ui-disabled');
		$('#idfonctionpf3').val('');
		$('#idfonctionpf3').prop('disabled',false).removeClass('ui-disabled');		
		$('#idfonctionnph1').val('');
		$('#idfonctionnph1').prop('disabled',false).removeClass('ui-disabled');
		$('#idfonctionnph2').val('');
		$('#idfonctionnph2').prop('disabled',false).removeClass('ui-disabled');
		$('#idfonctionnph3').val('');
		$('#idfonctionnph3').prop('disabled',false).removeClass('ui-disabled');   	
		$('#idfonctionnpf1').val('');
		$('#idfonctionnpf1').prop('disabled',false).removeClass('ui-disabled');
		$('#idfonctionnpf2').val('');
		$('#idfonctionnpf2').prop('disabled',false).removeClass('ui-disabled');
		$('#idfonctionnpf3').val('');
		$('#idfonctionnpf3').prop('disabled',false).removeClass('ui-disabled');		
		//
		$('#idnbph1').val('');
		$('#idnbph1').prop('disabled',false).removeClass('ui-disabled');
		$('#idnbph2').val('');
		$('#idnbph2').prop('disabled',false).removeClass('ui-disabled');
		$('#idnbph3').val('');
		$('#idnbph3').prop('disabled',false).removeClass('ui-disabled');    	
		$('#idnbpf1').val('');
		$('#idnbpf1').prop('disabled',false).removeClass('ui-disabled');
		$('#idnbpf2').val('');
		$('#idnbpf2').prop('disabled',false).removeClass('ui-disabled');
		$('#idnbpf3').val('');
		$('#idnbpf3').prop('disabled',false).removeClass('ui-disabled');
		
		
		$('#idnbnph1').val('');
		$('#idnbnph1').prop('disabled',false).removeClass('ui-disabled');
		$('#idnbnph2').val('');
		$('#idnbnph2').prop('disabled',false).removeClass('ui-disabled');
		$('#idnbnph3').val('');
		$('#idnbnph3').prop('disabled',false).removeClass('ui-disabled');
    	
		$('#idnbnpf1').val('');
		$('#idnbnpf1').prop('disabled',false).removeClass('ui-disabled');
		$('#idnbnpf2').val('');
		$('#idnbnpf2').prop('disabled',false).removeClass('ui-disabled');
		$('#idnbnpf3').val('');
		$('#idnbnpf3').prop('disabled',false).removeClass('ui-disabled');
        $('#emploi_input').focus();
    }
}
function saut_C4() 
{
	 var obj=document.getElementById("numcart").value;
	
	 if (obj.length=="17" ) {
		$('#idnif').focus();
	 } 
}
function saut_E1()
{
$('#id_agri_e1').focus();	
}
//Changement d'Etat du formulaire selon proprietaire/Employe:
function fonct()
{
	//var code=document.forms[0].elements["fonction_cm"].options[document.forms[0].elements["fonction_cm"].selectedIndex].value
	var code=$( "#idfonction option:selected" ).val();
	console.log(code);
	if ( code!="1" ) {
	    $('#myfont').html('MODULE C: EXPLOITANT MINIER EMPLOYE');
		$('#c7').html( 'C7. Differents types de produits miniers extraits par le site où vous êtes employes  par ordre de priorité? : ' );
		$('#libelle_calendrier').html("C9. CALENDRIER ANNUEL DE VOS ACTIVITES EN TANT QU'EMPLOYE DU SITE D'EXPLOITATION MINIER:");
		$('#c14').html('C14. Votre salaire moyen hebdomadaire:');
		$('#idpg7').attr('href','#page_9');
		$('#idpg7').html('Module E: LES ACTIVITES AUTRES QUE MINIERES');
		$('#idwage').val('')
		$('#libelle_wage').show()
		$('#si_exploitant').hide();
		$('#si_employe').hide();
		$('#id_enreg').closest('.ui-btn').hide();
		$('#emploi_input').closest('.ui-btn').hide();
		$('#idh_input').closest('.ui-btn').hide();
		$('#idf_input').closest('.ui-btn').hide();
		$('#id_carte_stat').closest('.ui-btn').hide();
		$('#idsi_a_emploi').closest('.ui-btn').hide();
		$('#id_enreg').closest('.ui-btn').hide();
		$('#c15_input').closest('.ui-btn').hide();
		$('#c16_input').closest('.ui-btn').hide();
		$('#id_enreg').closest('.ui-btn').hide();
	} else {
		$('#myfont').html('MODULE C : PROPRIETAIRE EXPLOITANT MINIER');
		$('#libelle_calendrier').html("C9. CALENDRIER ANNUEL DE VOTRE SITE D'EXPLOITATION MINIER:");
		$('#c14').html("C14. Salaire moyen hebdomadaire d'un ouvrier:");
		$('#c15').html('C15. Taxes et impôts:');
		$('#idpg7').attr('href','#page_6');
		$('#idpg7').html('Module C: Achats de biens durables');
		$('#idwage').val('')
		$('#libelle_wage').hide()			
		$('#si_employe').show();		
		$('#si_exploitant').show();
		$('#id_enreg').closest('.ui-btn').show();
		$('#emploi_input').closest('.ui-btn').show();
		$('#idh_input').closest('.ui-btn').show();
		$('#idf_input').closest('.ui-btn').show();
		$('#id_carte_stat').closest('.ui-btn').show();
		$('#idsi_a_emploi').closest('.ui-btn').show();
		$('#id_enreg').closest('.ui-btn').show();
		$('#c15_input').closest('.ui-btn').show();
		$('#c16_input').closest('.ui-btn').show();
		$('#id_enreg').closest('.ui-btn').show();
	}
	//vider();
	window.location.assign("#page_3");
	
}
//
function saut_fonction()
{
    //var code=document.forms[0].elements["fonction_cm"].options[document.forms[0].elements["fonction_cm"].selectedIndex].value
    var code=$( "#fonction_cm option:selected" ).val();
    if ( code=="2" ){
    	suivant()
        //document.forms[0].elements["region_site2"].focus();
        $('#region_site2').focus();
        
    } else {
    	//document.forms[0].elements["region_site"].focus();
    	$('#region_site').focus();
    }
}
// empeche la saisie de caractere non-numerique:
function prevent_caract(event,id) {
	if ( event.which>64 && event.which <91 ) {
		$('#' + id).val("");	
	}
}
// empeche la saisie de caractere numérique
function prevent_num(event,id) {
	if ( (event.which>48 && event.which <58) || (event.which>96 && event.which <106)  ) {
		$('#'+ id ).val("");
		
	} 
}

// VERIFICATION COTE SERVEUR PAR AJAX DES DOUBLONS:
function verif () {
	
	// $.ajax("verification.php", {
	// 	"type":"POST",
	// 	"data": { "valeur": $('#identifiant').val() },
	// 	"dataType":"json"
	// }).done(function(obj) {
	// 	if ( obj.success==true ) {
	// 		console.log("SUCCES AUCUN ENREGISTREMENT TROUVE");
	// 	} else {
	// 		alert("DOUBLON ou FORMAT INVALIDE!");
	// 		vider();
	// 	}
	// }).fail( function(jqXHR,textStatus,errorThrown) {
	// 	alert("Mode hors connexion!");
	// }).always(function(jqXHR,textStatus) {
	// 	console.log("fin de l'execution");
		
	// });

}

//VERIFICATION COTE SERVEUR SI NUMERIQUE VALIDE
function verif_num3(nom,long_min)
{
	
	// var code=document.getElementsByName(nom)[0].value;
	// console.log(code);
 //    $.ajax("verif_num.php", {
	// 	"type":"POST",
	// 	"data": { "valeur": code, "longueur": long_min },
	// 	"dataType":"json"
	// }).done(function(obj) {
	// 	if ( obj.success==true) {
	// 		console.log("VALIDE");
	// 		document.forms[0].elements[nom].style.backgroundColor = "white"; 
	// 	} else {
	// 		alert("Veuillez entrer pour cette variable un nombre de " + long_min + " chiffres minimum.");
	// 		document.forms[0].elements[nom].style.backgroundColor = "red";
	// 	}
	// }).fail( function(jqXHR,textStatus,errorThrown) {
	// 	alert("Erreur");
	// }).always(function(jqXHR,textStatus) {
	// 	console.log("fin du test");
		
	// });
    
 
}

function verif_num(nom)
{
    var code=document.getElementsByName(nom)[0].value;
        
    if ((isNaN(code))) {
        alert("Veuillez entrer pour cette variable un nombre entier de trois caractères maximum.");
        document.forms[0].elements[nom].focus();
        document.forms[0].elements[nom].style.backgroundColor = "red";        
    }
    else {
        document.forms[0].elements[nom].style.backgroundColor = "white";        
    }
}

//
function update_B2()
{ 
	$('#id_actpr1213').html('');
	$('#id_actpr1213').val('');
	$( "#id_actpr1213" ).selectmenu( "refresh" );
	var code=$('#id_act1213').val();
	var html=[];
	var j = 0;
	html[j++]='<option value="" selected></option>';  
	for ( var i=1;i<=8; i++) {
		if ( code[i] != null ) {
		   html[j++]='<option value=' + code[i] + '>' + code[i] + '</option>';     
	    }
		
	}
	
	$('#id_actpr1213').append( html.join('') );
}


// update values of some table in index.html:
function update_C8 () {
	var code=$('#idprod').val();
	var valeur=[];
	j=0;
	for ( var i=1;i<=8; i++) {
		if ( code[i] != null ) {
		   valeur[j++]=code[i];     
	    }
	}
	while ( j!=6 ) {    
		    $('#idqp' + j ).text('');
		    $('#idxt' + j + '_max' ).text('');
		    $('#idxt' + j + '_min' ).text('');
		    j++ ;
	}    
		
	j=1;
	for ( var i in valeur ) {    
		    $('#idqp' + j ).text(valeur[i]);
		    $('#idxt' + j + '_max' ).text(valeur[i]);
		    $('#idxt' + j + '_min' ).text(valeur[i]);
		    j++ ;
	}

	//$.ajax("change_val.php", {
	//	"type":"POST",
	//	"data": { "valeur": valeur},
	//	"dataType":"json"
	//}).done(function(data) {
	//	j=1;
	//	while ( j!=6 ) {    
	//	    $('#idqp' + j ).val('');
	//	    $('#idxt' + j + '_max' ).val('');
	//	    $('#idxt' + j + '_min' ).val('');
	//	    j++ ;
		//}    
		//j=1;
		//for ( var i in data ) {    
		//    $('#idqp' + j ).val(data[i]);
	//	    $('#idxt' + j + '_max' ).val(data[i]);
	//	    $('#idxt' + j + '_min' ).val(data[i]);
	//	    j++ ;
	//	}
	//}).fail( function(jqXHR,textStatus,errorThrown) {
	//	console.log("Echec ");
	//}).always(function(jqXHR,textStatus) {
	//	console.log("Fin");
		
	//});
}
//
var counter_ph=4;
var counter_pf=4;
var counter_nph=4;
var counter_npf=4;
////////////////////AJOUTE///////////
function ajoute(type) {
if ( type=="ph") {
	//counter= counter_ph;
	var myel = "<tr> <td><input id='idfonction" + type + counter_ph ;
	myel = myel + "' name='fonction" + type + counter_ph ;
	myel = myel + "' type='text' /></td><td><input id='idnbph" + counter_ph ;
	myel = myel + "' name='nb" + type + counter_ph ;
	myel = myel + "' type='number'/></td> </tr>" ;
    $( "#table_ph" ).append( myel);
    var k = type + counter_ph;
    //add variable in database:
    //$.ajax("add_var.php", {
	//	"type":"POST",
	//	"data": { "valeur": k },
	//	"dataType":"json"
	//}).done(function(obj) {
      // if ( obj.success==true ) {
    	//   alert('Ajouté dans la base!');
     //  }
	//}).fail( function(jqXHR,textStatus,errorThrown) {
	//	alert("Echec de l'insertion dans la base");
	//}).always(function(jqXHR,textStatus) {
	//	console.log("Fin");
		
	//});
    counter_ph++;
}
if ( type=="pf") {
	
	var myel = "<tr> <td><input id='idfonction" + type + counter_pf ;
	myel = myel + "' name='fonction" + type + counter_pf ;
	myel = myel + "' type='text' /></td><td><input id='idnbph" + counter_pf ;
	myel = myel + "' name='nb" + type + counter_pf ;
	myel = myel + "' type='number'/></td> </tr>" ;
    $( "#table_pf" ).append( myel);
    var k = type + counter_pf;
    
  //add variable in database:
    //$.ajax("add_var.php", {
	//	"type":"POST",
	//	"data": { "valeur": k },
	//	"dataType":"json"
	//}).done(function(obj) {
     //  if ( obj.success==true ) {
    //	   alert('Ajouté dans la base!');
     //  }
	//}).fail( function(jqXHR,textStatus,errorThrown) {
	//	alert("Echec de l'insertion dans la base");
	//}).always(function(jqXHR,textStatus) {
	//	console.log("Fin");
		
	//});
    counter_pf++;
}
if ( type=="nph") {
	
	var myel = "<tr> <td><input id='idfonction" + type + counter_nph ;
	myel = myel + "' name='fonction" + type + counter_nph ;
	myel = myel + "' type='text' /></td><td><input id='idnbph" + counter_nph ;
	myel = myel + "' name='nb" + type + counter_nph ;
	myel = myel + "' type='number'/></td> </tr>" ;
    $( "#table_nph" ).append( myel);
    var k = type + counter_nph;
  //add variable in database:
    //$.ajax("add_var.php", {
	//	"type":"POST",
	//	"data": { "valeur": k },
	//	"dataType":"json"
	//}).done(function(obj) {
    //   if ( obj.success) {
    //	   alert('Ajouté dans la base!');
    //   }
	//}).fail( function(jqXHR,textStatus,errorThrown) {
	//	alert("Echec de l'insertion dans la base");
	//}).always(function(jqXHR,textStatus) {
	//	console.log("Fin");
		
	//});
    counter_nph++;
}
if ( type=="npf") {
	
	var myel = "<tr> <td><input id='idfonction" + type + counter_npf ;
	myel = myel + "' name='fonction" + type + counter_npf ;
	myel = myel + "' type='text' /></td><td><input id='idnbph" + counter_npf ;
	myel = myel + "' name='nb" + type + counter_npf ;
	myel = myel + "' type='number'/></td> </tr>" ;
    $( "#table_npf" ).append( myel);
    var k = type + counter_npf;
  //add variable in database:
   // $.ajax("add_var.php", {
	//	"type":"POST",
	//	"data": { "valeur": k },
	//	"dataType":"json"
	//}).done(function(obj) {
    //   if ( obj.success) {
    //	   alert('Ajouté dans la base!');
     //  }
	//}).fail( function(jqXHR,textStatus,errorThrown) {
	//	alert("Echec de l'insertion dans la base");
	//}).always(function(jqXHR,textStatus) {
	//	console.log("Fin");
		
	//});
    counter_npf++;
}
}
