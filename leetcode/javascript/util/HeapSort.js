function swap(nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}

function inPlaceHeapSort(nums) {
  let size = nums.length;
  if (size <= 1) return;
  for (let i = nums.length - 1; i >= 0; i--) {
    swim(nums, i);
  }
  while (size > 0) {
    swap(nums, 0, size - 1);
    size--;
    sink(nums, 0, size);
  }
}

function sink(nums, i, size) {
  while (true) {
    let k = 2 * (i + 1) - 1;
    if (k >= size) break;
    if (k + 1 < size && nums[k + 1] > nums[k]) k = k + 1;
    if (nums[k] <= nums[i]) break;
    swap(nums, k, i);
    i = k;
  }
}

function swim(nums, i) {
  while (true) {
    if (i === 0) break;
    let k = Math.floor((i - 1) / 2);
    if (nums[k] > nums[i]) break;
    swap(nums, i, k);
    i = k;
  }
}

exports.sort = inPlaceHeapSort;