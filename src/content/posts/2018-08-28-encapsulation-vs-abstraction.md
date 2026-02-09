---
layout: post
title: 'Encapsulation Vs. Abstraction'
description: "What's the difference between Encapsulation Vs. Abstraction?"
date: 2018-08-28
tags: c-sharp general-development
share: true
---

# Encapsulation Vs. Abstraction

## TLDR;

**Encapsulation** his defined 'as the process of enclosing one or more items within a physical or logical package'. Encapsulation, in object oriented programming methodology, prevents access to implementation details.

**Abstraction** is used to display only necessary and essential features of an object to ouside the world.

## Encapsulation

**Encapsulation** is used to refer to one of two related but distinct notions, and sometimes to the combination thereof:

-    A language mechanism for restricting direct access to some of the object's components. (Information Hiding)
-    A language construct that facilitates the bundling of data with the methods (or other functions) operating on that data

The object-oriented principle of **Encapsulation** helps avoid problems by allowing you to hide internal state and abstract access to it through type members such as methods, properties, and indexers. **Encapsulation** helps you reduce coupling between objects and increases the maintainability of your code.

Encapsulation is implemented by using _access specifiers_. An access specifier defines the scope and visibility of a class member. C# supports the following access specifiers:

-    **Public**
     -    Any code. No inheritance, external type, or external assembly restrictions.
-    **Private**
     -    Only members within the same type. (default for type members)
-    **Protected**
     -    Only derived types or members of the same type.
-    **Internal**
     -    Only code within the same assembly. Can also be code external to object as long as it is in the same assembly. (default for types)
-    **Protected internal**
     -    Either code from derived type or code in the same assembly. Combination of protected OR internal.

## Abstraction

**Abstraction** and **encapsulation** are related features in object oriented programming. But **abstraction** can be simple defined by 'showing what is necessary'.

**Abstraction** is a mechanism to show only relevant data to the user and **encapsulation** is the process of hiding irrelevant data from the user.

    class program
    {
        abstract class animal
        {
            public abstract void eat();
            public void sound()
            {
                Console.WriteLine("dog can sound");
            }
        }
        class dog : animal
        {
            public override void eat() {
                Console.WriteLine("dog can eat");
            }
        }
        static void Main(string[] args)
        {
            dog mydog = new dog();
            animal thePet = mydog;
            thePet.eat();
            mydog.sound();
        }
    }
    /* Output
        dog can eat
        dog can sound
    */

---

# References

-    [C-Sharp Station](https://csharp-station.com/Tutorial/CSharp/Lesson19)
-    [C-Sharp Corner](https://www.c-sharpcorner.com/uploadfile/4624e9/abstraction-in-C-Sharp/)
-    [TutorialsPoint](https://www.tutorialspoint.com/csharp/csharp_encapsulation.htm)
-    [Encapsulation Wikipedia](<https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)>)
-    [Stackoverflow](https://stackoverflow.com/questions/16938667/how-abstraction-and-encapsulation-differ)
-    [Mark Seemann Blog](http://blog.ploeh.dk/2012/11/27/Encapsulationofproperties/)
-    [Online Buff](https://www.onlinebuff.com/article_oops-principle-abstraction-in-c-with-an-example-and-explanation_5.html)
