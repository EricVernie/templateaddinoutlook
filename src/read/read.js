(function () {
    'use script';
    Office.initialize = function(reason) {
        $(document).ready(function () {
                displayItemDetails();
        });
    };
     function displayItemDetails() {
        debugger
        var item=Office.context.mailbox.item;        
        $('#subject').text(item.subject);
     }     
})();