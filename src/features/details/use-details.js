import { useEffect } from 'react';
import { clearDetails, selectDetails } from './details-slice';
import { loadCountryByName } from './details-slice'
import { useDispatch, useSelector } from 'react-redux';


export const useDetails = (name) => {

  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch]);

  return details;
}