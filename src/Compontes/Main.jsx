import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

function main() {

  const ref = useRef()
  const pass = useRef()
  const [from, setform] = useState({
    email: "", username: "", password: ""
  })
  const [savepass, setsavepass] = useState([])

  useEffect(() => {
    let passowrd = localStorage.getItem('passowrd')
    if (passowrd) {
      setsavepass(JSON.parse(passowrd))
    }


  }, [])

  const handalcahnge = (e) => {
    setform({ ...from, [e.target.name]: e.target.value })
  }

  const save = () => {

  if(from.email.length >3 && from.username.length >3 && from.password.length >3){

    setsavepass([...savepass, { ...from, id: uuidv4() }])
    localStorage.setItem('passowrd', JSON.stringify([...savepass, { ...from, id: uuidv4() }]))
    console.log([...savepass, from])
      setform({email: "", username: "", password: "" })

      toast('save successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
  
      });
    }
    else{
      toast("Please fill all the fields");
    }
  }

  const passowrdShow = () => {

    if (ref.current.src.includes("hide.png")) {
      alert("The Password is Show");
      ref.current.src = "src/assets/view.png";
      pass.current.type = "text";
    } else {
      ref.current.src = "src/assets/hide.png";
      pass.current.type = "password";
    }
  };

  const handaldelete = (id) => {

    let c = confirm('Are you sure you want to delete this item?')
      if(c){
    setsavepass([...savepass.filter((item) => item.id !== id)])
    localStorage.setItem('passowrd', JSON.stringify([...savepass.filter((item) => item.id !== id)]))
    console.log(id)
 }
 toast('Delete successfully', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",

});
  };

  const handaledit = (id) => {
     setform(savepass.filter((item) => item.id === id)[0])
     setsavepass([...savepass.filter((item) => item.id !== id)])
    
    


  }

  const copytext = (text) => {
    toast('Copied ' + text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
    navigator.clipboard.writeText(text)

  }



  return (<>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"

    />
    <div className='flex justify-center items-center flex-col gap-3 '>
      <div className=' my-2'> &lt;Pass<span className='text-blue-600'>OP</span>&gt;</div>
      <p>Your own Password Manger</p>
      <div className='flex  flex-col   gap-3 w-[80%] '>
        <div className='flex justify-center w-full   '>
          <input onChange={handalcahnge} value={from.email}
            name="email"
            type="text" placeholder='Side' id="" className='bg-red-100  w-full h-8 rounded-full outline-none flex p-3' />
        </div>
        <div className='md:flex justify-center w-full  gap-3 '>

          <input onChange={handalcahnge} value={from.username}
            name='username'
            type="text" placeholder='UserName' className='bg-red-100  w-full h-8 rounded-full outline-none flex  p-3 mb-[12px]' />

          <div className='relative md:w-[60%]  '>
            <input onChange={handalcahnge} value={from.password}
              name='password'
              type="password" ref={pass} placeholder='Passowrd' className='bg-red-100  w-full h-8 rounded-full outline-none flex  p-3 ' />
            <span className='absolute right-4 top-0' onClick={passowrdShow}>
              <img src="src/assets/hide.png" alt="" className='h-8 w-8 right-' ref={ref} />
            </span>
          </div>
        </div>
      </div>
      <div>
        <button onClick={save} className='bg-slate-300 p-2 m-3 rounded-3xl'>Add Passowrd</button>
      </div>
    </div>


    {/* your password storege section */}
    {savepass.length === 0 && <div className='text-2xl flex justify-center'>NOT SAVE ANY ITEMS</div>}
    {savepass.length != 0 &&

      <div className="savePassword  flex justify-center items-center ">
        <div className="relative overflow-x-auto flex justify-center w-[80%] rounded-lg   py-4 ">
          <table className=" text-sm text-left rtl:text-right text-gray-500 w-full">

            <thead className="text-xs text-gray-700 uppercase bg-cyan-500 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Side
                </th>
                <th scope="col" className="px-6 py-3">
                  UserName
                </th>
                <th scope="col" className="px-6 py-3">
                  Passowrd
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>

              </tr>
            </thead>
            <tbody className=' '>
              {savepass.map((item, index) => {
                return (
                  <tr key={index} class=" bg-cyan-300  text-black  border-4  border-cyan-400   ">
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap  ">
                      <a href="item.email" target='_blank' rel="noreferrer" 
                          >
                       {item.email}</a>
                      <button className='pl-4' onClick={() => copytext(item.email)}><img src="src/assets/copy.png" alt=""
                        className='w-5 h-5' /></button>
                    </th>
                    <td className="px-6 py-4">
                      {item.username}
                      <button className='pl-4' onClick={() => copytext(item.username)}><img src="src/assets/copy.png" alt=""
                        className='w-5 h-5' /></button>
                    </td>
                    <td className="px-6 py-4">
                      {item.password}
                      <button className='pl-4' onClick={() => copytext(item.password)}><img src="src/assets/copy.png" alt=""
                        className='w-5 h-5' /></button>
                    </td>
                    <td class="px-6 py-4">
                      <button className='w-7 h-7 mr-2 ' onClick={()=>{handaledit(item.id)}}>
                        <img src="src/assets/edit-text.png" alt="" />
                      </button>
                      <button className='w-7 h-7 ml-2' onClick={() => {handaldelete(item.id)}} >
                        <img src="src/assets/delete.png" alt="" />
                      </button>
                    </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    }
  </>)
}

export default main