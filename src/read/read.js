(function () {
    'use script';
    Office.initialize = function(reason) {
        $(document).ready(function () {
                displayItemDetails();
        });
    };
     function displayItemDetails() {
        var item = Office.cast.item.toItemRead(Office.context.mailbox.item);
        $('#subject').text(item.subject);
     }
     
})();