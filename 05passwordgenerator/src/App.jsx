import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [schar, setSchar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let char = "!@#$%^&*()'?<>"
    let pass = ""

    if (number) str += num;
    if (schar) str += char;

    console.log("start")
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);

      console.log(`${index}`)
      console.log("str:", str.charAt(index, 1))
      pass += str.charAt(index, 1);

      console.log("pass:", pass)
    }

    setPassword(pass)

  }, [length, number, schar, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, number, schar, passwordGenerator]);

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]);

  return (
    <>
      <div className=' w-full h-screen flex justify-center items-center p-5'>
        <div className=' w-full max-w-xl font-mono px-2.5 sm:px-7 py-3 my-3 mx-auto bg-gray-400 flex flex-col  justify-center rounded-xl shadow-lg shrink'>

          <div className=' font-semibold text-center text-xl my-4'>
            Password Generator
          </div>

          <div className='  flex justify-center my-3'>
            <input className=' w-full rounded-s-lg px-2 py-1 outline-none'
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              overflow="hidden"
            />
            <button className=' rounded-e-lg bg-black px-3 py-1 text-white active:bg-gray-600 hover:bg-gray-900'
              onClick={copypassword}
            >Copy</button>
          </div>

          <div className='flex flex-col items-center justify-around my-1 gap-x-2 sm:flex sm:flex-row '>
            <div className=' flex justify-start w-full sm:w-3/4 gap-x-2'>
              <input className='cursor-pointer w-3/5 '
                type="range"
                min={4}
                max={50}
                value={length}
                onChange={(e) => { setLength(e.target.value) }} />
              <label htmlFor="range">Length: {length}</label>
            </div>

            <div className=' flex justify-start w-full sm:justify-center sm:w-1/4 gap-x-2'>
              <input type="checkbox"
                defaultChecked={number}
                onChange={() => { setNumber((prev) => !prev) }} />
              <label htmlFor="number">Number</label>
            </div>

            <div className=' flex justify-start w-full sm:justify-center sm:w-1/4 gap-x-2'>
              <input type="checkbox"
                defaultChecked={schar}
                onChange={() => { setSchar((prev) => !prev) }} />
              <label htmlFor="character">Character</label>
            </div>
          </div>

          <div className='flex justify-center my-6 gap-x-2'>
            <button className=' rounded-lg bg-black px-5 py-1 text-white shadow-md hover:bg-gray-900 active:bg-gray-600'
              onClick={() => { passwordGenerator() }}
            >Re-generate</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
