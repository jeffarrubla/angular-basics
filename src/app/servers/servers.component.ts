import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
 /* template: `
  	<app-server></app-server>
  	<app-server></app-server>`,*/
  	templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = 'TestServer';
	serverCreated = false;
	servers = ['serverTest','serverTest 2'];
	displayParagraph = false;
	log = [];

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	} ,2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreated = true;
  	this.servers.push(this.serverName);
  	this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
  	this.serverName = (<HTMLInputelement>event.target).value;
  }

  DisplayParagraph(){
  	this.log.push(this.log.length + 1);
  	this.displayParagraph = !this.displayParagraph;
  }

  getColor() {
  	return this.log.length >= 5 ? 'blue': '';
  }
}
