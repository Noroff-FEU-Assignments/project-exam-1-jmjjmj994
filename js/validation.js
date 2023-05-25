const nameRegex = /^[a-zA-ZæøåÆØÅ]{5,}(\s[a-zA-ZæøåÆØÅ]+)?$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const subjectRegex = /^.{16,}$/;
const messageRegex = /^.{26,}$/;
const formContainer = document.querySelector(".form-container");

const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name")
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message")


const appreciationContainer = document.querySelector(".appreciation-container");





const validateName = () => {

  const name = nameInput.value.trim()
  if(!nameRegex.test(name)){
    nameInput.placeholder="Please enter a name with 5 or more characters"
    nameInput.style.cssText ="outline:3px solid red"
  
    return
  }else {
    nameInput.placeholder = "";
    nameInput.style.cssText="outline:3px solid green;"
   
  }
};

const validateEmail = () => {
  const email = emailInput.value.trim()
  if(!emailRegex.test(email)) {
    emailInput.placeholder="Please enter a valid email"
    emailInput.style.cssText ="outline:3px solid red"
    
    return;
  }else {
      emailInput.style.cssText="outline:3px solid green;"
      emailInput.placeholder =""
      
    }
  };


  const validateSubject = () => {
    const subject = subjectInput.value.trim()
    if (!subjectRegex.test(subject)) {
      subjectInput.placeholder="Subject should be at least 16 characters long"
      subjectInput.style.cssText ="outline:3px solid red"
     
      return;
    }else{
      subjectInput.placeholder=""
      subjectInput.style.cssText ="outline:3px solid green"
     
    } 
    };


    const validateMessage = () => {
      const message= messageInput.value.trim()
      if (!messageRegex.test(message)) {
        messageInput.placeholder="Subject should be at least 16 characters long"
        messageInput.style.cssText ="outline:3px solid red"
       
        return;
      } else {
        messageInput.placeholder=""
        messageInput.style.cssText ="outline:3px solid green"
       
      }   


    };





form.onsubmit = (e) => {
e.preventDefault()

  const name = nameInput.value.trim()
   if(!nameRegex.test(name)){
    nameInput.placeholder="Please enter a name with 5 or more characters"
    nameInput.style.cssText ="outline:3px solid red"
 
    return
  }else {
    nameInput.placeholder="";
    nameInput.style.cssText="outline:3px solid green;"
  
  }



  const email = emailInput.value.trim()
  if(!emailRegex.test(email)) {
    emailInput.placeholder="Please enter a valid email"
    emailInput.style.cssText ="outline:3px solid red"

    return;
  }else {
      emailInput.style.cssText="outline:3px solid green;"
      emailInput.placeholder =""
     
    }




    const subject = subjectInput.value.trim()
    if (!subjectRegex.test(subject)) {
      subjectInput.placeholder="Subject should be at least 16 characters long"
      subjectInput.style.cssText ="outline:3px solid red"
    
      return;
    }else{
      subjectInput.placeholder=""
      subjectInput.style.cssText ="outline:3px solid green"
   
    } 
 


   
      const message= messageInput.value.trim()
      if (!messageRegex.test(message)) {
        messageInput.placeholder="Message should be at least 25 characters long"
        messageInput.style.cssText ="outline:3px solid red"
      
        return;
      } else {
        messageInput.placeholder=""
        messageInput.style.cssText ="outline:3px solid green"
       
      }   


      form.submit()
     form.remove()
      confetti()
appreciationContainer.style.cssText =" display:block"
   

    };




  



 