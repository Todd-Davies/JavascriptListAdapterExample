/**
 * An object oriented class for creating lists of books
 * @Author Todd Davies <todd434@gmail.com>
 * @Date Feb, 2012
 */
function BookListAdapter() {
	//Variables
	var bookArray = [];
	var listItem = null;
	var parent = null;
	//Settings
	var nobooks = "You have no books in your list";
	var margin = "auto";
	var width = "380px";
	var deleteFunction = "";
	var key = "";
	
	//=======================================================
	// Array Management
	//=======================================================
	
	/**
	 * Add an book to the end of the list
	 */
	this.appendBook = function(bk) {
		bookArray.push(bk);
		console.log("Book added at index " + (bookArray.length-1));
		this.save();	
	};
	
	/**
	 * Inserts an book at the specific index
	 */
	this.insertBook = function(bk, index) {
		bookArray.splice(index, 0, bk);
		console.log("Book added at index " + index);
		this.save();	
	};
	
	/**
	 * Remove the book at the index
	 */
	this.removeBook = function(index) {
		if(index==bookArray.length-1) {
			bookArray.pop();
		} else {
			bookArray.splice(index, 1);
		}
		this.save();	
		console.log("Book removed (index: " + index + ")");
	};
	
	/**
	 * Clears the list
	 */
	this.clear = function() {
		bookArray = [];
		this.save();	
	};
	
	//=======================================================
	// Display 
	//=======================================================	
	this.fadeAndRemove = function(index) {
		this.removeBook(index);
		$('#listItem_' + index).animate({ height: 0, marginBottom: -10, marginTop: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 }, 500, 
			function() {
				var element = document.getElementById('listItem_' + index);
				element.parentNode.removeChild(element);
				printList();
			}
		);
	};
	
	this.createAndInflate = function(bk) {
		this.appendBook(bk);
		var a = (bookArray.length-1);
		var item = this.listItem;
		item.book = bk;
		item.deleteFunction = (this.deleteFunction+'('+a+');');
		var listElement = document.createElement('div');
		listElement.setAttribute('id', 'listItem_' + a); 
		item.createView(listElement);
		listElement.style.height="0";
		this.parent.appendChild(listElement);
		$('#listItem_' + a).animate({"height": "100"}, 300, 
			function() {
				printList();
			}
		);
	};
	
	/**
	 * Prints the list
	 * author: Todd Davies 2011
	 */
	this.printList = function() {
		console.log("Redrawing list");
		this.parent.innerHTML = "";
		if(bookArray==null||bookArray.length==0) {
			var emptyNotice = document.createTextNode(nobooks);
			this.parent.appendChild(emptyNotice);
		} else {
			var listElement = document.createElement('div');
			listElement.setAttribute('id', 'listheader'); 
			listElement.setAttribute('width', '100%');
			listElement.setAttribute('height', '1px');
			listElement.setAttribute('background', '#00000000');
			this.parent.appendChild(listElement);
			for(a in bookArray) {
				var item = this.listItem;
				item.book = bookArray[a];
				item.deleteFunction = (this.deleteFunction+'('+a+');');
				var listElement = document.createElement('div');
				listElement.setAttribute('id', 'listItem_' + a); 
				item.createView(listElement);
				this.parent.appendChild(listElement);
			}	
		}
		
		this.parent.style.marginLeft = margin;
		this.parent.style.marginRight = margin;
		this.parent.style.width = width;
	};

	//=======================================================
	//Local Storage
	//=======================================================	
	/**
	 * Saves the list to local storage
	 */
	this.save = function() {
		var jsondata = JSON.stringify(bookArray).toString();
		jsondata = "{\"books\" : [" + jsondata.substring(1,jsondata.length) + "}";
		localStorage.setItem(this.key, jsondata);
	};
	
	/**
	 * Loads the list from storage
	 */
	this.load = function() {
		console.log("Loading books from local storage");
		var json = JSON.parse(localStorage.getItem(this.key));
		if(json==null) {console.log("No data to load"); return;}
		for(i=0;i<=(json.books.length-1);i++) {
			var bk = new Book();
			JSON.parse(JSON.stringify(json.books[i]), function (key, value) {
	    		switch(key)
				{
				case "title":
					bk.title = value;
	    			break;
				case "author":
					bk.author = value;
	    			break;
				case "description":
					bk.description = value;
	    			break;
				case "rating":
					bk.rating = value;
	    			break;
				case "price":
					bk.price = value;
	    			break; 
				case "imageURL":
					bk.imageURL = value;
					bookArray[i] = bk;
					bk = new Book();
					break;
	    		}
			});
		}
		console.log("Loading complete, " + bookArray.length + " books read");
	};
}