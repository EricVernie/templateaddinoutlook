(function () {
    'use script';
    Office.initialize = function(reason) {
        $(document).ready(function () {
                $('#set-subject').click(setSubject);
        });
    };
    function setSubject() {
		Office.cast.item.toItemCompose(Office.context.mailbox.item).subject.setAsync("Hello world!");
	}
})();