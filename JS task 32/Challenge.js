
function User(callback) {
    const obj={
        id:1,
        user:"Asad"
    }
setTimeout(() => {
    console.log(`${obj.user}`);
}, 1000);

setTimeout(() => {
    return callback()
}, 1000);

}

function post() {
    const arr=["post1","post2"]
    console.log(`${arr.toString()}`);
}
User(post)


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

async function main(params) {
 
    return new Promise((resolve)=>{
        const obj={
            id:1,
            user:"Asad"
        }
        
        setTimeout(() => {
            resolve(`${obj.user}`)
        }, 1000);
        
    })
}
function userid() {
    return new Promise((resolve)=>{

        const arr=["post1","post2"]
        setTimeout(() => {
            resolve(`${arr}`)
        }, 1000);
    })
}

main().then((res)=>{
console.log(res);
return  userid()
}).then((post)=>{
    console.log(post);
    
})
        
    