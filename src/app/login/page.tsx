import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/login.png';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <div className="flex items-start justify-between gap-8">
          {/* Left side - Logo */}
          <div className="flex flex-col items-center">
            <Image 
              src={Logo}
              alt="Inventory Logo"
              width={250}
              height={250}
              className="mr-14"
            />

          </div>

          <div className="flex-1 max-w-md">
            <h1 className="text-5xl font-bold  items-center justify-center ml-24 mb-12">Login</h1>
            <form className="space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-4 py-2 rounded bg-gray-300 border border-gray-200"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded bg-gray-300	 border border-gray-200"
              />
              <button
                type="submit"
                className="w-full text-2xl bg-customBlue text-white py-2 rounded-full"
              >
                Login
              </button>
              <p className="text-center text-gray-500">
                New user?{' '}
                <Link href="/register" className="underline">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}