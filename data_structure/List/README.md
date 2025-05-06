## 1. ArrayList

* An ArrayList is a list based on an array structure.
* Since it uses contiguous memory, it has a simple and efficient structure for operations.

### 1-1. Data Insertion
* Time complexity: <b>O(N)</b> <br>
* Space complexity: <b>O(1)</b>
<br><br>
If data is inserted in the middle, the existing elements need to be shifted backward, so the time complexity is O(N).

### 1-2. Data Deletion
* Time complexity: <b>O(N)</b>
* Space complexity: <b>O(1)</b>
<br><br>
Similar to insertion, deletion also requires shifting elements, so the time complexity is O(N).

### 1-3. Data Search
* Time complexity: <b>O(1)</b>
* Space complexity: <b>O(1)</b>
<br><br>
Accessing is done through the array index, so the time complexity is O(1).

