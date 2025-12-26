import { PARTICIPANT_NICK_NAMES, PARTICIPANTTS_DATA } from "../constants";
import { getDefaultLeaderDashboardWeekMetric } from "../constants/leader-dashboard-page";
import type { IParticipant } from "../types";
import type { ILeaderDashboardPage } from "../types/leader-dashboard-page";

export function getDefaultNickNamesOrder(): string[] {
  return PARTICIPANT_NICK_NAMES;
}

export function getParticipantsData(): IParticipant[] {
  return PARTICIPANTTS_DATA;
}

export function getWeekByWeekAwardWinner(): ILeaderDashboardPage {
  let result: ILeaderDashboardPage = {};

  for (let i = 1; i < 15; i++) {
    result[i] = getDefaultLeaderDashboardWeekMetric();
  }

  getParticipantsData().forEach((particpantData) => {
    Object.keys(particpantData.weekStats).forEach((weekNo) => {
      const particpantWeekTotalSteps: number = particpantData.weekStats[
        Number(weekNo)
      ].steps.reduce((acc, daySteps) => acc + daySteps);

      if (result[weekNo].steps < particpantWeekTotalSteps) {
        result[weekNo].steps = particpantWeekTotalSteps;
        result[weekNo].name = particpantData.nickname;
      }
    });
  });

  return result;
}

export function getHighestWeeklyAwardWinner(
  data: ILeaderDashboardPage
): string {
  const awardWinners: { [name: string]: number } = {};
  let highestAwardsCount = 0;

  Object.keys(data).forEach((weekNo) => {
    const name = data[weekNo].name;

    if (!name) {
      return;
    }

    if (awardWinners[name]) {
      awardWinners[name]++;
    } else {
      awardWinners[name] = 1;
    }

    if (awardWinners[name] > highestAwardsCount) {
      highestAwardsCount = awardWinners[name];
    }
  });

  const highestAwardWinners: string[] = [];

  Object.keys(awardWinners).forEach((name) => {
    if (awardWinners[name] === highestAwardsCount) {
      highestAwardWinners.push(name);
    }
  });

  if (highestAwardWinners.length === 1) {
    return `Highest times Weekly award won so far is held by: ${highestAwardWinners[0]} by winning it ${highestAwardsCount} times.`;
  }

  if (highestAwardWinners.length > 1) {
    return `Highest times Weekly award won so far record is shared jointly by: ${highestAwardWinners.join(
      ", "
    )} with each winning it for ${highestAwardsCount} times.`;
  }

  return "";
}
