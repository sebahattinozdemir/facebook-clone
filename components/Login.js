import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="http://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <button
        onClick={() => signIn()}
        className="bg-blue-500 p-3 text-white rounded-full"
      >
        Login With Facebook
      </button>
    </div>
  );
}

export default Login;
