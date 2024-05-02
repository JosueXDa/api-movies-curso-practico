const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        api_key: API_KEY
    },
});



async function getTrendingMovies(){
    try {
        const { data } = await api('trending/movie/day');
        
        const movies = data.results;
        console.log(movies);
        trendingMoviesPreviewList.innerHTML = "";


        movies.forEach(movie => {
            const movieContainer = document.createElement('div');
            movieContainer.classList.add('movie-container');

            const movieImg = document.createElement('img');
            movieImg.classList.add('movie-img');

            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path);

            movieContainer.appendChild(movieImg);
            trendingMoviesPreviewList.appendChild(movieContainer);

        });
    } catch (error) {
        console.log(error.response);
    }
}

async function getCategoriesMovies(){
    const { data } = await api('genre/movie/list');

    const categories = data.genres;
    console.log(categories)

    categoriesPreviewList.innerHTML = "";

    categories.forEach(category => {
        const categoriesContainer = document.createElement('div');
        categoriesContainer.classList.add('category-container');

        const categoriesTitle = document.createElement('h3');
        categoriesTitle.classList.add('category-title');

        categoriesTitle.textContent = category.name;
        categoriesTitle.setAttribute('id', 'id'+category.id);

        categoriesContainer.appendChild(categoriesTitle);
        categoriesPreviewList.appendChild(categoriesContainer);

    });
}

