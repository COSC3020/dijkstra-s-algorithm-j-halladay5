function dijkstras(graph, source)
{
    if(graph.length < 2)
    {
        return 0;
    }
    
    var dist = new Array(graph.length).fill(Infinity);
    dist[source] = 0;
    var marked = new Array(graph.length).fill(0);
    var markedCount = 0;
    
    while(markedCount != graph.length)
    {
        var minValue = Infinity;
        
        //finds the minimum unvisited node. Will find the source node first.
        //Then finds its unvisited edges
        for (var minNode = 0; minNode < graph.length; minNode++) {
            if (!marked[minNode] && dist[minNode] < minValue) {
                minValue = dist[minNode];
                var currentNode = minNode;
            }
        }
        
        marked[currentNode] = 1;
        markedCount++;
        
            for(var edge = 0; edge < graph.length; edge++)
            {
                if(graph[currentNode][edge] > 0)
                {
                    dist[edge] = Math.min(dist[edge], dist[currentNode] + graph[currentNode][edge]);
                }
            }
    }
    return dist;
}
