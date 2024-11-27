const repoName = window.location.pathname.split('/')[1] || '';
const basePath = `/${repoName}`;

const initialMovies = {
    'The Gray Man': `${basePath}/assets/the-gray-man/the-gray-man.png`,
    Blonde: `${basePath}/assets/blonde/blonde.png`,
    'Minions: The Rise of Gru': `${basePath}/assets/minions-the-rise-of-gru/minions-the-rise-of-gru.png`,
};

export default initialMovies;
