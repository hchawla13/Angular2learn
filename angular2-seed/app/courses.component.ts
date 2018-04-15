import {Component} from 'angular2/core';

@Component({
	selector:'courses',
	template:`<h2>Courses</h2>
	{{title}}
	<ul>
		<li *ngFor="#course of courselist">{{course}}</li>
	</ul>

	`
})

export class CoursesComponent {
	title = "This is the title";
	courselist = ["Course1","Course2","Course3","Course4"]
}