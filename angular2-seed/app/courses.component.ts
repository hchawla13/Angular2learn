import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
	selector:'courses',
	template:`<h2>Courses</h2>
	{{title}}
	<ul>
		<li *ngFor="#course of courselist">{{course}}</li>
	</ul>`,
	providers:[CourseService]
})

export class CoursesComponent {
	title = "This is the title";
	courselist;
	constructor(courseService:CourseService){
		this.courselist = courseService.getCourses();
	}
}