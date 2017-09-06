function isIE() { //ie?111
    if (!!window.ActiveXObject || "ActiveXObject" in window)   return true;  
    else   return false; 
}    