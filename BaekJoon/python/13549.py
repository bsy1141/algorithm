# 13549번. 숨바꼭질 3
from collections import deque


def bfs(v):
    queue = deque([v])

    while queue:
        v = queue.popleft()
        distance[v] = 0

        if v == K:
            print(distance[v])
            break

        for i in (v-1, v+1, v*2):
            if 0 <= i < 1000001 and distance[i] == -1:
                # 가중치가 다르다. 최단시간을 구하는 것이므로 우선순위는 순간이동에 있다.
                # 따라서 큐의 맨 앞에 넣어준다.
                if i == v*2:
                    distance[i] = distance[v]
                    queue.appendleft(i)
                else:
                    distance[i] = distance[v]+1
                    queue.append(i)


N, K = map(int, input().split())
distance = [-1]*100001
bfs(N)
