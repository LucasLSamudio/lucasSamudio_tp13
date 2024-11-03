function createMultiplicationTable(){
    for(j=1; j<=10;j++){
        console.log("\n\nTabla de multiplicar x"+j+"\n---------------------------")
        for(i=1; i<=10;i++){
            console.log(`${j} * ${i} = `+j*i)
        }
        console.log("---------------------------")
    }
}

createMultiplicationTable()