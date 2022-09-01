const axios = require('axios')
const cheerio = require('cheerio');
const CELL_NAMES = ['POSITION','CLUB','PLAYED','WON','DRAWN','LOST','GOAL_DIFFERENCE','POINTS'];
module.exports =  async function getTable() {
    let fixtures = [];
    const leagueTableURL = 'https://fulltime.thefa.com/table.html?league=6392495&selectedSeason=40148395&selectedDivision=832332828&selectedCompetition=0&selectedFixtureGroupKey=1_558262093';
    const result = await axios(leagueTableURL);

    const data = result.data;

    let rows = []
    const $ = cheerio.load(data);
    $('.table-scroll table tbody', data).each(function () {
  
        $('tr', data).each(function () {
            let currResult = $(this).text();
            currResult = currResult.toString().replace(/\n/g, '');
            let res = currResult.toString().replace(/\t/g, ',');
            res = res.toString().replace(/\,+,/g,'divider')
            res = res.split('divider');
            rows.push(res);

        })
    });
    rows = Array.from(rows);
    let rowCount = 0;
    let table = [];
    for(let x=0;x<19;x++){

        let newRow = {};
        let index = 0
        let cells = rows[x];
        for(let i=0; i<cells.length;i++){
            let cellValue = cells[i].trim();
            if(cellValue.length > 0){
               
                console.log('"'+cellValue+'"')
                newRow[CELL_NAMES[index]] = cellValue;
                index++;
            }
        }
        
        table.push(newRow);
    }
    return table;
}