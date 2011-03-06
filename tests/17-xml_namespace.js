(function () {

function runAsModule () {
	return(
		(typeof require) == "function"
		&&
		(typeof exports) == "object"
		&&
		(typeof module) == "object"
		);
}

if (!runAsModule()) {
	if (!this.Tautologistics)
		this.Tautologistics = {};
	if (!this.Tautologistics.NodeHtmlParser)
		this.Tautologistics.NodeHtmlParser = {};
	if (!this.Tautologistics.NodeHtmlParser.Tests)
		this.Tautologistics.NodeHtmlParser.Tests = [];
	exports = {};
	this.Tautologistics.NodeHtmlParser.Tests.push(exports);
}

exports.name = "XML Namespace";
exports.options = {
	  handler: {}
	, parser: {}
};
exports.html = "<ns:tag>text</ns:tag>";
exports.expected =
	[ { raw: 'ns:tag', data: 'ns:tag', type: 'tag', name: 'ns:tag', children: [ { raw: 'text', data: 'text', type: 'text' } ] }
	];

})();
