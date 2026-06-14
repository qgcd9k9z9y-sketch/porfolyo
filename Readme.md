Create a React Native (Expo) portfolio mobile app for Google Play Store.

App structure:

- Home screen: hero section with name, title, avatar placeholder, and a short bio
- Projects screen: card list of projects with title, description, tech stack tags, and GitHub/live link buttons
- Skills screen: categorized skill list (Frontend, Backend, Tools) with progress indicators
- Contact screen: name, email, social links (GitHub, LinkedIn, Twitter)

Tech stack:

- Expo SDK (latest)
- React Navigation (bottom tab navigator)
- expo-linear-gradient for backgrounds
- @expo/vector-icons for icons
- No external backend, all data in a local data.js file

Requirements:

- Dark theme UI, modern and clean design
- Responsive layout for different screen sizes
- Smooth transitions between screens
- Google Play Store ready (app.json configured with package name, version, permissions)
- Sample data pre-filled so the app runs immediately

Generate all files:

- app.json
- App.js
- src/navigation/TabNavigator.js
- src/screens/HomeScreen.js
- src/screens/ProjectsScreen.js
- src/screens/SkillsScreen.js
- src/screens/ContactScreen.js
- src/data/portfolioData.js
- package.json with all dependencies
