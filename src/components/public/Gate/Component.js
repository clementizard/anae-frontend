import React, { Profiler, StrictMode } from 'react';

import {} from './Styles';
import { propTypes, defaultProps } from './Props';
import { Urls } from '../../../tools/Pages';

const Gate = ({
  match: {
    path,
    params,
  },
}) => {
  const { Component } = Urls.public.find(el => el.url === path);
  const handleRender = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log(
      'ID: ', id, // the "id" prop of the Profiler tree that has just committed
      '\nPHASE: ', phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
      '\nACTUAL DURATION: ', actualDuration, // time spent rendering the committed update
      '\nBASE DURATION: ', baseDuration, // estimated time to render the entire subtree without memoization
      '\nStart Time: ', startTime, // when React began rendering this update
      '\nCommit Time: ', commitTime, // when React committed this update
      '\nInteractions: ', interactions // the Set of interactions belonging to this update
    );
  };

  return (
    <StrictMode>
      {/*<Profiler id={path} onRender={handleRender}>*/}
        <Component params={params} />
      {/*</Profiler>*/}
    </StrictMode>
  );
};
Gate.propTypes = propTypes;
Gate.defaultProps = defaultProps;
Gate.whyDidYouRender = true;

export default Gate;
