(function () {
    'use script';
    Office.initialize = function(reason) {
        $(document).ready(function () {
                $('#set-subject').click(setBodyAndSubject);
                $("#get-data").click(getData);
        });
    };
    function setBodyAndSubject() {
        debugger
        var item=Office.cast.item.toItemCompose(Office.context.mailbox.item);
        item.subject.setAsync("New mail")
        var userProfile=Office.context.mailbox.userProfile;        
        var body = item.body;
        var userProfileToDisplay = "<p>" + userProfile.displayName + "</p>" + 
                                   "<p>" + userProfile.emailAddress + "</p>" +
                                   "<p>" + userProfile.timeZone;
        
        body.prependAsync("<b>Hello</b><p></p>" + userProfileToDisplay, {coercionType:Office.CoercionType.Html});
         
	}

    function getData() {   
        debugger     
        $.ajax({
            type:"GET",
            url:"https://localhost:44353/api/values",           

        }).done(function(response){
          debugger
            var items=response;
             $('#value1').text(items[0]);
             $('#value2').text(items[1]);
        }).fail(function(error){
            debugger
            console.log(error.statusText);
        });
    }
})();