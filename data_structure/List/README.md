## 1. ArrayList

* An ArrayList is a list based on an array structure.
* Since it uses contiguous memory, it has a simple and efficient structure for operations.

### 1-1. Data Insertion
* Time complexity: <b>O(N)</b> <br>
* Space complexity: <b>O(1)</b>

<br>

If data is inserted in the middle, the existing elements need to be shifted backward, so the time complexity is O(N).

### 1-2. Data Deletion
* Time complexity: <b>O(N)</b>
* Space complexity: <b>O(1)</b>

<br>

Similar to insertion, deletion also requires shifting elements, so the time complexity is O(N).

### 1-3. Data Search
* Time complexity: <b>O(1)</b>
* Space complexity: <b>O(1)</b>

<br>

Accessing is done through the array index, so the time complexity is O(1).

## 2. LinkedList
* A LinkedList allows data insertion without copying or reallocating the array.
* It allows flexible use of memory.
* If you need frequent data access, using an ArrayList is a better option.

### 2-1. Data Selection
* Time complexity: <b>O(N)</b>
* Space complexity: <b>O(1)</b>

<br>

Unlike ArrayList, random access by index is not possible, since it does not use contiguous memory.<br>
Therefore, accessing data requires traversal from the head node, resulting in a time complexity of O(N).

### 2-2. Data Addition
* Time complexity: <b>O(N)</b>
* Space complexity: <b>O(1)</b>

<br>

To add data, all nodes must be traversed to reach the end of the list, where the null node is located.
The new value is then inserted in that position.

### 2-3. Data Insertion
Time complexity: <b>O(N)</b>
Space complexity: <b>O(1)</b>

<br>

Unlike ArrayList, data insertion does not require shifting existing elements.
Instead, it simply involves finding the correct position and connecting the previous and next nodes.
However, finding that position still takes O(N) time.

### 2-4. Data Deletion
Time complexity: <b>O(N)</b>
Space complexity: <b>O(1)</b>

<br>
Deleting a node requires traversal to find the target node, which takes O(N) time.
However, there is no need to shift the remaining elements after deletion.





2. LinkedList
배열의 복사, 재할당이 없이 데이터의 추가가 가능하다.
유연한 공간 사용을 할 수 있다.
데이터 조회를 많이 해야한다면 ArrayList를 사용하는 것이 더 좋다.
데이터 조회
ArrayList와 다르게 index를 통한 Random Access가 불가능하다.
메모리 공간을 연속적으로 사용하고 있지 않기 때문이다.
그래서 시간 복잡도는 O(N)이다.
데이터 추가
데이터 추가도 모든 연결을 찾아서 순회한 후 마지막에 있는 Null 자리에 값을 넣어줘야 한다.
시간 복잡도는 O(N)이다.
데이터 삽입
데이터를 넣을 때는 ArrayList와는 다르게 뒤에 있는 데이터를 모두 밀어줄 필요는 없다.
이전 노드와 다음 노드를 찾아서 연결해주면 된다.
하지만, 데이터를 넣을 자리까지 찾아가는 과정에서 시간 복잡도는 O(N)이다.
데이터 삭제
삭제하려는 데이터까지 찾아가는 시간이 있기 때문에 시간 복잡도는 O(N)이다.
하지만 삭제한 후 뒤에 있는 데이터를 앞으로 당겨주지 않아도 된다.

## 3. DoubleLinkedList





3. DoubleLinkedList
LinkedList는 Head 더미만 존재하여, Head를 기준으로 앞에서 부터 탐색했습니다.
DoubleLinkedList는 Head 뿐만이 아니라, Tail도 존재합니다.
prev와 next를 잘 이어주는 것이 중요하다.
데이터 조회
데이터의 조회를 할 때, 데이터 길이를 절반으로 나누어서 Head와 가까우면, 앞에서부터 탐색합니다.
만약 Tail과 가까우면 뒤에서부터 탐색한다. 그래서 실제로는 O(N/2)의 시간 복잡도를 가지고 있습니다.
하지만 점근 표기법에 따라서 O(N)이라고 적습니다.
