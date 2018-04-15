import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
	selector:'author',
	template:`<h2>Author</h2><h5>{{authorTitle}}</h5>
			<ul>
				<li *ngFor="#author of authorList">{{author}}</li>
			</ul>`,
	providers:[AuthorService]
})

export class AuthorComponent{
	authorTitle="THis is the author title";
	authorList;
	constructor(authorService:AuthorService){
		this.authorList = authorService.getAuthorList();
	}
}