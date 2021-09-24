# 2667번. 단지번호 붙이기

# 깊이 우선 순회
# 인접 노드 중에 값이 1인 집을 카운트해주는 것이 중요하기 때문에 깊이 우선 순회 방법 사용
def dfs(x, y):
    global count

    # x,y가 범위를 벗어나거나 값이 0일 때는 false 리턴
    if x <= -1 or x >= N or y <= -1 or y >= N or graph[x][y] == 0:
        return False

    # x,y가 범위를 벗어나지 않고 값이 1일 때, 집 개수 +1
    count += 1
    # 방문 처리 배열 대신 그래프의 값을 0으로 바꿔주면 다음에 dfs 순회한 노드를 만나도 false 리턴하고 끝남
    graph[x][y] = 0
    # 인접 노드 dfs 순회하며 count값 증가
    dfs(x-1, y)
    dfs(x+1, y)
    dfs(x, y-1)
    dfs(x, y+1)

    return True


count = 0
N = int(input())
graph = []
for i in range(N):
    graph.append(list(map(int, input())))
houses = []

for i in range(N):
    for j in range(N):
        # graph[i][j]가 true일 때 주변의 집 개수를 dfs 순회를 하며 찾아서 전역변수 count에 저장
        # 정렬해줘야 하기 때문에 num 배열에 넣어주고 count 값은 0으로 초기화
        if dfs(i, j) == True:
            houses.append(count)
            count = 0

houses.sort()
print(len(houses))
for i in range(len(houses)):
    print(houses[i])
