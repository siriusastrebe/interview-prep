// Given a string s, find the length of the longest substring without repeating characters.
// Since any character could repeat, we need to keep track of each character and the index that character was last seen at.
// Since we want the longest substring, we can just keep a single variable that tracks the longest found so far.
function lengthOfLongestSubstring(s: string): number {
  const characterLastSeenAt = {}
  let longest = 0;
  for (let i=0; i<s.length; i++) {
    const character = s[i];
    if (characterLastSeenAt[character] !== undefined && i - characterLastSeenAt[character] > longest) {
      longest = i - characterLastSeenAt[character];
    }
    characterLastSeenAt[character] = i;
  }
  return longest
}
