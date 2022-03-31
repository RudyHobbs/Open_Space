let check1 = document.getElementById("check-button1");
let check2 = document.getElementById("check-button2");
let check3 = document.getElementById("check-button3");
let check4 = document.getElementById("check-button4");
let check5 = document.getElementById("check-button5");
let check6 = document.getElementById("check-button6");
let lever1 = document.getElementById("lever1");
let lever2 = document.getElementById("lever2");
let lever3 = document.getElementById("lever3");
let lever4 = document.getElementById("lever4");
let lever5 = document.getElementById("lever5");

function enable() {
    let password = document.getElementById("password").value;
    if (password == "TrustNo1") {
        document.getElementById("password").disabled = true;
        document.getElementById("ok").disabled = true;
        check1.disabled = false;
        check2.disabled = false;
        check3.disabled = false;
        check4.disabled = false;
        check5.disabled = false;
        check6.disabled = false;
        lever1.disabled = false;
        lever2.disabled = false;
        lever3.disabled = false;
        lever4.disabled = false;
        lever5.disabled = false;
    }
    console.log(password);
}

function testLaunch() {
    console.log("Launch button pressed");
    let id = null;
    const elem = document.getElementById("rocket");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 100) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.top = pos + "px";
            elem.style.top = pos + "px";
        }
    }
}

function readyForLaunch() {
    console.log("input changed");
    if (check1.checked && check2.checked && check3.checked && check4.checked
        && check5.checked && check6.checked && lever1.value == 10
        && lever2.value == 10 && lever3.value == 10 && lever4.value == 10
        && lever5.value == 10) {
        document.getElementById("launch").disabled = false;
        console.log("readyForLaunch activated");
    }
}