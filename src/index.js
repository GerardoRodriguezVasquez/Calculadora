console.log('viculado')

const calculadora = document.getElementById('calculadora')
const pantalla = document.getElementById('pantalla')
console.log(pantalla.textContent.length)

calculadora.addEventListener('click' , e => {
    // console.log('diste click' , e.target)
    if(e.target.classList.contains('boton')){
        // console.log('boton', e.target)
        const datos = e.target.textContent
        const idBotones = e.target.id
        // console.log(idBotones)
        // console.log('datos',datos)
        // pantalla.textContent = datos

        if(idBotones === 'borrar'){
            if(pantalla.textContent.length === 1){
                pantalla.textContent = '0'
            }else{
                pantalla.textContent = pantalla.textContent.slice(0 , -1)
            }
         return
        }

        if(idBotones === 'borrarTodo'){
            pantalla.textContent = '0' 
            return 
        }
       
        if(idBotones === 'igual'){
          try {
             pantalla.textContent = eval(pantalla.textContent)
          } catch (error) {
            pantalla.textContent = 'Error!'
          }
            return
        }
    
        if(pantalla.textContent === '0' || pantalla.textContent === 'Error!' || pantalla.textContent === 'Infinity'){
            pantalla.textContent = datos
        }else{
            pantalla.textContent += datos
          
        }
       
    }
    
})

