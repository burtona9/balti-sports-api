// const axios = require('axios')
// const cheerio = require('cheerio');

// const website = 'https://fulltime.thefa.com/fixtures.html?league=6392495&selectedSeason=40148395&selectedDivision=832332828&selectedCompetition=0&selectedFixtureGroupKey=1_558262093';
// const FIXTURE_PARTS = ['TYPE','DATE','HOME','EMPTY','V','EMPTY','AWAY','VENUE','COMP','EMPTY'];


// const getFixtures = async ()=> {
//     let fixtures = [];

//     axios(website).then((res) => {
//         const data = res.data;
//         const $ = cheerio.load(data);
//         $('tr', data).each(function () {
//             if ($(this).text().indexOf('Balti') > 0) {
//                 let curFixture = {};
//                 let i = 0;
//                 $('td', $(this)).each(function () {
//                     if (FIXTURE_PARTS[i] != 'EMPTY' && FIXTURE_PARTS[i] != 'V') {
//                         let part = $(this).text();
//                         part.trim();
//                         part = part.toString().replace(/\t/g, '').split('\r\n');
//                         part = part.toString().replace(/\n/g, '').split('\r\n');
//                         curFixture[FIXTURE_PARTS[i]] = part;
//                     }
//                     i++;
//                 });
//                 fixtures.push(curFixture);
//             }
//         });
//     });
//     return fixtures;
// }

// module.exports = getFixtures;
