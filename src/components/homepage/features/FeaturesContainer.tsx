import { useHomeApi } from "@/services/hooks/api/useHomeApi";
import DataFetcher from "@/components/common/DataFetcher";
import { Feature } from "@/types/feature";

// Components
import FeaturesList from "./FeaturesList";
import NoFeaturesMessage from "./NoFeaturesMessage";

const FeaturesContainer = () => {
  const { getHomeData } = useHomeApi();

  return (
    <DataFetcher<Feature[]> queryKey="homePageData" axiosFn={getHomeData}>
      {({ data, isLoading, error }) => {
        if (isLoading) return <p>Chargement en cours...</p>;

        if (error) {
          return <p>{error.message}</p>;
        }

        return (
          <div>
            {data && data.length > 0 ? (
              <FeaturesList features={data} />
            ) : (
              <NoFeaturesMessage />
            )}
          </div>
        );
      }}
    </DataFetcher>
  );
};

export default FeaturesContainer;
