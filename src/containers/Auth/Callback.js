import qs from 'qs';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as AuthActions from 'actions/auth';

function Callback() {
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();

  // const result = useSelector(state => state.auth.result);

  const initialize = async () => {
    const query = qs.parse(location.search.slice(1, location.search.length));
    const { type, key } = query;
    console.log(type, key);

    try {
      // await AuthActions.getProviderToken({
      //   type,
      //   key
      // });
      await dispatch(AuthActions.verifySocialRequest({
        accessToken: key,
        provider: type,
        history
      }));

    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    initialize();
  }, [location.hash]);

  return null;
};

export default Callback;