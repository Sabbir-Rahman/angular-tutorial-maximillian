import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName = ''
  isServerCreated = false
  servers = ["TestServer 1", "TestServer2"]

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.isServerCreated = true
    this.serverCreationStatus = 'Server was created and server name is ' + this.serverName
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
