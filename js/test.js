let vaule = [1,2,4,6,7,2,3,4,8,8];

function getDuplicate(data){
    return data.filter((vaule, index) => data.indexOf(vaule) == index);
}

console.log(getDuplicate(vaule));