import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})

export class ServerComponent {
    ServerId: number = 10;
    ServerStatus: string = 'running';

    constructor() {
        this.ServerStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getDoubleServerId () {
        return this.ServerId * 2
    }

    getColor() {
        return this.ServerStatus === 'online' ? 'green' : 'red'
    }
}