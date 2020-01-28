class Book {
  constructor(title, genre, author, read, date){
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.date = Date.now(); 
  }
}

class BookLists {
  constructor(book){
    this.bookAry = [];
    this.bookAry.push(book);
  }
  readBook(){
    return this.bookAry.filter(bok =>{
      return this.bookAry.read == true;
    })
  }
  pendingBook(){
    return this.bookAry.filter(bok => {
      return this.bookAry.read == false;
    })
  }
  onGoingBook(){
    for(var i =0; i<this.bookAry.length; i++){
      if(!bookAry[i].read){
         return this.bookAry[i];
      }
    }
  }
  followingBook(){
    return this.bookAry[this.bookAry.indexOf(this.onGoingBook)+1];
  }
  previousBook(){
    return this.bookAry[this.bookAry.indexOf(this.onGoingBook)-1];
  }
  totalBooks(){
    return this.bookAry;
  }
  add(book){
    this.bookAry.push(book);
  }
  finishCurrentBook(){
    this.onGoingBook.date = Date.now();
    this.onGoingBook.read = true;
  }
}