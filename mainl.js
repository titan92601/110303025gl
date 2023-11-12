let myGraphl=document.getElementById('myGraphl');
let trace4 ={};
trace4.type ="bar";
trace4.name = "animals"
trace4.x =[];
trace4.y =[];
for(let i=0;i<animals.length;i++){
    trace4.x[i] =animals[i]['name'];
    trace4.y[i] =animals[i]['count'];
}

let trace5 ={};
trace5.type ="bar";
trace5.name ="animal1"
trace5.x =[];
trace5.y =[];
for(let i=0; i<animals1.length; i++) {
    trace5.x[i] =animals1[i]['name'];
    trace5.y[i] =animals1[i]['count'];
}


let data =[];
data.push(trace4);
data.push(trace5);
let layout ={
    margin:{
        t:0
    },
    barmode:'stack'
};


Plotly.newPlot(myGraphl, data, layout);
