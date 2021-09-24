# 2178번. 미로 탐색
# bfs 너비 우선 탐색, dfs 사용 시 런타임 에러 날 수 있음

from collections import deque

N, M = map(int, input().split())
graph = []
for i in range(N):
    graph.append(list(map(int, input())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def bfs(x, y):
    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue
            if graph[nx][ny] == 1:
                queue.append((nx, ny))
                # 최단거리 구할 시 이전 노드를 고려해야 함
                # 13913번/1697번 숨바꼭질 문제와 흡사, 2차원 공간이라는 것이 다름
                graph[nx][ny] = graph[x][y]+1


bfs(0, 0)
print(graph[N-1][M-1])
