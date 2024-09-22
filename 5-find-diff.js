function findDifference(nums1, nums2) {
  let arr1 = new Array();
  let arr2 = new Array();
  for (let i of nums1) {
    let flag = false;
    for (let j = 0; j < nums2.length; j++) {
      if (i === nums2[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) arr1.push(i);
  }
  for (let i of nums2) {
    let flag = false;
    for (let j = 0; j < nums1.length; j++) {
      if (i === nums1[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) arr2.push(i);

  }
  let newarr = new Array();
  newarr.push(arr1)
  newarr.push(arr2)
  return newarr;
}



console.log(findDifference([1, 2, 3], [2, 4, 6]));
