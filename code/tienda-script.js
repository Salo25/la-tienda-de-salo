let xsltProce = new XSLTProcessor();
let xmlHttPreq = new XMLHtttpRequest();
let xmlDoc;
let fragment;



xmlHttPreq.open("GET", "Sources/Data/obras-tienda-salo.xsl", false);
xmlHttPreq.send(null);
xsltProce.importStylesheet(xmlHttPreq.responseXML);

xmlHttPreq = new XMLHtttpRequest();
xmlHttPreq.open("GET", "Sources/Data/obras-tienda-salo.xml", false);
xmlHttPreq.send(null);
xmlDoc = xmlHttPreq.responseXML;

fragment = xsltProce.transformToFragment(xmlDoc, document);
document.getElementById("contenido").textContent = fragment;
