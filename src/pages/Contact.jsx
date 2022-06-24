const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/0374e9fe-8514-4a93-9c86-556b05d27e43" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">Contact</p>
        </div>
        <input className="border-2 border-black p-2" type="text" placeholder="Name" name="name" />
        <input className="border-2 border-black my-4 p-2" type="email" placeholder="Email" name="email" />
        <textarea className="border-2 border-black p-2" placeholder="Message" name="message" rows="10"></textarea>
        <button className="border-2 border-black hover:bg-black hover:text-white px-4 py-3 my-8 mx-auto flex items-center">Submit</button>
      </form>
    </div>
  );
}
    
export default Contact;
    