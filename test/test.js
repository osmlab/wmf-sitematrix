var test = require('tap').test;
var wmf = require('../');

test('wmf sitematrix', function(t) {
    t.deepEqual(Object.keys(wmf).sort(), [
        "wikibooks",
        "wikinews",
        "wikipedia",
        "wikiquote",
        "wikisource",
        "wikiversity",
        "wikivoyage",
        "wiktionary"
    ], 'exports data');
    t.end();
});
