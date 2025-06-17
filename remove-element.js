const removeElement = (nums ,val) => {
    let k = 0;
    for(let i = 0 ; nums.length;i++){
        if(nums[i] !== val){
            nums[k] == nums[i];//ghi đè giá trị không bằng val vào vị trí k
            k++;
        }
    }

}