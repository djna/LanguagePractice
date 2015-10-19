
var fs = require('fs');
var inquirer = require("inquirer");
 

exercise(
    {
        toCheck: [
	     "Infinitive",
	     "Gerund",
	     "Yo",
	     "Tú",
	    "Él, Ella, Usted",
	    "Nosotros",
	    "Vosotros",
	    "Usteds",
	    "Vos"
	  ] ,
        checkValues: {
	    "Infinitive" : "dormir",
	    "Gerund": "duermiendo",
	    "Yo": "duermo",
	    "Tú": "duermes",
	    "Él, Ella, Usted": "duerme",
	    "Nosotros": "dormimos",
	    "Vosotros": "dormis",
	    "Usteds": "duermen",
	    "Vos": "dormis"
        } 
    }
)

function exercise( practiceDefinition )
{
    var toCheck = practiceDefinition.toCheck;
    var checkValues = practiceDefinition.checkValues;


    var questions = [];

    for ( var i = 0; i < toCheck.length; i++) {
	    questions[i] =     {
		  type: 'input',
		  name: toCheck[i],
		  message: toCheck[i]
		};
	    }

    console.log("Sleep");


    inquirer.prompt(questions, function(response) {
	console.log(response);
       
	for ( var i = 0; i < toCheck.length; i++) {
	    if ( response[toCheck[i]] != checkValues[toCheck[i]] ){
		 console.log(response[toCheck[i]] + "=>" 
		       + checkValues[toCheck[i]] );
	    }
	}

    });
}
