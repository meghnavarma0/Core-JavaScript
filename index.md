---
title: What in earth do these .call(), .apply() and .bind() methods do ?
date: "2020-04-17T22:40:32.169Z"
description: Today, we will get to know what .call(), .apply(), .bind() methods do in JS and how we can use them, let's go.
---

![sad](sad.jpg)

Don't cry! Give it a try ;)

## Here's some gossip!

Someone told me, this is one of the first questions asked in an interview for a front end role.

So, let's jump into it right away!

### Who are your favourite actors ?

Mine ? It's Shah Rukh Khan and Leonardo DiCaprio, obvio!

Let's create two seperate objects consisting their name and the industry they belong to.

Shah Rukh has an extra feature though (method that logs a statement to the console).

Let's see how

```
const actor1 = {
	name: 'Shah Rukh Khan',
	wood: 'Bollywood',
	printFavourite: function() {
		console.log(`In ${this.wood}, my favourite actor is ${this.name}.`);
	}
};

const actor2 = {
	name: 'Leonardo DiCaprio',
	wood: 'Hollywood'
};

```

---

Done Feuh!!

Now, let's run :

```
actor1.printFavourite();

// prints :
//In Bollywood, my favourite actor is Shah Rukh Khan.

```

---

**What if we wanted to use the printFavourite() method of actor1 for actor2 object, our Leonardo ?**

You would ask - Are you stupid ? Is that even possible ?

I'd say - I might sound stupid, but yes, that is possible because `this` is there.

## What's this `this` ?

The `this` keyword of a method refers to the object in which it is defined.

And this reference can be changed.

Yaaayy!!

### With A Round Of Applause, Let's Welcome Our Real Heroes : .call(), .apply() and .bind()

![clappings](clappings.jpg)

### Using .call()

---

This is how our poor Lenardo(actor2 object) borrows printFavourite method from Shah Rukh(actor1 object) :

```

actor1.printFavourite.call(actor2);

// prints:
// In Hollywood, my favourite actor is Leonardo DiCaprio.

```

### What have we done ?

We just changed the reference of `this` keyword from actor1 to actor2 and executed it right away.

**That's what .call() exactly does ie.** _Changes/adds reference to `this` keyword and executes the function/method immediately._

It's now quite reasonable to take the printFavourite method out. Right ?

**Let's do that!**

```
const actor1 = {
	name: 'Shah Rukh Khan',
	wood: 'Bollywood'
};

const actor2 = {
	name: 'Leonardo DiCaprio',
	wood: 'Hollywood'
};

const printFavourite = function() {
	console.log(`In ${this.wood}, my favourite actor is ${this.name}.`);
};

```

---

Since, we do not have any external parameter, call and apply would work in an identical way. ie. _They will pass the reference to `this` keyword as the only argument_

Let's see that in action :

```
// For SRK Fans:
printFavourite.call(actor1);
printFavourite.apply(actor1);

// For DiCaprio Fans:
printFavourite.call(actor2);
printFavourite.apply(actor2);

// prints:
//In Bollywood, my favourite actor is Shah Rukh Khan.
//In Bollywood, my favourite actor is Shah Rukh Khan.
//In Hollywood, my favourite actor is Leonardo DiCaprio.
//In Hollywood, my favourite actor is Leonardo DiCaprio.
```

---

Identical! Right ?

Also

We see, that .call() and .apply() excute the function instantly.

###What if we want to pass the reference to `this` keyword now but excute the function later ?

That's what .bind() exactly does - _Forms a copy of the function binding the `this` keyword with the argument passed and returns it._

Now, this function can be executed later :

```
const myFavourite = printFavourite.bind(actor1);
printFavourite.call(actor2);
myFavourite();

// prints :
//In Hollywood, my favourite actor is Leonardo DiCaprio.
//In Bollywood, my favourite actor is Shah Rukh Khan.
```

Here, actor1 gets bound(in copy of function printFavourite) first, but executed later when we want.

We achieved it using .bind() method.

Woohoo!

## Passing Arguments

Uptill now, we know that with one argument (reference to the `this` keyword), there is absolutely no difference between .call() and .apply() methods.

But

This isn't true!

### So now, our favourite actresses would help us figure out the difference.

### .call()

In this, the first argument passed is the reference to the `this` keyword.

All the other arguments are passed separated by a comma.

Let's see how we can do this :

First, we have to modify the function printFavourite() to receive arguments as follows :

```
const printFavourite = function(actress1, actress2) {
	console.log(`In ${this.wood}, my favourite actor is ${this.name}.
	Among the actresses, I like ${actress1} and ${actress2}.`);
};

```

Great!

Now, let's also execute it passing our favourite actresses as arguments :

```
const myFavourite = printFavourite.bind(actor1, 'Kajol', 'Deepika Padukone');
printFavourite.call(actor2, 'Kate Winslet', 'Emma Watson');
myFavourite();

//prints:
//In Hollywood, my favourite actor is Leonardo DiCaprio.
//	Among the actresses, I like Kate Winslet and Emma Watson.

//In Bollywood, my favourite actor is Shah Rukh Khan.
//	Among the actresses, I like Kajol and Deepika Padukone.


```

Here, we can clearly figure out that the arguments in .call() and .bind() methods are passed in a similar way.

Nice!

The only thing left now is to see how we can pass arguments in .apply()

Why wait ?

###.apply()
The only difference between .call() and .apply() lies in the way we pass arguments.

Here, in .apply(), the first argument is the reference to the `this` keyword and all the rest of the arguments are passed as an array of arguments.

This is shown below :

```
printFavourite.call(actor1, 'Kajol', 'Deepika Padukone');
printFavourite.apply(actor2, ['Kate Winslet', 'Emma Watson']);

// prints ;
// In Bollywood, my favourite actor is Shah Rukh Khan.
//	Among the actresses, I like Kajol and Deepika Padukone.
//In Hollywood, my favourite actor is Leonardo DiCaprio.
//	Among the actresses, I like Kate Winslet and Emma Watson.

```

In the above code, we have passed Kate Winslet and Emma Watson as an array of arguments.

And, the results are similar to the .call() method.

Ergo, **Congratulations!**

**We are done and dusted with .call(), .apply() and .bind() methods.**

Hurray!

![hurray](hurray.jpg)
