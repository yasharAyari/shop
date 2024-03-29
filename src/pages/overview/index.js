import React, { useState, useEffect } from 'react';
import { Row } from 'react-flexbox-grid';
import styles from './styles.module.css';
import { getRecipes } from '../../utilities/api';
import Recipe from './recipe';

/**
 * this component shows the over view page of recipes
 */
const OverView = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  // load the list of recipes
  useEffect(() => {
    getRecipes()
      .then(({ data }) => setRecipes(data || []))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className="App-title">Most Recent Recipes</h1>
        <p className="App-intro">
          Fresh off the chopping block! Enjoy the latest and greatest recipes
          carefully curated by our 5-star chefs.
        </p>
        <input
          type="text"
          className={styles.search}
          placeholder="search for a recipe"
          onChange={({ target }) => setQuery(target.value)}
        />
        <div>{query}</div>
      </header>
      <Row>
        {recipes
          .filter(item => item.name.toLowerCase().includes(query))
          .map(item => (
            <Recipe key={item.id} data={item} />
          ))}
      </Row>
    </div>
  );
};

export default OverView;
