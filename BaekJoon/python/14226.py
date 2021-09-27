# 14226번. 이모티콘

# 정확한 bfs를 구현하려면 화면상의 이모티콘 개수와 클립보드의 이모티콘 개수 둘 다를 고려해야 합니다.
# 어떠한 bfs든 서로 종속적이지 않은 변수들을(화면상 개수, 클립보드 상 개수) 큐에 넣어야 한다면
# 방문 체크(visited) 역시 각각을 별개의 차원으로 놓고 해야 합니다. ->visited[num][clipboard]
from collections import deque


'''first try

def bfs(v):
    queue = deque()
    queue.append((v, 0))

    while queue:
        v, c = queue.popleft()

        if v == K:
            print(d[v])
            break

        for i in (v-1, v+c, v*2):
            if 2 <= i <= 1000 and d[i] == 0:
                if i == v*2:
                    d[i] = d[v]+2
                    queue.append((i, v))
                else:
                    d[i] = d[v]+1
                    queue.append((i, c))


K = int(input())
d = [0]*1001
bfs(1)

'''

N = int(input())
distance = [[-1]*N+1 for i in range(N+1)]


def bfs():
    queue = deque()
    queue.append((1, 0))
    distance[1][0] = 0

    while queue:
        num, cb = queue.popleft()

        # 화면 상 스티커 개수 클립보드에 복사
        if distance[num][num] == -1:
            distance[num][num] = distance[num][cb]+1
            queue.append((num, num))
        # 클립보드의 스티커 화면에 붙여넣기
        if num+cb <= N and distance[num+cb][cb] == -1:
            distance[num+cb][cb] = distance[num][cb]+1
            queue.append((num+cb, cb))
        # 화면의 이모티콘 삭제
        if num-1 >= 0 and distance[num-1][cb] == -1:
            distance[num-1][cb] = distance[num][cb]+1
            queue.append((num-1, cb))


bfs()
answer = distance[N][1]
# N까지 도달하는데 클립보드 개수 1~N-1 -> -1을 제외한 가장 짧은 시간 출력
for i in (1, N):
    if distance[N][i] != -1:
        answer = min(answer, distance[N][i])

print(answer)
