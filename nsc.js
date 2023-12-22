function logout() {
    var logoutLoadingOverlay = document.getElementById('logout-loading-overlay');
    var logoutSpinner = document.querySelector('#logout-loading-overlay .spinner');
    
    
    logoutLoadingOverlay.style.display = 'flex'; // Show the loading overlay
    setTimeout(function () {
       

        
        window.location.href = "login.html";

        logoutLoadingOverlay.style.display = 'none'; 
    }, 2000);
}
function onconvert() {
    
    var inputNum = document.getElementById("x").value;
    var inputBase = document.getElementById("sel1").value;
    var outputBase = document.getElementById("sel2").value;
    var outputNum;

  
    switch (inputBase) {
        case "2":
            outputNum = switchOutputBase(parseInt(inputNum, 2).toString(outputBase));
            break;
        case "8":
            outputNum = switchOutputBase(parseInt(inputNum, 8).toString(outputBase));
            break;
        case "10":
            outputNum = switchOutputBase(parseInt(inputNum).toString(outputBase));
            break;
        case "16":
            outputNum = switchOutputBase(parseInt(inputNum, 16).toString(outputBase).toUpperCase());
            break;
        default:
            outputNum = "INVALID";
    }

    document.getElementById("y").value = outputNum;
}

function switchOutputBase(inputNum) {
    var outputBase = document.getElementById("sel2").value;
    
    switch (outputBase) {
        case "2":
            return parseInt(inputNum, outputBase).toString(2);
        case "8":
            return parseInt(inputNum, outputBase).toString(8);
        case "10":
            return parseInt(inputNum, outputBase).toString(10);
        case "16":
            return parseInt(inputNum, outputBase).toString(16).toUpperCase();
        default:
            return "INVALID";
    }
}


function onrst() {
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
}

function swap() {
    var fromBase = document.getElementById("sel1").value;
    document.getElementById("sel1").value = document.getElementById("sel2").value;
    document.getElementById("sel2").value = fromBase;
}

function copy() {
    var resultTextarea = document.getElementById("y");
    resultTextarea.select();
    document.execCommand("copy");
    alert("Result copied to clipboard");
}