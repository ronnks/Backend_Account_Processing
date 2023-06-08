		  //THIS IS AN ACCOUNT CLASS...

export class Account {
	name; dateCreated; eMail; 
	connectionList = [];

	constructor(){
		this.name = "default_name";
		this.dateCreated = "02/20/2019";
		this.eMail = "default@defaultMail.com";
	}

	constructor2(name, dateCreated, eMail, connection){
		this.name = name;
		this.dateCreated = dateCreated;
		this.eMail = eMail;
		this.connectionList.push(connection);
	}

	constructor3(){
		this.name = "default_name";
		this.dateCreated = "02/20/2019";
		this.eMail = "default@defaultMail.com";
	}

	set name(name){
		this.name = name;
	}

	set dateCreated(dateCreated){
		this.dateCreated = dateCreated;
	}

	set eMail(eMail){
		this.eMail = eMail;
	}

	set_connection(index, connection){
		this.connectionList.with(index, connection);
	}

	get name(){
		return this.name;
	}

	get dateCreated(){
		return this.dateCreated;
	}

	get eMail(){
		return this.eMail;
	}

	get connections(){
		return this.connectionList.foreach(connection => (connection));
	}

	addConnection(newConnection){
		this.connectionList.push(newConnection);
	}

	toString(){
		let _toString = this.name + ", " + this.dateCreated + ", " + this.eMail + ", " + 
		                this.connectionList;
        return _toString;
	}
}


