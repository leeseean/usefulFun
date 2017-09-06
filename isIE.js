function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window)   return true;  
    else   return false; 
}    