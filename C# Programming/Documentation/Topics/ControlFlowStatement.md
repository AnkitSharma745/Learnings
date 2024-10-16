# Control Flow Statements in C#

## 1. If-Else Statements

**Overview:**
If-else statements allow you to make decisions in code. Depending on whether a condition is true or false, different blocks of code execute.

**Syntax:**

```csharp
if (condition)
{
    // Code to execute if condition is true
}
else
{
    // Code to execute if condition is false
}
```

**Real-world Example:**
In backend development, you might use if-else to handle different request types in an API.

```csharp
if (user.IsAuthenticated)
{
    // Process authenticated request
    return Ok("User authenticated");
}
else
{
    // Handle unauthenticated request
    return Unauthorized("User not authenticated");
}
```

## 2. Switch-Case

**Overview:**
Switch-case is another control structure used for decision-making. It simplifies code when you have many conditions that evaluate to different values, especially when comparing the same variable.

**Syntax:**

```csharp
switch (expression)
{
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code if no case matches
        break;
}
```

**Real-world Example:**
Imagine a backend service that processes different types of HTTP methods (GET, POST, PUT, DELETE) based on an API call.

```csharp
switch (httpMethod)
{
    case "GET":
        return HandleGetRequest();
    case "POST":
        return HandlePostRequest();
    case "PUT":
        return HandlePutRequest();
    case "DELETE":
        return HandleDeleteRequest();
    default:
        return BadRequest("Invalid HTTP method");
}
```

## 3. Loops (For, While, Do-While)

### a) For Loop

**Overview:**
A `for` loop is used when the number of iterations is known beforehand. It typically involves a counter.

**Syntax:**

```csharp
for (initialization; condition; increment)
{
    // Code to execute in each iteration
}
```

**Real-world Example:**
In a backend service, you may loop over a list of user requests to process them individually.

```csharp
List<string> users = GetUsers();
for (int i = 0; i < users.Count; i++)
{
    ProcessUser(users[i]);
}
```

### b) While Loop

**Overview:**
A `while` loop continues to execute as long as a condition is true.

**Syntax:**

```csharp
while (condition)
{
    // Code to execute while condition is true
}
```

**Real-world Example:**
A backend service might use a `while` loop to wait for a specific condition, such as a service becoming available.

```csharp
while (!IsServiceAvailable())
{
    // Retry connecting to the service
    RetryServiceConnection();
}
```

### c) Do-While Loop

**Overview:**
A `do-while` loop is similar to a `while` loop, but it ensures the code block executes at least once, regardless of the condition.

**Syntax:**

```csharp
do
{
    // Code to execute
}
while (condition);
```

**Real-world Example:**
You may want to send at least one request to a third-party API and then continue sending requests until a certain condition is met.

```csharp
do
{
    SendRequest();
}
while (!IsSuccessResponse());
```

## 4. Break and Continue

### a) Break

**Overview:**
The `break` statement immediately exits the nearest loop or switch-case, stopping further execution.

**Real-world Example:**
You might break out of a loop if a certain condition is met, such as finding a particular user in a list.

```csharp
foreach (var user in users)
{
    if (user == targetUser)
    {
        Console.WriteLine("User found!");
        break;
    }
}
```

### b) Continue

**Overview:**
The `continue` statement skips the current iteration of a loop and moves to the next iteration.

**Real-world Example:**
Let's say you are processing multiple requests, but you want to skip any invalid requests without stopping the entire process.

```csharp
foreach (var request in requests)
{
    if (!IsValidRequest(request))
    {
        continue; // Skip this iteration if the request is invalid
    }
    ProcessRequest(request);
}
```

## Conclusion:

Each of these control flow mechanisms is crucial in backend development, helping you manage decision-making, repetitive tasks, and breaking or continuing flows when necessary. Whether you’re handling authentication, processing requests, or interacting with databases, mastering these control statements is key to writing efficient and clean backend code in C#.
