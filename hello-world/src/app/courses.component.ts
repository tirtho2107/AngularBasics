import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
       {{ course.title | uppercase }} <br/>
       {{ course.doneBy }} <br/>
       {{ course.duration | number}} <br/>
       {{ course.hoursNeeded | number:'2.1-2'}} <br/>
       {{ course.price | currency:'INR'}} <br/>
       {{ course.date | date:'shortDate'}} <br/>
    `
})
export class CoursesComponent{
    course = {
        title: "The Basics of Angular",
        doneBy: "Tirtho",
        duration: 300000,
        hoursNeeded: 40.2,
        price: 100.22,
        date: new Date(2022, 11, 7)
    }
}