import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
       {{ text | summary:50}}
    `
})
export class CoursesComponent{
    text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quae pariatur, inventore laudantium minima in? Aperiam odit facilis rerum ipsam, eligendi facere amet accusamus doloribus, nam, iusto ut expedita laboriosam.
    `
}