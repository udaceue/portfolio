import React, { useState, useRef } from 'react'


function Contact() {
    const [emailInput, setEmailInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    const [companyInput, setCompanyInput] = useState("")
    const [messageInput, setMessageInput] = useState("")



    const handleEmailInput = (event) => {
      setEmailInput(event.target.value)
    }

    const handleNameInput = (event) => {
      const target = event.target
      setNameInput(target.value)
      if(target?.validity?.patternMismatch){
        target?.setCustomValidity('something went wrong');
      } else {
      target?.setCustomValidity("");
    }
    }

    const handleCompanyInput = (event) => {
        setCompanyInput(event.target.value)
    }

    const handleMessageInput = (event) => {
        setMessageInput(event.target.value)
    }


    const emailValidation = () => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput) && emailInput.length > 0)
      {
        return `Correct Email`
      }
      else if(emailInput.length == 0){
        return `Please fill your email-adress.`
      }
     else {
        return `Please enter. Correct email adress`
      }
    }

    const nameValidation = () => {
    if(/^[a-z ,.'-]+$/i.test(nameInput) && nameInput.length > 0)
      {
        return `Correct Name`
      }
      else if(nameInput.length == 0){
        return `Please Enter your Name`
      }
     else {
        return `Please enter correct Name`
      }
    }

    const companyValidation = () => {
    if(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i.test(companyInput) && companyInput.length > 0)
      {
        return `Correct Name`
      }
      else if(companyInput.length == 0){
        return `Feel free to enter your company name`
      }
     else {
        return `Please enter correct company Name`
      }
    }

        const messageValidation = () => {
    if(/^[A-Za-z0-9\s]*$/.test(messageInput) && messageInput?.length >= 15)
      {
        return `Correct Message`
      }
      else if(messageInput.length > 0 && messageInput?.length < 15){
        return `Message must have a minimum 15 characters`
      }
      else {
        return `please enter correct message`
      }
    }
    
    const setCustomValidity = (message) => {
        return message
    }




  


  return (
        <div id="contact" className='p-4 display flex flex-col '>
        <h4 className='text-4xl text-indigo-700 my-5 text-center font-bold'>Contact Me</h4>
        <form id="contact-form" action="https://getform.io/f/c08eb2d3-4e45-444d-8e4a-0bce8330f725" method='POST' encType="multipart/form-data">
        <div className='w-full grid gap-4 md:grid-cols-2'>
            <div className='flex flex-col'>
                <label className='py-2 md:py-4 font-semibold text-lg'>Name:</label>
                <input required className='border-4 border-indigo-200 w-full' 
                type="text" 
                name="userName" 
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" 
                title='some'
                onInput={setCustomValidity}
                onChange={handleNameInput}
                value={nameInput}
                />
                 <div className='text-red-500'>{nameValidation()}</div>
            </div>
            
            <div className='flex flex-col'>
                <label className='py-2 md:py-4 font-semibold text-lg'>Email:</label>
                <input required className='border-4 border-indigo-200 w-full'
                type="email" 
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" 
                name="userEmail" 
                minLength="3" 
                maxLength="48" 
                onChange={handleEmailInput}
                value={emailInput}
                />
                <div className='text-red-500'>{emailValidation()}</div>
            </div>
              
            <div className='flex flex-col'>
                <label className='py-2 md:py-4 font-semibold text-lg'>Company</label>
                <input className='border-4 border-indigo-200 w-full' 
                type="text" 
                name="userCompany"
                placeholder='not required'
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" 
                minLength="3" 
                maxLength="55"
                onChange={handleCompanyInput}
                value={companyInput}
                />
                <div>{companyValidation()}</div>
            </div>

            <div className='flex flex-col'>
                <label className='py-2 md:py-4 font-semibold text-lg'>Message</label>
                <input type="text" className="py-8 border-4 border-indigo-200 w-full"
                name='userMessage'
                required
                pattern="^[A-Za-z0-9\s]*$" 
                minLength="15" 
                maxLength="200"
                onChange={handleMessageInput}
                value={messageInput}
                />
                <div className='text-red-500'>{messageValidation()}</div>
            </div>
                 <input type="hidden" name="_gotcha" className='hidden'></input>
            
        </div>
        </form>

        <button form='contact-form' type='submit' onSubmit={() =>{contact-form.reset()}} className='bg-teal-700 mt-3 p-2 rounded-md shadow-lg shadow-teal-800 drop-shadow-sm text-white font-mono font-bold text-2xl hover:bg-teal-900 ease-in-out duration-300'>Sent Message</button>
        </div>
  )
}

export default Contact