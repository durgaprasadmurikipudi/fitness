import type {
  DashboardScreenData,
  Participant,
  ParticipantDataForAGivenWeek,
  ParticipantsDataForAGivenWeek,
} from "../types";
import { getDefaultNickNamesOrder } from "../utils/app-utils";
import {
  forEachOverRange,
  formatToDateString,
  getStartDateForWeekNo,
} from "../utils/common-utils";

export function getValidWeekRange(
  particpantsData: Participant[]
): [number, number] {
  let start = Number.POSITIVE_INFINITY,
    end = Number.NEGATIVE_INFINITY;

  particpantsData.forEach((participant) => {
    const participantWeekNos = Object.keys(participant.weekStats).map((key) =>
      Number(key)
    );

    start = Math.min(start, ...participantWeekNos);
    end = Math.max(end, ...participantWeekNos);
  });

  return [start, end];
}

function getParticipantDataForWeek(
  participant: Participant | undefined,
  weekNo: number
): ParticipantDataForAGivenWeek {
  if (!participant) {
    return { weekStats: {}, totalSteps: 0, highestSteps: 0 };
  }

  const participantsDataForAWeek: ParticipantDataForAGivenWeek = {
    weekStats: {},
    totalSteps: 0,
    highestSteps: 0,
  };
  const weekDate = getStartDateForWeekNo(weekNo);

  forEachOverRange(0, 6, (day) => {
    weekDate.setDate(weekDate.getDate() + 1);

    participantsDataForAWeek.weekStats[formatToDateString(weekDate)] =
      participant.weekStats[weekNo].steps[day];
    participantsDataForAWeek.totalSteps +=
      participant.weekStats[weekNo].steps[day];
    participantsDataForAWeek.highestSteps =
      participantsDataForAWeek.highestSteps >
      participant.weekStats[weekNo].steps[day]
        ? participantsDataForAWeek.highestSteps
        : participant.weekStats[weekNo].steps[day];
  });

  return participantsDataForAWeek;
}

export function getParticipantsDataForWeek(
  participantsData: Participant[],
  weekNo: number
): DashboardScreenData {
  const participantsDataForWeek: ParticipantsDataForAGivenWeek =
    getDefaultNickNamesOrder().reduce((acc, participantName) => {
      return {
        ...acc,
        [participantName]: getParticipantDataForWeek(
          participantsData.find(
            (participant) => participant.nickname === participantName
          ),
          weekNo
        ),
      };
    }, {});
  const highestStepsInTheWeek = getHighestStepsInThatWeek(
    participantsDataForWeek
  );

  return {
    weekNo,
    participantsDataForWeek,
    highestStepsInTheWeek,
  };
}

export function getWinnerStepsCount(
  dashboardData: DashboardScreenData
): number {
  let highestSteps = 0;

  getDefaultNickNamesOrder().forEach((nickname) => {
    if (
      dashboardData.participantsDataForWeek[nickname].totalSteps > highestSteps
    ) {
      highestSteps = dashboardData.participantsDataForWeek[nickname].totalSteps;
    }
  });

  return highestSteps;
}

function getHighestStepsInThatWeek(
  participantsDataForAGivenWeek: ParticipantsDataForAGivenWeek
): number {
  let highestSteps = 0;

  getDefaultNickNamesOrder().forEach((nickname) => {
    if (participantsDataForAGivenWeek[nickname].highestSteps > highestSteps) {
      highestSteps = participantsDataForAGivenWeek[nickname].highestSteps;
    }
  });

  return highestSteps;
}
