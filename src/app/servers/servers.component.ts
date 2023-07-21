import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  servers: string[] = ["TestServer", "TestServer2"];
  newServerAllowed: boolean = false;
  serverCreated: boolean = false;
  serverName: string = "Server Name";

  constructor() {
    setTimeout(() => this.newServerAllowed = true, 2000);
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
