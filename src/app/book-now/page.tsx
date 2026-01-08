import Link from "next/link";
import Image from "next/image";
import Form from "../form/page";

export default function BookNow() {
  return (
    <div className="relative sm:flex sm:flex-col">
      <div>
      <Link
        href="/"
        aria-label="Back to home"
       className="block md:fixed z-50"
      >
        <Image
          src="/images/home.png"
          alt="Purple Octopus Service"
          width={200}
          height={200}
          className="h-48 w-48 mx-auto md:mx-0 lg:mx-0"
        />    
      </Link>
      </div>

      <Form />
    </div>
  );
}
