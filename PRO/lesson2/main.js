//Два рецепти
let pecipeWithMilk = "Омлет з яйцями, молоком, сіллю та перцем. Змішати все та смажити на сковорідці";
let recipeWithoutMilk = "Омлет тільки з яйцями, сіллю та перцем. Змішати та смажити на сковорідці.";

//предикат (true означає - додати молоко)
let addMilk = true;

//умова для вибору рецепта
if (addMilk) {
    console.log(pecipeWithMilk);
} else {
    console.log(recipeWithoutMilk);
}