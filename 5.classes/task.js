
class PrintEditionItem {
        
        constructor(name, releaseDate, pagesCount) {
            this.name = name;
            this.releaseDate = releaseDate;
            this.pagesCount = pagesCount;
            this.state = 100,
            this.type = null;
            
        }

        fix() {
            
            this.bookState = this.state * 1.5;
            
        }
        
        set bookState(state1) {
            
            if (state1 < 0) {
                this.state = 0;
            } else if (state1 > 100) {
                 this.state = 100;
            } else {
                 this.state = state1;
            }
        }

        get bookState() {
             this.state = state1;
            }



        
} 

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008, 10);

console.log(sherlock.state); // 100 предустановленный
sherlock.bookState = 200; //сеттером изменила
console.log(sherlock.state); // 200 
sherlock.fix(); 
console.log(sherlock.state); 



