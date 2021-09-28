# 1697번. 숨바꼭질

# 수빈 지점 N 동생 지점 K
# 수빈이는 걷거나 순간 이동 가능 -> 걸으면 +1,-1 순간이동은 *2
# 각 위치가 주어졌을 때 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지

from collections import deque


def bfs(v):
    queue = deque([v])

    while queue:
        v = queue.popleft()

        if v == K:
            print(distance[v])
            break

        for i in (v-1, v+1, v*2):
            if 0 <= i <= 100000 and distance[i] == 0:
                distance[i] = distance[v]+1
                queue.append(i)


N, K = map(int, input().split())
distance = [0] * 100001
bfs(N)
