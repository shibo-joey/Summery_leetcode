nums1 = [1,2]
nums2 = [3,4,5]
var findMedianSortedArrays = function(nums1, nums2) {
    nums = nums1.concat(nums2)
    nums.sort(function(a, b) {return a - b})
    if(nums.length%2 === 1){
        return nums[(nums.length-1)/2]
    }
    else{
        m = nums.length/2
        a = nums[m]
        b = nums[m-1]
        c = a + b
        return c/2
    }
};
