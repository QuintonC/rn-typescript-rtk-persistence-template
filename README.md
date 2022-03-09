<img src="https://i.imgur.com/3zl5BeJ.png" width="100%" height="auto" />

<h1 style="text-align: center">A better React Native Template</h1>

<p style="text-align: center">Built with 🖤 by <a href="https://github.com/QuintonC">Quinton Chester</a></p>

<p style="text-align: center">Want to help contribute? Feel free to open an <a href="https://github.com/QuintonC/rn-typescript-rtk-persistence-template/issues">issue</a>.</p>

## 🤙 Features

- Built with modern development in mind.
- Built with TypeScript.
- Built with a focus on clean code.
- Built with packages that are most commonly found in large, at-scale mobile applications.

## 🎁 Packages

This template makes use of some other packages.

- [FontAwesome](https://github.com/FortAwesome/react-native-fontawesome/) - The world's most commonly used Icon package.
- [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated/) - A more complete animation package with a focus on performance and thread synchronization.
- [React Native Testing Library](https://github.com/software-mansion/react-native-reanimated/) - Simple and complete React Native testing utilities.
- [React Navigation](https://github.com/react-navigation/react-navigation) - Standard application navigation.
- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - Simplified global state management.
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Persistent redux store.
- [RN Progressive Image](https://github.com/QuintonC/rn-progressive-image) - A simple image package that helps aid in lazy loading large images by providing a smaller image to aid in showing a placeholder.

## 🕺 Usage

First you should ensure that you have followed the setup instructions from the official React Native website. 

You can view that here: [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

After you have your development environment setup, you then need to run the following to start your project:
```bash
npx react-native init ProjectName --template https://github.com/QuintonC/rn-typescript-rtk-persistence-template
```

Now that you have created your project you should be able to open the project folder itself and get to work. However, there is some explanation to do in terms of the file structure.

## 🏗 File Structure

You should mostly be paying attention to the files within the `/src/` folder, as that is where most of your code will be written.

Inside of the `/src/` directory we have a list of folders to go over.

```javascript
src |
    | - @types // This is where your custom type definitions will go. I've already created one for your rootReducer (the combined reducer), which will help when destructuring within selectors.
    | - assets
        | - fonts // Custom fonts go here. I've included two, but you can scrap them and re-run npx react-native link to remove them from your project.
        | - icons // Any custom icons go here.
        | - images
        | - lottiefiles // While I didn't include lottie in this repo, it's something I use often, and I keep my lottie .json files here.
    | - components
        |- PackageCard // Each component should have its own folder. Within that folder an index.tsx and a style.tsx for the stylesheet of the component.
            | - index.tsx
            | - style.tsx
        | - index.tsx // A global index.tsx within the components folder. Each component is exported out of here. This helps maintain your clean import structure (more on this below).
    | - constants // Any app constants here.
    | - navigator // App navigation here.
    | - screens // Similar to components, however, I structure everything by stacks. So we could potentially have folders such as Auth, Home, Settings, etc. Each of those folders have their own screens within them.
        | - Home
            | - HomeRoot
                | - index.tsx
                | - style.tsx
        | - index.tsx // And similar to the components folder, we have an export within each stack's parent folder where we can import screens by stack.
    | - slices // Our redux slices go here.
    | - store // Our redux store configuration (combineReducers and configureStore) go here.
    | - style // Any app-wide styles you'd like to create for easier import and drier code. You'll notice I've defined some typography global styles.
    | - types // All of your types + interfaces, in one place.
        | - index.tsx
        | - typename.tsx
    | - utils // Any utility functions you need for your application.
```

## 🧼 Clean Imports 

Why is there an `index.tsx` in components?

Within each index.tsx file within a parent folder, I export default exports from components, screens, etc. to help maintain cleaner imports when those components or screens are later used.

For example let's assume we have the following three components in our `components` folder.
- Button
- Input
- PackageCard

Our `components/index.tsx` would look like this:

```javascript
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as PackageCard } from './PackageCard';
```

Now, when we are using these components within a screen, we can import these three components like this:

```javascript
// Components
import { Button, Input, PackageCard } from 'components';
```

Which, given there are only three components, isn't a huge deal compared to this:

```javascript
// Components
import Button from 'components/Button';
import Input from 'components/Input';
import PackageCard from 'components/PackageCard';
```

However, as your app grows, it's most likely that the number of components follows suit. For example, let's assume you have 20 components nad you want to use them all in another screen. Do you really want to have 20+ lines of code dedicated to importing your components? Didn't think so.

## 🏎 VS Code Snippets
I've included two of my most commonly used VS Code snippets in this template. They should automatically pick up with your VS Code instance as well, ensuring that you can use them too.

When you create a new file such as a new `index.tsx` file, you can begin typing `newcomponent`, and VS Code will prompt you for a snippet replacement. What replaces that shortcut is:

```javascript
import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';

// Packages

// Components

// Style

// Assets

// Constants

// Types

// Actions

// Utility Functions

const ComponentName = () => {

 return (

 );

}
export default ComponentName;
```

Pretty sweet, right? Well, maybe you're just inside of a style or networking file and you don't necessarily need to create a component, instead, you can begin typing `importstruct` and VS Code will replace that shortcut is:

```javascript
// Packages

// Components

// Style

// Assets

// Constants

// Types

// Actions

// Utility Functions

```

Now all of your files should be looking clean with a defined import structure. The rest is up to you 😄

## ✌️ Closing
Have any questions? Feel free to reach out to me on [Twitter](https://twitter.com/quinton_ch), or open an [issue](https://github.com/QuintonC/rn-typescript-rtk-persistence-template/issues).

## Contributors
[epshtielsl](https://github.com/epshtielsl)