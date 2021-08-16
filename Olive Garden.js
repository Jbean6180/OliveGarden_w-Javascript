console.log("Welcome to Olive Garden")

const Jennifer = {
    name : "Jennifer", 
    age : 23, 
    favpasta: "spaghetti",
    favsauce: "pesto",
};

const Ralph = {
    name : "Ralph", 
    age : 19, 
    favpasta: "lasagna",
    favsauce: "alfredo"
};

const Vincent = {
    name : "Vincent", 
    age : 21, 
    favpasta: "ravioli", 
    favsauce: "alfredo/marinara"
};

var pasta = "ravioli";
var sauce = "alfredo/marinara";
var price = 10;
//var discount = -2; //when applicable

function ifFavthanDiscount(pasta, sauce, price) {
    if (pasta == Jennifer.favpasta && sauce == Jennifer.favsauce) {
        console.log("Jennifer: OMG, that's my favorite!. Here's a discount!")
        let total = price - 2;
        console.log("That will be $" + total)
    }
    else if (pasta == Ralph.favpasta && sauce == Ralph.favsauce) {
        console.log("Ralph: OMG, that's my favorite!. Here's a discount!")
        let total = price - 2;
        console.log("That will be $" + total)
    }
    else if (pasta == Vincent.favpasta && sauce == Vincent.favsauce) {
        console.log("Vincent: OMG, that's my favorite!. Here's a discount!")
        let total = price - 2;
        console.log("That will be $" + total)
    }
    else{
        console.log("That will be $" + price)
    
    }
}

ifFavthanDiscount(pasta, sauce, price)
