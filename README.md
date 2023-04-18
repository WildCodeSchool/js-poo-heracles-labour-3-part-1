# Labors of Heracles #3: the birds of Lake Stymphalus
 
Prerequisite: clone this *repository*.


> To begin, let's have a quick look at the code. In this new challenge, we will integrate an HTML interface to improve our game.
So you will find an *index.html* file and a linked *style.css* file. 
You will notice that all of our class files no longer need to be exported as modules, and we no longer import them into our *index.js* file. All the import logic now happens at the bottom of our *index.html* file. BE CAREFUL, the order of the files is therefore very IMPORTANT.
In the *index.html* file, there is almost nothing. The html templates are prepared and injected directly, as the objects are implemented. You can browse them but you do not need to touch them in the process of the workshop. However, you will be ask to consume some of its features.

> The HTML `Hero` zone is created directly from the *index.js (line 18 to 20)*.

## Heritage

A new challenge awaits our champion, slaying the monstrous birds of Lake Stymphalus. Heracles (and his equipment) as well as three birds are already instantiated in *index.js (Line 3 to 16)*.

> Currently both birds and heroes are instances of the `Fighter` class. However, if they have common properties specific to fighters (name, life, dexterity, strength...) some characteristics differ. For example, only `Hero` will be able to wear equipment (Shield, Weapon...).

> It should therefore not be possible to attribute a sword to a bird, but it is currently possible. To solve this design problem, you have to go through inheritance.

- Created two classes `Hero` and `Monster`, each inheriting from `Fighter`. The properties common to both will remain in Fighter, those specific to `Hero` (`Weapon` and `Shield`) will move to `Hero`. The `Monster` class currently only extends `Fighter` without further modification.
- Moreover, the `getDamage()` and `getDefense()` methods have a different behavior between a monster and a hero. In the first case, only strength and dexterity are taken into account, in the case of the hero, the values ​​returned also take into account the characteristics of weapons and armor. The `getDamage()` and `getDefense()` methods must therefore exist in `Fighter` to reflect the simplest case, and be rewritten in `Hero` to take equipment into account (which normally corresponds to the current code of `Fighter` at the end of the previous workshop).

- In *index.js*, modify the instantiations to take into account its new classes, `Hero` for Heracles and `Monster` for the 3 *birds*. (Line 3, 14, 15, 16)

## Arena

> Another design change appears with this new event. Here, Heracles no longer fights against a single monster, but against a multitude. Currently, a Fighter doesn't have a way to know all the other Fighters in the fight. It would be possible to create an `adversaries` property in `Fighter`, but each Fighter would have to contain all the others, which would be quite redundant and not allow an easy overview.

> A better solution is to create a new class `Arena` which would contain all the `Fighter` as well as methods to manipulate them (make them fight each other, move them around the arena, etc.). In addition, this arena can be used as a support for a map on which to place the `Fighter` and thus add positioning to the gameplay of our game.

- Created an `Arena` class containing the properties `monsters` (an array of `Monster` objects) and `hero` (a `Hero` object). For simplicity, we will assume that we necessarily have a single hero in an arena and one or more monsters.
Also create a `constructor()` which will take a hero and an array of monsters as parameters. Also add a `size` property (integer with default value 10) which will indicate the size of the arena.
Then don't forget to add it at the bottom of the *index.html* file with the other POO files

- We want to position fighters in the arena: add the `x` and `y` properties in `Fighter` and modify `Monster` and `Hero`. This will allow you to give a position to the fighters (Remember to add the values ​​between 1 and 10 when instantiating them with `new`)

- In *index.js*, create an `Arena` type object by passing it `heracles` and the three `birds` that you will have put in an array.

- Now add this code under your `Arena` instantiation
> const ArenaHTML = new ArenaTemplate('arena');
ArenaHTML.createArena(<< My Arena instance >>);

- Update: you must see them on a map representing your arena and your fighters on it! Modify the coordinates of each one, they must move accordingly!
 
The next step will be to attack the birds: this will be the second part of this workshop;)
