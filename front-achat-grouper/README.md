# FrontAchatGrouper

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# GroupBuy - Frontend Angular

Plateforme d'achats groupés développée avec Angular 18+

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve

# Ouvrir dans le navigateur
http://localhost:4200
```

## 📁 Structure du projet

```
src/app/
├── guards/              # Protection des routes
├── interceptors/        # Intercepteurs HTTP
├── services/            # Services globaux
├── components/          # Tous les composants
│   ├── shared/         # Composants réutilisables
│   ├── auth/           # Authentification
│   ├── home/           # Page d'accueil
│   ├── categories/     # Catégories
│   ├── products/       # Produits
│   ├── groups/         # Groupes
│   ├── dashboard/      # Tableaux de bord
│   ├── checkout/       # Panier et paiement
│   └── profile/        # Profil utilisateur
├── layouts/            # Layouts de page
├── models/             # Modèles de données
├── utils/              # Utilitaires
├── app.config.ts       # Configuration
└── app.routes.ts       # Routes
```

## 🔑 Fonctionnalités principales

- ✅ Authentification (Login, Register, Forgot Password)
- ✅ Gestion des produits et catégories
- ✅ Système de groupes d'achat
- ✅ Panier d'achat
- ✅ Profils utilisateur
- ✅ Tableaux de bord (Membre, Fournisseur, Admin)
- ✅ Design responsive
- ✅ Notifications toast
- ✅ Guards et intercepteurs

## 🛠️ Technologies utilisées

- Angular 18+
- TypeScript
- RxJS
- Standalone Components
- CSS3 / Flexbox / Grid

## 📝 Notes importantes

- Tous les composants sont **standalone** (pas de modules)
- Utilisation de **lazy loading** pour les routes
- **Guards** pour la protection des routes
- **Intercepteurs** pour l'authentification et la gestion des erreurs
- Design basé sur le code HTML fourni

## 🎨 Personnalisation

Les variables CSS globales sont définies dans `src/styles.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
  /* ... */
}
```

## 📱 Responsive

Le design est entièrement responsive avec des breakpoints à:
- Mobile: < 576px
- Tablet: < 768px
- Desktop: < 992px

## 🚧 Développement

Pour ajouter un nouveau composant:
```bash
ng generate component components/nom-du-composant --standalone
```

## 📄 License

MIT