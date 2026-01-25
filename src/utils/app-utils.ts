import {
  END_WEEK_NO,
  PARTICIPANT_NICK_NAMES,
  PARTICIPANTS_DATA,
} from "../constants";
import { getDefaultLeaderDashboardWeekMetric } from "../constants/leader-dashboard-page";
import type { IParticipant } from "../types";
import type { LineChartDataset } from "../types/common-components/chart";
import type { ILeaderDashboardPage } from "../types/leader-dashboard-page";

export function getDefaultNickNames(): string[] {
  return PARTICIPANT_NICK_NAMES;
}

export function getParticipantsData(): IParticipant[] {
  return PARTICIPANTS_DATA;
}

export function getWeekByWeekAwardWinner(): ILeaderDashboardPage {
  let result: ILeaderDashboardPage = {};

  for (let i = 1; i <= END_WEEK_NO; i++) {
    result[i] = getDefaultLeaderDashboardWeekMetric();
  }

  getParticipantsData().forEach((participantData) => {
    Object.keys(participantData.weekStats).forEach((weekNo) => {
      const participantWeekTotalSteps: number = participantData.weekStats[
        Number(weekNo)
      ].steps.reduce((acc, daySteps) => acc + daySteps);

      if (result[weekNo].steps < participantWeekTotalSteps) {
        result[weekNo].steps = participantWeekTotalSteps;
        result[weekNo].name = participantData.nickname;
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

export function getWeekLabels(): string[] {
  const weekLabels: string[] = [];

  for (let i = 1; i <= END_WEEK_NO; i++) {
    weekLabels.push(`Week ${i}`);
  }

  return weekLabels;
}

export function geTotalStepsWeekByWeek(
  participantNickname?: string
): LineChartDataset[] {
  const datasets: LineChartDataset[] = [];

  let data = getParticipantsData().filter(
    (participant) => participant.nickname === participantNickname
  );

  data = data.length ? data : getParticipantsData();

  data.forEach((participant) => {
    const data: number[] = [];

    Object.keys(participant.weekStats).forEach((weekNo) => {
      const weekTotalSteps: number = participant.weekStats[
        Number(weekNo)
      ].steps.reduce((acc, daySteps) => acc + daySteps);

      data.push(weekTotalSteps);
    });

    datasets.push({
      label: participant.nickname,
      data,
      fill: false,
      borderColor: participant.colorCode,
      tension: 0.1,
      borderWidth: 1,
    });
  });

  return datasets;
}
