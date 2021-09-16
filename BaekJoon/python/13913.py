from collections import deque
import sys
input = sys.stdin.readline


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
                path[i] = v


N, K = map(int, input().split())
distance = [0]*100001
path = [0]*100001
ans = []

bfs(N)
while K != N:
    ans.append(K)
    K = path[K]
ans.append(K)
ans.reverse()
print(' '.join(map(str, ans)))
