import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";

@Component({
    selector: 'courses',
    template: `
        <table>
            <<tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
    `
})
export class CoursesComponent{
    imageUrl = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/cb/3c4030d65011e682d8b14e2f0915fa/shutterstock_226881610.jpg?auto=format%2Ccompress&dpr=1";
    colSpan = 2;
}