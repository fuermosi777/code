// Improved 9/9/2019
// original: http://shortn/_r61ydy52fX

/*
Part 1 of the problem (warm-up):
- Create a search input box that when typing something, a function called "onSearch(keyword)" is triggered.

Part 2 of the problem (suggest fetchers, bottom line is to finish this with minor errors and hints):
- Someone has completed some fetchers:
  - fruitFetcher(keyword): string[] e.g. "apple", "apricot", ...
  - animalFetcher(keyword): string[] e.g. "ape"
  - wordFetcher(keyword): string[]  e.g. "application"
- Create a fetchAll(fetchers), so that we can do let oneFetcher = fetchAll([fruitFetchers...]), and oneFetcher() => ...

Part 3 (follow-up, verbally is fine):
- Make the input threshold.
- If each result comes with a score, and we want to put the result with hightest score on top and rank the rest, how to implement it?

Ask what to improve
- Error handling
- Timeout if any of the case is unfinished
- Show the result immediately if any of the result comes back.
*/

// Some functions already exist.

function _fetchWrapper(result, delay) {
  return function fruitFetcher(prefix, callback) {
    setTimeout(() => {
      callback(result);
    }, delay);
  }
}

const fruitFetcher = _fetchWrapper(["apple", "apricot", "orange", "watermelon"], 500);
const animalFetcher = _fetchWrapper(["ape", "tiger", "panda"], 1000);
const bookFetcher = _fetchWrapper(["another"], 800)

// END

// Question start here.

function combineFetchers(fetchers) {
  let todoCount = fetchers.length;
  let doneCount = 0;
  return function(prefix, callback) {
    let result = [];
    for (let fetcher of fetchers) {
      fetcher(prefix, (res) => {
        doneCount++;
        result = [...result, ...res];
        if (doneCount >= todoCount) {
          callback(result);
        }
      });
    }
  }
}

const fetchAll = combineFetchers([fruitFetcher, animalFetcher, bookFetcher]);

// END

// Test

function performAutoFetch(prefix) {
  fetchAll(prefix, (result) => {
    addSuggest(result);
  });
}

function addSuggest(keywords) {
  suggest.innerHTML = '';
  for (let keyword of keywords) {
    suggest.innerHTML += `<p>${keyword}</p>`;
  }
}

function main() {
  let input = document.querySelector('#input');
  let suggest = document.querySelector('#suggest');

  input.addEventListener('keyup', (e) => {
    performAutoFetch(input.value);
  });
}

document.addEventListener('DOMContentLoaded', main);
// END