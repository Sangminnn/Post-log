import qs from 'qs';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as AuthActions from 'actions/auth';

function Callback() {
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();

  const initialize = async () => {
    const query = qs.parse(location.search.slice(1, location.search.length - 1));
    const { type, key } = query;
    console.log(type, key);
    
    try {
    //   await AuthActions.getProviderToken({
    //     type,
    //     key
    //   })
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