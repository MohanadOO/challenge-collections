# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepthRecursive(self, root: Optional[TreeNode]) -> int:
      def dfs(root: Optional[TreeNode], depth: int) -> int:
        if not root: return depth
        return max(dfs(root.left, depth + 1), dfs(root.right, depth + 1))
       
      return dfs(root, 0)