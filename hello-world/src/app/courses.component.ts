import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
    `
})
export class CoursesComponent{
    isActive = true;
    onDivClicked(){
        console.log("Div was clicked");
    }
    onSave($event: any) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }
}