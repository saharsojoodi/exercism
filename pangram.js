//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (s) => {
  var alphabet  = "kbvjzxqpygfamucedrhsniowtl"
  s = s.toLowerCase().replace(/[^a-z]/g,'')
for (var i = 0; i < 26; i++)
  if (s.indexOf(alphabet[i]) < 0) return false
return true
};
