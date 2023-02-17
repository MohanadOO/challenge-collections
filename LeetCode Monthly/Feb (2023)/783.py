# https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        minDiff: int = float('inf')
        list = []

        def orderList(node):
            if not node: return

            orderList(node.left)
            list.append(node.val)
            orderList(node.right)

        orderList(root)

        for i in range(len(list) - 1):
            minDiff = min(minDiff, list[i + 1] - list[i])

        return minDiff
        
