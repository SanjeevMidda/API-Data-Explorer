import { refetchProp } from "../types/reFetch";

const Refetch = ({ onRefetch }: refetchProp) => {
  return (
    <button id="refetch" onClick={onRefetch}>
      R
    </button>
  );
};

export default Refetch;
