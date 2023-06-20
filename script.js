let form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let input=document.querySelector('input');
    let image=document.querySelector('img')

    fetch(`https://source.unsplash.com/random/900×700/?${input.value}`)
    .then(response=>{
        
        image.src=response.url
    })
    .catch(err=>console.log(err))
})