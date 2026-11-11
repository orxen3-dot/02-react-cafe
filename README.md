# React Cafe: Feedback Voting App

A small interactive feedback application built with React and TypeScript.

## About the project

The app lets visitors rate a cafe experience using three options: good, neutral, and bad. It tracks the votes in React state and displays a summary once feedback has been submitted.

## Features

- Three voting options: Good, Neutral, and Bad
- Live vote counters
- Total number of votes
- Positive feedback percentage
- Reset button to clear all vote counts
- Empty-state notification before the first vote

## Technologies

- React
- TypeScript
- Vite
- CSS Modules
- Modern Normalize

## Run locally

```bash
npm install
npm run dev
```

Useful scripts:

- `npm run build` - type-check and build the application
- `npm run lint` - run ESLint
- `npm run preview` - preview the production build

## Learning focus

Managing component state with `useState`, handling events, passing typed callback props between components, conditional rendering, and deriving summary values from state.

## Project scope

Votes are stored in the app's in-memory React state. They reset when the page is reloaded; there is no backend or persistent storage.
