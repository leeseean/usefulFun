function isIE() { //ie?53453453
    if (!!window.ActiveXObject || "ActiveXObject" in window)   return true;  
    else   return false; 
}