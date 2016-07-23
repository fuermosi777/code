var bs = function(a, search) {
    var lo = 0, hi = a.length - 1;
    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (a[mid] > search) {
            hi = mid - 1;
        } else if (a[mid] < search) {
            lo = mid + 1;
        } else {
            return {
                find: mid,
                lo: mid
            };
        }
    }
    return {
        lo: lo - 1,
        find: -1
    };
};

var findLtGtNum = function(a, search) {
    var pos = bs(a, search);
    // console.log(pos);
    if (pos.find === -1) {
        if (search > a[a.length - 1]) {
            return {
                less: a.length,
                greater: 0
            };
        } else if (search < a[0]) {
            return {
                less: 0,
                greater: a.length
            };
        } else {
            return {
                less: pos.lo + 1,
                greater: a.length - pos.lo - 1
            };
        }
    }
    var lt, gt;
    lt = pos.find;
    gt = a.length - pos.find - 1;
    return {
        less: lt,
        greater: gt
    };
};

var getLtGtNum = function(a, mid) {
    return {
        less: mid,
        greater: a.length - 1 - mid
    };
};

var getMid = function(a) {
    if (a.length % 2 === 0) {
        return (a[a.length / 2] + a[a.length / 2 - 1]) / 2;
    } else {
        return a[Math.floor(a.length / 2)];
    }
};

var findCandidate = function(a, b) {
    if (a.length === 0) {
        return {
            final: true,
            can: getMid(b)
        };
    }
    var lo = 0;
    var hi = a.length - 1;
    var can;
    var dir;
    var mid;
    var diff;
    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);
        var lg1 = getLtGtNum(a, mid);
        var lg2 = findLtGtNum(b, a[mid]);
        var lt = lg1.less + lg2.less;
        var gt = lg1.greater + lg2.greater;
        // console.log(lg1, lg2);
        if (lt > gt) {
            if (dir === 1) {
                var newDiff = Math.abs(lt - gt);
                return {
                    final: false,
                    can: newDiff <= diff ? a[mid] : can
                };
            } else {
                dir = -1;
                hi = mid - 1;
                can = a[mid];
                diff = Math.abs(lt - gt);
            }
        } else if (lt < gt) {
            if (dir === -1) {
                var newDiff = Math.abs(lt - gt);
                return {
                    final: false,
                    can: newDiff < diff ? a[mid] : can
                };
            } else {
                dir = 1;
                lo = mid + 1;
                can = a[mid];
                diff = Math.abs(lt - gt);
            }
        } else {
            return {
                final: true,
                can: a[mid]
            };
        }
    }
    return {
        final: false,
        can: can
    };
};

var findMedianSortedArrays = function(nums1, nums2) {
    var can1 = findCandidate(nums1, nums2);
    var can2 = findCandidate(nums2, nums1);
    // console.log(can1, can2);
    if (can1.final) return can1.can;
    if (can2.final) return can2.can;
    return (can1.can + can2.can) / 2;
};