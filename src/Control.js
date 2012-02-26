/**
 * Does all the mundane stuff...
 * @Author Todd Davies <todd434@gmail.com>
 * @Date Feb, 2012
 */

var list = new BookListAdapter();

function createItem() {
	var a = new Book();
	a.title = "Sample book";
	a.author = "Joe Dloggs";
	a.rating = 5;
	a.description = "This is a great book";
	a.price=0.0;
	a.imageURL="http://ecx.images-amazon.com/images/I/51FN0kR46NL._SL160_AA115_.jpg";
	list.createAndInflate(a);
};

function addBook() {
	var a = new Book();
	a.title = document.getElementById('tb_title').value;
	a.author = document.getElementById('tb_author').value;
	a.rating = document.getElementById('sel_rating').value;
	a.description = document.getElementById('tb_description').value;
	a.price=0.0;
	a.imageURL=document.getElementById('tb_iURL').value;
	list.createAndInflate(a);
};

function saveList() {
	list.save();
};

function printList() {
	list.printList();
};

function deleteIndex(index) {
	if(index==-1) {
		list.fadeAndRemove(document.getElementById('index').value);
	} else {
		list.fadeAndRemove(index);
	}
};

function load() {
	//Setup the list
	var itemType = new BookListItem();
	itemType.bg_color="#EEE";
	list.listItem = itemType;
	list.deleteFunction = "deleteIndex";
	list.parent = document.getElementById('list');
	list.key = "bookData";
	
	list.load();
	printList();
};

function reset() {
	list.clear();
	saveList();
	printList();
};