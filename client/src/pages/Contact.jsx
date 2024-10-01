import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c8cb446-ff39-47d0-99fa-9c3d6bdfafd1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(`${result}`)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert(`${result}`)
    }
  };

  return (
    <div>
      <div className="container min-h-[83vh]">
          <h2 className="text-3xl  text-white text-center my-3">Contact Us</h2>
          <h3 className='text-7xl text-white text-center my-3'>Do you have queries?</h3>
        <div className="form p-2  w-fit mx-auto">
          <form onSubmit={onSubmit}>
            <Input placeholder='Enter your full name' className='w-[50vw]' name='Name' />
            <Input placeholder='Enter your email' className='w-[50vw]' type='email' name='Email' />
            <textarea placeholder='Description' className='w-[50vw] h-44 p-3 text-lg font-bold rounded-lg my-3' name='Description' required></textarea>
            <Button className='border-2 border-white w-[50vw] duration-500' name='Send' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact