---
layout: post
title: 'String Vs. String Builder'
description: 'What is the difference between string and string builder in C#'
date: 2018-10-03
tags: c-sharp
share: true
---

# {{ page.description }}

## TLDR;

> String is Immutable and StringBuilder is Mutable

To go in more depth...

`String:`

-    under System namespace
-    immutable (read-only) instance
-    performance degrades when continuous change of value occures
-    thread safe

`StringBuilder:` (mutable string)

-    under System.Text namespace
-    mutable instance
-    shows better performance since new changes are made to existing instance

# String

The `String` class is in the `System` namespace. A `string` instance is immutable. You cannot change it after it was created. Any operation that appears to change the string instead returns a new instance.

A string is a sequential collection of characters that is used to represent text. A String object is a sequential collection of System.Char objects that represent a string; a System.Char object corresponds to a UTF-16 code unit. The value of the String object is the content of the sequential collection of System.Char objects, and that value is immutable (that is, it is read-only). For more information about the immutability of strings, see the [Immutability and the StringBuilder class](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netcore-2.1#Immutability). The maximum size of a String object in memory is 2GB, or about 1 billion characters.

Consider using the `String` class under these conditions:

-    When the number of changes that your app will make to a string is small. In these cases, StringBuilder might offer negligible or no performance improvement over String.

-    When you are performing a fixed number of concatenation operations, particularly with string literals. In this case, the compiler might combine the concatenation operations into a single operation.

-    When you have to perform extensive search operations while you are building your string. The StringBuilder class lacks search methods such as `IndexOf` or `StartsWith`. You'll have to convert the StringBuilder object to a String for these operations, and this can negate the performance benefit from using StringBuilder. For more information, see the [Searching the text in a StringBuilder object section.](https://docs.microsoft.com/en-us/dotnet/api/system.text.stringbuilder?view=netcore-2.1#Searching)

## `String` example

```
string string1 = "This is a string created by assignment.";
Console.WriteLine(string1);
string string2a = "The path is C:\\PublicDocuments\\Report1.doc";
Console.WriteLine(string2a);
string string2b = @"The path is C:\PublicDocuments\Report1.doc";
Console.WriteLine(string2b);
// The example displays the following output:
// This is a string created by assignment.
// The path is C:\PublicDocuments\Report1.doc
// The path is C:\PublicDocuments\Report1.doc
```

# StringBuilder

The `StringBuilder` class is in the `System.Text` namespace. It represents a mutable string of characters, such as one you're constructing piece-wise, or where you change lots of things while building the string.

Consider using the `StringBuilder` class under these conditions:

-    When you expect your app to make an unknown number of changes to a string at design time (for example, when you are using a loop to concatenate a random number of strings that contain user input).

-    When you expect your app to make a significant number of changes to a string.

## `StringBuilder` Example

```
using System;
using System.Text;

public sealed class App
{
    static void Main()
    {
        // Create a StringBuilder that expects to hold 50 characters.
        // Initialize the StringBuilder with "ABC".
        StringBuilder sb = new StringBuilder("ABC", 50);

        // Append three characters (D, E, and F) to the end of the StringBuilder.
        sb.Append(new char[] { 'D', 'E', 'F' });

        // Append a format string to the end of the StringBuilder.
        sb.AppendFormat("GHI{0}{1}", 'J', 'k');

        // Display the number of characters in the StringBuilder and its string.
        Console.WriteLine("{0} chars: {1}", sb.Length, sb.ToString());

        // Insert a string at the beginning of the StringBuilder.
        sb.Insert(0, "Alphabet: ");

        // Replace all lowercase k's with uppercase K's.
        sb.Replace('k', 'K');

        // Display the number of characters in the StringBuilder and its string.
        Console.WriteLine("{0} chars: {1}", sb.Length, sb.ToString());
    }
}

// This code produces the following output.
//
// 11 chars: ABCDEFGHIJk
// 21 chars: Alphabet: ABCDEFGHIJK
```

---

# References

-    [Microsoft Docs - String](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netcore-2.1#remarks)
-    [Microsoft Docs - StringBuilder](https://docs.microsoft.com/en-us/dotnet/api/system.text.stringbuilder?view=netframework-4.7.2)
-    [CodAffection](http://www.codaffection.com/csharp-article/difference-string-and-stringbuilder-in-csharp/)
-    [StackOverflow](https://stackoverflow.com/questions/73883/string-vs-stringbuilder)
-    [Tutorials Point](https://www.tutorialspoint.com/csharp/csharp_delegates.htm)
