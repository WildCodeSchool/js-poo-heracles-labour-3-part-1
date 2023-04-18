# Travaux d'Héraclès #3 : les oiseaux du lac Stymphale
 
Prérequis : cloner ce *repository*.


> Pour commencer, réalisons un petit tour du propriétaire. Dans cette nouvelle épreuve, nous allons intégrer une interface HTML pour améliorer notre jeu.
Tu trouveras donc un fichier *index.html* et un fichier *style.css* lié. 
Tu remarqueras ainsi que tous nos fichiers de classe n'ont plus besoin d'être exporter en tant que modules, et nous ne les importont plus dans notre fichier *index.js*. Toute la logique d'importation se passe donc en bas de notre fichier *index.html*. ATTENTION, l'ordre des fichiers est donc très IMPORTANT.
Dans le fichier *index.html*, il n'y a presque rien. Les templates html sont préparés et injectés directement, au fur et à mesure de l'implémentation des objets. Tu peux les parcourir mais tu n'as pas besoin d'y toucher pour le fonctionnement du workshop. Tu seras par contre amené à consommer certaines de ces fonctionnalités.

> La zone `Hero` du HTML est directement crée à partir du *index.js (ligne 18 à 20)*.

## Heritage

Un nouvelle épreuve attend notre champion, tuer les oiseaux monstrueux du lac Stymphale. Héraclès (et son équipement) ainsi que trois oiseaux sont déjà instanciés dans *index.js (Ligne 3 à 16)*.

> Pour le moment, les monstres et les héros sont tous deux des instances de la classe `Fighter`. Cependant, s'ils ont des propriétés communes propres aux combattants (name, life, dexterity, strength...) certaines caractéristiques diffèrent. Par exemple, seuls les `Hero` vont pouvoir porter de l'équipement (Shield, Weapon...).

> Il ne devrait donc pas être possible d'attribuer une épée à un sanglier, or c'est pour le moment possible. Pour régler ce problème de conception, il faut passer par l'héritage.

- Créé deux classes `Hero` et `Monster`, chacune héritant de `Fighter`. Les propriétés communes aux deux vont rester dans Fighter, celles propres aux `Hero` (`Weapon` et `Shield`) vont passer dans `Hero`. La classe `Monster` ne fait pour l'instant qu'étendre `Fighter` sans autre modification.
- De plus, les méthodes `getDamage()` et `getDefense()` ont un comportement différent entre un monstre et héros. Dans le premier cas, seules la force et la dextérité sont prises en compte, dans le cas du héros, les valeurs retournées prennent aussi en compte les caractéristiques des armes et armures. Les méthodes `getDamage()` et `getDefense()` doivent donc exister dans `Fighter` pour refléter le cas le plus simple, et être réécrites dans `Hero` pour prendre en compte les équipement (ce qui correspond normalement au code actuel de `Fighter` à la fin de l'atelier précédent).

- Dans *index.js*, modifier les instanciations pour prendre en compte ces nouvelles classes, `Hero` pour Héraclès et `Monster` pour les 3 *birds*. (Ligne 3, 14, 15, 16)

## Arène

> Un autre changement de conception apparaît avec cette nouvelle épreuve. Ici, Héraclès ne se bat plus contre un unique monstre, mais contre une multitude. Pour l'instant, un Fighter n'a pas de méthode qui lui permette de connaître tous les autres Fighter du combat. Il serait possible de créer une propriété `adversaries` dans `Fighter`, mais chaque Fighter devrait contenir tous les autres, ce qui serait assez redondant et ne permettrait pas d'avoir facilement une vue d'ensemble.

> Une meilleure solution est de créer une nouvelle classe `Arena` qui contiendrait tous les `Fighter` ainsi que des méthodes pour les manipuler (les faire se combattre, les déplacer dans l'arène, etc.). De plus, cette arène peut servir de support pour la mise en place d'une carte sur laquelle placer les `Fighter` et ajouter ainsi du positionnement au gameplay de notre jeu.

- Créé une class `Arena` contenant les propriétés `monsters` (un tableau d'objets `Monster`) et `hero` (un objet `Hero`). Par simplification, on partira du principe que nous avons forcément un unique héro dans une arène et un ou plusieurs monstres.
Créé également un `constructor()` qui prendra en paramètre un héros et un tableau de monstres. Ajoute également une propriété `size` (integer avec la valeur 10 par défaut) qui indiquera la taille de l'arène.
N'oublie pas ensuite de l'ajouter en bas de fichier *index.html* avec les autres fichiers de POO

- On veut positionner des combattants dans l'arène: ajoute les propriétés `x` et `y` dans `Fighter` se qui te permettra de donner une position aux combattants.

- Dans *index.js*, créé un objet de type `Arena` en lui passant `heracles` et les trois *birds* que tu auras mis dans un tableau. Modifie également l'instantiation de tous les `Fighters` en y ajoutant leur positions (x et y).

- Maintenant, ajoute ce code sous ton instanciation d'`Arena`
> const ArenaHTML = new ArenaTemplate('arena');
ArenaHTML.createArena(<< Mon instance d'Arena >>);

- Actualise : tu dois les voir sur une carte représentant ton arène et tes combattants dessus ! Modifies les coordonnées de chacun, ils doivent bouger en conséquence !

La prochaine étape sera d'attaquer les oiseaux : ce sera la seconde partie de cet atelier ;)
