// Components
import FeaturesContainer from "@/components/homepage/features/FeaturesContainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <section className="mt-10 max-w-4xl mx-auto">
      <Card className="p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Features of the Starter Kit
        </h2>
        <FeaturesContainer />
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/Jszigeti/vite-ts-starter-kit"
            target="_blank"
          >
            <Button
              variant="secondary"
              className="bg-blue-400 hover:bg-blue-600 text-white"
            >
              Learn More
            </Button>
          </a>
        </div>
      </Card>
    </section>
  );
};

export default Home;
