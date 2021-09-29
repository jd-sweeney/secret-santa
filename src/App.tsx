import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import useRaffle from './common/hooks/useRaffle';

import ParticipantsComponent from './common/components/ParticipantsDisplayItem';
import withParticipentsList from './common/hoc/withParticipentsList';

import { Box, Button } from '@mui/material';

function App() {
  const {
    draw,
    raffleData,
  } = useRaffle();

  console.log('hre-raffleData', raffleData);

  const [isFinished, setIsFinished] = useState<boolean>(false);

  const ParticipentsDraw = useMemo(() => withParticipentsList(ParticipantsComponent), []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {!isFinished && (
          <ParticipentsDraw
            onRender={(participants, participantsCount, participant, participantIndex) => (
              <>
                {(raffleData.assignedMap[participantIndex] && participants[raffleData.assignedMap[participantIndex]]) && (
                  <Box
                    textAlign="center"
                  >
                    {`Assigned: ${participants[raffleData.assignedMap[participantIndex]].name.first} ${participants[raffleData.assignedMap[participantIndex]].name.last}`}
                  </Box>
                )}
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <Button
                    onClick={() => {
                      const value = draw(participantIndex, participantsCount);
                      console.log('hre', participants, participantsCount, participant, participantIndex, value);
                    }}
                  >
                    Draw
                  </Button>
                  {(participantsCount - 1 === participantIndex) && (
                    <Button
                      onClick={() => setIsFinished(true)}
                    >
                      Finish
                    </Button>
                  )}
                </Box>
              </>
            )}
          />
        )}
        {isFinished && (
          <>
            Finished
          </>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
