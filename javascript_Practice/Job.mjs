                   //this is the Job class ...
export class Job {
	title; jobDescription; curNumOfDaysOfAdvertising; maxNumOfDaysForAdvertising;

	constructor() {
		this.title = "default_title";
		this.jobDescription = "default_jobDescription";
		this.curNumOfDaysOfAdvertising = 0;
		this.maxNumOfDaysForAdvertising = 0;
	}

	constructor2(title, jobDescription, curNumOfDaysOfAdvertising, maxNumOfDaysForAdvertising) {
		this.title = title;
		this.jobDescription = jobDescription;
		this.curNumOfDaysOfAdvertising = curNumOfDaysOfAdvertising;
		this.maxNumOfDaysForAdvertising = maxNumOfDaysForAdvertising;
	}

	set title(title){
		this.title = title;
	}

	set jobDescription(jobDescription){
		this.jobDescription = jobDescription;
	}

	set curNumOfDaysOfAdvertising(curNumOfDaysOfAdvertising){
		this.curNumOfDaysOfAdvertising = curNumOfDaysOfAdvertising;
	}

	set maxNumOfDaysForAdvertising(maxNumOfDaysForAdvertising){
		this.maxNumOfDaysForAdvertising = maxNumOfDaysForAdvertising;
	}

	get title(){
		return this.title;
	}

	get jobDescription(){
		return this.jobDescription;
	}

	get curNumOfDaysOfAdvertising(){
		return this.curNumOfDaysOfAdvertising;
	}

	get maxNumOfDaysForAdvertising(){
		return this.maxNumOfDaysForAdvertising;
	}

	detectExpiredJob(){
		if(this.curNumOfDaysOfAdvertising > this.maxNumOfDaysForAdvertising){
			return 1;
		}else {
			return 0;
		}
	}

	toString(){
		let _toString = this.title + ", " + this.jobDescription + ", C: " + 
		                this.curNumOfDaysOfAdvertising + ", M: " + 
		                this.maxNumOfDaysForAdvertising;
        return _toString;
	}
}

