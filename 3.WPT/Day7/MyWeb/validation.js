function CheckEmpty(id, errorDivId, erroMessage)
        {
            var refToControl = 
                    document.getElementById(id);
            var refToErrorControl = 
                    document.getElementById(errorDivId);

            if(refToControl.value=="")
            {
                refToErrorControl.innerText = erroMessage;
            }  
            else
            {
                refToErrorControl.innerText = "";
            }
        }