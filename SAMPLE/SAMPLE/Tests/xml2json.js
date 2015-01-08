﻿var modulesFolder = FileSystemSync('Modules');var xml2json = require(modulesFolder.path + "xml2json");var json, xml, sampleXmlPath, samplesFolderPath = application.getFolder().path + "Tests/samples/";var testCase = {		name:"xml2json conversion test",	test_cdata:function(){		sampleXmlPath = samplesFolderPath + "cdata.xml";		xml = loadText(sampleXmlPath);		json = xml2json.parse(xml);			Y.Assert.isTrue(json.test === '<tags>!\'"#$%&()=~^|¥\\+*;:,.?/_{}[]@');	},		test_null:function(){		json = xml2json.parse();			Y.Assert.isTrue(typeof json === 'undefined');	},				test_undefined:function(){		json = xml2json.parse();			Y.Assert.isTrue(typeof json === 'undefined');	},		test_japanese:function(){		sampleXmlPath = samplesFolderPath + "japanese.xml";		xml = loadText(sampleXmlPath);		json = xml2json.parse(xml);			Y.Assert.isTrue(json.test === 'あいうえお日本語ｶｷｸｹｺ吉田𠮷野家草薙');	},	test_arrays:function(){		sampleXmlPath = samplesFolderPath + "array.xml";		xml = loadText(sampleXmlPath);			json = xml2json.parse(xml);			Y.Assert.isTrue(Array.isArray(json.animals.dog));	},			test_element_with_hyphen:function(){		sampleXmlPath = getItemsWithRole("settings");		xml = loadText(sampleXmlPath);			Y.Assert.isTrue(!!xml2json.parse(xml));	},	test_soapenvelope_namespace:function(){		sampleXmlPath = samplesFolderPath + "soap.xml";		xml = loadText(sampleXmlPath);			json = xml2json.parse(xml);			Y.Assert.isTrue(!!xml2json.parse(xml));	}		}require("unitTest").run(testCase).getReport();