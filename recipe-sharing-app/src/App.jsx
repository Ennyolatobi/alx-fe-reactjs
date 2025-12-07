// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar />
        
        <Routes>
          {/* Home page showing list of recipes */}
          <Route path="/" element={<RecipeList />} />
          
          {/* Dynamic route for recipe details */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
