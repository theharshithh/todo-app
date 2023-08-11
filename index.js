import express from "express"; 
import bodyParser from "body-parser";

const app = express(); 
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));

const d = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = d.getDay();
const dayOfMonth = d.getDate();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = monthNames[d.getMonth()];

app.get('/', (req, res) => {
    res.render("index.ejs", {
    whichDay: daysOfWeek[dayOfWeek], 
    whichDate: dayOfMonth,
    whichMonth: month
    }); 
});  
// renders the work.ejs file when clicked on the a tag
app.get('/work', (req, res) => {
    res.render("work.ejs"); 
}); 

//post request by add tag
let addedTask
let remTask=[]; 
app.post("/submit", (req,res) => { 
    addedTask = req.body["newItem"];
    if(addedTask == '') {
    }
    remTask.push(addedTask); 
    res.render("index.ejs", {
        taskName: remTask,
        whichDay: daysOfWeek[dayOfWeek], 
        whichDate: dayOfMonth,
        whichMonth: month, 
        lengthOfList: remTask.length,
    }); 
    console.log(remTask);
     
});  


app.listen(3000, ()=> {
    console.log("Server started at 3000");
})