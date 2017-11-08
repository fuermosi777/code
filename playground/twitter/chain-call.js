// let arr = [call1, call2, call3, call4, handleResults];

function handleSingleFunc(funcList, index, resList, cb) {
  if (index < funcList.length - 1) {
    funcList[index](res => {
      resList.push(res);
      handleSingleFunc(funcList, index + 1, resList, cb);
    });
  } else if (cb) {
    cb();
  }
}

function handleFuncList(arr) {
  let resList = [];
  handleSingleFunc(arr, 0, resList, () => {
    arr[arr.length - 1](resList);
  });

}

/**
 * Test
 */

function callFb(cb) {
  setTimeout(() => {
    cb('fb');
  }, 500);
}

function callLinkedIn(cb) {
  setTimeout(() => {
    cb('li');
  }, 600);
}

function callYelp(cb) {
  setTimeout(() => {
    cb('yp');
  }, 400);
}

function resultAll(res) {
  console.log(res.join(', '));
}

handleFuncList([callFb, callLinkedIn, callYelp, resultAll]);
