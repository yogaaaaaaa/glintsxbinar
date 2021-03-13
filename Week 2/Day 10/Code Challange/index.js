const data = require('./lib/arrayFactory.js');
const test = require('./lib/test.js');

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter(i => typeof i === 'number');
}

// Should return array
function sortAscending(data) {
  // Code Here

    let len = data.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        //   currentElement > arr[j];
        //   nextElement > arr[j + 1];
        if (data[j] > data[j + 1]) {
          // SWAP
          let temp = data[j];
          // console.log(temp, "--temp");
          data[j] = data[j + 1];
          // arr[j + 1] = arr[j];
          data[j + 1] = temp;
        }
      }
    }


  return clean(data);
}

// Should return array
function sortDecending(data) {
  // Code Here
  let len = data.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        //   currentElement > arr[j];
        //   nextElement > arr[j + 1];
        if (data[j] < data[j + 1]) {
          // SWAP
          let temp = data[j];
          // console.log(temp, "--temp");
          data[j] = data[j + 1];
          // arr[j + 1] = arr[j];
          data[j + 1] = temp;
        }
      }
    }


  return clean(data);

}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
