const dict = {
    family: 1,
    person: 2,
    firstName: 3,
    lastName: 4,
    state: 5,
}

function compress(xml) {

    var index = 0;
    var inAttr = false;
    var inTag = false;
    var inEndTag = false;

    function next() {
        var result = "";
        var inQuote = false;
        while (true) {
            let char = xml[index];
            if (char === '<') {
                inAttr = true;
                inTag = false;
                index++;
            } else if (char === '>') {
                if (inEndTag) {
                    inEndTag = false;
                    return 0;
                }
                inAttr = false;
                inTag = true;
                index++;
                return 0;
            } else if (inAttr && char === ' ' && !!result && !inTag) {
                index++;
                break;
            } else if (inAttr && char === ' ' && !result && !inTag) {
                index++;
            } else if (char === '=') {
                index++;
                break;
            } else if (!inQuote && char === '"') {
                inQuote = true;
                index++;
            } else if (inQuote && char === '"') {
                inQuote = false;
                index++;
                break;
            } else if (char === '/') {
                inEndTag = true;
                index++;
                break;
            } else {
                result += char;
                index++;
            }

        }
        return result;
    }

    var compressed = "";
    var i = next();
    while (i || i === 0) {
        compressed += (dict[i] || i) + ' ';
        i = next();
    }

    return compressed;
}

var xml = `<family lastName="McDowell" state="CA"><person firstName="Gayle">Some Message</person></family>`;

console.log(compress(xml));
