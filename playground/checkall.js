let checkboxAllEls = document.querySelectorAll('[data-checkbox-all]');

checkboxAllEls.forEach(all => {
  all.addEventListener('change', handleCheckAll);
});

function handleCheckAll(e) {
  let el = e.target;
  let checkboxes = document.querySelectorAll(`[data-checkbox="${el.getAttribute('data-checkbox-all')}"]`);
  let { checked } = el;

  checkboxes.forEach(cb => {
    cb.checked = checked;
  });

}