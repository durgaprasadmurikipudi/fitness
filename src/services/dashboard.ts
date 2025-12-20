import { PARTICIPANT_NICK_NAMES } from "../constants";
import type {
  DashboardScreenData,
  Participant,
  ParticipantDataForAGivenWeek,
  ParticipantsDataForAGivenWeek,
} from "../types";
import {
  forEachOverRange,
  formatToDateString,
  getStartDateForWeekNo,
} from "../utils";

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
    return { weekStats: {}, totalSteps: 0 };
  }

  const participantsDataForAWeek: ParticipantDataForAGivenWeek = {
    weekStats: {},
    totalSteps: 0,
  };
  const weekDate = getStartDateForWeekNo(weekNo);

  forEachOverRange(0, 6, (day) => {
    weekDate.setDate(weekDate.getDate() + 1);

    participantsDataForAWeek.weekStats[formatToDateString(weekDate)] =
      participant.weekStats[weekNo].steps[day];
    participantsDataForAWeek.totalSteps +=
      participant.weekStats[weekNo].steps[day];
  });

  return participantsDataForAWeek;
}

export function getParticipantsDataForWeek(
  participantsData: Participant[],
  weekNo: number
): DashboardScreenData {
  return {
    weekNo,
    participantsDataForWeek: PARTICIPANT_NICK_NAMES.reduce(
      (acc, participantName) => {
        return {
          ...acc,
          [participantName]: getParticipantDataForWeek(
            participantsData.find(
              (participant) => participant.nickname === participantName
            ),
            weekNo
          ),
        };
      },
      {}
    ),
  };
}

export function getHighestSteps(dashboardData: DashboardScreenData): number {
  let highestNumber = 0;

  PARTICIPANT_NICK_NAMES.forEach((nickname) => {
    if (
      dashboardData.participantsDataForWeek[nickname].totalSteps > highestNumber
    ) {
      highestNumber =
        dashboardData.participantsDataForWeek[nickname].totalSteps;
    }
  });

  return highestNumber;
}
