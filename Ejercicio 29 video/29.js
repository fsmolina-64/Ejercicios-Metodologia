'use strict';
let nums = [2,6,8,10,3,4,7,9,5];
let aux;
for (let i = 0; i < nums.length; i++) {

    for (let j = (i + 1); j < nums.length; j++) {
        if (nums[j] > nums[i]) {
            aux = nums[i]
            nums[i] = nums[j]
            nums[j] = aux;
        }

    }


}
alert(nums);
