import nlp from 'compromise/three';

const isArray = function (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

const wordlike = /\S/;
const isBoundary = /^[!?.]+$/;
const naiiveSplit = /(\S+)/;

const hasHyphen = function (str, model) {
  let parts = str.split(/[–—]/);
  if (parts.length <= 1) {
    return false;
  }
  const { prefixes, suffixes } = model.one;

  // l-theanine, x-ray
  if (parts[0].length === 1 && /[a-z]/i.test(parts[0])) {
    return false;
  }
  //dont split 're-do'
  if (prefixes.hasOwnProperty(parts[0])) {
    return false;
  }
  //dont split 'flower-like'
  parts[1] = parts[1].trim().replace(/[.?!]$/, '');
  if (suffixes.hasOwnProperty(parts[1])) {
    return false;
  }
  //letter-number 'aug-20'
  let reg = /^([a-z\u00C0-\u00FF`"'/]+)[-–—]([a-z0-9\u00C0-\u00FF].*)/i;
  if (reg.test(str) === true) {
    return true;
  }
  //number-letter '20-aug'
  let reg2 = /^[('"]?([0-9]{1,4})[-–—]([a-z\u00C0-\u00FF`"'/-]+[)'"]?$)/i;
  if (reg2.test(str) === true) {
    return true;
  }
  return false;
};

const splitHyphens = function (word) {
  let arr = [];
  //support multiple-hyphenated-terms
  const hyphens = word.split(/[-–—]/);
  let whichDash = '-';
  let found = word.match(/[-–—]/);
  if (found && found[0]) {
    whichDash = found;
  }
  for (let o = 0; o < hyphens.length; o++) {
    if (o === hyphens.length - 1) {
      arr.push(hyphens[o]);
    } else {
      arr.push(hyphens[o] + whichDash);
    }
  }
  return arr;
};
const isSlash = /\p{L} ?\/ ?\p{L}+$/u;

// combine '2 - 5' like '2-5' is
// 2-4: 2, 4
const combineRanges = function (arr) {
  const startRange = /^[0-9]{1,4}(:[0-9][0-9])?([a-z]{1,2})? ?[-–—] ?$/;
  const endRange = /^[0-9]{1,4}([a-z]{1,2})? ?$/;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i + 1] && startRange.test(arr[i]) && endRange.test(arr[i + 1])) {
      arr[i] = arr[i] + arr[i + 1];
      arr[i + 1] = null;
    }
  }
  return arr;
};

let notWord = [
  '.',
  '?',
  '!',
  ':',
  ';',
  '-',
  '–',
  '—',
  '--',
  '...',
  '(',
  ')',
  '[',
  ']',
  '"',
  "'",
  '`',
  '«',
  '»',
  '*',
  '•',
];

notWord = notWord.reduce((h, c) => {
  h[c] = true;
  return h;
}, {});

// 'he / she' should be one word
const combineSlashes = function (arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (isSlash.test(arr[i])) {
      arr[i - 1] += arr[i] + arr[i + 1];
      arr[i] = null;
      arr[i + 1] = null;
    }
  }
  return arr;
};

nlp.world().methods.one.tokenize.splitTerms = function (str, model) {
  let result = [];
  let arr = [];
  //start with a naiive split
  str = str || '';
  if (typeof str === 'number') {
    str = String(str);
  }
  if (isArray(str)) {
    return str;
  }
  const words = str.split(naiiveSplit);
  for (let i = 0; i < words.length; i++) {
    //split 'one-two'
    if (hasHyphen(words[i], model) === true) {
      arr = arr.concat(splitHyphens(words[i]));
      continue;
    }
    arr.push(words[i]);
  }
  //greedy merge whitespace+arr to the right
  let carry = '';
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    //if it's more than a whitespace
    if (
      wordlike.test(word) === true &&
      notWord.hasOwnProperty(word) === false &&
      isBoundary.test(word) === false
    ) {
      //put whitespace on end of previous term, if possible
      if (result.length > 0) {
        result[result.length - 1] += carry;
        result.push(word);
      } else {
        //otherwise, but whitespace before
        result.push(carry + word);
      }
      carry = '';
    } else {
      carry += word;
    }
  }
  //handle last one
  if (carry) {
    if (result.length === 0) {
      result[0] = '';
    }
    result[result.length - 1] += carry; //put it on the end
  }
  // combine 'one / two'
  result = combineSlashes(result);
  result = combineRanges(result);
  // remove empty results
  result = result.filter((s) => s);
  return result;
};

interface CompromiseExtensions {
  paragraphs: () => { length: number };
}

export const compromiseThree = nlp<CompromiseExtensions>;
