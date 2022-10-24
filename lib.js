function sum(numbers){
    let s = 0;
    for(let i = 0; i < numbers.length; i++){
        s += numbers[i];
    }
    return s;
}

function avg(numbers) {
    return sum(numbers) / numbers.length; 
}

function max(numbers) {
    let m = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (m < numbers[i]){
            m = numbers[i]; 
        }
    } 
    return m; 
}

function med(numbers) {
    let lenofnum = (numbers.length);
    let res = 0;

    if(lenofnum % 2 == 0){                      // even number
        res = numbers[lenofnum/2] + numbers[(lenofnum/2)-1];
        res = res/2;
    }
    else if(lenofnum % 2 != 0){                 // odd number
        let sortednum = numbers.sort(sortNumber);         // sort the array ascendingly
        res = sortednum[((lenofnum/2)+0.5)-1];
    }
    return res;
}

function iqr(numbers) {
    let lenofnum = (numbers.length);
    let sortednum = numbers.sort(sortNumber);
    let Q1num = 0;
    let Q3num = 0;
    
    if(lenofnum % 2 == 0){                      // even number
        let midnum = (lenofnum/2);     
        // eg: 1 2 3 [4] | 5 6 7 8 == 4 
        // eg: 1 2 [3] | 4 5 6 == 3

        if(midnum % 2 == 0){                                                // Q1 have length = even number
            Q1num = sortednum[midnum/2] + sortednum[(midnum/2)-1];          // eg: 1 [2]+[3] 4 | 5 6 7 8
            Q1num = Q1num/2;
            
            Q3num = sortednum[(midnum/2)+midnum] + sortednum[(midnum/2)+midnum-1];      // eg: 1 2 3 4 | 5 [6]+[7] 8
            Q3num = Q3num/2;
        }
        else if(midnum % 2 != 0){                                           // Q1 have length = odd number
            Q1num = sortednum[((midnum/2)-0.5)];                            // eg: 1 [2] 3 | 4 5 6 == 1
            
            Q3num = sortednum[((midnum/2)-0.5)+midnum];                     // eg: 1 2 3 | 4 [5] 6 == 4
        }    
    }
    
    else if(lenofnum % 2 != 0){                      // odd number
        let midnumloc = ((lenofnum/2)-0.5);     
        // eg: 1 2 3 4 [5] 6 7 8 9 == 4 
        // eg: 1 2 3 [4] 5 6 7 == 3

        if(midnumloc % 2 == 0){                                                 // Q1 have length = even number
            Q1num = sortednum[midnumloc/2] + sortednum[(midnumloc/2)-1];        // eg: 1 [2]+[3] 4 5 6 7 8 9
            Q1num = Q1num/2;
            
            Q3num = sortednum[(midnumloc/2)+midnumloc] + sortednum[(midnumloc/2)+1+midnumloc];
            Q3num = Q3num/2;
        }
        else if(midnumloc % 2 != 0){                                            // Q1 have length = odd number
            Q1num = sortednum[((midnumloc/2)-0.5)];                             // eg: 1 [2] 3 4 5 6 7 == 1
            
            Q3num = sortednum[((midnumloc/2)+0.5)+midnumloc];
        }             
    }
    return Q3num-Q1num;
}

function outlier(numbers) {
    let originalnum = numbers.slice();
    let lenofnum = (numbers.length);
    let sortednum = numbers.sort(sortNumber);

    let Q1num = 0;
    let Q3num = 0;
    
    if(lenofnum % 2 == 0){                      // even number
        let midnum = (lenofnum/2);     

        if(midnum % 2 == 0){                                                // Q1 have length = even number
            Q1num = sortednum[midnum/2] + sortednum[(midnum/2)-1];          // eg: 1 [2]+[3] 4 | 5 6 7 8
            Q1num = Q1num/2;
            
            Q3num = sortednum[(midnum/2)+midnum] + sortednum[(midnum/2)+midnum-1];      // eg: 1 2 3 4 | 5 [6]+[7] 8
            Q3num = Q3num/2;
        }
        else if(midnum % 2 != 0){                                           // Q1 have length = odd number
            Q1num = sortednum[((midnum/2)-0.5)];                            // eg: 1 [2] 3 | 4 5 6 == 1
            
            Q3num = sortednum[((midnum/2)-0.5)+midnum];                     // eg: 1 2 3 | 4 [5] 6 == 4
        }    
    }
    
    else if(lenofnum % 2 != 0){                      // odd number
        let midnumloc = ((lenofnum/2)-0.5);     
        // eg: -18 -5 -2 [1] 2 3 4 = 3

        if(midnumloc % 2 == 0){                                                 // Q1 have length = even number
            Q1num = sortednum[midnumloc/2] + sortednum[(midnumloc/2)-1];        // eg: 1 [2]+[3] 4 5 6 7 8 9
            Q1num = Q1num/2;
            
            Q3num = sortednum[(midnumloc/2)+midnumloc] + sortednum[(midnumloc/2)+1+midnumloc];
            Q3num = Q3num/2;
        }
        else if(midnumloc % 2 != 0){                                            // Q1 have length = odd number
            Q1num = sortednum[((midnumloc/2)-0.5)];                             // eg: -18 [-5] -2 1 2 3 4 = 1
            
            Q3num = sortednum[((midnumloc/2)+0.5)+midnumloc];
        }             
    }

    let IQReq = iqr(numbers);
    let lowerbound = (Q1num - 1.5*IQReq);
    let upperbound = (Q3num + 1.5*IQReq);
    let res = [];
    let j = 0;

    for (let i = 0; i < lenofnum; i++){
        if ((originalnum[i] > upperbound) || (originalnum[i] < lowerbound)){
            res[j] = originalnum[i];
            j++;
        }
        else{
            continue;
        }
    } 

    
    for(let k = 0; k < res.length; k++){
        console.log(res[k]);
    }
    
    
    //res.forEach(element => console.log(element));
    //return console.log(res[]);
}

function sortNumber(a, b) {
    return a - b;
 }
 

exports.sum = sum;
exports.avg = avg;
exports.max = max;
exports.med = med;
exports.iqr = iqr;
exports.outlier = outlier;