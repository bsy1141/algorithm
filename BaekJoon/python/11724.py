from collections import deque
# 이거 안해주면 시간초과남...
import sys
input = sys.stdin.readline


def bfs(graph, v, visited):
    queue = deque([v])
    visited[v] = 1

    while queue:
        v = queue.popleft()

        for i in graph[v]:
            if visited[i] == 0:
                queue.append(i)
                visited[i] = 1


N, M = map(int, input().split())
graph = [[] for i in range(N+1)]
for i in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
visited = [0]*(N+1)
answer = 0

for i in range(1, N+1):
    if not visited[i]:
        bfs(graph, i, visited)
        answer += 1

print(answer)
