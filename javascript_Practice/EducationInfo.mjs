    //this class describes the alignment of a slot of education info on linkedin...

export class EducationInformation {
	schoolName; major; GPA; 
	schoolAccomplishments = [];

	constructor(){
		this.schoolName = "default_schoolName";
		this.major = "default_major";
		this.GPA = 0.2;
	}

	constructor2(schoolName, major, GPA, schoolAccomplishment){
		this.schoolName = schoolName;
		this.major = major;
		this.GPA = GPA;
		this.schoolAccomplishments.push(schoolAccomplishment);
	}

	set schoolName(schoolName){
		this.schoolName = schoolName;
	}

	set major(major){
		this.major = major;
	}

	set GPA(GPA){
		this.GPA = GPA;
	}

	set_schoolAccomplishment(Accomplishment, newAccomplishment){  //updates an accomplishment...
		for(let accomplishment in schoolAccomplishments){
			if(Accomplishment == accomplishment){
				accomplishment = newAccomplishment;
			}
		}
	}

	get schoolName(){
		return this.schoolName;
	}

	get major(){
		return this.major;
	}

	get GPA(){
		return this.GPA;
	}

	get schoolAccomplishments(){  //returns all accomplishments...
		return this.schoolAccomplishments;
	}

	addAccomplishment(newAccomplishment){  //adds an accomplishment...
		this.schoolAccomplishments.push(newAccomplishment);
	}

	removeAccomplishment(removeAccomplishment){  //removes an accomplishment
		let findIndexOfAccomplishment = this.schoolAccomplishments.indexOf(removeAccomplishment);
		this.schoolAccomplishments.splice(findIndexOfAccomplishment, 1);
	}
	
	toString(){
		let _toString = this.schoolName + ", " + this.major + ", " + this.GPA + ", " + 
		                this.schoolAccomplishments;
        return _toString;
	}
}