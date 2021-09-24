# 13919번. 숨바꼭질 4
# 1697번 숨바꼭질 문제(최단 경로 거리 구하기) + 최단 경로로 가는 경로 까지 찍힐 수 있게 하는 문제

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
        # 현재 지점에서 앞, 뒤 ,*2한 지점을 갈 수 있음
        # 3개의 지점을 탐색
        for i in (v-1, v+1, v*2):
            # 범위 내에 있고 아직 방문하지 않은 노드라면
            if 0 <= i <= 100000 and distance[i] == 0:
                # 현재 지점 + 1한 값을 현재 노드의 값으로 지정(경로의 거리)
                distance[i] = distance[v]+1
                # 그 노드의 인접 노드도 살펴봐야 하므로 큐에 넣고
                queue.append(i)
                # 경로를 저장해야 하므로 탐색하고 있는 노드의 이전 노드를 저장
                path[i] = v


N, K = map(int, input().split())
# N에서 특정 지점까지 최단 경로를 저장하는 distance
distance = [0]*100001
# 이전 노드를 저장하는 path
# path[i] = v : i 노드의 이전 노드 v
path = [0]*100001
ans = []

bfs(N)

# ans 배열에 K부터 N까지의 경로를 찍음
while K != N:
    ans.append(K)
    K = path[K]
ans.append(K)
# 경로가 반대(K->N)이므로 N->K 순으로 돌리기 위해 배열을 뒤집어줌
ans.reverse()
# 배열의 item 사이에 ' '를 포함해서 문자열로 만들어낸 것을 출력
print(' '.join(map(str, ans)))
