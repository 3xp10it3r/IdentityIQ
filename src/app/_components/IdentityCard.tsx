import { capitalizeFirstLetter } from "@/utils/helper";
import { DataType } from "../page";
import Progress from "./Progress";

interface Props {
  data: DataType | undefined;
  loading: boolean;
  name: string;
}

const IdentityCard = ({ data, loading, name }: Props) => {
  if (loading) {
    return (
      <div className="animate-pulse bg-gray-50 h-40 w-40 rounded-md mb-4"></div>
    );
  }
  if (!data) {
    return <></>;
  }

  if (!data.age && !data.gender && !data.country) {
    return <div className="p-4 text-white">No result found.</div>;
  }

  return (
    <div className="p-4  border border-gray-200 text-primaryColor ">
      <div className="text-lg font-semibold mb-2">
        {capitalizeFirstLetter(name)}
      </div>

      {data.age && (
        <div className="mb-2 text-primaryColor">
          <span className="font-semibold text-white">Age:</span> {data.age}
        </div>
      )}

      {data.gender && (
        <div className="mb-2 text-primaryColor">
          <span className="font-semibold text-white">Gender:</span>{" "}
          {capitalizeFirstLetter(data.gender)}
        </div>
      )}

      {data.country && (
        <div className="mb-2 text-primaryColor">
          <span className="font-semibold text-white">Country:</span>{" "}
          {capitalizeFirstLetter(data.country)}
        </div>
      )}
    </div>
  );
};

export default IdentityCard;
