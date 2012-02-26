/**
 * An object oriented class for displaying an book
 * @Author Todd Davies <todd434@gmail.com>
 * @Date Feb, 2012
 */
function BookListItem() {
	//Variables
	var book = new Book();
	var bg_color = "#fff";
	var width = "100%";
	var margin = "10px";
	var padding = "10px";
	var display = "block";
	var deleteFunction = "";
	
	this.setBook = function(bk) {
		this.book = bk;
	};
	
	this.createView = function(element) {
		//Clean element
		element.innerHTML = "";
		
		//Asthetics
		element.style.backgroundColor = this.bg_color;
		element.style.width = width;
		element.style.margin = margin;
		element.style.padding = padding;
		element.style.display = display;
		
		//Title
		var titleElement = document.createElement('a');
		titleElement.setAttribute('id', 'list_bookTitle');
		titleElement.style.fontWeight="900";
		titleElement.appendChild(document.createTextNode("" + this.book.title + ""));
		element.appendChild(titleElement);
		
		//Image
		var imageElement = document.createElement('img');
		imageElement.setAttribute('src', this.book.imageURL);
		imageElement.style.float="right";
		imageElement.style.position="relative";
		imageElement.style.height = "70px";
		element.appendChild(imageElement);
		
		this.lineBreak(element);
		
		//Author
		var authorElement = document.createElement('a');
		authorElement.setAttribute('id', 'list_bookAuthor');
		authorElement.appendChild(document.createTextNode(this.book.author));
		element.appendChild(authorElement);
		
		this.lineBreak(element);
		
		//Rating
		var ratingElement = document.createElement('a');
		ratingElement.setAttribute('id', 'list_bookRating');
		ratingElement.appendChild(document.createTextNode("My rating: " + this.book.rating + "/5"));
		element.appendChild(ratingElement);
		
		this.lineBreak(element);
		
		var deleteBtnElement = document.createElement('input');
		deleteBtnElement.setAttribute('type', 'button');
		deleteBtnElement.setAttribute('value', 'Delete');
		deleteBtnElement.setAttribute('onClick', this.deleteFunction);
		deleteBtnElement.style.position="inherit";
		deleteBtnElement.style.verticalAlign="middle";
		element.appendChild(deleteBtnElement);
		
		this.lineBreak(element);
		this.lineBreak(element);
		
		//Description
		var descriptionElement = document.createElement('a');
		descriptionElement.setAttribute('id', 'list_bookDescription');
		descriptionElement.appendChild(document.createTextNode(this.book.description));
		element.appendChild(descriptionElement);
	};
	
	this.lineBreak = function(element) {
		element.appendChild(document.createElement('br'));
	};
}