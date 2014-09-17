wak-xml-to-json
===============

A CommonJS module to convert XML to JSON.

Install
-------
The script is deliberately place outside the project or solution, so that it can be shared easily.

Of course you can install it in the standard (Modules) [http://doc.wakanda.org/About-SSJS-Modules/Configuring-Custom-SSJS-Modules.200-953093.en.html] folder of your project.

Changes
-------
The code is based on the original code written by Thomas Frank.

Other than being modified to work as a CommonJS module, it has been changes to accept XML CDATA.

All element names are converted to lowercase.

Hyphens in element and attribute names are removed.

Tests
-----
Launch your browser and open the following URL: http://127.0.0.1:8081/testServer?path=tests/xml2json.js

Example
-------
```
sampleXmlPath = getItemsWithRole("settings");
xml = loadText(sampleXmlPath);
xml2json.parse(xml)
```
