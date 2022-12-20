//creating a post

const post=[
    {name:'himanshu',work:'frontend-developer',createdpost:new Date().getTime()},
    {name:'suman',work:'professional footballer',createdpost:new Date().getTime()}

]

//function to show post on our webpage
let intervalId=0;
function getpost(){

    clearInterval(intervalId)

intervalId=setInterval(() => {


    setTimeout(() => {

       

            let output="";
            post.forEach((obj)=>{
              let li=`<li>${obj.name} ${obj.work} updated on ${(new Date().getTime()-obj.createdpost)/1000} seconds ago`
                output=output+ li
            })
            document.body.innerHTML=output;
            
     
        
    }, 2000);
    
}, 1000);
}

getpost()

//function to create a new post and push it into the posts array

function createpost(newpost) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            post.push({...newpost,createdpost:new Date().getTime()})
                
            const error=false;

            if(!error){
                resolve()
            }
            else{
                reject('Error: something went wrong')
            }
            
        }, 6000);
        

    })
}



function deletePost(){
    
    return new Promise((resolve,reject)=>{
        
        
        setTimeout(() => {
            
            
            if(post.length>0){

                const lastelement= post.pop()
                
                resolve(lastelement)
            }
            else{
                reject('Error: array is empty')
            }
            
        }, 1000);
    })
}



createpost({name:'nandani',work:'model'})
.then(()=>{
    getpost()
    deletePost().then(()=>{
        getpost()
        deletePost().then(()=>{
            getpost()
            deletePost().then(()=>{
                getpost()
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log(err)
                })
            })
            
        })
    })})

//promises are meant to be broken so use catch whenever u use the promise.
