import {Directive,ElementRef,Renderer} from 'angular2/core';
@Directive({
	selector:'[autoGrow]',
	host:{
		'(focus)':'onFocus()',
		'(blur)':'onBlur'
	}
})
export class AutoGrowDirective{
	constructor(private el:ElementRef,private renderer:Renderer){

	}
	onFocus(){
		console.log("focus event");
		//this.renderer.setElementStyle(this.el,'width','500');
	}
	onBlur(){
		console.log("blur event");	
		//this.renderer.setElementStyle(this.el,'width','100');
	}
}