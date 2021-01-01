import { useContext } from "react";
import { SnackContext } from "contexts";

const useSnack = () => {
  const { snackOpen } = useContext(SnackContext);
  return snackOpen;
};

export default useSnack;
