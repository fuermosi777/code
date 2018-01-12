var state = [];
var controls = document.querySelectorAll('.check-box-control');
controls.forEach(c => state.push(false));

function handleBossClick() {
  if (state.indexOf(false) > -1) {
    for (let i = 0; i < state.length; i++) {
      state[i] = true;
    }
  } else {
    for (let i = 0; i < state.length; i++) {
      state[i] = false;
    }
  }
  updateView();
}

function handleControlClick(id) {
  state[id] = !state[id];
  updateView();
}

function updateView() {
  var boss = document.querySelector('.check-box-boss');
  var controls = document.querySelectorAll('.check-box-control');
  var selectCt = 0;
  controls.forEach((control, i) => {
    if (state[i]) {
      control.textContent = '✓';
      selectCt++;
    } else {
      control.textContent = '';
    }
  });
  if (selectCt === controls.length) {
    boss.textContent = '✓';
  } else if (selectCt === 0) {
    boss.textContent = '';
  } else {
    boss.textContent = '-';
  }
}

