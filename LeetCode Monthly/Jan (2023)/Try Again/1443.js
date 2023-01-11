//https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description
function minTime(n, edges, hasApple) {
    var adj = new Array(n);
    for (var i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var x = edges_1[_i];
        adj[x[0]].push(x[1]);
        adj[x[1]].push(x[0]);
    }
    return dfs(-1, 0, adj, hasApple);
    function dfs(prev, curr, adj, hasApple) {
        var ans = 0;
        for (var _i = 0, _a = adj[curr]; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x === prev)
                continue;
            var res = dfs(curr, x, adj, hasApple);
            if (res > 0 || hasApple[x])
                ans += res + 2;
        }
        return ans;
    }
}
console.log(minTime(7, [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
], [false, false, true, false, true, true, false]));
