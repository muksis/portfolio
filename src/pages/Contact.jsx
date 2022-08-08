import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('test');
  const [email, setEmail] = useState('test@test.com');
  const [message, setMessage] = useState('test test');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('https://getform.io/f/0374e9fe-8514-4a93-9c86-556b05d27e43', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Success!');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          alert('Something went wrong');
        }
      })
      .catch((error) => alert('Error'));
  };

  return (
    <div className='w-full h-screen flex justify-center items-center p-4'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-black'>
            Contact
          </p>
        </div>
        <input
          className='border-2 border-black p-2 focus:outline-none'
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className='border-2 border-black my-4 p-2 focus:outline-none'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className='border-2 border-black p-2 focus:outline-none'
          placeholder='Message'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows='10'
          required
        ></textarea>
        <button className='border-2 border-black hover:bg-black hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
