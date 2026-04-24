# 🌲 Forest Ecosystem Simulator

> Une simulation interactive d'un écosystème forestier en 3D, développée avec **Angular 20** et **Three.js**.

Forest Ecosystem Simulator est un projet pédagogique qui modélise la vie d'une forêt : les arbres poussent, produisent des fruits au fil des saisons, peuvent prendre feu, tandis que les animaux se déplacent, se nourrissent, se reproduisent et interagissent entre eux. L'objectif est d'observer l'équilibre — ou le déséquilibre — d'un écosystème vivant en temps réel.

---

## ✨ Fonctionnalités

- 🌳 **Cycle de vie des arbres** : croissance, production de fruits, vieillissement et mort selon l'espèce et la saison.
- 🦊 **Comportements animaux** : recherche de nourriture, recherche d'un partenaire, fuite, repos, errance.
- 🍂 **Saisons dynamiques** : printemps, été, automne, hiver — chaque saison influence la croissance et la production.
- 🔥 **Événements environnementaux** : incendies, dégâts, propagation et conséquences sur la forêt.
- 🧬 **Reproduction & génétique** : les animaux ont un genre, un cycle reproductif et des groupes sociaux.
- 🎨 **Rendu 3D** propulsé par Three.js, intégré dans une application Angular avec rendu côté serveur (SSR).

---

## 🏗️ Stack technique

| Élément | Technologie |
| --- | --- |
| Framework front-end | Angular 20 |
| Rendu 3D | Three.js |
| Langage | TypeScript 5.8 |
| SSR | Angular SSR + Express |
| Tests | Karma + Jasmine |
| Build | Angular CLI |

---

## 🚀 Démarrage rapide

### Prérequis
- [Node.js](https://nodejs.org/) ≥ 20
- npm ≥ 10 (ou yarn/pnpm équivalent)
- Angular CLI (optionnel, fourni en local) : `npm install -g @angular/cli`

### Installation

```bash
git clone https://github.com/PISSARAW/Forest-ecosytem-simulator.git
cd Forest-ecosytem-simulator
npm install
```

### Lancer l'application

```bash
npm start
```

Puis ouvrez votre navigateur à l'adresse [http://localhost:4200/](http://localhost:4200/). L'application se recharge automatiquement à chaque modification des sources.

---

## 🧱 Structure du projet

```
src/
├── app/          # Composant racine et configuration Angular
├── core/         # Classes de base (Entity, Vector3D, ...)
├── entites/      # Entités du monde : Tree, Animal, Forest, Ressource
├── enums/        # Énumérations (Season, AnimalBehavior, WeatherType, ...)
├── interfaces/   # Contrats typés (TreeSpecies, AnimalSpecies, ...)
├── home/         # Page d'accueil de la simulation
├── utils/        # Utilitaires (MathUtils, ...)
└── main.ts       # Point d'entrée client
```

Chaque entité de la simulation hérite de la classe abstraite `Entity` et possède son propre cycle `update(deltaTime)` qui fait évoluer son état au fil du temps simulé.

---

## 🛠️ Scripts utiles

| Commande | Description |
| --- | --- |
| `npm start` | Lance le serveur de développement Angular |
| `npm run build` | Compile l'application pour la production dans `dist/` |
| `npm run watch` | Build incrémental en mode développement |
| `npm test` | Exécute la suite de tests unitaires (Karma + Jasmine) |
| `npm run serve:ssr:Forest-ecosytem-simulator` | Démarre le serveur SSR à partir du build |

### Générer un nouveau composant

Angular CLI permet de scaffolder rapidement de nouveaux éléments :

```bash
ng generate component nom-du-composant
ng generate --help   # Pour la liste complète des schématiques
```

### Tests end-to-end

Aucun framework e2e n'est livré par défaut avec Angular CLI. Vous pouvez en intégrer un (Cypress, Playwright, ...) selon vos besoins :

```bash
ng e2e
```

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour proposer une amélioration :

1. Forkez le dépôt
2. Créez une branche : `git checkout -b feature/ma-fonctionnalite`
3. Committez vos changements : `git commit -m "Ajoute ma fonctionnalité"`
4. Poussez la branche : `git push origin feature/ma-fonctionnalite`
5. Ouvrez une Pull Request

---

## 📚 Ressources

- [Documentation Angular](https://angular.dev/)
- [Documentation Three.js](https://threejs.org/docs/)
- [Référence Angular CLI](https://angular.dev/tools/cli)

---

_Projet généré initialement avec [Angular CLI](https://github.com/angular/angular-cli) v20.0.5._
