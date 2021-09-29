import React, { FC, ComponentType, useState, useEffect } from 'react';

import getParticipants from '../../api/getParticipants';

import Participant from '../../types/participant';

type ComponentProps = {
  onRender?: (participants: Participant[], participantsCount: number, participant: Participant, participantIndex: number) => void;
};

const withParticipentsList = (
  WrappedComponent: ComponentType<{
    participants: Participant[];
  } & ComponentProps>
): FC<ComponentProps> => ({
  onRender
}) => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    getParticipants()
      .then(setParticipants);
  }, []);

  return (
    <WrappedComponent
      onRender={onRender}
      participants={participants}
    />
  );
};

export default withParticipentsList;
