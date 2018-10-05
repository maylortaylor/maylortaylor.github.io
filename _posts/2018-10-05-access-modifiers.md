---
layout: post
title: 'Access Modifiers'
description: 'Access modifiers are keywords used to specify the declared accessibility of a member or a type'
date: 2018-10-05
tags: c-sharp
share: true
---

# {{ page.title }}

Access modifiers are keywords in object-oriented languages that set the accessibility of classes, methods, and other members.

`Internal`, `public`, and `protected internal` variables and functions will show up in the Intellisense / Autocomplete popups.

(`private` and `protected` will not be shown in Intellisense / Autocomplete popups.)

The following six [accessibility levels](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/accessibility-levels) can be specified using the access modifiers:

-    `public`

     -    Has no limits, any members or types defined as public can be accessed within the class, assembly even outside the assembly. Most DLLs are known to be produced by public class and members written in a .cs file.

-    `private`

     -    Limits the accessibility of a member to within the defined type, for example if a variable or a functions is being created in a ClassA and declared as private then another ClassB can't access that.

-    `protected`

     -    Access is limited to the containing class or types derived from the containing class. `Protected` plays a role only when inheritance is used. In other words any protected type or member becomes accessible when a child is inherited by the parent. In other cases (when no inheritance) protected members and types are not visible.

-    `internal`

     -    Access is limited to the current assembly. `Internal` plays an important role when you want your class members to be accessible within the assembly. An assembly is the produced .dll or .exe from your .NET Language code (C#). Hence, if you have a C# project that has ClassA, ClassB and ClassC then any internal type and members will become accessible across the classes with in the assembly.

-    `protected internal`

     -    Access is limited to the current assembly or types derived from the containing class. `Protected Internal` is a combination of protected and internal both. A protected internal will be accessible within the assembly due to its internal flavor and also via inheritance due to its protected

-    `private protected`
     -    Access is limited to the containing class or types derived from the containing class within the current assembly.

### For a video demonstration of these. Please check out this [10 minute video](https://youtu.be/MWxU9OpQlvE)

# References

-    [Microsoft Docs - Access Modifiers](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/access-modifiers)
-    [CSharp.net-informations.com](http://csharp.net-informations.com/language/csharp-access-specifiers.htm)
-    [C-SharpCorner.com](https://www.c-sharpcorner.com/UploadFile/84c85b/oop-series-sharp2-understanding-access-specifier-with-C-Sharp/)
