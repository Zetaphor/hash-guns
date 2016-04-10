var map_string_int = {
    'a': '2',
    'b': '4',
    'c': '6',
    'd': '8',
    'e':'9',
    'f':'5'
};

function setCharAt(str, index, char) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + char + str.substr(index+1);
}

function generate_int_hash(seed) {
    var intHash = md5(seed);
    for (var i = 0; i < intHash.length; i++) {
        if (isNaN(intHash.charAt(i))) {
            intHash = setCharAt(intHash, i, map_string_int[intHash.charAt(i)]);
        }
    }
    return intHash;
}

function generate_int(length, seed, offset, negative) {
    if (typeof offset === 'undefined') offset = 0;
    if (typeof negative === 'undefined') negative = false;

    var hashes = Math.ceil(length / 32);
    var intHash = '';

    if (offset > length) offset = length;

    for (var i = 0; i < (hashes); i++) {
        intHash += generate_int_hash(seed).toString();
    }

    newInt = Number(intHash.substr(offset, length));

    if (negative) return newInt - (newInt * 2);
    return newInt;
}

function generate_dec(before, after, seed, negative) {
    if (typeof negative === 'undefined') negative = false;

    var new_dec = '';
    if (negative) new_dec += '-';
    new_dec += Math.abs(generate_int(before, seed)).toString() + '.';
    new_dec += Math.abs(generate_int(after, seed, {'offset': (before + after)})).toString();
    return Number(new_dec);
}

function generate_float(seed, negative) {
    if (typeof negative === 'undefined') negative = false;

    var new_float = 0.0;
    new_float = generate_int(1, seed) / 10;
    if (negative) return new_float - (new_float * 2);
    return new_float;
}
