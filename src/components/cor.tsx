import Image from "next/image";

export default function Cor() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold mb-10 text-center text-purple-600">PEACE OF MIND</h2>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <p>
              To ensure you feel confident and worry-free when working with us, Purple Octopus Service offers:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
              <li>A quality assurance promise</li>
              <li>If something is not right, we make it right.</li>
              <li>
                Flexible service agreements with no long-term commitments. If you are not satisfied, you can cancel the
                next day if you are not happy with the service
              </li>
              <li>
                Full bonding, liability insurance, and Insurance coverage for your protection and security.
              </li>
              <li>
                Direct communication and dedicated support, so you always have someone you can reach when you need us.
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/peace.jpeg"
              alt="Office Cleaning"
              width={500}
              height={500}
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
