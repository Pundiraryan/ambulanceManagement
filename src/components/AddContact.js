// import React, { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { useAuth0 } from "@auth0/auth0-react";
// const AddContact = ({ dest,addContact }) => {
//   const [name, setName] = useState('');
//   const [time, setTime] = useState('');
//   const { user, isAuthenticated, isLoading } = useAuth0();
//   const [phone, setPhone] = useState('');
//   const [place, setPlace] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!time ||!phone || !place){
//       toast.error("Fill every field properly");
//       return;
//     }
//     const newContact = {
//       id: Date.now(),
//       name:user.name,
//       time,
      
//       phone,
//       place,
//     };
//     addContact(newContact);
//     setName('');
    
//     setTime(' ');
//     setPhone(' ');
//     setPlace('');
//     toast.success("Details added successfully");
//   };

//   return (
//     <>
//     <div><Toaster/></div>
//     {isAuthenticated ?
//     <div className="my-4 mx-2 border-black	">
//     <h3 className="mx-16 my-2">Add Your Details</h3>
//     <div className="  bg-white dark:bg-gray-900">
//     <form onSubmit={handleSubmit} >
//       {/* <label>
//         UserName:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//               </label> */}
//       {/* <br /> */}
//       <label>
//         Timing:
//         <input
//           type="datetime-local"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Phone:
//         <input
//           type="number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Place:
//         <input
//           type="text"
//           value={place}
//           onChange={(e) => setPlace(e.target.value)}
//         />
//       </label>
//       <br />
//       <button class=" py-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Add In Pool</button>
//     </form>
//     </div>
//     </div>:<div>
//     <div class="  max-w-sm rounded overflow-hidden shadow-lg">
//   <img class="w-full" src="data:image/jpeg;base64,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" alt="Sunset in the mountains"/>
//   <div class="px-6 py-4">
//     <div class="font-bold text-xl mb-2">OOPS! You have to login to add Details</div>
//     <p class="text-gray-700 text-base">
//       If you facig some error in Login Kindly Contact us on this email:govind@gmail.com
//     </p>
//   </div>
//   <div class="px-6 pt-4 pb-2">
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Happy Journey</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
   
//   </div>
// </div>


//     </div>
//     }
//     </>
//   );
// };

// export default AddContact;



import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth0 } from "@auth0/auth0-react";
const AddContact = ({ dest,addContact }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!time ||!phone || !place){
      toast.error("Fill every field properly");
      return;
    }
    const newContact = {
      id: Date.now(),
      name:user.name,
      time,
      
      phone,
      place,
    };
    addContact(newContact);
    setName('');
    
    setTime(' ');
    setPhone(' ');
    setPlace('');
    toast.success("Details added successfully");
  };

  return (
    <>
    <div><Toaster/></div>
    {isAuthenticated ?



    <div className="flex justify-center bg-amber-200 m-0 p-0" >
    <div className="">
    <h3 className="my-[20px] font-serif text-3xl flex justify-center">Add Your Details</h3>
    <div className="bg-yellow-300 mx-[600px] w-[35vw] flex justify-center rounded-xl">
    <form onSubmit={handleSubmit}>
    <div class=" mx-[190px] my-[15px] w-full md:w-1/2 px-3 mb-6 md:mb-0">
      {/* <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
        UserName:
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text" placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         
               </label> 
      <br /> */}
      </div>

      <div className="mx-[190px] my-[10px] w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
      
        Timing:
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        
          type="datetime-local" required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <p class="text-gray-600 text-xs italic">Enter the time and date when you want to go.</p>
      </label>
      <br />
      </div>
      <div className="mx-[190px] my-[4px] w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
        Phone:
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          type="number" placeholder='9999-9999-99' required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      </div>
      <br />
      <div className="mx-[190px] my-[10px] w-full md:w-1/2 px-3 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
        Place:
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text" 
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        
      </label>
      </div>
      <br />
      <button class="mx-[190px] my-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Add In Pool</button>
    </form>



    </div>

</div>

    </div>:<div>
    <div class="  max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="data:image/jpeg;base64,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" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">OOPS! You have to login to add Details</div>
    <p class="text-gray-700 text-base">
      If you facig some error in Login Kindly Contact us on this email:govind@gmail.com
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Happy Journey</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
   
  </div>
</div>


    </div>
    }
    </>
  );
};

export default AddContact;

