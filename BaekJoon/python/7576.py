# 7576번. 토마토

'''
 문제 풀이 포인트: 
    1. bfs 사용 
    2. 토마토의 위치를 미리 큐에 넣어주기
    3. 큐에 넣어줘야 하는 조건에 맞는 것들만 if문으로 묶어주고 나머지는 신경을 쓰지 않기
    4. 마지막에 그래프를 전체적으로 순회하면서 0이 있는 경우 -1 출력 후 종료 ,
        그렇지 않은 경우에는 max함수를 이용해서 그래프에서 제일 큰 값을 answer로 받기
    5. 처음의 값이 1이었기 때문에 answer-1 해주기
'''

from collections import deque

M, N = map(int, input().split())
graph = []
queue = deque()
for i in range(N):
    graph.append(list(map(int, input().split())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

for i in range(N):
    for j in range(M):
        if graph[i][j] == 1:
            queue.append([i, j])

while queue:
    x, y = queue.popleft()

    for i in range(4):
        nx = x+dx[i]
        ny = y+dy[i]

        if 0 <= nx < N and 0 <= ny < M and graph[nx][ny] == 0:
            graph[nx][ny] = graph[x][y]+1
            queue.append([nx, ny])

answer = 0

for i in range(N):
    for j in range(M):
        # 0이 있는 경우 -1 출력 후 종료
        if graph[i][j] == 0:
            print(-1)
            exit(0)
        answer = max(answer, graph[i][j])

print(answer-1)
