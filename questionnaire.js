////////////////useful methods:
//

// a[1].value
//////////////////////////////////////////////
//declare a collection (~database) to store data:
Mydata= new Meteor.Collection('mydata');
//Mesproduits = new Meteor.Collection('mesproduits');

 //Meteor.methods ({
 //asory: function() {
  // Mesproduits.remove({});
 //}
//});

if (Meteor.isClient) {
 
  //Template.insertion.mesproduits = function() {
   //return Mesproduits.find(); 
  //};
 
  // Template.insertion.events ({
    
  //   'click .suivant' : function () {
  //     //events.preventDefault();
  //   if ( Mesproduits.find().count() === 0 ) {
  //   Mesproduits.insert ({
  //     chosenprod1: $('#idprod').val()[1],
  //     chosenprod2: $('#idprod').val()[2],
  //     chosenprod3: $('#idprod').val()[3],
  //     chosenprod4: $('#idprod').val()[4],
  //     chosenprod5: $('#idprod').val()[5],
  //     chosenprod6: $('#idprod').val()[6]

  //   });
  // } else {
  //   //remove all documents inside Mesproduits collection
  //   //then update:
  //   Meteor.call('asory');
  //   Mesproduits.insert ({
  //     chosenprod1: $('#idprod').val()[1],
  //     chosenprod2: $('#idprod').val()[2],
  //     chosenprod3: $('#idprod').val()[3],
  //     chosenprod4: $('#idprod').val()[4],
  //     chosenprod5: $('#idprod').val()[5],
  //     chosenprod6: $('#idprod').val()[6]

  //   });
  // } 
  // }
  // //end of the function
  // });
//For a given array and key, find index of "val" in this key:
function getArrayIndexWithKey(arr, key, val){
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i][key] == val)
            return i;
    }
    return -1;
}
  Template.insertion.events ({
    //each time user press the key on an input field
    // the input field is selected stored in x
    //then form is serialized
    //and if maxlength is reached, cursor is moved
    //to the next field by automatically finding the next
    //input field
    'keypress input': function(e)  {
      var x=e.target
      var a=$('#myform').serializeArray();
      
     if ( $('#' + x.id).attr('maxlength') && parseInt($('#' + x.id).attr('maxlength'))-1== $('#' + x.id).val().length ) 
     {
         var next = getArrayIndexWithKey(a,"name",x.id) + 1
         console.log(a[next].name);
         //e.preventDefault();
         $('#' + a[next].name ).focus();
     }
   },

   'click  .submit': function () {
   //events.preventDefault();
    Mydata.insert({
      identifiant: $('#identifiant').val(),
      nom_prenomCM: $('#nom_prenom_CM').val(),
      adresse: $('#adresse').val(),
      localisation: $('#localisation').val(),
      region: $('#region').val(),
      district: $('#district').val(),
      commune: $('#commune').val(),
      fokontany: $('#fokontany').val(),
      numtel: $('#numtel').val(),

      np1: $('#np1').val(),
      age1:$('#age1').val(),
      sexe1:$('#sexe1').val(),
      mine1:$('#mine1').val(),
      employeur1:$('#employeur1').val(),
      actpr1:$('#actpr1').val(),

      np2: $('#np2').val(),
      age2:$('#age2').val(),
      sexe2:$('#sexe2').val(),
      mine2:$('#mine2').val(),
      employeur2:$('#employeur2').val(),
      actpr2:$('#actpr2').val(),

      np3: $('#np3').val(),
      age3:$('#age3').val(),
      sexe3:$('#sexe3').val(),
      mine3:$('#mine3').val(),
      employeur3:$('#employeur3').val(),
      actpr3:$('#actpr3').val(),

      np4: $('#np4').val(),
      age4:$('#age4').val(),
      sexe4:$('#sexe4').val(),
      mine4:$('#mine4').val(),
      employeur4:$('#employeur4').val(),
      actpr4:$('#actpr4').val(),

      np5: $('#np5').val(),
      age5:$('#age5').val(),
      sexe5:$('#sexe5').val(),
      mine5:$('#mine5').val(),
      employeur5:$('#employeur5').val(),
      actpr5:$('#actpr5').val(),

      np6: $('#np6').val(),
      age6:$('#age6').val(),
      sexe6:$('#sexe6').val(),
      mine6:$('#mine6').val(),
      employeur6:$('#employeur6').val(),
      actpr6:$('#actpr6').val(),

      np7: $('#np7').val(),
      age7:$('#age7').val(),
      sexe7:$('#sexe7').val(),
      mine7:$('#mine7').val(),
      employeur7:$('#employeur7').val(),
      actpr7:$('#actpr7').val(),

      np8: $('#np8').val(),
      age8:$('#age8').val(),
      sexe8:$('#sexe8').val(),
      mine8:$('#mine8').val(),
      employeur8:$('#employeur8').val(),
      actpr8:$('#actpr8').val(),

      np9: $('#np9').val(),
      age9:$('#age9').val(),
      sexe9:$('#sexe9').val(),
      mine9:$('#mine9').val(),
      employeur9:$('#employeur9').val(),
      actpr9:$('#actpr9').val(),

      np10: $('#np10').val(),
      age10:$('#age10').val(),
      sexe10:$('#sexe10').val(),
      mine10:$('#mine10').val(),
      employeur10:$('#employeur10').val(),
      actpr10:$('#actpr10').val(),

      activite1213_1: $('#id_act1213').val()[1],
      activite1213_2: $('#id_act1213').val()[2],
      activite1213_3: $('#id_act1213').val()[3],
      activite1213_4: $('#id_act1213').val()[4],
      activite1213_5: $('#id_act1213').val()[5], 
      activite1213_6: $('#id_act1213').val()[6], 
      activite1213_7: $('#id_act1213').val()[7], 
      activite1213_8: $('#id_act1213').val()[8],
      actpr: $('#id_actpr1213').val(), 
      activite_miniere: $('#idB3 option:selected').text(), 
      freq_activite_miniere: $('#idfreqB3 option:selected').text(), 
      fonctionCM: $('#idfonction').val(),

      region_site: $('#idregion_site').val(), 
      district_site: $('#district_site').val(), 
      commune_site: $('#commune_site').val(), 
      fokontany_site: $('#fokontany_site').val(), 
      distance: $('#km_site').val(),
      enregistrement: $('#id_enreg').val(), 

      carte_stat: $('#id_carte_stat option:selected').text(), 
      carte_stat_num: $('#numcart').val(), 
      nif: $('#idnif').val(), 
      autre_renseignement: $('#id_autre_enreg').val(),
      si_a_emploi: $('#idsi_a_emploi').val(), 
      exploitant: $('#emploi_input').val(), 
      nbph1: $('#idnbph1').val(), 
      nbph2: $('#idnbph2').val(), 
      nbph3: $('#idnbph3').val(), 
      nbpf1: $('#idnbpf1').val(), 
      nbpf2: $('#idnbpf2').val(),
      nbpf3: $('#idnbpf3').val(),
      nbnph1: $('#idnbnph1').val(), 
      nbnph2: $('#idnbnph2').val(), 
      nbnph3: $('#idnbnph3').val(), 
      nbnpf1: $('#idnbnpf1').val(), 
      nbnpf2: $('#idnbnpf2').val(), 
      nbnpf3 : $('#idnbnpf3').val(), 
      fonctionph1: $('#idfonctionph1').val(), 
      fonctionph2: $('#idfonctionph2').val(),
      fonctionph3: $('#idfonctionph3').val(), 
      fonctionpf1: $('#idfonctionpf1').val(), 
      fonctionpf2: $('#idfonctionpf2').val(), 
      fonctionpf3: $('#idfonctionpf3').val(), 
      fonctionnph1: $('#idfonctionnph1').val(), 
      fonctionnph2: $('#idfonctionnph2').val(),
      fonctionnph3: $('#idfonctionnph3').val(), 
      fonctionnpf1: $('#idfonctionnpf1').val(), 
      fonctionnpf2: $('#idfonctionnpf2').val(), 
      fonctionnpf3: $('#idfonctionnpf3').val(),
      nbannee: $('#idnbannee').val(), 
      C71: $('#idprod').val()[1], 
      C72: $('#idprod').val()[2], 
      C73: $('#idprod').val()[3], 
      C74: $('#idprod').val()[4], 
      C75: $('#idprod').val()[5], 
      C76: $('#idprod').val()[6],
      qtxt1: $('#idqprod1').val(), 
      umxt1: $('#id_um_xt1').val(), 
      umxt1_kg: $('#idqprod1_kg').val(), 
      qtotxt1: $('#idqt1').val(), 
      qtxt2: $('#idqprod2').val(), 
      umxt2: $('id_um_xt2').val(), 
      umxt2_kg: $('#idprod2_kg').val(), 
      qtotxt2: $('#idqt2').val(), 
      qtxt3: $('#idqprod3').val(), 
      umxt3: $('#idqprod3').val(), 
      umxt3_kg: $('#id_um_xt3').val(), 
      qtotxt3: $('#idqprod3_kg').val(),
      qtxt4: $('#idqprod4').val(), 
      umxt4: $('#id_um_xt4').val(), 
      umxt4_kg: $('#idqprod4_kg').val(), 
      qtotxt4: $('#idqt4').val(), 
      qtxt5: $('#idqprod5').val(), 
      umxt5: $('#id_um_xt5').val(), 
      umxt5_kg: $('#idqprod5_kg').val(), 
      qtotxt5: $('#idqt5').val(), 
      qtxt6: $('#idqprod6').val(), 
      umxt6: $('#id_um_xt6').val(), 
      umxt6_kg: $('#idqprod6_kg').val(), 
      qtotxt6: $('#idqt6').val(),
      type_produit1: $('#idtype_produit1').val(), 
      type_produit2: $('#idtype_produit2').val(), 
      type_produit3: $('#idtype_produit3').val(), 
      type_produit4: $('#idtype_produit4').val(), 
      type_produit5: $('#idtype_produit5').val(), 
      type_produit6: $('#idtype_produit6').val(),
      qtite1_max: $('#idqtite1_max').val(), 
      unite1_max: $('#idunite1_max').val(), 
      p1_max: $('#idp1_max').val(), 
      qtite2_max: $('#idqtite2_max').val(), 
      unite2_max: $('#idunite2_max').val(), 
      p2_max: $('#idp2_max').val(), 
      qtite3_max: $('#idqtite3_max').val(), 
      unite3_max: $('#idunite3_max').val(), 
      p3_max: $('#idp3_max').val(),
      qtite4_max: $('#idqtite4_max').val(), 
      unite4_max: $('#idunite4_max').val(), 
      p4_max: $('#idp4_max').val(), 
      qtite5_max: $('#idqtite5_max').val(), 
      unite5_max: $('#idunite5_max').val(), 
      p5_max: $('#idp5_max').val(), 
      qtite6_max: $('#idqtite6_max').val(), 
      unite6_max: $('#idunite6_max').val(), 
      p6_max: $('#idp6_max').val(), 
      qtite1_min: $('#idqtite1_min').val(), 
      unite1_min: $('#idunite1_min').val(), 
      p1_min: $('#idp1_min').val(), 
      qtite2_min: $('#idqtite2_min').val(), 
      unite2_min: $('#idunite2_min').val(), 
      p2_min: $('#idp2_min').val(), 
      qtite3_min: $('#idqtite3_min').val(), 
      unite3_min: $('#idunite3_min').val(), 
      p3_min: $('#idp3_min').val(), 
      qtite4_min: $('#idqtite4_min').val(), 
      unite4_min: $('#idunite4_min').val(), 
      p4_min: $('#idp4_min').val(), 
      qtite5_min: $('#idqtite5_min').val(), 
      unite5_min: $('#idunite5_min').val(), 
      p5_min: $('#idp5_min').val(), 
      qtite6_min: $('#idqtite6_min').val(),
      unite6_min: $('#idunite6_min').val(), 
      p6_min: $('#idp6_min').val(),
      period_exploit1: $('#idperiode_exploit').val()[1],
      period_exploit2: $('#idperiode_exploit').val()[2], 
      period_exploit3: $('#idperiode_exploit').val()[3], 
      period_exploit4: $('#idperiode_exploit').val()[4], 
      period_exploit5: $('#idperiode_exploit').val()[5], 
      period_exploit6: $('#idperiode_exploit').val()[6],
      period_exploit7: $('#idperiode_exploit').val()[7], 
      period_exploit8: $('#idperiode_exploit').val()[8], 
      period_exploit9: $('#idperiode_exploit').val()[9], 
      period_exploit10: $('#idperiode_exploit').val()[10], 
      period_exploit11: $('#idperiode_exploit').val()[11], 
      period_exploit12: $('#idperiode_exploit').val()[12],
      period_repos1: $('#idperiode_repos').val()[1], 
      period_repos2: $('#idperiode_repos').val()[2], 
      period_repos3: $('#idperiode_repos').val()[3], 
      period_repos4: $('#idperiode_repos').val()[4], 
      period_repos5: $('#idperiode_repos').val()[5], 
      period_repos6: $('#idperiode_repos').val()[6], 
      period_repos7: $('#idperiode_repos').val()[7],
      period_repos8: $('#idperiode_repos').val()[8], 
      period_repos9: $('#idperiode_repos').val()[9], 
      period_repos10: $('#idperiode_repos').val()[10], 
      period_repos11: $('#idperiode_repos').val()[11], 
      period_repos12: $('#idperiode_repos').val()[12], 
      niv1: $('#idniv1').val(), 
      niv2: $('#idniv2').val(), 
      niv3: $('#idniv3').val(), 
      niv4: $('#idniv4').val(),
      niv5: $('#idniv5').val(), 
      niv6: $('#idniv6').val(), 
      niv7: $('#idniv7').val(), 
      niv8: $('#idniv8').val(), 
      niv9: $('#idniv9').val(), 
      niv10: $('#idniv10').val(), 
      nbjr_repos: $('#idnbjr').val(), 
      evo_prod: $('#id_evoprod').val(),
      ci_libelle1: $('#idlibelle1').val(), 
      ci_rplct1: $('#idrplct1').val(), 
      ci_unite1: $('#id_unite1').val(), 
      ci_pu1: $('#idpu1').val(), 
      ci_libelle2: $('#idlibelle2').val(), 
      ci_rplct2: $('#idrplct2').val(), 
      ci_unite2: $('#id_unite2').val(), 
      ci_pu2: $('#idpu2').val(), 
      ci_libelle3: $('#idlibelle3').val(),
      ci_rplct3: $('#idrplct3').val(), 
      ci_unite3: $('#id_unite3').val(),
      ci_pu3: $('#idpu3').val(), 
      ci_libelle4: $('#idlibelle4').val(), 
      ci_rplct4: $('#idrplct4').val(), 
      ci_unite4: $('#id_unite4').val(), 
      ci_pu4: $('#idpu4').val(), 
      ci_libelle5: $('#idlibelle5').val(), 
      ci_rplct5: $('#idrplct5').val(), 
      ci_unite5: $('#id_unite5').val(), 
      ci_pu5: $('#idpu5').val(),
      ci_libelle6: $('#idlibelle6').val(), 
      ci_rplct6: $('#idrplct6').val(),
      ci_unite6: $('#id_unite6').val(), 
      ci_pu6: $('#idpu6').val(), 
      inv_libelle1: $('#idc13_libelle1').val(), 
      inv_rplct1: $('#idc13_rplct1').val(), 
      inv_unite1: $('#idc13_unite1').val(), 
      inv_pu1: $('#idc13_pu1').val(), 
      inv_libelle2: $('#idc13_libelle2').val(), 
      inv_rplct2: $('#idc13_rplct2').val(), 
      inv_unite2: $('#idc13_unite2').val(),
      inv_pu2: $('#idc13_pu2').val(),
      inv_libelle3: $('#idc13_libelle3').val(), 
      inv_rplct3: $('#idc13_rplct3').val(), 
      inv_unite3: $('#idc13_unite3').val(), 
      inv_pu3: $('#idc13_pu3').val(), 
      inv_libelle4: $('#idc13_libelle4').val(), 
      inv_rplct4: $('#idc13_rplct4').val(), 
      inv_unite4: $('#idc13_unite4').val(), 
      inv_pu4: $('#idc13_pu4').val(), 
      inv_libelle5: $('#idc13_libelle5').val(),
      inv_rplct5: $('#idc13_rplct5').val(),
      inv_unite5: $('#idc13_unite5').val(), 
      inv_pu5: $('#idc13_pu5').val(), 
      inv_libelle6: $('#idc13_libelle6').val(), 
      inv_rplct6: $('#idc13_rplct6').val(), 
      inv_unite6: $('#idc13_unite6').val(), 
      inv_pu6: $('#idc13_pu6').val(), 
      salaire: $('#c14_input').val(), 
      taxe: $('#c15_input').val(), 
      autres: $('#c16_input').val(), 
      wage: $('#idwage').val(),
      autre_fonction: $('#id_autre_fonction').val(), 
      agri_e1: $('#id_agri_e1').val(), 
      agri_e2: $('#id_agri_e2').val(), 
      el_e1: $('#id_el_e1').val(), 
      el_e2: $('#id_el_e2').val(), 
      peche_e1: $('#id_peche_e1').val(), 
      peche_e2: $('#id_peche_e2').val(), 
      transp_e1: $('#id_transp_e1').val(), 
      transp_e2: $('#id_transp_e2').val(),
      art_e1: $('#id_art_e1').val(), 
      art_e2: $('#id_art_e2').val(), 
      cce_e1: $('#id_cce_e1').val(), 
      cce_e2: $('#id_cce_e2').val(), 
      libelle11: $('#idlibelle11').val(), 
      achat_e51: $('#id_achat_e51').val(), 
      e61: $('#id_e61').val(), 
      e71: $('#id_e71').val(), 
      libelle12: $('#idlibelle12').val(), 
      achat_e52: $('#id_achat_e52').val(), 
      e62: $('#id_e62').val(),
      e72: $('#id_e72').val(), 
      libelle13: $('#idlibelle13').val(), 
      achat_e53: $('#id_achat_e53').val(), 
      e63: $('#id_e63').val(), 
      e73: $('#id_e73').val(), 
      libelle14: $('#idlibelle14').val(), 
      achat_e54: $('#id_achat_e54').val(), 
      e64: $('#id_e64').val(), e74: $('#id_e74').val(), 
      libelle15: $('#idlibelle15').val(), 
      achat_e55: $('#id_achat_e55').val(), 
      e65: $('#id_e65').val(), 
      e75: $('#id_e75').val(),
      libelle16: $('#idlibelle16').val(), 
      achat_e56: $('#id_achat_e56').val(), 
      e66: $('#id_e66').val(), 
      e76: $('#id_e76').val(), 
      np_enqueteur: $('#mynpenq').val(), 
      np_superviseur: $('#mynpsup').val(), 
      debut_interview: $('#debut').val(), 
      fin_interview: $('#fin').val()
});
    
}
  });
  
  //initialization after page is rendered:
  Template.insertion.rendered = function() { 
  $('body').attr({
    onload: 'initialisation();'
  });
}
}

if (Meteor.isServer) {

 Meteor.startup ( function() {
 //Meteor.call('asory');
});
   // rules that must be satisfied before insertion is allowed
   Mydata.allow ({
     insert: function(userId, doc) {
          return doc.identifiant && (doc.identifiant.length === 12);
    }
    
   });
   
  }

