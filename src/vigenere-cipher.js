const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect === false) {
      this.isDirect = false;
    }
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw Error();
    }

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let square = [];
    for (let i = 0; i < alphabet.length; i++) {
      square.push(alphabet.slice(i, alphabet.length) + alphabet.slice(0, i));
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
  
    if (message.length > key.length) {
      let length = message.length - key.length;
      let repeat = (Math.ceil(length / key.length)) + 1;
      key = key.repeat(repeat).substr(0, message.length);
    } else {
      key = key.substr(0, message.length);
    }

    let index = 0;
    let result = '';
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i]) && alphabet.includes(key[index])) {
        result += square[alphabet.indexOf(message[i])].charAt(alphabet.indexOf(key[index]));
        index++;
      } else {
        result += message[i];
      }
    }

    if (this.isDirect == false) {
      return result.split("").reverse().join("");
    } else {
      return result;
    }
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) {
      throw Error();
    }

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let square = [];
    for (let i = 0; i < alphabet.length; i++) {
      square.push(alphabet.slice(i, alphabet.length) + alphabet.slice(0, i));
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    if (encryptedMessage.length > key.length) {
      let length = encryptedMessage.length - key.length;
      let repeat = (Math.ceil(length / key.length)) + 1;
      key = key.repeat(repeat).substr(0, encryptedMessage.length);
    } else {
      key = key.substr(0, encryptedMessage.length);
    }

    let index = 0;
    let result = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (alphabet.includes(encryptedMessage[i]) && alphabet.includes(key[index])) {
        result += alphabet[square[alphabet.indexOf(key[index])].indexOf(encryptedMessage[i])];
        index++;
      } else {
        result += encryptedMessage[i];
      }
    }

    if (this.isDirect == false) {
      return result.split("").reverse().join("");
    } else {
      return result;
    }
  }
}

module.exports = VigenereCipheringMachine;
