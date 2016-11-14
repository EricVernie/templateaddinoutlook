(function () {
    'use script';
    Office.initialize = function(reason) {
        $(document).ready(function () {
                displayItemDetails();
                $("#opendialog").click(openDialog);
        });
    };
     function displayItemDetails() {
        var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
        $('#subject').text(item.subject);
     }
     
     function openDialog() {
         var url = 'https://localhost:8443/dialog/popup.html';
         
          var dialogOptions = { width: 25, height: 25, displayInIframe: false};
  
            Office.context.ui.displayDialogAsync(url, dialogOptions, function(result) {
                // In the callback, save the dialog object
                dialog = result.value;
                
                // Add an event handler for messages sent via messageParent
                dialog.addEventHandler(Microsoft.Office.WebExtension.EventType.DialogMessageReceived, receiveMessage);
                // Add an event handler for events from the platform (like closing the dialog, etc.)
                dialog.addEventHandler(Microsoft.Office.WebExtension.EventType.DialogEventReceived, dialogClosed);
            });
     }
})();