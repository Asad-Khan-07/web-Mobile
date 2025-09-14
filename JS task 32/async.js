
        // async function

async function getUserData(city){    
    return await new Promise((resolve,reject) =>{
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
            },2000); 
        }         

    })
    
}
getUserData().then((res)=>{
    console.log(res);
    
})
.catch(()=>{
    console.log("Error!");
    
})    

 function  Sequentialone() {
   return new Promise((resolve)=>{
        setTimeout(() => {
               resolve("Download started") 
            }, 1000); 
    })
}

function Sequentialtwo() {
    return new Promise((resolve)=>{
    
        setTimeout(() => {
               resolve("Download....") 
            }, 2000);  
    })

}

function Sequentialthree() {
    return new Promise((resolve)=>{
    
        setTimeout(() => {
               resolve("Downloaded") 
            }, 1000);  
    })

}

async function main() {
    await Sequentialone().then((res)=>{
        console.log(res);
        return Sequentialtwo()
    }).then((res)=>{
        console.log(res);
        return Sequentialthree()
    }).then((res)=>{
        console.log(res);
        
    })
   
}

main()


async function checkweather(city) {
   return await new Promise((resolve)=>{
      setTimeout(() => {
          resolve(`${city}: Sunny 25`)
    }, 2000);
    
    })
}

checkweather("Hyderabad").then((res)=>{
console.log(res);

})


async function main() {
    try {     
        const get= await fetch(`https://jsonplaceholder.typicode.com/users/1/`)
        const res=await get.json()
        const arr=[res.name,res.email,res.address.city]
       arr.forEach((info)=>{
            console.log(info);   
       })
    } catch (error) {
        console.log(error.message);
        
    }
}

main()

    