(function () {
    'use script';
    Office.initialize = function(reason) {
        $(document).ready(function () {
                putItemDetails();
        });
    };
     function putItemDetails() {
        var item = Office.cast.item.toItemCompose(Office.context.mailbox.item);
        item.subject="Demo addin";
     }
     
})();