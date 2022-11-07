import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
       <input (keyup.enter)="onKeyUp($event)"/>
    `
})
export class CoursesComponent{
    onKeyUp($event: any) {
        console.log($event.target.value);
    }
}