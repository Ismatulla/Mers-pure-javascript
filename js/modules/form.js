import {closeModal,openModal} from './modal'

function form(modalTimer){
    // HTTP REQUEST

 const forms = document.querySelectorAll('form')

 const datas = {
   success:'data received successfully',
   failure:'error occured',
   loading:'img/form/spinner2.svg',

 }

forms.forEach((item)=>{
form(item)
})

      // ASYNC AWAIT //

const postData= async (url,data)=>{
const res = await fetch(url,{
  method:'POST',
  headers:{
    'Content-type':'application/json'
  },
  body:data
})
return  await  res.json()
}

function form(dataForm){
dataForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const element = document.createElement('img')
  element.src = datas.loading
  element.style.cssText = `
  display: block;
  margin:0 auto;
  `
      // ASYNC AWAIT  UTILIZING //
  dataForm.append(element)
const formData = new FormData(dataForm)
const json = JSON.stringify(Object.fromEntries(formData.entries()))
postData('http://localhost:3000/requests',json)
.then(data=>{
  console.log(data)
  showThanksModal(datas.success)
  element.remove()
  })
.catch(()=>{
    showThanksModal(datas.failure) 
  })
  .finally(()=>{
dataForm.reset()
  })
})
}
 
// show status of req modal
function showThanksModal(message){
  const prevModalDialog = document.querySelector('.modal__dialog')
  prevModalDialog.classList.add('hide')
  openModal('.modal',modalTimer) 
  const thanksModal = document.createElement('div')
  thanksModal.classList.add('modal__dialog')
  thanksModal.innerHTML = `
  <div  class="modal__content">
  <div class="modal__close" data-close>x</div>
  <div class="modal__title">${message}</div>
  </div>
  `
  document.querySelector('.modal').append(thanksModal)

  setTimeout(()=>{
    thanksModal.remove()
    prevModalDialog.classList.add('show')
    prevModalDialog.classList.remove('hide')
    closeModal('.modal',modalTimer)
  },4000)
}
}

export default  form