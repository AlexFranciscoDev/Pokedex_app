# 🧩 Pokédex App

A React-based Pokédex application that consumes the PokéAPI to search, browse and explore Pokémon data through an interactive and responsive interface.

This project focuses on API integration, client-side routing, pagination logic and clean component architecture.

---

## 🛠 Technologies

- React 18 (Create React App)
- React Router DOM v6
- JavaScript (ES6+)
- SCSS / SASS
- REST API (PokéAPI)

---

## ✨ Features

- 🔍 Search Pokémon by name
- 📄 Paginated Pokémon list (12 per page)
- 📊 Detailed Pokémon view with stats and types
- 🎨 Dynamic background colors based on Pokémon type
- ✨ Shiny sprite on hover
- ⏳ Loading state handling
- 📱 Responsive layout

---

## 🌐 API Integration

This project consumes data from:

https://pokeapi.co/

Data is fetched dynamically using `fetch` and rendered based on component state.

Each Pokémon's detailed data is retrieved individually and displayed in card and detail views.

---

## 🧩 Architecture Overview

The project follows a component-based structure:
- `AllPokemon` handles pagination logic and data fetching
- `Pokemon` renders reusable card components
- `SearchPokemon` handles dynamic search and navigation
- `DetailsPokemon` displays full Pokémon stats
- Routing is handled via React Router

---

## 🛠 The Process
The application was built focusing on:
- Managing asynchronous data fetching
- Implementing client-side pagination
- Passing state through navigation
- Creating reusable UI components

## 📚 What I Learned
- Working with external REST APIs
- Handling asynchronous JavaScript using async/await
- Managing state in React applications
- Implementing pagination logic manually
- Using SCSS mixins and modular styling
- Routing

## 🔮 Improvements
- Improve error handling for invalid searches
- Add unit tests for components
- Migrate to TypeScript
- Display pagination number, instead of just two buttons of 'Previous' and 'Next'
- Allow searching by using part of Pokémon's name instead of full Pokémon name

## ▶️ Running the Project
```bash
git clone https://github.com/AlexFranciscoDev/Pokedex_app.git
```

Install dependencies:
```
npm install
```

Run locally:

```
npm start
```

The application will be available at: http://localhost:3000
![Pokemon-api-demo](https://raw.githubusercontent.com/AlexFranciscoDev/Pokedex_app/main/public/pokemon-api.gif)
