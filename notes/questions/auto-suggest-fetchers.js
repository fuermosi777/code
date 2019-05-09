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