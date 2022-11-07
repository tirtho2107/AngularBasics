import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
                <h3 [textContent]="title"></h3>
                <img [src]="imageUrl"/>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
    `
})
export class CoursesComponent{
    title = "List of courses";
    imageUrl = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/cb/3c4030d65011e682d8b14e2f0915fa/shutterstock_226881610.jpg?auto=format%2Ccompress&dpr=1"
    courses;
    
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}