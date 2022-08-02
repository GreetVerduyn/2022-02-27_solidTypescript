var User = /** @class */ function() {
    function User1() {
        this._password = "user";
    }
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    User1.prototype.checkGoogleLogin = function(token) {
        // return "this will not work";
        return token === this._googleToken;
    };
    User1.prototype.setGoogleToken = function(token) {
        this._googleToken = token;
    };
    User1.prototype.getFacebookLogin = function(token) {
        return token === this._facebookToken;
    };
    User1.prototype.setFacebookToken = function(token) {
        this._facebookToken = token;
    };
    User1.prototype.checkPassword = function(password) {
        return password === this._password;
    };
    User1.prototype.resetPassword = function() {
        this._password = prompt("What is your new password?");
    };
    return User1;
}();
//admin cannot use google or facebook token
var Admin = /** @class */ function() {
    function Admin1() {
        this._password = "admin";
    }
    Admin1.prototype.checkPassword = function(password) {
        return password === this._password;
    };
    Admin1.prototype.resetPassword = function() {
        this._password = prompt("What is your new password?");
    };
    return Admin1;
}();
var GoogleBot = /** @class */ function() {
    function GoogleBot1() {}
    GoogleBot1.prototype.checkGoogleLogin = function(token) {
        // return "this will not work";
        return token === this._googleToken;
    };
    GoogleBot1.prototype.setGoogleToken = function(token) {
        this._googleToken = token;
    };
    return GoogleBot1;
}();
var passwordElement = document.querySelector("#password");
var typePasswordElement = document.querySelector("#typePassword");
var typeGoogleElement = document.querySelector("#typeGoogle");
var typeFacebookElement = document.querySelector("#typeFacebook");
var loginAsAdminElement = document.querySelector("#loginAsAdmin");
var resetPasswordElement = document.querySelector("#resetPassword");
var guest = new User;
var admin = new Admin;
var auth = false;
document.querySelector("#login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    //let user = loginAsAdminElement.checked ? admin : guest;
    if (!loginAsAdminElement.checked) {
        guest.setGoogleToken("secret_token_google");
        guest.setFacebookToken("secret_token_fb");
        switch(true){
            case typePasswordElement.checked:
                auth = guest.checkPassword(passwordElement.value);
                break;
            case typeGoogleElement.checked:
                auth = guest.checkGoogleLogin("secret_token_google");
                break;
            case typeFacebookElement.checked:
                debugger;
                auth = guest.getFacebookLogin("secret_token_fb");
                break;
        }
    } else if (typePasswordElement.checked) auth = admin.checkPassword(passwordElement.value);
    debugger;
    if (auth) alert("login success");
    else alert("login failed");
});
resetPasswordElement.addEventListener("click", function(event) {
    event.preventDefault();
    if (loginAsAdminElement.checked) admin.resetPassword();
    else guest.resetPassword();
});

//# sourceMappingURL=index.4ce91fb1.js.map
