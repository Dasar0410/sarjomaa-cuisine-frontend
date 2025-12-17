import { UserAuth } from "../context/AuthContext";
import { Button } from "./ui/button";
import landingImage from '../assets/undraw_cooking_j2pu.svg';

function LandingPage() {

    const {session} = UserAuth()
    const name = session?.user?.user_metadata?.display_name || "Guest"
  return (
    <section className= "min-h-screen text-white flex-left bg-brand-background cursor-default  ">
        <div className="max-w-7xl mx-auto px-4 pt-44 flex flex-col md:flex-row items-center">

            {/* Left side: text */}
            <div className="w-1/2 space-y-6   ">
                <h1 className="md:text-8xl text-5xl font-bold md:leading-tight leading-tight text-brand-foreground">
                    Hey <span className="text-brand-primary">{name}</span>,
                    <br/><span className="text-brand-primary">Let's Cook!</span>
                </h1>
                <p className="text-3xl ml-2 text-brand-foreground/70">
                    Discover delicious recipes
                </p>
                <a href="#recipes">
                <Button variant="secondary" size="lg" className="m-2 mt-4 text-xl px-8 py-6">
                    Explore Recipes
                </Button>
                </a>

            </div>
            <div className="md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0">
            <img src={landingImage} alt="Cooking illustration" className="w-full h-auto" />
            </div>
         </div>
</section>
  );
}

export default LandingPage;