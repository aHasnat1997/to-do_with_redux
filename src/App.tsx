import Hero from './components/to-do/Hero';
import bgImg from '../src/assets/bg-2.jpg';
import ToDoList from './components/to-do/ToDoList';
import AddToDoModal from './components/to-do/AddToDoModal';

function App() {
  return (
    <main
      className='h-screen w-full flex relative'
      style={{
        backgroundImage: `radial-gradient(#0000005b, #000000), url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Hero />
      <ToDoList />
      <div className='absolute right-8 bottom-8'>
        <AddToDoModal />
      </div>
    </main>
  )
}

export default App
