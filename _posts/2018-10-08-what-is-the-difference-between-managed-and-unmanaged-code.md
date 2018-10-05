---
layout: post
title: 'What is the difference between managed and unmanaged code?'
description: ''
date: 2018-10-05
tags: c-sharp
share: true
---

# {{ page.title }}

# TLDR;

`Managed Code` is the code that is written to target the services of the managed runtime execution environment such as Common Language Runtime in .Net Technology.

`Unmanaged Code` compiles straight to machine code and directly executed by the Operating System. The unmanaged code is basically developed using other languages (other than .Net Framework), so it uses its own language runtime to execute the applications. The application runtime will take care of its memory management, security, etc.

## Managed Code

`Managed Code` is what Visual Basic .NET and C# compilers create. It compiles to Intermediate Language (IL), not to machine code that could run directly on your computer. The IL is kept in a file called an assembly, along with metadata that describes the classes, methods, and attributes (such as security requirements) of the code you've created.

`Managed Code` runs in the Common Language Runtime (CLR). The runtime offers a wide variety of services to your running code. In the usual course of events, it first loads and verifies the assembly to make sure the IL is okay. Then, just in time, as methods are called, the runtime arranges for them to be compiled to machine code suitable for the machine the assembly is running on, and caches this machine code to be used the next time the method is called. (This is called Just In Time, or JIT compiling, or often just Jitting.)

`Managed Code` is code that is written to target the services of the managed runtime execution environment (like Common Language Runtime in .NET Framework). The managed code is always executed by a managed runtime execution environment rather than the operating system directly. Managed refers to a method of exchanging information between the program and the runtime environment. Because the execution of code is governed by the runtime environment, the environment can guarantee what the code is going to do and provide the necessary security checks before executing any piece of code.

As the assembly runs, the runtime continues to provide services such as security, memory management, threading, and the like. The application is _managed_ by the runtime.

## Unmanaged Code

`Unmanaged Code` that is directly executed by the Operating System is known as un-managed code. Typically applications written in VB 6.0, C++, C, etc are all examples of unmanaged code. Unmanaged code typically targets the processor architecture and is always dependent on the computer architecture. Unmanaged code is always compiled to target a specific architecture and will only run on the intended platform. This means that if you want to run the same code on different architecture then you will have to recompile the code using that particular architecture. Unmanaged code is always compiled to the native code which is architecture specific.

In `unmanaged code` the memory allocation, type safety, security, etc needs to be taken care of by the developer. This makes unmanaged code prone to memory leaks like buffer overruns and pointer overrides and so forth.

# References

-    [Developer.com](https://www.developer.com/net/cplus/article.php/2197621/Managed-Unmanaged-Native-What-Kind-of-Code-Is-This.htm)
-    [Social MSDN](https://social.msdn.microsoft.com/Forums/vstudio/en-US/a3e28547-4791-4394-b450-29c82cd70f70/managed-code-vs-unmanaged-code?forum=csharpgeneral)
-    [Net-informations](http://net-informations.com/faq/net/managed-code.htm)
-    [StackOverflow](https://stackoverflow.com/questions/334326/what-is-managed-unmanaged-code-in-c)
-    [C-SharpCorner](https://www.c-sharpcorner.com/uploadfile/puranindia/managed-code-and-unmanaged-code-in-net/)
