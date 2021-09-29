import Participant from '../types/participant';

import participants from '../db/participants.json';

const getParticipants = async (): Promise<Participant[]> => {
  const apiResp: Participant[] = await (new Promise((resolve) => setTimeout(() => resolve(participants), 1000)));

  return apiResp;
};

export default getParticipants;
