
const a =[5,8,2]
const b = [2,3,1]

function compareTriplets(a, b) {
    var result=[0,0];
    var changed;

do{
     changed=false;
    for(i=0;i<=a.length;i++) {
       
        for(j=0;j<=b.length;j++){
            if (a[i]>b[j]){
                result[0]+=1;
            }
            else if (a[i]<b[j]) {
                result[1]+=1;
            }
            
            changed=true
    } while(changed);

    return result
}

console.log(compareTriplets(a,b));