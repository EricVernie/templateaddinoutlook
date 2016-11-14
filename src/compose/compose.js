(function () {
    'use script';
    Office.initialize = function(reason) {
        $(document).ready(function () {
                $('#set-subject').click(setBodyAndSubject);
        });
    };
    function setBodyAndSubject() {
        debugger
        var item=Office.context.mailbox.item;
        item.subject.setAsync("New mail")
        var userProfile=Office.context.mailbox.userProfile;        
        var body = item.body;
        var userProfileToDisplay = "<p>" + userProfile.displayName + "</p>" + 
                                   "<p>" + userProfile.emailAddress + "</p>" +
                                   "<p>" + userProfile.timeZone;
        
        body.prependAsync("<b>Hello</b><p></p>" + userProfileToDisplay, {coercionType:Office.CoercionType.Html});
         
	}
})();