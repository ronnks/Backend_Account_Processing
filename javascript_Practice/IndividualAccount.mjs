 //this is an individual account ...

import { Account } from './Account.mjs';
import { EducationInformation } from './EducationInfo.mjs';

export class IndividualAccount extends Account{
	accomplishmentsList = []; 
	skillsList = []; 
	notice; 
	educationInformation = new EducationInformation();

	constructor(name, dateCreated, eMail, connection, accomplishment, skill, notice, 
		        educationInformation){
		super(name, dateCreated, eMail, connection);
		this.accomplishmentsList.push(accomplishment);
		this.skillsList.push(skill);
		this.notice = notice;
		this.educationInformation = educationInformation;
	}

	constructor2(){
		Account.constructor2();
		this.accomplishments = "default_accomplishments";
		this.notice = "default_notice";
	}

	constructor3(accomplishments, skill, notice, educationInformation){
		super.constructor2()
		this.accomplishmentsList.push(accomplishments);
		this.skillsList.push(skill);
		this.notice = notice;
		this.educationInformation = educationInformation;
	}

	set_accomplishments(accomplishment, newAccomplishments){ //sets an accomplishment...
		for(let _accomplishment in accomplishmentsList){
			if(accomplishment == _accomplishment){
				_accomplishment = newAccomplishment;
			}
		}
	}

	set_skill(skill, newSkill){  //sets skill ...
		for(let _skill in skillsList){
			if(skill == _skill){
				_skill = newSkill;
			}
		}
	}

	set notice(notice){
		this.notice = notice;
	}

	set educationInformation(educationInformation){
		this.educationInformation = educationInformation;
	}

	get_accomplishment(accomplishment){ //returns  an accomplishment..
		for(let _accomplishment in accomplishmentsList){
			if(accomplishment == _accomplishment){
				return accomplishment;

			}else{
				return "Not Found:"
			}
		}
	}

	get_skill(getSkill){
		for(let _skill in this.skillsList){
			if(getSkill == _skill){
				return _skill;

			}else{
				return "Not Found:"
			}
		}
	}

	get notice(){
		return this.notice;
	}

	get educationInformation(){
		return this.educationInformation;
		
	}

	addAccomplishment(newAccomplishment){  //adds a new accomplishment...
		this.accomplishmentsList.push(newAccomplishment);
	}

	removeAccomplishment(removeAccomplishment){  //removes an accomplishment
		let findIndexOfAccomplishment = this.accomplishmentsList.indexOf(removeAccomplishment);
		this.accomplishmentsList.splice(findIndexOfAccomplishment, 1);
	}

	addSkill(newSkill){  //adds a new skill...
		this.skillsList.push(newSkill);
	}

	removeSkill(removeSkill){  //removes an skill
		let findIndexOfSkill = this.skillsList.indexOf(removeSkill);
		this.skillsList.splice(findIndexOfskill, 1);
	}

	set_schoolName(schoolName){  //sets school name for educationInformation...
		this.educationInformation.schoolName = schoolName;
	}

	set_major(major){    //sets major for educationInformation...
		this.educationInformation.major = major;
	}

	set_GPA(GPA){  //sets GPA for educationInformation...
		this.educationInformation.GPA = GPA;
	}

	set_schoolAccomplishment(Accomplishment, newAccomplishment){  //updates an accomplishment for educationInformation...
		this.educationInformation.set_schoolAccomplishment(Accomplishment, newAccomplishment);
	}

	get_schoolName(){ //returns school name for educationInformation...
		return this.educationInformation.schoolName;
	}

	get_major(){  //returns major for educationInformation...
		return this.educationInformation.major;
	}

	get_GPA(){   //returns GPA for educationInformation...
		return this.educationInformation.GPA;
	}

	get_schoolAccomplishments(){ //returns school accomplishment for educationInformation...
		return this.educationInformation.schoolAccomplishments;
	}

	addAccomplishment(newAccomplishment){  //adds an accomplishment for educationInformation...
		this.educationInformation.schoolAccomplishments.push(newAccomplishment);
	}

	removeAccomplishment(removeAccomplishment){  //removes an accomplishment for educationInformation...
		this.educationInformation.removeAccomplishment(removeAccomplishment);
	}

	toString(){
		let _toString = super.toString() + this.accomplishments + ", " + 
		                this.skills + ", " + this.notice + ", " + 
		                this.educationInformation;
        return _toString;
	}

}
