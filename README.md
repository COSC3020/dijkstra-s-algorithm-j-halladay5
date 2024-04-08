[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The $\Theta$ time complexity of this implementation is $\Theta(V^2)$, where V is the number of vertices in the graph. This implementation starts with checking the graph length, initializing the distance and 
marked arrays, and intitialzing the markedCount variable. This all takes constant time, so we can disregard this in our analysis. This implementation relies on while loop that checks if all of the vertices
in the graph have been marked, so this will iterate at most V times. Inside the while loop there are two seperate for loops. The first for loop finds the unmarked vertex with the minimum distance. It will find
the source first because every other node has a distance of Infinity. In the worst case scenario this will run V times. The second for loop will use the vertex found and iterate over all of the "edges". Because 
this implementation uses a matrix, it will iterate V times. Inside that for loop, it checks to see if the value (weight) is greater than 0. If it is, it will take the minimum distance when comparing the orignal
and new distances to the source. After the while loop is done, it will return the distance array which takes constant time. So overall, the time complexity is V( V+V) or V(2V). Considering that we ignore any
constants or coefficients, the time complexity is $\ V \cdot (2V) \in \Theta(V^2)$.
