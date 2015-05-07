var json = {
	"firstName":"Tommy",
	"lastName":"Trojan",
	"age":21,
	"phone":{
		"cell":"123-123-1234",
		"home":"789-789-7890"
	},
	"friends":[
		{
			"firstName":"John", 
			"lastName":"Smith"
		},
		{
			"firstName":"Jane", 
			"lastName":"Doe"
		}
	]
};

json.friends[0].firstName;


var jsonStr = '{"firstName":"Tommy","lastName":"Trojan","age":21,"phone":{"cell":"123-123-1234","home":"789-789-7890"},"friends":[{"firstName":"John", "lastName":"Smith"},{"firstName":"Jane", "lastName":"Doe"}]}';

var jsonObj = JSON.parse( jsonStr );
jsonObj.friends[0].firstName;


/**********
 * JSONP
 **********/