# 7562번. 나이트의 이동
'''
    나이트가 이동할 수 있는 칸 (현재 x,y)
    (x-1,y-2), (x-2,y-1), (x+1,y-2) (x+2,y-1)
    (x-1,y+2),(x-2,y+1), (x+1,y+2), (x+2,y+1)
    테스트 케이스의 개수 N
    - 체스판 한 변의 길이 I
    - 나이트가 현재 있는 칸 
    - 나이트가 이동하려는 칸

    출력은 몇 번만에 이동할 수 있는지!
'''
from collections import deque

dx = [-1, -2, 1, 2, -1, -2, 1, 2]
dy = [-2, -1, -2, -1, 2, 1, 2, 1]

T = int(input())
for i in range(T):
    N = int(input())
    x, y = map(int, input().split())
    ax, ay = map(int, input().split())
    graph = [[0]*N for i in range(N)]
    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()

        if x == ax and y == ay:
            print(graph[x][y])
            break

        for i in range(8):
            nx = x+dx[i]
            ny = y+dy[i]

            if 0 <= nx < N and 0 <= ny < N and graph[nx][ny] == 0:
                queue.append((nx, ny))
                graph[nx][ny] = graph[x][y]+1
