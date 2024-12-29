
function LandingPage() {
  return (
    <section className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">

            {/* Left side: text */}
            <div className="w-1/2 space-y-6  ">
                <h1 className="text-5xl font-bold leading-tight">
                    Reinvent, <br /> Rediscover <br></br><span className="text-green-300">Cooking</span>
                </h1>
                <p className="text-gray-100">
                    With Sarjomaa Cuisine <br />
                </p>
                <a 
                    href="#recipes" 
                    className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md text-white font-medium transition"
                >
                    Explore Recipes
                </a>
            </div>

        {/* Right side: images (stacked or side-by-side) */}
        <div className="md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0">
        {/* Example: two overlapping circles with images */}
  
         </div>
</div>
</section>
  );
}

export default LandingPage;