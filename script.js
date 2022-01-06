// For Clear button
function eraseText() {
    document.getElementById("inputbox").value = "";
    document.getElementById("sentenceDescription").innerHTML = "Insert sentence below...";
}

// For Cipher button
function cipherRot13() {
  str = document.getElementById("inputbox").value;
  cip = document.getElementById("choice").value;
  str = str.toUpperCase();
  console.log(str);
  if (cip == "caesar4"){
    let ans = str.replace(/[A-Z]/g, caesar4);
    console.log(ans);
    document.getElementById('inputbox').value = ans;
    document.getElementById("sentenceDescription").innerHTML = "Sentence was CIPHERED!";
    return ans;
  }
  else if (cip == "caesar7"){
    let ans = str.replace(/[A-Z]/g, caesar7);
    console.log(ans);
    document.getElementById('inputbox').value = ans;
    document.getElementById("sentenceDescription").innerHTML = "Sentence was CIPHERED!";
    return ans;
  }
  else if (cip == "caesar13"){
    let ans = str.replace(/[A-Z]/g, caesar13);
    console.log(ans);
    document.getElementById('inputbox').value = ans;
    document.getElementById("sentenceDescription").innerHTML = "Sentence was CIPHERED!";
    return ans;
  }
  else{
    return '';
  }

  function caesar4(correspondance) {
    const charCode = correspondance.charCodeAt();
    
    return String.fromCharCode(
            ((charCode + 4) <= 90) ? charCode + 4
                                    : (charCode + 4) % 90 + 64
           );
    
  }

  function caesar7(correspondance) {
    const charCode = correspondance.charCodeAt();
    
    return String.fromCharCode(
            ((charCode + 7) <= 90) ? charCode + 7
                                    : (charCode + 7) % 90 + 64
           );
    
  }

  function caesar13(correspondance) {
    const charCode = correspondance.charCodeAt();
    
    return String.fromCharCode(
            ((charCode + 13) <= 90) ? charCode + 13
                                    : (charCode + 13) % 90 + 64
           );
    
  }
}

// For Decipher button
function decipherRot13() {
  str = document.getElementById("inputbox").value;
  cip = document.getElementById("choice").value;
  str = str.toUpperCase();
  console.log(str);
  if (cip == "caesar4"){
    let ans = str.replace(/[A-Z]/g, decaesar4);
    console.log(ans);
    document.getElementById('inputbox').value = ans;
    document.getElementById("sentenceDescription").innerHTML = "Sentence was DECIPHERED!";
    return ans;
  }
  else if (cip == "caesar7"){
    let ans = str.replace(/[A-Z]/g, decaesar7);
    console.log(ans);
    document.getElementById('inputbox').value = ans;
    document.getElementById("sentenceDescription").innerHTML = "Sentence was DECIPHERED!";
    return ans;
  }
  else if (cip == "caesar13"){
    let ans = str.replace(/[A-Z]/g, decaesar13);
    console.log(ans);
    document.getElementById('inputbox').value = ans;
    document.getElementById("sentenceDescription").innerHTML = "Sentence was DECIPHERED!";
    return ans;
  }
  else{
    return '';
  }

  function decaesar4(correspondance) {
    const charCode = correspondance.charCodeAt();
    return String.fromCharCode(
            ((charCode - 4) >= 65) ? (charCode - 4)
                                    : (charCode - 4) % 90 + 26
           );
    
  }

  function decaesar7(correspondance) {
    const charCode = correspondance.charCodeAt();
    
    return String.fromCharCode(
            ((charCode - 7) >= 65) ? charCode - 7
                                    : (charCode - 7) % 90 + 26
           );
    
  }

  function decaesar13(correspondance) {
    const charCode = correspondance.charCodeAt();
    
    return String.fromCharCode(
            ((charCode - 13) >= 65) ? charCode - 13
                                    : (charCode - 13) % 90 + 26
           );
    
  }
}

