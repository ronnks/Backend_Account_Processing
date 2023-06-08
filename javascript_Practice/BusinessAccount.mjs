 //THIS IS A BUSINESS ACCCOUNT ...

import { Account } from "./Account.mjs";
import { Job } from "./Job.mjs";

export class BusinessAccount extends Account{
	secondaryEmail;
	listOfJobs = []; 

	constructor(){
		super();
		this.secondaryEmail = "default_secondaryEmail";
	}

	constructor2(name, dateCreated, eMail, connection, secondaryEmail, job){
		super.constructor2(name, dateCreated, eMail, connection);
		this.secondaryEmail = secondaryEmail;
		this.listOfJobs.push(job);
	}

	constructor3(secondaryEmail, job){
		super.constructor3();
		this.secondaryEmail = secondaryEmail;
		this.listOfJobs.push(job);
	}

	set secondaryEmail(secondaryEmail){
		this.secondaryEmail = secondaryEmail;
	}

	get secondaryEmail(){
		return this.secondaryEmail;
	}

	set_Job(index, job){ //sets a job
		this.listOfJobs.splice(index, 1, job);
	}

	get_Job(index){  //returns a specific job
		for (let i = 0; i < this.listOfJobs.length; i++) {
			if(i == index){
				return this.listOfJobs[i];
			}
		}
	}
                //adds a specific job...
	addAJob(Job){
		this.listOfJobs.push(Job);
	}
                  //removes a specific job...
	removeAJob(Job){
		let indexOfJob = this.listOfJobs.indexOf(Job);
		this.listOfJobs.splice(indexOfJob, 1);
	}
      
                  //editing the job description of a specific job
	editJobDescription(jobDescription, newJobDescription){
		for(let job in this.listOfJobs){
			if(job.jobDescription == JobDescription){
				job.jobDescription(newJobDescription);
			}
		}
	}

	editCurNumOfDaysOfAdvertising(curNumOfDaysOfAdvertising, newCurNumOfDaysOfAdvertising){
		for(let job in this.listOfJobs){
			if(job.curNumOfDaysOfAdvertising == CurNumOfDaysOfAdvertising){
				job.curNumOfDaysOfAdvertising(newCurNumOfDaysOfAdvertising);
			}
		}
	}

	editMaxNumOfDaysForAdvertising(maxNumOfDaysForAdvertising, newMaxNumOfDaysForAdvertising){
		for(let job in this.listOfJobs){
			if(job.maxNumOfDaysForAdvertising == maxNumOfDaysForAdvertising){
				job.maxNumOfDaysForAdvertising(newMaxNumOfDaysForAdvertising);
			}
		}
	}

	getJobDescription(Job){
		for(let job in this.listOfJobs){
			if(job.equals(Job)){
				return job.jobDescription();
			}
		}
	}
         //gets current days of advertising of a job...
	getCurNumOfDaysOfAdvertising(Job){
		for(let job in this.listOfJobs){
			if(job.equals(Job)){
				return job.curNumOfDaysOfAdvertising();
			}
		}
	}
         //gets maximum days of a job, that it must be advertised...
	getMaxNumOfDaysForAdvertising(Job){
		for(let job in this.listOfJobs){
			if(Object.is(job, Job)){
				return job.maxNumOfDaysForAdvertising();
			}
		}
	}
             //gets the entire list of the jobs advertised....
	list_Of_Jobs(){
		this.listOfJobs.forEach(job => {
			return (job.toString() + "\n");
		});
	}

	removeExpiredJob(){
		this.listOfJobs.forEach(job => {
			if(job.detectExpiredJob() == 1){
				let indexOfJob = this.listOfJobs.indexOf(job);
				this.listOfJobs.splice(indexOfJob, 1);
			}
		});
	}

	toString(){
		let _toString = super.toString() + ", " + this.secondaryEmail + ", " + 
		                this.list_Of_Jobs();
        return _toString;
	}
}

   //these are the job objects...
let job1 = new Job();
let job2 = new Job();
let job3 = new Job();

job1.constructor2("Financial Analyst", "analyses all financial books in the company", 
	               91, 180);

job2.constructor2("Commander", "leads the army", 
	               38, 59);

job3.constructor2("Teacher", "teaches students in the school", 
	               64, 38);

  /// business object for testing...
let businessAccount = new BusinessAccount();
businessAccount.constructor2("Oracle", "05/14/1994", "oracle94@gmail.com", 
	                         "Gates: connected with Oracle", 
	                         "oracle.larry.corporate@gmail.com", job1);

businessAccount.addAJob(job2);
businessAccount.addAJob(job3);

//businessAccount.removeExpiredJob();

console.log(businessAccount.toString());
console.log("\n");

console.log(businessAccount.getMaxNumOfDaysForAdvertising(job3));

