
var fs = require('fs');
var inquirer = require("inquirer");

var collection  = process.argv[2];
var item  = process.argv[3];

if ( collection && item ) {

    fs.readFile( collection + '.data', 'utf8', function (err, data) {
        if (err) {
            console.log("Error: " + err);
            process.exit(1);
        }

        var parsedData  = JSON.parse(data);
        // console.log(parsedData);
        if ( parsedData && parsedData[item] ) {
            var practiceDefinition = {};
            practiceDefinition.toCheck = parsedData.toCheck;
            practiceDefinition.checkValues = parsedData[item];
            practiceDefinition.description = parsedData.description;
            practiceDefinition.item = item;
            exercise(practiceDefinition);
        } else {
            console.log("No practice definition for " + item);
            process.exit(1);
        }

    });

} else {
    console.log("Usage: node lp.js <collection> <item>");
    process.exit(1);
}


function exercise( practiceDefinition )
{
    var toCheck = practiceDefinition.toCheck;
    var checkValues = practiceDefinition.checkValues;


    var questions = [];

    // for ( var i = 0; i < toCheck.length; i++) {
    //     questions[i] =     {
    //         type: 'input',
    //         name: toCheck[i],
    //         message: toCheck[i]
    //     };
    // }

    Object.keys(practiceDefinition.checkValues).forEach(function(key) {
        questions.push(
            {
                type: 'input',
                name: key,
                message: key,
            }
        )
    });

    console.log(practiceDefinition.description + " " + practiceDefinition.item);


    inquirer.prompt(questions, function(response) {
        console.log(response);

        Object.keys(practiceDefinition.checkValues).forEach(function(key) {
            if ( response[key] != checkValues[key] ){
                console.log(response[key] + "=>"
                + checkValues[key] );
            }
        })

    });
}
