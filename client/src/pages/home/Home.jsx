export const Home = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-70px)] bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#00c8ff]">
          Welcome to Razorpay
        </h1>
        <p className="text-lg text-gray-400 mt-4">Secure payments made easy</p>

        <div className="flex gap-4 justify-center mt-8">
          <button className="px-6 py-3 bg-[#00c8ff] hover:bg-[#00a3cc] text-black font-semibold rounded-lg shadow-md transition-colors">
            <a href="/login">Login</a>
          </button>
          <button className="px-6 py-3 border border-[#00c8ff] hover:bg-[#00c8ff]/10 text-[#00c8ff] font-semibold rounded-lg shadow-md transition-colors">
            <a href="/register">Register</a>
          </button>
        </div>
      </div>
    </div>
  );
};
