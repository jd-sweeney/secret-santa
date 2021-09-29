import React, { FC, useState } from 'react';

import Participant from '../../types/participant';

import ParticipantComponent from '../Participant/Participant';

import { Box, IconButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const ParticipantsDisplayItem: FC<{
  participants: Participant[];
  onRender?: (participants: Participant[], participantsCount: number, participant: Participant, participantIndex: number) => void;
}> = ({
  participants,
  onRender
}) => {
  const [cursor, setCursor] = useState<number>(0);

  const next = () => setCursor(cursor + 1);
  const prev = () => setCursor(cursor - 1);

  return (
    <>
      {participants[cursor] && (
        <Box
          display="flex"
          alignItems="center"
        >
          <IconButton
            disabled={!participants[cursor - 1]}
            onClick={prev}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconButton>
          <ParticipantComponent
            {...participants[cursor]}
          />
          <IconButton
            disabled={!participants[cursor + 1]}
            onClick={next}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </IconButton>
        </Box>
      )}
      {onRender ? onRender(participants, participants.length, participants[cursor], cursor) : null}
    </>
  );
};

export default ParticipantsDisplayItem;
