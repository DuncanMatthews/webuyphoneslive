import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Thank You for Choosing Webuyphones!</h1>
      </header>

      <section className="mb-6 max-w-2xl rounded-lg bg-white p-6 shadow-md">
        <p className="mb-4 text-lg text-gray-700">
          We're excited to help you transition to a new phone. Here's what will happen next:
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>A courier will be arranged to collect your device at no extra cost to you.</li>
          <li>
            Once we receive your device, our team will inspect it to ensure everything matches your
            submission.
          </li>
          <li>If all is in order, you'll receive your payment promptly. It's that simple!</li>
        </ol>
      </section>

      <section className="mb-6 max-w-2xl rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-3 text-2xl font-semibold text-gray-800">Thinking About an Upgrade?</h2>
        <p className="mb-4 text-lg text-gray-700">
          While you're here, why not check out the latest models we have in stock? Treat yourself to
          a new smartphone experience.
        </p>
        <Link
          className="inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
          href="/shop"
        >
          Browse New Models
        </Link>
      </section>

      <footer className="text-center text-sm text-gray-600">
        <p>
          If you have any questions, our support team is here to help. <br />
          Thank you for trusting Webuyphones.
        </p>
      </footer>
    </div>
  );
}
