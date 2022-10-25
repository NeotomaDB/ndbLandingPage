
library(XML)
library(neotoma2)

datasets <- get_table("datasets")

doc = newXMLDoc()
root = newXMLNode("urlset", doc = doc, namespaceDefinitions = list(xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"))

newNode <- newXMLNode("url", parent = root)
newXMLNode("loc", "https://data.neotomadb.org/", parent = newNode)
newXMLNode("lastmod", "2022-10-01", parent = newNode)
newXMLNode("changefreq", "yearly", parent = newNode)
newXMLNode("priority", "1.0", parent = newNode)

for(i in 1:nrow(datasets)) {
    newNode <- newXMLNode("url", parent = root)
    newXMLNode("loc", paste0("https://data.neotomadb.org/", datasets$datasetid[i]), parent = newNode)
    newXMLNode("lastmod", "2022-10-01", parent = newNode)
    newXMLNode("changefreq", "monthly", parent = newNode)
    newXMLNode("priority", "0.8", parent = newNode)
}

saveXML(root, file="sitemap.xml", encoding="UTF-8")