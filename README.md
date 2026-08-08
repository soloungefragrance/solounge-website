# SOLOUNGE Website

Statische, responsive Markenwebsite für SOLOUNGE Frosted Ice Blue und Deep Violet. Sie benötigt keinen kostenpflichtigen Hostingdienst und funktioniert auf GitHub Pages auch unter einer Repository-Unteradresse.

## Vor der Veröffentlichung ausfüllen

1. In `index.html` den Platzhalter für Instagram ersetzen.
2. `impressum.html` und `datenschutz.html` mit korrekten, geprüften Angaben vervollständigen.
3. Nach Kauf einer eigenen Domain die GitHub-Pages-Adresse in `index.html`, `robots.txt` und `sitemap.xml` ersetzen.

## Lokal ansehen

Die Dateien können direkt geöffnet werden. Für eine realistische lokale Vorschau im Projektordner einen einfachen Webserver starten, zum Beispiel:

```sh
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen.

## Kostenlos mit GitHub Pages veröffentlichen

1. Änderungen erst nach ausdrücklicher Freigabe committen und zu GitHub übertragen.
2. Im GitHub-Repository **Settings → Pages** öffnen.
3. Unter **Build and deployment** die Quelle **Deploy from a branch** wählen.
4. Branch `main` und Ordner `/ (root)` auswählen, dann speichern.
5. GitHub zeigt anschließend die kostenlose `github.io`-Adresse an.

Eine eigene Domain lässt sich später unter **Settings → Pages → Custom domain** verbinden. Die Datei `CNAME` sollte erst ergänzt werden, wenn die endgültige Domain feststeht.

## Struktur

- `index.html` — vollständige Markenwebsite
- `styles.css` — responsives Design und Animationen
- `script.js` — mobiles Menü und dezente Einblendeffekte
- `impressum.html`, `datenschutz.html` — rechtliche Platzhalterseiten
- `assets/product-visuals/` — unveränderte lokale Originalbilder (nicht öffentlich veröffentlicht)
- `assets/generated/` — hochauflösende lokale Arbeitsdateien (nicht öffentlich veröffentlicht)
- `assets/web/` — komprimierte WebP-Versionen für schnelle Ladezeiten
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` — GitHub-Pages- und SEO-Dateien

## Hinweise

- Es werden keine externen Schriftarten, Trackingdienste oder Cookies geladen.
- Es gibt bewusst keinen funktionslosen Warenkorb.
- Duftnoten, Inhaltsstoffe, Herkunft, Haltbarkeit und weitere unbestätigte Produkteigenschaften wurden nicht erfunden.
- Alle Originalbilder bleiben unverändert erhalten.
