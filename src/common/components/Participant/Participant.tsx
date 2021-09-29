import React, { FC } from 'react';

import Participant from '../../types/participant';

const ParticipantComponent: FC<Participant> = ({
  name,
  age,
  email,
  phone,
  wishlist,
}) => {
  return (
    <>
      {`${name.first} ${name.last}`}
    </>
  );
};

export default ParticipantComponent;
