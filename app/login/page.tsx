import { login, signup} from './actions'

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div><h3 className="mb-4 font-semibold text-gray-500">User Management App</h3></div>
        <form className="flex flex-col gap-4 items-start w-1/4" method="post">
        <input id="email" name="email" type="email" placeholder='email' required className='w-full border border-gray-200 py-1 px-2 rounded' />
        <input id="password" name="password" type="password" placeholder='password' required className='w-full border border-gray-200 py-1 px-2 rounded' />

        <div className='flex flex-col gap-4 items-start w-full'>
            <button formAction={login} className="bg-blue-800 rounded text-white font-normal py-2 cursor-pointer hover:bg-blue-900 px-4 w-full">Log in</button>
            <button formAction={signup} className="bg-blue-800 rounded text-white font-normal py-2 cursor-pointer hover:bg-blue-900 px-4 w-full">Sign up</button>
        </div>
        </form>
    </div>
  )
}   