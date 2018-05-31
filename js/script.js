// This is my JavaScript Code

// This is my smooth slider Code
function takeMeHome() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

function goToAbout() {
    let aboutPos = document.getElementById("goToAbout").offsetTop;
    window.scrollTo({
        top: aboutPos - 200,
        left: 0,
        behavior: 'smooth'
    })
}
function goToContact() {
    let contactPos = document.getElementById("goToContact").offsetTop;
    window.scrollTo({
        top: contactPos - 100,
        left: 0,
        behavior: 'smooth'
    })
}