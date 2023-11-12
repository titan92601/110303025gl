let myGraph = document.getElementById("myGraph");

let trace1 = {};
trace1.mode = "lines";
trace1.type = "scatter";
trace1.name = "元";
trace1.visible = false;
trace1.x = [];
trace1.y = [];
trace1.text = [];
for (let i = 0; i < set1.length; i++) {
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

let trace2 ={};
trace2.type ="bar";
trace2.name = "千元";
trace2.visible = true;
trace2.x =[];
trace2.y =[];
for(let i=0;i<set2.length;i++){
    trace2.x[i] =set2[i]['name'];
    trace2.y[i] =set2[i]['count'];
};

let trace3 ={};
trace3.type ="pie";
trace3.name = "元";
trace3.labels =[];
trace3.values =[];
trace3.visible = false;
trace3.domain ={
    row:1,
    column:0

};
for(let x=0; x< set3.length; x++){
    trace3.labels[x] =set3[x]['name'];
    trace3.values[x] =set3[x]['count'];
};

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout = {
    margin: {
        t: 50,
    },
    grid:{
        rows:2,
        columns:2,
    },
    xaxis:{
        range:[0,10]
    },
    yaxis:{
        range:[0,2800]
    },
    title:'個圖表',
    updatemenus:[
        {
            y:1.2,
            x:0.2,
            yanchor:'top',
            buttons:[
                {
                    method: 'restyle',
                    args: ['visible', [false, true, false]],
                    label: '長條圖',
                    
                },
                {
                    method:'restyle',
                    args:['visible',[true, false, false]],
                    label:'折線圖',
                    
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true]],
                    label: '圓餅圖'
                },
                // {
                //     method: 'restyle',
                //     args: ['visible', [true, true, true]],
                //     label: 'Display All'
                // },
            ]
        }
    ]
};

Plotly.newPlot(myGraph, data, layout);