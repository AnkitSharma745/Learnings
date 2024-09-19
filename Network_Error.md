# Learnings

### How many type of errors we can get while using the axios and doing the CRUD operations

1. Network Errors
2. Client Errors (4xx HTTP Status Codes)
3. Server Errors (5xx HTTP Status Codes)
4. Timeout Errors
5. CORS Errors
6. Request Abortion
7. Parsing/ Deserialization Errors
8. Business Logic Errors
9. Configuration Errors
10. Concurrency Issues
11. Memory Leaks
12. Unexpected Errors (Edge Cases)
13. Permission or Access - Control Errors

## 1. Network Errors

### What It Is:

Network errors happen when the request cannot reach the server due to network issues.

### How You Get It in Axios:

Axios will throw an error if it fails to establish a connection to the server, such as when the server is down, the client is offline, or there's a DNS issue.

### When It Occurs:

- Server is unreachable (e.g., the server is down).
- Internet connection is lost or unstable.
- DNS resolution failure (the domain name cannot be resolved to an IP address).

### Axios Handling:

```typescript
if (axios.isAxiosError(error) && !error.response) {
  console.error("Network error:", error.message);
}
```

In this case, error.response will be undefined, indicating that the request never reached the server.

## 2. Client Errors (4xx HTTP Status Codes)

### What It Is:

Client errors occur when the client sends an invalid or unauthorized request to the server.

### How You Get It in Axios:

Axios receives an error response with a 4xx status code from the server. The request reaches the server, but the server responds with a client-side error.

### When it occurs:

- 400 Bad Request: The request is malformed or contains invalid data.
- 401 Unauthorized: The request lacks proper authentication credentials.
- 403 Forbidden: The client does not have permission to access the resource.
- 404 Not Found: The requested resource does not exist on the server.

```typescript
if (
  axios.isAxiosError(error) &&
  error.response &&
  error.response.status >= 400 &&
  error.response.status < 500
) {
  console.error(
    `Client error (${error.response.status}):`,
    error.response.data
  );
}
```

In this case, error.response.status will indicate the specific 4xx error.

## 3. Server Errors (5xx HTTP Status Codes)

Server errors happen when the server fails to fulfill a valid request.

#### How to get it in axios

Axios receives an error response with a 5xx status code from the server. The request reaches the server, but the server encounters an error.

### When it occurs

- 500 Internal Server Error: The server encountered an unexpected condition.
- 502 Bad Gateway: The server received an invalid response from an upstream server.
- 503 Service Unavailable: The server is temporarily unable to handle the request (e.g., due to maintenance).
- 504 Gateway Timeout: The server took too long to respond.

```typescript
if (
  axios.isAxiosError(error) &&
  error.response &&
  error.response.status >= 500 &&
  error.response.status < 600
) {
  console.error(
    `Server error (${error.response.status}):`,
    error.response.data
  );
}
```

In this case, error.response.status will indicate the specific 5xx error.

## 4. Timeout Errors

### What It Is:

Timeout errors occur when the request takes longer than the allowed time to get a response.

### How You Get It in Axios:

If you set a timeout in Axios and the server takes longer than that time to respond, Axios will throw a timeout error.

### When It Occurs:

- The server is slow to respond, exceeding the configured timeout period.
- Network latency is high.

### Axios Handling:

```typescript
if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
  console.error("Timeout error:", error.message);
}
```

## 5. CORS Errors

### What It Is:

CORS (Cross-Origin Resource Sharing) errors happen when a web page attempts to make a request to a server that has not explicitly allowed the request from that domain.

### How You Get It in Axios:

Axios will throw an error if the browser blocks the request due to CORS policy restrictions. This error is usually not visible in Axios but can be seen in the browser console.

### When It Occurs:

- The server’s CORS policy doesn’t allow the request’s origin (e.g., you’re trying to access an API from a different domain).

### Axios Handling:

```typescript
if (
  axios.isAxiosError(error) &&
  !error.response &&
  error.message === "Network Error"
) {
  console.error("CORS error or network error:", error.message);
}
```

## 6. Request Abortion

### What It Is:

Request abortion happens when a request is intentionally canceled before completion.

### How You Get It in Axios:

You can cancel requests using Axios’ cancel tokens. If a request is canceled, Axios will throw an error.

### When It Occurs:

- The user navigates away from a page before the request completes.
- You programmatically cancel a request (e.g., to avoid making duplicate requests).

### Axios Handling:

```typescript
import axios from "axios";

const source = axios.CancelToken.source();

axios
  .get("/api/data", { cancelToken: source.token })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else {
      console.error("Error:", error.message);
    }
  });

// To cancel the request
source.cancel("Request was canceled by the user.");
```

## 7. Parsing/Deserialization Errors

### What It Is:

These errors occur when the server’s response data isn’t in the expected format, such as when JSON is malformed or not what was anticipated.

### How You Get It in Axios:

Axios automatically parses JSON responses, but if the response data is malformed or not JSON, it can throw a parsing error. This typically happens when the response data doesn't match the expected format or structure.

### When It Occurs:

- The server responds with invalid or unexpected data (e.g., HTML instead of JSON).
- The response format doesn’t match what you expect (e.g., missing fields or incorrect data types).

### Axios Handling:

```typescript
try {
  const response = await axios.get("/api/data");
  // Assuming the response data is expected to be in JSON format
  const data = response.data;
  // You can add additional checks if necessary
  if (typeof data !== "object") {
    throw new Error("Unexpected response format");
  }
} catch (error) {
  console.error("Parsing/Deserialization error:", error.message);
}
```

## 8. Business Logic Errors

### What It Is:

Business logic errors occur when the server’s response indicates a problem specific to your application’s logic, even if the HTTP request was successful. These errors are related to the rules and constraints of your application's logic rather than the HTTP protocol itself.

### How You Get It in Axios:

You get a successful response from the server (e.g., with a 200 OK status), but the response data indicates a failure according to your application’s logic. This usually involves the server returning an error message or an error flag in the response body.

### When It Occurs:

- The server returns an error message in the response body, despite a 200 status code.
- Validation errors or other application-specific errors are returned by the server.
- The response includes information indicating that the requested operation could not be completed due to business rules (e.g., attempting to create a duplicate record).

### Axios Handling:

```typescript
const response = await axios.post("/api/submit", data);

if (response.data.success === false) {
  console.error("Business logic error:", response.data.message);
} else {
  console.log("Success:", response.data);
}
```

## 9. Configuration Errors

### What It Is:

Configuration errors occur when there’s a problem with the Axios setup, such as incorrect headers, base URL, or other configuration settings.

### How You Get It in Axios:

Axios throws an error if there’s a misconfiguration in your setup. This might include incorrect headers, an invalid base URL, or other settings that prevent Axios from correctly sending or receiving requests.

### When It Occurs:

- The base URL or endpoint URL is incorrect or malformed.
- Headers are missing or incorrect (e.g., missing `Content-Type` or `Authorization`).
- Misconfigured Axios interceptors lead to broken requests or responses.

### Axios Handling:

```typescript
import axios from "axios";

// Example of configuring a base URL and headers
const instance = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your_token",
  },
});

try {
  const response = await instance.get("/data");
  console.log(response.data);
} catch (error) {
  console.error("Configuration error:", error.message);
}
```

## 10. Concurrency Issues

### What It Is:

Concurrency issues arise when multiple asynchronous operations interfere with each other, leading to unexpected results or conflicts. This can happen when multiple requests are made simultaneously or when responses come back in an unexpected order.

### How You Get It in Axios:

Concurrency issues can occur if you’re making multiple Axios requests at the same time without proper management. This can lead to race conditions or duplicate requests.

### When It Occurs:

- **Race Conditions**: Multiple requests are initiated, and responses arrive out of order or in unexpected sequences.
- **Duplicate Requests**: Multiple identical requests are sent unintentionally, possibly causing redundant operations or conflicts.

### Axios Handling:

To manage concurrency, you can use techniques like `Promise.all`, `Promise.race`, or `Promise.allSettled` to handle multiple requests efficiently.

```typescript
// Example using Promise.all
try {
  const [response1, response2] = await Promise.all([
    axios.get("/api/first"),
    axios.get("/api/second"),
  ]);

  console.log("Response from first API:", response1.data);
  console.log("Response from second API:", response2.data);
} catch (error) {
  console.error("Concurrency error:", error.message);
}
```

## 11. Memory Leaks

### What It Is:

Memory leaks occur when your application retains references to objects longer than necessary, causing increased memory usage over time. This can lead to performance issues and crashes, especially in long-running applications or single-page applications (SPAs).

### How You Get It in Axios:

Memory leaks can happen if you don’t properly clean up Axios requests, especially in single-page applications or when using frameworks like React. For example, if you initiate a request and the component that made the request unmounts before the request completes, you might end up with unresolved promises or retained references.

### When It Occurs:

- **Uncleaned Requests**: Requests are made but not properly canceled or cleaned up when a component unmounts in React.
- **Retained References**: Keeping references to Axios responses or requests unintentionally, leading to unnecessary memory usage.

### Axios Handling:

To avoid memory leaks, ensure you cancel requests when components unmount or when they are no longer needed.

```typescript
import axios from "axios";
import { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get("/api/data", { cancelToken: source.token })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled");
        } else {
          console.error("Error:", error.message);
        }
      });

    // Cleanup function to cancel the request when the component unmounts
    return () => {
      source.cancel("Component unmounted");
    };
  }, []);

  return <div>My Component</div>;
};
```

## 12. Unexpected Errors (Edge Cases)

### What It Is:

Unexpected errors are rare, edge-case scenarios that may not fall into the common categories of errors. These are scenarios that are not anticipated in your code and could include unusual server behaviors or unforeseen client-side issues.

### How You Get It in Axios:

These errors can occur due to unexpected responses or behaviors from the server, or due to edge cases that weren’t considered in your application logic.

### When It Occurs:

- **Unhandled API Behaviors**: The API behaves in ways not anticipated, such as returning unexpected status codes or data.
- **Non-Standard Responses**: The server returns data that doesn’t conform to the expected format or specification.
- **Unusual Client Conditions**: Errors due to rare client-side issues or interactions.

### Axios Handling:

Since these errors are less predictable, handling them involves general error handling strategies and possibly logging additional information for debugging.

```typescript
try {
  const response = await axios.get("/api/data");
  // Process response as needed
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.error("Unexpected error from Axios:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

## 13. Permission or Access-Control Errors

### What It Is:

Permission or access-control errors occur when a user or application does not have the necessary permissions to access a resource or perform a specific action. These errors are related to authorization and access control policies.

### How You Get It in Axios:

Axios will throw errors when a request is made to a resource for which the user does not have proper permissions or when access control policies are violated. These errors often manifest as HTTP status codes indicating lack of permission.

### When It Occurs:

- **403 Forbidden**: The server understood the request but refuses to authorize it. This often means the user does not have the necessary permissions.
- **401 Unauthorized**: The request lacks valid authentication credentials. This indicates that the user needs to log in or provide valid credentials to access the resource.

### Axios Handling:

Handle these errors by checking the status code in the response and providing appropriate feedback to the user.

```typescript
try {
  const response = await axios.get("/api/protected-resource");
} catch (error) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Authorization error: User needs to log in.");
      } else if (error.response.status === 403) {
        console.error("Permission error: Access is forbidden.");
      } else {
        console.error(
          `HTTP error (${error.response.status}):`,
          error.response.data
        );
      }
    } else {
      console.error("Network or unexpected error:", error.message);
    }
  } else {
    console.error("Unexpected error:", error);
  }
}
```

# Summary of Error Types

1. **Network Errors**: Issues related to connectivity between the client and server.
2. **Client Errors (4xx HTTP Status Codes)**: Errors indicating problems with the request made by the client.
3. **Server Errors (5xx HTTP Status Codes)**: Errors indicating problems on the server side.
4. **Timeout Errors**: Errors that occur when a request takes longer than the configured timeout period.
5. **CORS Errors**: Errors due to cross-origin requests being blocked by the browser’s CORS policy.
6. **Request Abortion**: Errors occurring when a request is intentionally canceled before completion.
7. **Parsing/Deserialization Errors**: Errors arising from unexpected or malformed response data.
8. **Business Logic Errors**: Errors related to application-specific rules and logic.
9. **Configuration Errors**: Errors caused by incorrect Axios setup or configuration.
10. **Concurrency Issues**: Problems arising from multiple asynchronous operations interfering with each other.
11. **Memory Leaks**: Issues where references to objects are retained longer than necessary, causing increased memory usage.
12. **Unexpected Errors (Edge Cases)**: Rare errors that don’t fit into common categories, often related to unforeseen server or client behaviors.
13. **Permission or Access-Control Errors**: Errors related to authorization and access control, such as lack of permissions or invalid credentials.

Each type of error can be managed with specific handling strategies to ensure your application remains robust and user-friendly.
