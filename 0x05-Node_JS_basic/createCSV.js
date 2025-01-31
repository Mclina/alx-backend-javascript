const fs = require('fs');

// Define the CSV data
const csvData = `firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS`;

// Write the CSV data to a file
fs.writeFile('database.csv', csvData, (err) => {
    if (err) {
        console.error('Error writing to CSV file:', err);
    } else {
        console.log('CSV file has been created successfully.');
    }
});

