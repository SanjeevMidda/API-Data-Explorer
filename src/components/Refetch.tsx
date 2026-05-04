import { RefetchProps } from "../types/RefetchProps";

const Refetch = ({ refetch }: RefetchProps) => {
  return (
    <button id="refetch" onClick={refetch}>
      R
    </button>
  );
};

export default Refetch;
