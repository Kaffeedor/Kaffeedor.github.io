# Wurm-Leben-Simulation: Features & Steuerung

## Features
- **Prozedurale Welt mit Biomen:** Gras, Erde, Wasser, Stein, Kristall, Pilzflächen
- **Verschiedene Nahrungstypen:** Standard, Pilz, Kristall – mit eigenen Effekten
- **Würmer mit Genetik:** Farbe, Größe, Geschwindigkeit, Sichtweite, Aggression, Kannibalismus, Terrain- und Nahrungsvorlieben
- **Mutation & Evolution:** Nachkommen erben und mutieren Gene
- **Spezies-Cluster:** Ähnliche Würmer werden gruppiert, Top-Spezies werden angezeigt
- **Tag/Nacht-Zyklus:** Beeinflusst Verhalten und Aktivität
- **Statistiken & Time Series:** Population, Nahrungstypen, Präferenzen als Graphen
- **Sidebar mit Legende:** Erklärung aller visuellen Merkmale und Gen-Effekte
- **Interaktive Tooltips:** Infos zu Würmern und Nahrung per Maus
- **Zoom & Kamera:** Mit Tasten, Mausrad und Drag steuerbar
- **Buttons:** Pause, Neustart, Zoom
- **Performance-Optimierung:** Zeichnet nur sichtbaren Bereich
- **Import/Export:** Speichere und lade den kompletten Simulationszustand als JSON (Buttons in der Sidebar).

## Steuerung
- **T:** Terrain an/aus
- **N:** Nahrung an/aus
- **W:** Würmer an/aus
- **S:** Statistiken an/aus
- **R:** Neustart
- **SPACE:** Nahrung hinzufügen
- **F11:** Fullscreen
- **P:** Pause
- **+/-:** Zoom
- **Pfeiltasten:** Kamera bewegen
- **Mausrad:** Zoom
- **Rechte Maustaste:** Kamera ziehen
- **Sidebar-Buttons:** Pause, Neustart, Zoom

## Genetik & Verhalten
- **Form:** Größe % 3 (Kreis, Ellipse, Rechteck)
- **Farbe:** Genfarbe (sanft, pastellig)
- **Glow:** Hohe Energie oder Jagdmodus
- **Transparenz:** Schwacher Zustand
- **Nahrungstyp-Präferenz:** Sucht bevorzugt bestimmten Nahrungstyp
- **Aggression:** Jagt andere Würmer
- **Kannibalismus:** Frisst andere Würmer
- **Sichtweite:** Erkennt Nahrung/Beute weiter entfernt
- **Geschwindigkeit:** Bewegt sich schneller
- **Tag/Nacht:** Nachts weniger aktiv, weniger aggressiv

## Sonstiges
- **Performance:** Optimiert für große Welten, nur sichtbarer Bereich wird gezeichnet
- **Modularer Code:** Einfach erweiterbar für neue Gene, Biome, Nahrungstypen, etc. 
