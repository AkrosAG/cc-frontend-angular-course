## Modul 7

### Ausgangslage
- Die Applikation verwendet Angular Routing.
- Die **Todo-Component** ist über die Root-Route (`''`) erreichbar.
- Die Todo-Daten werden direkt in der **Todo-Component** gehalten.
- Die **App-Component** dient als Shell und enthält ein `<router-outlet>`.

---

1. Erstelle eine zweite Komponente mit dem Namen **TodoDetail**.
2. Erweitere die Routing-Konfiguration so, dass die Route `detail/:id` auf die **TodoDetail-Component** routet.
3. Übergebe die ID eines Todos über die **ParamMap**.
4. Füge in der **Todo-Component** einen Link auf die Detail-Seite hinzu.
5. Stelle sicher, dass:
  - die ID über die **ParamMap**
  - das Label über die **QueryParamMap**
    übergeben wird.
6. Lese in der **TodoDetail-Component** die ID und das Label aus und zeige beide im Template an.
7. Beobachte die URL im Browser und prüfe, wie sie sich beim Routing verändert.
