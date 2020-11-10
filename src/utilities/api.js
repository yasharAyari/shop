import Axios from 'axios';

const apiUrl = '/recipes.json';

/**
 * sed a get http request to the apiUrl address to fetch the list of recipes
 */
export const getRecipes = () => Axios.get(apiUrl);
