const posts=[
    { title:'post 1',body:'this is post 1',createdAt:new Date().getTime()},
    { title:'post 2',body:'this is post 2',createdAt:new Date().getTime()}

]

let intervalId=0;
function printPostsInDOCUMENT() {
    clearInterval(intervalId)

    intervalId=setInterval(() => {

      setTimeout(() => {
  
          let output="";
          
           posts.forEach((post) => {
                                                              //currentTime-createdTIME/1000
               output=output+`<li>${post.title} - last updated ${(new Date().getTime()-post.createdAt) / 1000} seconds ago</li>`
                                                                 //  new.Date().getTime()=current time
           });
           document.body.innerHTML=output;
  
  
  }, 1000); 
    
  }, 1000);

    
}

// printPostsInDOCUMENT();

function createPost(newpost,callback){
    setTimeout(() => {
                          // ading createdat through spread operator in our object when we r creating a new post
             posts.push({...newpost,createdAt:new Date().getTime()});
        
             callback()
    }
    ,2000);
}

createPost({title:'post 3',body:'this is new post'},printPostsInDOCUMENT)


function create4Post(p,callback) {

    setTimeout(() => {

        posts.push({...p,createdAt:new Date().getTime()})
        callback();

      
        
    }, 6000);
    
}

create4Post({title:'post 4',body:'this is post 4'},printPostsInDOCUMENT)