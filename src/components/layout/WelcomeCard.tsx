// Components
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const WelcomeCard = () => {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Welcome to the Starter Kit!
      </h2>
      <p className="text-center text-gray-600 mb-6">
        This project is configured with Vite, TypeScript, Tailwind CSS, React
        Router, Shadcn, Axios, and dynamic error handling.
      </p>
      <div className="flex justify-center">
        <Button className="bg-blue-900 hover:bg-blue-700 text-white">
          Get Started
        </Button>
      </div>
    </Card>
  );
};

export default WelcomeCard;
