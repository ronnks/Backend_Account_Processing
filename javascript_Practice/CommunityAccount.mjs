//THIS IS A COMMUNITY ACCCOUNT ...

import { Account } from "./Account.mjs";

export class CommunityAccount extends Account{
	topicOfInterestList = []; 
	link; event;

	constructor(topicOfInterest, link, event){
		super.constructor();
		this.link = "default_link";
		this.event = "default_event";
	}

	constructor2(name, dateCreated, eMail, connection){
		super.constructor2(name, dateCreated, eMail, connection);
		this.name = name;
		this.dateCreated = dateCreated;
		this.eMail = eMail;
		this.connection = connection;
	}

	constructor3(topicOfInterest, link, event){
		super.constructor3();
		this.topicOfInterestList.push(topicOfInterest);
		this.link = link;
		this.event = event;
	}

	constructor2(name, dateCreated, eMail, connection, topicOfInterest, link, event){
		super.constructor2(name, dateCreated, eMail, connection);
		this.topicOfInterestList.push(topicOfInterest);
		this.link = link;
		this.event = event;
	}

	set_topicOfInterest(topicOfInterest, newTopicOfInterest){
		for(let topic in this.topicOfInterestList){
			if(topicOfInterest == topic){
				topic = newTopicOfInterest;
			}
		}
	}

	set link(link){
		this.link = link;
	}

	set event(event){
		this.event = event;
	}

	get_topicOfInterest(topicOfInterest, FindTopicOfInterest){
		for(let topic of this.topicOfInterestList){
			if(topicOfInterest == topic){
				return topic;
			}
		}
	}

	get link(){
		return this.link;
	}

	get event(){
		return this.event;
	}

	addTopic(addTopic){  //adds a topic...
		this.topicOfInterestList.push(addTopic);
	}

	removeTopic(removeTopic){ //remove a topic...
		let findIndexOfTopic = this.topicOfInterestList.indexOf(removeTopic);
		this.topicOfInterestList.splice(findIndexOfTopic, 1);
	}

	listOftopicsOfInterest(){
		for(let topic of this.topicOfInterestList){
			return topic + "";
		}
	}

	toString(){
		let _toString = super.toString() + ", " + this.listOftopicsOfInterest() + ", " + 
		                this.link + ", " + this.event;
        return _toString;
	}
}

