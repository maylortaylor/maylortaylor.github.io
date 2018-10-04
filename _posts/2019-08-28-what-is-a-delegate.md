---
layout: post
title: 'What is a Delegate?'
description: ''
date: 2018-08-28
tags: c-sharp general-development
share: true
---

# {{ page.title }}

## TLDR;

A delegate is a reference type variable that holds the reference to a method. You can also think of a delegate as " pointer to a function".

### Another way of saying it...

A delegate is an object that can refer to a method. Thus, when we create a delegate, we are creating an object that can hold a reference to a method. Furthermore, the method can be called through this reference. Thus, a delegate can invoke the method to which it refers.

## The principal advantage of a delegate is that it allows us to specify a call to a method, but the method actually invoked is determined at runtime, not at compile time.

The idea is that you need to be able to invoke a piece of code, but that piece of code you're going to invoke isn't known until runtime. So you use a "delegate" for that purpose. Delegates come in handy for things like event handlers, and such, where you do different things based on different events, for example.

All delegates are implicitly derived from the **System.Delegate** class.

# Need an example?

In C#, for example, let's say we had a calculation we wanted to do and we wanted to use a different calculation method which we don't know until runtime. So we might have a couple calculation methods like this:

```
public static double CalcTotalMethod1(double amt)
{
    return amt * .014;
}

public static double CalcTotalMethod2(double amt)
{
    return amt * .056 + 42.43;
}
```

We could declare a delegate signature like this:

public delegate double `calcTotalDelegate(double amt);`
And then we could declare a method which takes the delegate as a parameter like this:

```
public static double CalcMyTotal(double amt, calcTotalDelegate calcTotal)
{
    return calcTotal(amt);
}
```

And we could call the CalcMyTotal method passing in the delegate method we wanted to use.

```
double tot1 = CalcMyTotal(100.34, CalcTotalMethod1);
double tot2 = CalcMyTotal(100.34, CalcTotalMethod2);
Console.WriteLine(tot1);
Console.WriteLine(tot2);
```

---

# References

-    [Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/using-delegates)
-    [C-Sharp Station](https://csharp-station.com/Tutorial/CSharp/Lesson19)
-    [StackOverflow Question](https://stackoverflow.com/questions/2044301/what-is-delegate)
-    [Tutorials Point](https://www.tutorialspoint.com/csharp/csharp_delegates.htm)
