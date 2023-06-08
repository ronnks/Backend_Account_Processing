/*this class is accountable to storing more than one account and managing them
                 accordingly*/

import {Account, Job, EducationInformation, IndividualAccount, CommunityAccount, 
         BusinessAccount} from "./Export_All_Classes.mjs";

export class AccountManager {
	accountsList = []; //list variable...

	constructor(){
		
	}

	constructor2(Account){
		this.this.accountsList.push(Account);
	}

	addAccount(Account){         //adds account from the manager...
		this.accountsList.push(Account);
	}

	removeAccount(Account){    //removes account from the manager...
		let findIndexOfTheAccount = this.this.accountsList.indexOf(Account);
		this.this.accountsList.splice(findIndexOfTheAccount, 1);
	}

	set_name(Account, name){        //sets account name...
		for(let account of this.this.accountsList){
			if(Object.is(Account, account)){
				account.name(name);
			}
		}
	}

	set_dateCreated(Account, dateCreated){          //sets the initial of the account...
		for(let account of this.this.accountsList){
			if(Object.is(Account, account)){
				account.dateCreated(dateCreated);
			}
		}
	}

	set_eMail(Account, eMail){         //sets the email for the account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.eMail(eMail);
			}
		}
	}

	set_connection(Account, index, connection){        //sets a specific connection...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.set_connection(index, connection);
			}
		}
	}

	get_name(Account){     //returns the name of the account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.name;
			}
		}
	}

	get_dateCreated(Account){      //returns the initial date of the account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.dateCreated;
			}
		}
	}

	get_eMail(Account){       //returns the email of the account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.eMail;
			}
		}
	}

	get_connection(Account, get_connection){       //returns a connection...
        for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.connection(get_connection);
			}
		} 
	}

	get_connections(Account){       //returns all connections...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.connections;
			}
		}
	}

	addConnection(Account, newConnection){ //adds new connection to an account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.addConnection(newConnection);
			}
		}
	}

	set_accomplishments(Account, accomplishment, newAccomplishment){ //sets an accomplishment for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.set_accomplishments(accomplishment, newAccomplishment);
			}
		}
	}

	set_skill(Account, skill){
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.skill(skill);
			}
		}
	}

	set_notice(Account, notice){
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.notice(notice);
			}
		}
	}

	set_educationInformation(Account, educationInformation){
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.set_educationInformation(educationInformation);
			}
		}
	}

	get_accomplishment(Account, accomplishment){ //returns  an accomplishment for individual account..
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_accomplishment(accomplishment);
			}
		}
	}

	get_skill(Account, findSkill){ //return a specific skill of a specific account....
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_skill(findSkill);
			}
		}
	}

	get_notice(Account){
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_notice();
			}
		}
	}

	get_educationInformation(Account){
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_educationInformation();
			}
		}
	}

	addAccomplishment(Account, newAccomplishment){  //adds a new accomplishment for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.addAccomplishment(newAccomplishment);
			}
		}
	}

	removeAccomplishment(Account, removeAccomplishment){  //removes an accomplishment for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.removeAccomplishment(removeAccomplishment);
			}
		}
	}

	addSkill(Account, addSkill){
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.addSkill(addSkill);
			}
		}
	}

	removeSkill(Account, removeSkill){
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.removeSkill(removeSkill);
			}
		}
	}

	get_schoolAccomplishmentsDetails(Account){
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_schoolAccomplishmentsDetails();
			}
		}
	}

	set_schoolName(Account, schoolName){  //sets school name for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.set_schoolName(schoolName);
			}
		}
	}

	set_major(Account, major){    //sets major for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.set_major(major);
			}
		}
	}

	set_GPA(Account, GPA){  //sets GPA for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.set_GPA(GPA);
			}
		}
	}

	set_schoolAccomplishment(Account, Accomplishment, newAccomplishment){  //updates an accomplishment for educationInformation for individual account...
        for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.set_schoolAccomplishment(Accomplishment, newAccomplishment);
			}
		} 
	}

	get_schoolName(Account){ //returns school name for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_schoolName();
			}
		}
	}

	get_major(Account){  //returns major for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_major();
			}
		}
	}

	get_GPA(Account){   //returns GPA for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_GPA();
			}
		}
	}

	get_schoolAccomplishments(Account){ //returns school accomplishment for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_schoolAccomplishments;
			}
		}
	}

	addAccomplishment(Account, newAccomplishment){  //adds an accomplishment for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.addAccomplishment(newAccomplishment);
			}
		}
	}

	removeAccomplishment(Account, removeAccomplishment){  //removes an accomplishment for educationInformation for individual account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.removeAccomplishment(removeAccomplishment);
			}
		}
	}

	set_topicOfInterest(Account, topicOfInterest, newTopicOfInterest){ //sets a specific topic for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.set_topicOfInterest(topicOfInterest, newAccomplishment);
			}
		}
	}

	set_link(Account, link){  //sets a specific topic for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.link(link);
			}
		}
	}

	set_event(Account, event){  //sets a specific topic for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.event(event);
			}
		}
	}

	get_topicOfInterest(Account, topicOfInterest, FindTopicOfInterest){  //sets a specific topic for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.get_topicOfInterest(topicOfInterest, FindTopicOfInterest);
			}
		}
	}

	get_link(Account){   //sets a specific topic for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.link();
			}
		}
	}

	get_event(Account){  //sets a specific topic for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				return account.event(Account);
			}
		}
	}

	addTopic(Account, addTopic){  //adds a topic//sets a specific topic for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.addTopic(addTopic);
			}
		}
	}

	removeTopic(Account, removeTopic){ //remove a topic //sets a specific topic for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.removeTopic(removeTopic);
			}
		}
	}

	listOftopicsOfInterest(Account){  //makes a list of all topics for a community account...
		for(let account of this.accountsList){
			if(Object.is(Account, account)){
				account.listOftopicsOfInterest();
			}
		}
	}

	toString(){
		for(let account of this.accountsList){
			return account.toString();
		}
	}
}

