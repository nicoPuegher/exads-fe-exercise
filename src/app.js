import initialMovies from './constants/initial-movies';
import moviePacks from './constants/movie-packs';

// Selectors
const questionTitle = document.querySelector('.q-title');
const movieOptionsContainer = document.querySelector('.movies-options');
const cta = document.querySelector('.cta');
const questionnaire = document.querySelector('.q');
const movies = document.querySelector('.movies');
const circles = document.querySelectorAll('.q-circle');
const btn = document.querySelector('.cta-btn');

// App state
const state = {
    currentPhase: 1,
};

// Render movies on screen
function renderMovies(movieList) {
    movieOptionsContainer.innerHTML = '';

    appendMovies(movieList);
}

// Create image elements or fallback text
function appendMovies(movieList) {
    for (const [movie, url] of Object.entries(movieList)) {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movies-option';

        if (url) {
            const img = document.createElement('img');
            img.src = url;
            img.alt = movie;
            img.title = movie;
            movieDiv.appendChild(img);
        } else {
            movieDiv.textContent = movie;
        }

        addEventToMovies(movieDiv, movie);
        movieOptionsContainer.appendChild(movieDiv);
    }
}

// Add click event to movies
function addEventToMovies(movieElement, movie) {
    movieElement.addEventListener('click', function () {
        handleMovieSelection(movie);
    });
}

function advancePhase() {
    state.currentPhase++;
}

function updateQuestionnaire() {
    if (state.currentPhase <= 3) {
        questionTitle.textContent = `QUESTION ${state.currentPhase} OF 3:`;

        circles[state.currentPhase - 2].classList.remove('u-active');
        circles[state.currentPhase - 1].classList.add('u-active');
    }
}

function renderCta(selectedMovie) {
    questionnaire.classList.add('u-hide');
    movies.classList.add('u-hide');
    cta.classList.remove('u-hide');

    btn.addEventListener('click', function () {
        const query = encodeURIComponent(selectedMovie);
        const searchUrl = `https://www.imdb.com/find?q=${query}`;
        window.open(searchUrl, '_blank');
    });
}

// Handle questionnaire progression
function handleMovieSelection(selectedMovie) {
    advancePhase();
    updateQuestionnaire();

    if (state.currentPhase > 3) {
        renderCta(selectedMovie);
        return;
    }

    renderMovies(moviePacks[selectedMovie]);
}

// Initialize questionnaire with initial movies
renderMovies(initialMovies);
