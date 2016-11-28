// object creation (name/value pair)
// var company = new Object();
// company.name = "Facebook";
// //console.log(company);
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("company CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;
// //company["stock of company"] = 110;
// console.log("stock price is: " + company["stock of company"]);


// Better way: object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	"stock of company": 110
};

console.log(facebook);
console.log(facebook.ceo.firstName);