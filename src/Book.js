/**
 * A class to manage a book
 * @Author Todd Davies <todd434@gmail.com>
 * @Date Feb, 2012
 */

function Book() {
	var title = "";
	var author = "";
	var description = "";
	var rating = 0;
	var price = 0.0;
	var imageURL = "";
	var read = false;
	
	/**
	 * Stores the book in the local storage
	 */
	this.storeInLocalStorage = function(key) {
		localStorage.setItem(key, this.toJSONString());
	};
	
	/**
	 * Fetches the book from the local storage
	 */
	this.fetchFromStorage = function(key) {
		var storageItem = localStorage.getItem(key);
		this.parseJSON(storageItem);
	};
	
	/**
	 * Parses the JSON string given to the function
	 * and sets it as the values for the book
	 */
	this.parseJSON = function(json) {
		var tempBook = this;
		JSON.parse(json, function (key, value) {
    		switch(key)
			{
			case "title":
				tempBook.title = value;
    			break;
			case "author":
				tempBook.author = value;
    			break;
			case "description":
				tempBook.description = value;
    			break;
			case "rating":
				tempBook.rating = value;
    			break;
			case "price":
				tempBook.price = value;
    			break; 
			case "imageURL":
				tempBook.imageURL = value;
    			break; 
    		default :
    			break;
    		}
		});
	};
	
	/**
	 * @returns a json formated representation of the book
	 */
	this.toJSONString = function() {
		return JSON.stringify(this);
	};
	
	/**
	 * Returns a string representation of the book
	 * (intended for testing, not production!)
	 */
	this.toString = function() {
		return "Title: " + this.title + "<br />" +
			"Author: " + this.author + "<br />" +
			"Description: " + this.description + "<br />" +
			"Rating: " + this.rating + "<br />" +
			"Price: " + this.price;
	};
	
	/**
	 * Copies the properties of the book passed to the 
	 * function to this book
	 */
	this.setProperties = function(bk) {
		this.title = bk.title;
		this.author = bk.author;
		this.description = bk.description;
		this.rating = bk.rating;
		this.price = bk.price;
		this.imageURL = bk.imageURL;
	};
	
	/**
	 * Intended for use with the Array.sort() method
	 */
	this.compare = function(a, b) {
		if (a.rating < b.rating) {return -1;}
    	if (a.rating > b.rating) {return 1;}
    	if(a.rating==b.rating) {
    		if (a.title < b.title) {return -1;}
        	if (a.title > b.title) {return 1;}
        	if(a.title==b.title) {
        		if (a.author < b.author) {return -1;}
            	if (a.author > b.author) {return 1;}
            	if(a.author==b.author) {return 0;}
        	}
    	}
	};
}