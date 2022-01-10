/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;
var merge = function(nums1, m, nums2, n) {
    var p1 = m-1, p2 = n-1, total = m+n-1;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
            if (p2 == 2){
                console.log(cur);
            }
        }
        nums1[total--] = cur;
    }
    console.log(nums1);
    return nums1;
};
merge(nums1, m, nums2, n);