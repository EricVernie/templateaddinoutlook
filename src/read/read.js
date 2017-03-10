// var azureADTenant = "common"; // Target Azure AD tenant 
// var azureADClientID = "7c534c3e-874e-4c52-8e53-094f83f0c33d"; // App ClientID
// window.config = {
//     tenant: azureADTenant,
//     clientId: azureADClientID,
//     postLogoutRedirectUri: window.location.origin,
//     endpoints: {
//         graphApiUri: "https://graph.microsoft.com",
//         redirectUri: "https://localhost:7879"
//     },
//     cacheLocation: "localStorage"
// };
// // Create the AuthenticationContext object to play with ADAL.JS
// var authContext = new AuthenticationContext(config);

// // Check For & Handle Redirect From AAD After Login
// var isCallback = authContext.isCallback(window.location.hash);
// authContext.handleWindowCallback();

// // Check Login Status, Update UI
// if (isCallback && !authContext.getLoginError()) {
//     window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
// }
// else {
//     var user = authContext.getCachedUser();
//     if (!user) {
//         authContext.login();
//     }
// }

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
     function displayOneDriveFiles() {

     }
})();