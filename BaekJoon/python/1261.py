# 1261번. 알고스팟

# 비용이 적은 경로부터 우선적으로 탐색하고, 가장 적은 비용에 대한 탐색이 끝나고 나서야
# 비로소 더 큰 비용의 경로를 탐색하기 때문에 벽을 최소한으로 부수고 이동하는 경로를 찾을 수 있다
# 가중치 고려 : append - appendleft 사용

from collections import deque

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

M, N = map(int, input().split())
graph = []
for i in range(N):
    graph.append(list(map(int, input())))
visited = [[0]*M for i in range(N)]


def bfs(x, y):
    queue = deque()
    queue.append((x, y))
    visited[x][y] = 1

    while queue:
        x, y = queue.popleft()

        if x == N-1 and y == M-1:
            print(graph[x][y])
            break

        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]

            if 0 <= nx < N and 0 <= ny < M and visited[nx][ny] == 0:
                visited[nx][ny] = 1
                # 가중치 고려 문제 - 비용이 적은 것부터 우선적으로 고려해야 하기 때문에
                # 0을 만났을 때 큐 앞에 넣어준다
                if graph[nx][ny] == 1:
                    graph[nx][ny] = graph[x][y]+1
                    queue.append((nx, ny))
                else:
                    graph[nx][ny] = graph[x][y]
                    queue.appendleft((nx, ny))


bfs(0, 0)
