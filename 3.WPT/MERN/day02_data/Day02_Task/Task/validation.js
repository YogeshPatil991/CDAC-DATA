// "txtName", "errorDivForName", "Name is needed."
function ValidateEmpty(id,errorDivId,errorMessage)
{
   var reftoId=document.getElementById(id);
   var refTomyDiv=document.getElementById(errorDivId);

   if(reftoId.value==""){
        refTomyDiv.innerHTML=errorMessage;
   }
   else{
       refTomyDiv.innerHTML="";
   }

}