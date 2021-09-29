import React, { FC } from 'react';

import Participant from '../../types/participant';

const ParticipantsDisplayList:FC<{
  participants: Participant[];
  onRender?: (participants: Participant[], participantsCount: number, participant: Participant, participantIndex: number) => void;
}> = () => {
  return (
    <>
    </>
  );
};

export default ParticipantsDisplayList;
