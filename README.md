Javascript List Adapter Example
=============

This is an example of a Javascript implementation of the List Adapter pattern used in Android.

A list adapter is basically some code that takes some data, and displays it in a list. To
make the list adapter work, we need to give it the following things:

-  A list item (BookListItem.js takes a Book.js and prints out a nice div)
-  A dataset (an array of Book.js objects)

The list adapter iterates through the array of books and print out each book in turn, so
generating a list :-)

This mini app allows you to keep track of what books you've read, and what you thought about them.
It stores user data in JSON format using local storage.

This is intended to be a proof of concept project, not a serious one. Take a look at how the
list items are generated, interfaced with the local storage and how they are manipulated in the list.

Here is a sample list item:

![Sample Image](https://github.com/Todd-Davies/JavascriptListAdapterExample/raw/master/sample_item.png "An example list item implementation")

A walkthrough will probably follow when I have time.

Todd Davies - 2012