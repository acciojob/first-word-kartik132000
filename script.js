function firstWord(s) {
  // Trim leading and trailing spaces
  s = s.trim();

  // Check if the string is empty
  if (!s) return s;

  // Find the index of the first space
  const spaceIndex = s.indexOf(' ');

  // If no space is found, return the entire string
  if (spaceIndex === -1) return s;

  // Return the substring up to the first space
  return s.substring(0, spaceIndex);
}

// Test cases
console.log(firstWord('see and stop'));    // Output: 'see'
console.log(firstWord(' Hello World!'));   // Output: 'Hello'
console.log(firstWord('12345'));           // Output: '12345'
console.log(firstWord(''));                // Output: ''
