import { UserAuth } from "../context/AuthContext";

function LandingPage() {

    const {session} = UserAuth()
    const name = session?.user?.user_metadata?.display_name || "Guest"
  return (
    <section className= "min-h-screen text-white flex-left ">
        <div className="max-w-7xl mx-auto px-4 py-44 flex flex-col md:flex-row items-center">

            {/* Left side: text */}
            <div className="w-1/2 space-y-6   ">
                <h1 className="md:text-8xl text-5xl font-bold md:leading-tight leading-tight ">
                    Hey <span className="bg-gradient-to-r from-lime-200 to-emerald-300  bg-clip-text text-transparent">{name}</span>,
                     <br/><span className="">Hangry?</span><br></br><span className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">Let's cook🔥</span>
                </h1>
                <p className="text-gray-100 font-medium text-3xl ml-2">
                    With Sarjomaa Cuisine <br />
                </p>
                <a 
                    href="#recipes" 
                    className="inline-block scroll-m-[100rem] ml-2 text-1xl bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md text-gray-100 font-medium transition"
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