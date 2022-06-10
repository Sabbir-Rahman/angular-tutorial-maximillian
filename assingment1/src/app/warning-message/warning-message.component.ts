import { Component } from "@angular/core";

@Component({
    selector: 'warning-message',
    template: `
        <h3>Warning</h3>
    `,
    styles: [`
        h3 {
            background-color: mistyrose;
            border: 1px solid red;
            padding: 20px;
        }   
    `]
})
export class WarningMessageComponent {

}