var bs = function(a, search) {
    var lo = 0, hi = a.length - 1;
    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (a[mid] > search) {
            hi = mid - 1;
        } else if (a[mid] < search) {
            lo = mid + 1;
        } else {
            return mid;
        }
    }
    return lo - 1;
};

var getMid = function(a) {
    if (a.length % 2 === 0) {
        return (a[a.length / 2] + a[a.length / 2 - 1]) / 2;
    } else {
        return a[Math.floor(a.length / 2)];
    }
};

var findMidInOddArray = function(a, b) {
    var k = Math.floor((a.length + b.length) / 2);
    var lo = 0; var hi = a.length - 1;
    var mid, a_remain, b_remain, b1, b2;
    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);
        a_remain = a.length - 1 - mid;
        b_remain = k - a_remain;
        b1 = b.length - b_remain - 1;
        b2 = b.length - b_remain;
        // console.log(b1, b2);
        if (b2 < 0) {
            hi = mid - 1;
        }
        if (b1 < 0) {
            if (a[mid] <= b[b2]) {
                return a[mid];
            } else {
                hi = mid - 1;
            }
        }
        if (b2 > b.length - 1) {
            if (a[mid] >= b[b1]) {
                return a[mid];
            } else {
                lo = mid + 1;
            }
        }
        if (a[mid] <= b[b2] && a[mid] >= b[b1]) {
            return a[mid];
        } else if (a[mid] > b[b2]) {
            hi = mid - 1;
        } else if (a[mid] < b[b1]) {
            lo = mid + 1;
        }
    }
    return null;
};

var findMid = function(nums1, nums2) {
    var can = findMidInOddArray(nums1, nums2);
    if (can === null) {
        can = findMidInOddArray(nums2, nums1);
    }
    return can;
};

var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length === 0) return getMid(nums2);
    if (nums2.length === 0) return getMid(nums1);
    var n = nums1.length; var m = nums2.length;
    if ((n + m) % 2 !== 0) {
        return findMid(nums1, nums2);
    } else {
        nums1.push(Infinity);
        var m1 = findMid(nums1, nums2);
        nums1.pop();
        if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
            nums1.pop();
        } else {
            nums2.pop();
        }
        var m2;
        if (nums2.length === 0) {
            m2 = getMid(nums1);    
        } else if (nums1.length === 0) {
            m2 = getMid(nums2);
        } else {
            m2 = findMid(nums1, nums2);
        }
        return (m1 + m2) / 2;
    }
};