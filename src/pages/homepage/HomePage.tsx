import { useQuery } from "@tanstack/react-query";
import { useHomePageApiCalls } from "@/services/api/homepage";

// Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HomePage = () => {
  const { getHomePageData } = useHomePageApiCalls();

  // Get data with useQuery and store it in cache
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["homePageData"],
    queryFn: () => getHomePageData(),
  });

  const renderContent = () => {
    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (isError) {
      return <span>Error: {error.message}</span>;
    }

    return (
      <ul className="list-disc list-inside text-lg text-gray-600">
        {data.map((info: any) => (
          <li key={info.id}>{info.content}</li>
        ))}
      </ul>
    );
  };

  return (
    <section className="mt-10 max-w-4xl mx-auto">
      <Card className="p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Features of the Starter Kit
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          {renderContent()}
        </ul>

        <div className="flex justify-center mt-8">
          <a href="https://github.com/Jszigeti" target="_blank">
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

export default HomePage;
