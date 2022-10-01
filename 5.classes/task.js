
class PrintEditionItem { //для объектов книг
        
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100,
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(state1) {
        if (state1 < 0) {
            this._state = 0;
        } else if (state1 > 100) {
             this._state = 100;
        } else {
             this._state = state1;
        }
    }
    get state() {
         return this._state;
        }
} 


class Magazine extends PrintEditionItem {
constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    
    this.type = "magazine";
}
}

class Book extends PrintEditionItem {
constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;

}


}



class NovelBook extends Book {
constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
    

}
}

class FantasticBook  extends Book {
constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
    

}
}

class DetectiveBook   extends Book {
constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
   

}
}
// задание 2

class Library {
constructor(name) {
    this.name = name;
    this.books = [];
}
addBook(book) { 

    if (book.state > 30) {
        this.books.push(book);
    } 
} 

findBookBy(type, value) {
    
    let findBook = this.books.find(item => item[type] === value); //вот здесь непонятно почему скобки а не точка
    
    if (findBook === undefined) {
        findBook = null;
        return findBook;
    } else {
        return findBook;
    }

    }



    giveBookByName(bookName) {
        let issuedBook = this.books.find(item => item.name === bookName);
        console.log(issuedBook); //книга нашлась
        if (issuedBook === undefined) {
            return issuedBook = null;
        } else {
            this.books.splice(this.books.indexOf(issuedBook), 1);
            return issuedBook;
            
        } 
    }

}
// const library1 = new Library("Библиотека имени Ленина");

// library1.addBook(
// new DetectiveBook(
// "Артур Конан Дойл",
// "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
// 2019,
// 1008
// )
// );
// library1.addBook(
// new FantasticBook(
// "Аркадий и Борис Стругацкие",
// "Пикник на обочине",
// 1972,
// 168
// )
// );
// library1.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library1.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library1.books);
// console.log(library1.findBookBy("releaseDate", 1924));
// library1.giveBookByName("Машина времени");