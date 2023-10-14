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


export let individualAccount = new IndividualAccount("Trees", "04/15/2019", 
	"treesEverywhere@gmail.com", "connection1 -->> tress1", listOfaccomplishments, 
	listOfSkills, "we are the best, planting more trees on 24th", educationInfo.toString());


//this is the community account below...
export let communityAccount = new CommunityAccount();
communityAccount.constructor3("about how people behave when their mad", 
	                           "linkToGoogle.com", "christmas season coming soon");
communityAccount.addConnection("Rhona from Eygpt");

communityAccount.addTopic("many saved people from AIDS");

export let getToString = "communityAccount:   " + communityAccount.toString();

//implementing accountManager class...!!!

let accountManager1 = new AccountManager();
accountManager1.addAccount(account1.toString());
accountManager1.addAccount(communityAccount.toString());
accountManager1.addAccount(account1.toString());
accountManager1.addAccount(communityAccount.toString());

console.log(accountManager1.toString());
console.log();

let accountManager2 = new AccountManager();
accountManager2.addAccount(account1.toString());

console.log(accountManager1.toString());
console.log();

