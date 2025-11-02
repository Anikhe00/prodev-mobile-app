# Create Your First Mobile App

Set up your first mobile application using the Expo Router template. Document the scaffolding process and understand the file structure of a React Native application using Expo.

## Steps for Scaffolding the Expo App

1. Navigate to the parent project directory

```bash
cd prodev-mobile-setup
```

2. Initialized a new Expo project using the Expo Router template

```bash
npx create-expo-app@latest
```

3. Open the file app/(tabs)/index.tsx and changed:

```javascript
<Text>Welcome</Text>
```

to:

```javascript
<Text>First App Created</Text>
```

4. Start the development server:

```bash
npx expo start
```

5. Scanned the QR code using the Expo Go app on an Andriod or your normal camera on iOS to view the app.

## Observations from npm run reset-project

- The command cleared Expo's cache and reset local environment files.
- It removed the .expo and .expo-shared directories
- It reinstalled dependencies (node_modules) for a clean setup
- The app's source code was not deleted
- Running npx expo start again rebuilt the project cleanly.
