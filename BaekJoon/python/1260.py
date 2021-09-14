# 1260. dfs와 bfs

from collections import deque

N, M, V = map(int, input().split())
matrix = [[0]*(N+1) for i in range(N+1)]
for i in range(M):
    a, b = map(int, input().split())
    matrix[a][b] = matrix[b][a] = 1
visited = [0]*(N+1)


def dfs(v):
    # 시작점 v를 방문처리, 출력
    visited[v] = 1
    print(v, end=' ')

    for i in range(1, N+1):
        # v의 인접노드이고, 방문하지 않았다면
        if matrix[v][i] == 1 and visited[i] == 0:
            # 그 노드를 기준으로 다시 dfs
            dfs(i)


def bfs(v):
    # 시작노드 v가 삽입된 큐를 초기화
    # 덱으로 큐를 구현하는 게 가장 상수 시간 복잡도를 가지며 가장 작다
    queue = deque([v])
    # dfs 수행 후 bfs 수행하므로 이제는 visited[v]=0이 방문되었다는 의미
    visited[v] = 0

    # 큐가 빌 때까지 while문 반복
    while queue:
        # 큐에 가장 먼저 들어온 v 출력
        v = queue.popleft()
        print(v, end=' ')

        # v의 방문하지 않은 인접노드 i를 큐에 추가하고 방문 처리
        for i in range(1, N+1):
            if matrix[v][i] == 1 and visited[i] == 1:
                queue.append(i)
                visited[i] = 0


dfs(V)
print()
bfs(V)
