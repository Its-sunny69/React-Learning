import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <div className='w-full h-screen'> 
      <div className='flex justify-start items-center flex-col py-10 gap-y-3 font-mono'>
        <h1 className='font-bold text-3xl'>
          Todo App <span className='font-light text-lg'> | Made with Redux tool-kit</span>
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
