const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2da91faa1ded4851b4f5f0f1c3a57c5e', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });

export default newsapi;
