function isSubstring(s1, s2) {
    return s1.indexOf(s2) > -1;
}

// @param String s1
// @param String s2
// @param Bool
function isRotation(s1, s2) {
    return isSubstring(s1 + s1, s2);
}

// test
console.log(isRotation('waterbottle', 'erbottlewat'));