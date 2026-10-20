let s = "([{}])", s1 = '{}[]()'

var isValid = function(s) {
  const match = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (match[char]) {
      stack.push(char)
    } else {
      if (stack.length === 0 || match[stack.pop()] !== char) {
        return false
      }
    }
  }
  return stack.length === 0
};

console.log(isValid(s))
console.log(isValid(s1))