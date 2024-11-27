const repoName = window.location.pathname.split('/')[1];
const basePath = `/${repoName}/assets`;

const initialMovies = {
    'The Gray Man': `${basePath}/the-gray-man/the-gray-man.png`,
    Blonde: `${basePath}/blonde/blonde.png`,
    'Minions: The Rise of Gru': `${basePath}/minions-the-rise-of-gru/minions-the-rise-of-gru.png`,
};

export default initialMovies;
