
Office.initialize = function () {
}


function getSubject(event) {
  var subject = Office.context.mailbox.item.subject;
  
  Office.context.mailbox.item.notificationMessages.addAsync("subject", {
    type: "informationalMessage",
    icon: "blue-icon-16",
    message: "Subject: " + subject,
    persistent: false
  });
  
  event.completed();
}