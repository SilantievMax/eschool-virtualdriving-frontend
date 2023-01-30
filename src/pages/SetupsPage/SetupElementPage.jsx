import { useParams } from "react-router-dom";
import { SetupElement } from "../../components/SetupsPageComponents/components/SetupElement";

export const SetupElementPage = () => {
  let params = useParams();

  return <SetupElement id={params.id} />;
};
