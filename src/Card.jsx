export default function Card() {
  return (
    <div className="px-8 py-6 bg-gradient-to-r from-blue-100 to-purple-100 w-11/12 md:w-9/12 lg:w-7/12 mx-auto flex flex-col items-start shadow-lg rounded-lg">
      <h1 className="my-6 text-3xl md:text-4xl font-bold text-gray-700">
        Ultimate Bubble Tea Guide🧋
      </h1>
      <img
        className="w-full rounded-2xl shadow-xl"
        src="boba.jpeg"
        alt="2 cups of boba tea"
      />
      <h2 className="mt-6 text-2xl md:text-3xl self-start text-blue-900 font-bold">
        超好喝飲料店
      </h2>
      <p className="mt-2 text-indigo-900">Address</p>
      <p className="mt-1 text-indigo-900">Opening hours</p>
      <div className="w-4/5 bg-pink-50 p-6 rounded-lg shadow-md mt-8 opacity-80 self-center">
        <p className="text-2xl text-gray-700 italic text-center">
          &quot;A life without boba is not worth living🧋&quot;
        </p>
        <p className="mt-4 text-right text-gray-500">- from Nina</p>
      </div>
      <a
        className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-300 self-end uppercase"
        href="#"
      >
        Read More
      </a>
    </div>
  );
}
