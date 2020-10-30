## Aggregate (simple)

Aggregate: Performs a specified operation to each element in a collection, while carrying the result forward.

This Lambda Expression sample aggregates numbers in array by multiplication.

```kotlin
val numbers = arrayOf(1, 2, 3, 4, 5)
val result = numbers.reduce{ x, y -> x * y }
System.out.println("Aggregated numbers by multiplication:")
System.out.println(result)

```

Output:

```
Aggregated numbers by multiplication:
120
```