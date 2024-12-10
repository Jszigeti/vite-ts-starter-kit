import { Feature } from "@/types/feature";

interface Props {
  features: Feature[];
}

const FeaturesList = ({ features }: Props) => {
  return (
    <ul className="list-disc list-inside text-lg text-gray-600">
      {features.map((feature) => (
        <li key={feature.id}>{feature.content}</li>
      ))}
    </ul>
  );
};

export default FeaturesList;
