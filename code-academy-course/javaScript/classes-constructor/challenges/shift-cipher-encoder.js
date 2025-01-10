// Write class below
class ShiftCipher {
    constructor(num) {
      this.number = num;
    }
  
    encrypt(str) {
      let result = '';
  
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
          // Lowercase letters
          const charCode = char.charCodeAt(0);
          const shiftedCode = ((charCode - 97 + this.number) % 26) + 97;
          result += String.fromCharCode(shiftedCode);
        } else if (char >= 'A' && char <= 'Z') {
          // Uppercase letters
          const charCode = char.charCodeAt(0);
          const shiftedCode = ((charCode - 65 + this.number) % 26) + 65;
          result += String.fromCharCode(shiftedCode);
        } else {
          // Non-alphabetic characters remain unchanged
          result += char;
        }
      }
      return result.toUpperCase(); // Return the result in uppercase
    }
  
    decrypt(str) {
      let result = '';
  
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
          // Lowercase letters
          const charCode = char.charCodeAt(0);
          const shiftedCode = ((charCode - 97 - this.number + 26) % 26) + 97;
          result += String.fromCharCode(shiftedCode);
        } else if (char >= 'A' && char <= 'Z') {
          // Uppercase letters
          const charCode = char.charCodeAt(0);
          const shiftedCode = ((charCode - 65 - this.number + 26) % 26) + 65;
          result += String.fromCharCode(shiftedCode);
        } else {
          // Non-alphabetic characters remain unchanged
          result += char;
        }
      }
      return result.toLowerCase(); // Return the result in lowercase
    }
  }
  
  // Example usage
  const cipher = new ShiftCipher(2);
  const secretChar = cipher.encrypt('I love to code!'); // Encrypts the message
  console.log(secretChar); // Output: "K NQXG VQ EQFG!"
  
  const decipherChar = cipher.decrypt('K <3 OA RWRRA'); // Decrypts the message
  console.log(decipherChar); // Output: "i <3 my puppy"
  