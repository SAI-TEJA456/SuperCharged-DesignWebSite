const lightIcon = $("#lightIcon");
const darkIcon = $("#darkIcon");
// reset page 1
const bodyDiv = $("#bodyDiv");
const navbar = $(".nav-bar");
const navBarLinks = $(".nav-bar-links");
const companyLogo = $(".navbar-brand img");
const resetPassH1 = $(".reset-pass-h1");
const resetPassP = $(".reset-pass-p");
const resetPassEmail = $(".reset-pass-email");

// sign up page 1
const contact1CheckboxLabel = $(".contact1-checkbox-label");
const googleColorIcon = $(".display-google-contents");
const googleWhiteIcon = $(".display-none");
const signUpGoogleBtn = $(".signup-google");
const signupGoogleTxt = $(".signup-google-txt");

lightIcon.on("click", ()=>{
    bodyDiv.removeClass('bg-gray-950');
    navbar.removeClass('bg-gray-950');
    navBarLinks.css('color', 'var(--gray_700)');
    resetPassH1.removeClass('neutral-200');
    resetPassEmail.removeClass('neutral-200');
    contact1CheckboxLabel.removeClass('neutral-200');
    resetPassP.removeClass('neutral-800');
    googleColorIcon.removeClass('display-none');
    googleWhiteIcon.addClass('display-none');
    signUpGoogleBtn.css('background-color','white');
    signupGoogleTxt.css('color', 'var(--gray_700)');
    companyLogo.attr({
        src:"../resources/Logo-clickup.png"
    });
})

darkIcon.on("click", ()=>{
    bodyDiv.addClass('bg-gray-950');
    navbar.addClass('bg-gray-950');
    resetPassH1.addClass('neutral-200');
    resetPassEmail.addClass('neutral-200');
    contact1CheckboxLabel.addClass('neutral-200');
    resetPassP.addClass('neutral-800');
    navBarLinks.css('color','white');
    googleColorIcon.addClass('display-none');
    googleWhiteIcon.removeClass('display-none');
    signUpGoogleBtn.css({
        'background-color' :'var(--gray_600)'
    });
    signupGoogleTxt.css('color', 'white');
    companyLogo.attr({
        src:"../resources/landing2_CPlogo.png"
    });
})