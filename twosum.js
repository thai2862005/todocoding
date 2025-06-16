function twoSum(nums, target){
    let map = new Map();
    for(let i = 0 ; i < nums.length;i++){
        let complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement,i), i]; //trả về chỉ số của cặp tìm đươc
        }
        map.set(nums[i],i); // lưu giá trị và chỉ số của phần tử hiện tại
    }
    return [];
}