# 3. Basic Syntax (In-Depth)

## Structure of a C# Program

In C#, the basic structure revolves around namespaces, classes, methods, and the `Main` method. Let's break it down:

- **Namespaces**: Organize your code into logical groupings.
- **Classes**: Contain the methods and data of your program.
- **Methods**: Perform actions; the `Main` method is the entry point.

### In-depth Example:

```csharp
using System;

namespace RealWorldApp {
    // Class definition
    class BankAccount {
        // Field (member variable)
        private double balance;

        // Constructor to initialize account with a balance
        public BankAccount(double initialBalance) {
            balance = initialBalance;
        }

        // Method to deposit money
        public void Deposit(double amount) {
            balance += amount;
            Console.WriteLine($"Deposited {amount}. Current Balance: {balance}");
        }

        // Main method as the program entry point
        static void Main() {
            BankAccount account = new BankAccount(1000);
            account.Deposit(500);
        }
    }
}
```

- **Best Practice**: Group related classes into namespaces. Avoid writing everything in a single file for better maintainability.
- **Edge Case**: Consider what happens if a negative deposit is made. You can handle such scenarios with exception handling.

## Variables and Data Types

In C#, variables must be explicitly declared with a data type. Let’s explore:

- **Value Types**: `int`, `float`, `double`, `char`, `bool`.
- **Reference Types**: `string`, `arrays`, `class` objects.

### Advanced Example:

```csharp
using System;

class Program {
    static void Main() {
        // Primitive data types
        int count = 10;
        double price = 99.99;

        // Object data types
        string product = "Laptop";
        object obj = price;  // Boxing a value type

        // Nullable types
        int? nullableValue = null; // Supports null assignment

        Console.WriteLine($"Product: {product}, Price: {price}, Nullable Value: {nullableValue ?? 0}");
    }
}
```

- **Best Practice**: Use appropriate data types for memory efficiency. Nullable types (`int?`) are useful when a variable might not always hold a value.
- **Edge Case**: Always initialize variables to avoid the "use of unassigned local variable" error.

## Constants and Literals

Constants are values that never change. These are typically used to store values like `Pi` or tax rates.

### Advanced Example:

```csharp
using System;

class Program {
    const double SalesTax = 0.07;  // Constant for tax rate

    static void Main() {
        double itemPrice = 100;
        double finalPrice = itemPrice + (itemPrice * SalesTax);

        Console.WriteLine($"Item Price: {itemPrice}, Final Price after Tax: {finalPrice}");
    }
}
```

- **Best Practice**: Use constants to avoid magic numbers in your code. This makes your program easier to maintain.
- **Edge Case**: Constants are immutable; attempting to change a constant will result in a compile-time error.

## Operators

Operators are special symbols used to perform operations on operands. C# supports:

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Relational Operators**: `==`, `!=`, `>`, `<`
- **Logical Operators**: `&&`, `||`, `!`
- **Assignment Operators**: `=`, `+=`, `-=`

### Advanced Example: Investment Growth Calculation

```csharp
using System;

class Investment {
    static void Main() {
        double principal = 1000;  // Initial investment
        double rate = 0.05;       // Interest rate
        int years = 10;

        for (int i = 1; i <= years; i++) {
            principal += principal * rate;  // Compound interest calculation
        }

        Console.WriteLine($"After {years} years, your investment will be worth {principal:C}");
    }
}
```

- **Best Practice**: Use compound operators (`+=`, `*=`) to simplify code.
- **Edge Case**: Be cautious when dividing by zero; always handle it to avoid runtime exceptions.

## Input and Output

In C#, input is handled via `Console.ReadLine()`, and output via `Console.WriteLine()`. Let’s build a more interactive program.

### Real-world Example: Restaurant Bill Calculator

```csharp
using System;

class RestaurantBill {
    static void Main() {
        Console.WriteLine("Enter the total bill amount:");
        double billAmount = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Enter the tip percentage:");
        double tipPercentage = Convert.ToDouble(Console.ReadLine());

        double tip = (tipPercentage / 100) * billAmount;
        double totalAmount = billAmount + tip;

        Console.WriteLine($"Tip Amount: {tip:C}, Total Bill: {totalAmount:C}");
    }
}
```

- **Best Practice**: Always validate input. For example, ensure the user doesn’t enter non-numeric values for bill amount.
- **Edge Case**: Consider handling extreme cases such as a 0% tip or very large bill amounts.
