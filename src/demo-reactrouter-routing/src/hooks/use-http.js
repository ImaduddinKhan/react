import { useCallback, useReducer } from "react";

let startWithPending = false;
const initialState = {
  status: startWithPending ? "pending" : null,
  data: null,
  error: null,
};

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
};

const useHttp = (reqFunction, startWithPending) => {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback(
    async function (reqData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = reqFunction(reqData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (err) {
        dispatch({
          type: "ERROR",
          errorMessage: err.message || "Something went wrong",
        });
      }
    },
    [reqFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
