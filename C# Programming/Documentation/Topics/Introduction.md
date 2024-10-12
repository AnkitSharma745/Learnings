# 1. Introduction to C#

## What is C#?

C# is a modern, object-oriented programming language developed by Microsoft as part of its .NET initiative. It is designed for building a variety of applications, from desktop software to web and mobile apps. C# combines the power of C++ with the simplicity of Visual Basic, making it a popular choice for developers.

### Example:

```csharp
using System;

class HelloWorld {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
```

In this example, we create a simple "Hello, World!" program using C#. The `Main` method serves as the entry point of the application.

## History of C#

C# was introduced by Microsoft in 2000, alongside the release of the .NET Framework. It was originally designed by Anders Hejlsberg, aiming to be simple, modern, and flexible. Over time, C# has evolved through several versions, each adding new features like LINQ, async/await, and more, making it versatile for modern application development.

### Example of LINQ (introduced in C# 3.0):

```csharp
using System;
using System.Linq;

class Program {
    static void Main() {
        int[] numbers = { 1, 2, 3, 4, 5 };
        var evenNumbers = numbers.Where(n => n % 2 == 0).ToArray();

        Console.WriteLine(string.Join(", ", evenNumbers)); // Output: 2, 4
    }
}
```

## Features of C#

C# is known for its strong typing, object-oriented features, and memory management through garbage collection. Key features include:

- **Type Safety**: Reduces runtime errors by enforcing type constraints.
- **Object-Oriented**: Supports concepts like inheritance, polymorphism, and encapsulation.
- **Automatic Memory Management**: C# uses garbage collection to automatically manage memory.
- **Rich Standard Library**: Provides a comprehensive set of libraries for building applications.
- **Asynchronous Programming**: C# has built-in support for asynchronous programming using `async` and `await`.

### Example of Asynchronous Programming:

```csharp
using System;
using System.Threading.Tasks;

class Program {
    static async Task Main() {
        await DoWork();
        Console.WriteLine("Work completed.");
    }

    static async Task DoWork() {
        await Task.Delay(2000);  // Simulate some work with a 2-second delay
        Console.WriteLine("Doing some work...");
    }
}
```

## Applications of C#

C# is widely used for building a variety of applications:

- **Desktop Applications**: Using technologies like WPF and Windows Forms.
- **Web Applications**: With ASP.NET Core, C# is used to create dynamic websites and APIs.
- **Mobile Applications**: With Xamarin, C# can be used to build cross-platform mobile apps for iOS and Android.
- **Game Development**: Unity, one of the most popular game engines, uses C# for scripting.
- **Cloud-based Applications**: C# can be used to develop cloud applications using Azure services.

### Example of a Web API with ASP.NET Core:

```csharp
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase {
    [HttpGet]
    public string Get() {
        return "Hello, World!";
    }
}
```

In this example, we define a simple Web API that returns "Hello, World!" when accessed via an HTTP GET request.
