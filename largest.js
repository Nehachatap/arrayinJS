 const marks = [85,95,73,99,100]
 let largest = marks[0]
 for(const num of marks)
 {
    if(num > largest){
        largest = num
    }
 }
 console.log(largest)