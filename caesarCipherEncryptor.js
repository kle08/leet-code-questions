// have 2 inputs sting and key
// key is used to determine how many letters is being shifted to the next letter.
// example string - xyz key - 2 
// output = zab since the key is 2 it will go up 2 letters of the alpha
// after z it will restart back to 'A'

function caesarCE(string, key) {
  const newLetter = [];
  const newKey = key % 26;
  for (const letter of string) {
    newLetter.push(helper(letter, newKey));
  }
  return newLetter.join('');
}

function helper(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}

console.log(caesarCE('zba', 3));