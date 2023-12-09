import React, {useState} from 'react';


function RightHalf() {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGetStartedClick = () => {
    
    if (email.includes('@') && email.includes('.')) {
      
      window.location.href = 'https://app.loch.one/welcome';
    } else {
      
      setErrorMessage('Please enter a valid email');
    }
  };


  return (
    
    <div className=' bg-white h-screen flex flex-col items-center justify-center '>
      <div className=' space-y-5'>
        <p className='text-4xl font-semibold text-gray-300'>Sign up for <br /> exclusive access.</p>
        <div>
          <input type="text" className='w-72 h-12 border-2 border-gray-200 rounded-md shadow-sm pl-5' 
            placeholder='Your email address'
            value={email}
            onChange={handleEmailChange}/>
        </div>
        
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        
        <button className='w-72 h-12 bg-black rounded-md text-white ' onClick={handleGetStartedClick}>Get Started</button>
      </div>
      <div className=' mt-5'>
        <p>You'll receive an email with an invite link to join.</p>
      </div>
    </div>
    
  );
}

export default RightHalf;




