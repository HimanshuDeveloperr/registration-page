//creating a post

const post=[
    {name:'himanshu',work:'frontend-developer',createdpost:new Date().getTime()},
    {name:'suman',work:'professional footballer',createdpost:new Date().getTime()}

]

//function to show post on our webpage

function getpost(){

    setTimeout(() => {

       

            let output="";
            post.forEach((obj)=>{
              let li=`<li>${obj.name} ${obj.work} updated on ${(new Date().getTime()-obj.createdpost)/1000} seconds ago`
                output=output+ li
            })
            document.body.innerHTML=output;
            
     
        
    }, 2000);
}

getpost()