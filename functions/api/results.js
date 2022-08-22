const axios = require('axios')
const cheerio = require('cheerio');

const website = 'https://fulltime.thefa.com/results.html?league=6392495&selectedSeason=40148395&selectedDivision=832332828&selectedCompetition=0&selectedFixtureGroupKey=1_558262093';
const FIXTURE_PARTS = ['TYPE','COMP','DATE','TIME','HOME','SCORE','HT','AWAY','OTHER','OTHER','OTHER','OTHER'];

module.exports =  async function getResults() {
    let results = [];

    const result = await axios(website);

        const data = result.data;
 
        let allResults = [];
        const $ = cheerio.load(data);

        $('[id^=fixture]', data).each(function () {
            if ($(this).text().indexOf('Balti') > 0) {
                currResult = $(this).text();
                currResult = currResult.toString().replace(/\n/g, '');
                let res = currResult.toString().replace(/\t/g, ',');
                res = res.toString().replace(/\,+,/g,'divider')
                res = res.split('divider');
                console.log(res);
                let baltiRes = {};
                let currLabelIndex = 0;
                for(let x=0; x< res.length; x++){
                    if(res[x].indexOf('HT') > 0){
                       x++;
                    } 
                    if(FIXTURE_PARTS[currLabelIndex] === 'HT') {
                        currLabelIndex++;
                    }
                    baltiRes[FIXTURE_PARTS[currLabelIndex]] = res[x];
                    currLabelIndex++;

                }
                  allResults.push(baltiRes);
                }
            });
        return allResults;

    
}