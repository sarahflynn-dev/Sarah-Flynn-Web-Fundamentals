function pizzaDojo(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var make = pizzaDojo("thin crust","marinara sauce","mozzarella", ["pineapple", "pepperoni", "banana peppers"]);
console.log(make);