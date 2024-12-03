let SHEET_ID = '1o6fSgreNW3JLHLCbaYhwVSf0tKdzjz2QzLRT-IplqG4'
let SHEET_TITLE = 'Database';
let SHEET_RANGE = 'A1:G100';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0,-2));
        let length = data.table.rows.length;
        // console.log(rep);
        var elements="";
        
            
        
        for(var i=0;i<length;i++){
            // for(var j=0;j<7;j++){
            //     console.log(data.table.rows[i].c[j].v);
                elements+=`
                <div>
                    <p>${data.table.rows[i].c[0].v}. ${data.table.rows[i].c[1].v}</p>
                    <pre>
A ${data.table.rows[i].c[2].v}
B ${data.table.rows[i].c[3].v}
C ${data.table.rows[i].c[4].v}
D ${data.table.rows[i].c[5].v}
                    </pre>
                </div>
                `
            // }
        }
        document.getElementById("display").innerHTML=elements;

    }
)