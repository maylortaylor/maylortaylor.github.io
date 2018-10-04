---
layout: post
title: 'Const Vs. Readonly'
description: 'What is the difference between constant and readonly in C#?'
date: 2018-08-27
tags: c-sharp
share: true
---

# {{ page.description }}

## Constant (const)

**Constant** can be used with the `const` keyword in C# which is also known immutable values which are known at compile time and do not change their values at run time.

Const's are implicitly `static`. You use a `ClassName.ConstantName` notation to access them. Constant fields and locals aren't variables and may not be modified. Constants can be numbers, Boolean values, strings, or a null reference.

### Don’t create a constant to represent information that you expect to change at any time

The `static` modifier is not allowed in a constant declaration.

    public class ConstTest
    {
        class SampleClass
        {
            public int x;
            public int y;
            public const int c1 = 5;
            public const int c2 = c1 + 5;

            public SampleClass(int p1, int p2)
            {
                x = p1;
                y = p2;
            }
        }

        static void Main()
        {
            SampleClass mC = new SampleClass(11, 22);
            Console.WriteLine("x = {0}, y = {1}", mC.x, mC.y);
            Console.WriteLine("c1 = {0}, c2 = {1}",
                            SampleClass.c1, SampleClass.c2);
        }
    }
    /* Output
        x = 11, y = 22
        c1 = 5, c2 = 10
    */

---

## Readonly (readonly)

**Readonly** can be used by the `readonly` keyword in C# which is also known immutable values and are known at compile and run time.

`readonly` indicates that assignment to the field can only occur as part of the declaration or in a constructor in the same class.

You can assign a value to a readonly field only in the following contexts:

When the variable is initialized in the declaration, for example:

-    When the variable is initialized in the declaration, for example:

         public readonly int y = 5;

-    In an instance constructor of the class that contains the instance field declaration.
-    In the static constructor of the class that contains the static field declaration.


        class SampleClass
        {
            public int x;
            // Initialize a readonly field
            public readonly int y = 25;
            public readonly int z;

            public SampleClass()
            {
                // Initialize a readonly instance field
                z = 24;
            }

            public SampleClass(int p1, int p2, int p3)
            {
                x = p1;
                y = p2;
                z = p3;
            }

            static void Main()
            {
                SampleClass p1 = new SampleClass(11, 21, 32);   // OK
                Console.WriteLine($"p1: x={p1.x}, y={p1.y}, z={p1.z}");
                SampleClass p2 = new SampleClass();
                p2.x = 55;   // OK
                Console.WriteLine($"p2: x={p2.x}, y={p2.y}, z={p2.z}");
            }
            /*
            Output:
                p1: x=11, y=21, z=32
                p2: x=55, y=25, z=24
            */
        }

In the preceding example, if you use a statement like the following example:

    p2.y = 66; // Error

you will get the compiler error message:

    A readonly field cannot be assigned to (except in a constructor or a variable initializer)

---

## References

-    [Const from Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const)
-    [Readonly from Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/readonly)
-    [Stackoverflow Answer](https://stackoverflow.com/questions/55984/what-is-the-difference-between-const-and-readonly)
-    [CSharp Corner Top C# Interview Questions](https://www.c-sharpcorner.com/UploadFile/8ef97c/C-Sharp-net-interview-questions-and-answers/)
