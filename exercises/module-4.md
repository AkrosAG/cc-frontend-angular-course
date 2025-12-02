## Modul 4

1. Erstelle eine neue Komponente mit Namen "todo" im Ordner src/app und schaue dir die generierten Files an.
```ng generate component todo```
2. Verschiebe die Liste der app.html in die TodoComponent. 
3. Verschiebe auch das Styling der Liste in die TodoComponent.
4. Füge die TodoComponent im Template der AppComponent (app.html) ein. 
5. Erstelle in der AppComponent eine Variable "title" und gebe sie im Template aus. 
6. Erweitere die TodoComponent um den Angular-Input "subtitle" und übergebe eine neue Variable "subtitle" von der AppComponent an die TodoComponent. 
7. Ergänze das `styles.scss` mit dem folgendem Material Import `@import '@angular/material/prebuilt-themes/indigo-pink.css';`
8. Zusatzaufgabe: Erweitere die TodoComponent um einen Clear-Button. Erstelle einen Output mit dem Namen "clear". Wenn auf den Button geklickt wird, soll der Output "clear" emitted werden. Die AppComponent soll auf den Event reagieren und eine Message in der Konsole loggen.
