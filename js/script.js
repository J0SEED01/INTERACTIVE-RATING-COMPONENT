let number = 0

document.addEventListener('click', e => {

    if(e.target.matches('#numbers p')){
        document.querySelectorAll('#numbers p').forEach(number => {
            number.classList.remove('number--select')
        })
        e.target.classList.add('number--select')
        number = e.target.id
    }

    if(e.target.matches('#submit')){

        if(number === 0){
            e.preventDefault()
        }
        else{
            document.querySelector('.card--home').style.setProperty('opacity',0)
            document.querySelector('.card--home').style.setProperty('visibility','hidden')
            document.querySelector('.card--thank').style.setProperty('opacity',1)
            document.querySelector('.card--thank').style.setProperty('visibility','visible')    
            document.querySelector('.card--thank .card__select').textContent = `You selected ${number} out of 5`
    
            setTimeout(function() {

                document.querySelector('.card--home').style.setProperty('opacity',1)
                document.querySelector('.card--home').style.setProperty('visibility','visible')    
                document.querySelector('.card--thank').style.setProperty('opacity',0)
                document.querySelector('.card--thank').style.setProperty('visibility','hidden')

            }, 2000)
        }

        

    }
})

