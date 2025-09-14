   
    // Promises

 function getUserData() {
    return new Promise((resolve,reject)=>{
        let ran=Math.random()
        console.log(ran);
        let user={
            id:1,
            name:"Asad",
            age:25
        }
        if (ran<0.3) {
            reject("Reject")
        }else{
                setTimeout(() => {
                resolve(user)
            }, 2000); 
            }         
    })
}

getUserData().then((res)=>{
    console.log(res);
    
})
.catch((rej)=>{
    console.log(rej);
    
})


function username() {
   return new Promise((resolve)=>{
       const user={
            id:1,
            name:"asad"            
        }
        setTimeout(() => {
            resolve(user.name)
        }, 1000);
    })
}

function getposts() {
    return new Promise((resolve)=>{
        const arr=["post1","post2"]

        setTimeout(() => {
            resolve(arr)
        }, 1000);
    })
}

username().then((res)=>{
 console.log(`User: ${res}`);
 return getposts()
}).then((post)=>{
    console.log(`Posts: ${post.join()}`);
    
})


const p=new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Wait for both")
        
    }, 2000);
})
const p1=new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Both Promises done!")
    }, 3000);
})

Promise.all([p,p1])
.then((res)=>{
    console.log(res);
    
})