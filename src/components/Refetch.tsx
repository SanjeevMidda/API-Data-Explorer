import { RefetchProp } from "../types/reFetch";

const Refetch = ({ onRefetch }: RefetchProp) => {
  return (
    <button id="refetch" onClick={onRefetch}>
      R
    </button>
  );
};

export default Refetch;
