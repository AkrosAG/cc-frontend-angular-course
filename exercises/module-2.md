## Modul 2 (Lösung)

1. Erstelle ein neues Angular Projekt. \
   Verwende dabei NPX, um die richtige npm Version zu benutzen: `npx @angular/cli@21 new angular-course`
Im Prozess werden dir verschiedene Fragen gestellt, du kannst sie wie folgt beantworten:
```
which stylesheet: scss
SSR: nein
AI: none
```
2. Füge die angular material dependency hinzu. \
   [https://www.npmjs.com/package/@angular/material](https://www.npmjs.com/package/@angular/material)
   `npm install @angular/material`
3. Starte die Applikation mit `npm run start`
4. Teste die Applikation mit `npm run test`
5. Entferne den Inhalt vom [app.html](../src/app/app.html)
6. Schreibe etwas in die [app.html](../src/app/app.html) und schau dir das Resultat an.\
   Erstelle einen Title (h1) "Todos" und dann einen Untertitel "Offene Todos" (h2). Darunter eine Liste (ul) mit 2 Elementen (li) "Task1" und "Task 2".
7. Erstelle Regeln im globalen stylesheet ([styles.scss](../src/styles.scss)) für Headings (h1 bis h5).
8. Erweitere die Datei [app.scss](../src/app/app.scss), um die Liste zu stylen.
