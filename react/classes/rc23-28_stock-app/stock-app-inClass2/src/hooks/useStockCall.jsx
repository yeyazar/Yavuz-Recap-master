import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    //const BASE_URL = "http://12233.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //     headers: { Authorization: `Token ${token}` },
      //   });
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} deleted successfully`)
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} delete failed`)
    }
  };
  const postStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfully posted`)
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} post failed`)
    }
  };

  return { getStockData, deleteStockData, postStockData };
};

export default useStockCall;
