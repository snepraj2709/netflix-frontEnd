import axios from "axios";

/*To make request in movie database list*/

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

/*
It makes redirecting to proper links easier like 
instance.get('/food');
will redirect us to
//https://api.themoviedb.org/3/food
Useful for lots of request making sites
*/

export default instance;
//you can only have one default export and it can be renamed 