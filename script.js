let form=document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    let input=document.querySelector('input');
    let image=document.querySelector('img')
    image.src='https://i.stack.imgur.com/hzk6C.gif'


    try{

        let response = await fetch(`https://source.unsplash.com/random/900×700/?${input.value}`)
        input.value=""
        image.src=response.url
    }catch(err){
        
    }
})