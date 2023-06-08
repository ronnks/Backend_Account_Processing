     //testing classes,,....!!!

import { Account, Job, EducationInformation, IndividualAccount, CommunityAccount, 
         BusinessAccount, AccountManager} 
from "./Export_All_Classes.mjs";

//testing Account classes!!

let account1 = new Account();
account1.constructor2("Good Building Schemes", "02/21/2019", 
	                  "goodbuildingschems@gmail.com", "james: connected");
account1.addConnection("tommy: connected");
account1.name = "Perfect Building Schems";
//account1.set_connection(1, "jonny: connected");
//account1.addConnection("jonny: connected");

console.log("account1:   " + account1.toString());
console.log("\n");


//these are all part of the inidividual account below...
export let listOfaccomplishments = ["planted 100 trees", "saved 1000 trees"];
export let listOfSkills = ["planting", "harventing", "prunning"];
export let schoolAccomplishments = ["taught a few students", "mentored students"];

export let educationInfo = new EducationInformation();
educationInfo.constructor2("Massbay", "computer science", 3.1, 
	                                           "bought 1000 trees in 2019");
educationInfo.addAccomplishment(schoolAccomplishments[0]);
educationInfo.addAccomplishment(schoolAccomplishments[1]);
educationInfo.addAccomplishment("cured 20 trees");
//educationInfo.removeAccomplishment(schoolAccomplishments[1]);


export let individualAccount = new IndividualAccount("Trees", "04/15/2019", 
	"treesEverywhere@gmail.com", "connection1 -->> tress1", listOfaccomplishments, 
	listOfSkills, "we are the best, planting more trees on 24th", educationInfo.toString());

console.log("individualAccount:  " + individualAccount);
console.log("\n");
console.log("individualAccount.educationInformation:  " + individualAccount.educationInformation + "\n\n");


//this is the community account below...
export let communityAccount = new CommunityAccount();
communityAccount.constructor3("about how people behave when their mad", 
	                           "linkToGoogle.com", "christmas season coming soon");

communityAccount.name = ("livelihood in the community");
communityAccount.dateCreated = ("05/12/1992");
communityAccount.eMail = ("communityconnection025@gmail.com");
communityAccount.addConnection("Rhona from Eygpt");

communityAccount.addTopic("many saved people from AIDS");

export let getToString = "communityAccount:   " + communityAccount.toString();

console.log("\n");
console.log(getToString);
console.log("\n");

//implementing accountManager class...!!!

let accountManager1 = new AccountManager();
accountManager1.addAccount(account1.toString());
accountManager1.addAccount(communityAccount.toString());
accountManager1.addAccount(account1.toString());
accountManager1.addAccount(communityAccount.toString());

console.log(accountManager1.toString());


