import { PARTICIPANT_NICK_NAMES, PARTICIPANTTS_DATA } from "../constants";
import { getDefaultLeaderDashboardWeekMetric } from "../constants/leader-dashboard-page";
import type { IParticipant } from "../types";
import type { ILeaderDashboardPage } from "../types/leader-dashboard-page";

export function getDefaultNickNames(): string[] {
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
    return `"Highest times - Weekly Award Winner" record now being held by: "${highestAwardWinners[0]}". (By winning it ${highestAwardsCount} times as per the latest data.)`;
  }

  if (highestAwardWinners.length > 1) {
    return `"Highest times - Weekly Award Winner" record now is being shared jointly by: "${highestAwardWinners.join(
      ", "
    )}". (By winning it for ${highestAwardsCount} times respectively as per the latest data.)`;
  }

  return "";
}
