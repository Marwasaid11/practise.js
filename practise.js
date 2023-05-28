import express from 'express';
const students = [{
        id: 1,
        name: 'marwa',
        city: 'sadat'
    }, {
        id: 2,
        name: 'mohammed',
        city: 'sadat'
    }, {
        id: 3,
        name: 'malek',
        city: 'sh'
    }, {
        id: 4,
        name: 'hala',
        city: 'sadat'
    }, {
        id: 5,
        name: 'hany',
        city: 'sadat'
    }]
    //let x = students.every((item) => {
    //return item.city == 'sadat';
    //})
const app = express();

const studentfun = (request, response) => {
    console.log("marwa");
    let output = "<ul>";
    for (let i = 0; i < students.length; i++) {
        output += "<li>" + students[i].name + "</li>";
    }
    output += "</ul>";
    response.send(output);
    response.end();
};
app.get('/students', studentfun);
app.listen(3000);