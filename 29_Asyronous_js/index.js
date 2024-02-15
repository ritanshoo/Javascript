const test = () =>{
    return new Promise((resolve,reject)=>{
        let codeJO2secKeBadchalanaHai = () =>{
            let result = true;
            if(result){
                resolve()
                console.log("THIS IS AFTER 2 sec"); 
            }else{
                reject(new Error("This is error "))
            }
        }
        setTimeout(codeJO2secKeBadchalanaHai,2000);
    })
}




const fetchDataUsingPromise = () => {
    return new Promise((resolve,reject)=>{
    // data fetching 
    // const data = {message:"hii gagan welcome to promise"}; 
    setTimeout(()=>{
        const data = null
        if(data){
            resolve(data)
        }else{
            reject(new Error("ERROR IN DATA FETCHING "))
        }
    },2000)
  })
}


const data = fetchDataUsingPromise(); 


console.log({data})

// fetchDataUsingPromise().then((data)=>{
//     console.log(data.message)
// }).catch((error)=>{
//     console.log(`hii user please hold on we had following error in the system ${error.message} `)
// })



// const init = async () =>{
//     try {
//         let demo = await test()
//         console.log("this is after function call")
//     } catch (error) {
        
//     }
// }

// init()


/**
 * asynchronous javascript
 * promise & async await 
 * 
 * 
 */