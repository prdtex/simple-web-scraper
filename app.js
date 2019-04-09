const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.cnn.com/';

const responseData = (response) => {
    return response.data;
};

const logError = (error) => {
    console.log(error);
}

let getHeadlines = html => {
    data = [];
    const $ = cheerio.load(html);
    $('h3').each((i, elem) => {
        data.push({
            title: $(elem).text(),
            link: $(elem).find('a.DY5T1d').attr('href')
        });
    });
    console.log(`This is our data: ${data}`);
}

axios.get(url)
    .then(responseData)
    .then(getHeadlines)
    .catch(logError);