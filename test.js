var str = 'This is a test';

test('Replace character', function() {
    strictEqual(setCharAt(str, 0, 'w'), 'whis is a test');
});

test('MD5', function() {
    strictEqual(md5(str), 'ce114e4501d2f4e2dcea3e17b546f339');
});

test('Integer Hash', function() {
    strictEqual(generate_int_hash('This is a test'), '69114945018254928692391745465339');
});

test('Positive Integer', function() {
    strictEqual(generate_int(15, str, 5, false), 945018254928692);
});

test('Negative Integer', function() {
    strictEqual(generate_int(15, str, 5, true), -945018254928692);
});

test('Positive Decimal', function() {
    strictEqual(generate_dec(6, 6, str, false), 691149.691149);
});

test('Negative Decimal', function() {
    strictEqual(generate_dec(6, 6, str, true), -691149.691149);
});

test('Positive Float', function() {
    strictEqual(generate_float(str, false), 0.6);
});

test('Negative Float', function() {
    strictEqual(generate_float(str, true), -0.6);
});
