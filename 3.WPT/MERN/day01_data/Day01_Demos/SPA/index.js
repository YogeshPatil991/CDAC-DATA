function LoadUI(uiName, idOfContainer)
{
   var refToContainer= document.getElementById(idOfContainer);
   var content = '';
    switch (uiName) {
        case 'home':
            content=Home();
            break;
        case 'about':
            var aboutObj = new About();
            content=aboutObj.render();
            break;
        case 'contact':
            content=Contact();
            break;
        default:
            break;
    }  
    refToContainer.innerHTML = content;

}