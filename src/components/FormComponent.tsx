import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname:  '',
    email: '',
    procedure: '',
    telefon: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle success scenario
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
<div className='bg-red-500 flex flex-col space-y-4'>
  <form onSubmit={handleSubmit}>
    <label className="block">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Firstname'/>
    </label>

    <label className="block">
      <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder='Lastname'/>
    </label>

    <label className="block">
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email'/>
    </label>

    
    <label className="block">
      <input type="text" name="telefon" value={formData.telefon} onChange={handleChange} placeholder='Telefon'/>
    </label>
  

    <label className="block">
      <input type="text" name="procedure" value={formData.procedure} onChange={handleChange} placeholder='Prodedure'/>
    </label>

    <button type="submit" className="block">Submit</button>
  </form>
</div>
);
};

export default FormComponent;
