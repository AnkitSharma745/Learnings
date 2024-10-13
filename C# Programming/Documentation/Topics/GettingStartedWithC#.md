# 2. Getting Started with C#

## Setting up the development environment

To start coding in C#, you need the .NET SDK and an integrated development environment (IDE) like Visual Studio or Visual Studio Code. The .NET SDK includes the necessary tools to build, run, and publish your C# applications.

### Steps:

1. Download and install the [.NET SDK](https://dotnet.microsoft.com/download).
2. Install Visual Studio or Visual Studio Code.
3. Verify the installation by opening a terminal or command prompt and running:
   ```bash
   dotnet --version
   ```

## Writing your first C# program

A basic C# program consists of classes, methods, and the `Main` method which acts as the entry point for execution. Let's create a simple calculator as a real-world example.

### Example: Basic Calculator

```csharp
using System;

class Calculator {
    static void Main() {
        Console.WriteLine("Enter first number:");
        double num1 = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Enter second number:");
        double num2 = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Enter operation (+, -, *, /):");
        char operation = Console.ReadKey().KeyChar;

        double result = operation switch {
            '+' => num1 + num2,
            '-' => num1 - num2,
            '*' => num1 * num2,
            '/' => num1 / num2,
            _ => throw new InvalidOperationException("Invalid operation")
        };

        Console.WriteLine($"
Result: {result}");
    }
}
```

This program prompts the user for two numbers and an arithmetic operation. It performs the operation using C# 8's `switch` expression and outputs the result.

## Compiling and running a C# program

To compile and run your C# program, follow these steps:

### Using Command Line:

1. Open a terminal or command prompt.
2. Navigate to the folder containing your C# file (`Calculator.cs`).
3. Run the following command to compile:
   ```bash
   csc Calculator.cs
   ```
4. Run the generated executable:
   ```bash
   Calculator.exe
   ```

### Using Visual Studio:

1. Open Visual Studio.
2. Create a new Console App project.
3. Replace the default code with your C# code.
4. Press `F5` to build and run the program.

### Real-world Example: Compiling a Web Scraper in C#

Let's create a more advanced real-world example to demonstrate the power of C#. We'll write a simple web scraper that fetches data from a website using the `HttpClient` class.

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class WebScraper {
    static async Task Main() {
        Console.WriteLine("Enter a URL to scrape:");
        string url = Console.ReadLine();

        using HttpClient client = new HttpClient();
        try {
            string pageContent = await client.GetStringAsync(url);
            Console.WriteLine("Page Content:");
            Console.WriteLine(pageContent.Substring(0, 500)); // Display the first 500 characters
        } catch (Exception ex) {
            Console.WriteLine($"Error fetching data: {ex.Message}");
        }
    }
}
```

### Explanation:

- This program accepts a URL, fetches the content of the web page, and displays part of it.
- It demonstrates the power of C# for asynchronous programming with `async` and `await` using `HttpClient`.
- C# can be used in real-world scenarios like web scraping, automation, or API integration.
