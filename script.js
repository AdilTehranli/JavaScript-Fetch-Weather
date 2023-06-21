let form=document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    let input=document.querySelector('input');
    let image=document.querySelector('img')
    image.src='https://i.stack.imgur.com/hzk6C.gif'


    try{

        let response = await fetch(`https://source.unsplash.com/random/900×700/?${input.value}`)
        
        image.src=response.url
    }catch(err){
            console.log(err);
    }
    
    let api_key='3a2071049e76ca09f49d543a419959fa';
    try{
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}`)
       let result= await response.json();
        console.log(result);

    }catch(err){
        console.log(err);
    }


})