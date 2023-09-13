//  question => Explain the time complexity of accessing an element in an array.

// ans => The time complexity of accessing an element in an array is O(1), also known as constant time. This means that the time it takes to access an element in an array does not depend on the size of the array.

// For example, if an array has 10 elements, then the address of the element at index 0 is base_address + 0 * element_size, the address of the element at index 1 is base_address + 1 * element_size, and so on.

// When we access an element in an array, the computer simply calculates the address of the element and then reads the data from that address. This process takes a constant amount of time, regardless of the size of the array.

// There are a few things that can affect the time it takes to access an element in an array. For example, if the array is not stored in contiguous memory, then the computer may need to perform a cache miss, which can add some overhead. However, in general, the time complexity of accessing an element in an array is O(1).

const myArray = [1, 2, 3, 4, 5];

const element = myArray[3];

console.log(element);

// In this example, we are creating an array called myArray with five elements. We are then accessing the element at index 2, which is the number 3.

// The time complexity of this code is O(1), because the time it takes to access the element does not depend on the size of the array. In this case, the array has 5 elements, but the code would still take the same amount of time to execute if the array had 100 elements or 1000 elements.
