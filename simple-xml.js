var fs = require('fs');
var util = require('util');
var parseString = require('xml2js').parseString;
var jp = require('jsonpath');
var parser = require('xml2json');

// reads XML
var xmlIn = fs.readFileSync('./valid-MODS.xml', 'utf8');

// interact directly with xml2json
var json = parser.toJson(xmlIn, options = {object: true});
console.log('xml2json xmlIn: ' + json);
console.log(typeof json);

// trying to interact with JSON
var identifier = jp.query(json, '$.mods.identifier');
console.log('jp.query json var for identifiers: ' + identifier);

var identifier0 = jp.query(json, '$.mods.identifier[0]');
console.log('jp.query json var for identifier[0]: ' + identifier0);
console.log('util.inspect above: ' + util.inspect(identifier0, false, null));
console.log('\n\n');

var id0query = jp.value(json, '$.mods.identifier[0]');
console.log('trying to get at $t: ' + id0query);
console.log('util.inspect above: ' + util.inspect(id0query, false, null));

var id0parse = jp.parse('$.mods.identifier[0]');
console.log(id0parse);
