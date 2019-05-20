/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ElementSummary {
  historyPast?: {
    id?: number;
    seasonName?: string;
    elementCode?: number;
    startCost?: number;
    endCost?: number;
    totalPoints?: number;
    minutes?: number;
    goalsScored?: number;
    assists?: number;
    cleanSheets?: number;
    goalsConceded?: number;
    ownGoals?: number;
    penaltiesSaved?: number;
    penaltiesMissed?: number;
    yellowCards?: number;
    redCards?: number;
    saves?: number;
    bonus?: number;
    bps?: number;
    influence?: string;
    creativity?: string;
    threat?: string;
    ictIndex?: string;
    eaIndex?: number;
    season?: number;
    [k: string]: any;
  }[];
  fixturesSummary?: any[];
  explain?: {
    explain?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^(+)+$".
       */
      [k: string]: {
        points?: number;
        name?: string;
        value?: number;
        [k: string]: any;
      };
    };
    fixture?: {
      id?: number;
      kickoffTimeFormatted?: string;
      started?: boolean;
      eventDay?: number;
      deadlineTime?: string;
      deadlineTimeFormatted?: string;
      stats?: (
        | {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(+)+$".
             */
            [k: string]: {
              a?: {
                value?: number;
                element?: number;
                [k: string]: any;
              }[];
              h?: {
                value?: number;
                element?: number;
                [k: string]: any;
              }[];
              [k: string]: any;
            };
          }
        | {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(+)+$".
             */
            [k: string]: {
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^(+)+$".
               */
              [k: string]: {
                value?: number;
                element?: number;
                [k: string]: any;
              }[];
            };
          }
        | {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(+)+$".
             */
            [k: string]: {
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^(+)+$".
               */
              [k: string]: any[];
            };
          }
        | {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(+)+$".
             */
            [k: string]: {
              a?: {
                value?: number;
                element?: number;
                [k: string]: any;
              }[];
              h?: any[];
              [k: string]: any;
            };
          })[];
      code?: number;
      kickoffTime?: string;
      teamHScore?: number;
      teamAScore?: number;
      finished?: boolean;
      minutes?: number;
      provisionalStartTime?: boolean;
      finishedProvisional?: boolean;
      event?: number;
      teamA?: number;
      teamH?: number;
      [k: string]: any;
    };
    [k: string]: any;
  }[];
  historySummary?: {
    id?: number;
    kickoffTime?: string;
    kickoffTimeFormatted?: string;
    teamHScore?: number;
    teamAScore?: number;
    wasHome?: boolean;
    round?: number;
    totalPoints?: number;
    value?: number;
    transfersBalance?: number;
    selected?: number;
    transfersIn?: number;
    transfersOut?: number;
    loanedIn?: number;
    loanedOut?: number;
    minutes?: number;
    goalsScored?: number;
    assists?: number;
    cleanSheets?: number;
    goalsConceded?: number;
    ownGoals?: number;
    penaltiesSaved?: number;
    penaltiesMissed?: number;
    yellowCards?: number;
    redCards?: number;
    saves?: number;
    bonus?: number;
    bps?: number;
    influence?: string;
    creativity?: string;
    threat?: string;
    ictIndex?: string;
    eaIndex?: number;
    openPlayCrosses?: number;
    bigChancesCreated?: number;
    clearancesBlocksInterceptions?: number;
    recoveries?: number;
    keyPasses?: number;
    tackles?: number;
    winningGoals?: number;
    attemptedPasses?: number;
    completedPasses?: number;
    penaltiesConceded?: number;
    bigChancesMissed?: number;
    errorsLeadingToGoal?: number;
    errorsLeadingToGoalAttempt?: number;
    tackled?: number;
    offside?: number;
    targetMissed?: number;
    fouls?: number;
    dribbles?: number;
    element?: number;
    fixture?: number;
    opponentTeam?: number;
    [k: string]: any;
  }[];
  fixtures?: any[];
  history?: {
    id?: number;
    kickoffTime?: string;
    kickoffTimeFormatted?: string;
    teamHScore?: number;
    teamAScore?: number;
    wasHome?: boolean;
    round?: number;
    totalPoints?: number;
    value?: number;
    transfersBalance?: number;
    selected?: number;
    transfersIn?: number;
    transfersOut?: number;
    loanedIn?: number;
    loanedOut?: number;
    minutes?: number;
    goalsScored?: number;
    assists?: number;
    cleanSheets?: number;
    goalsConceded?: number;
    ownGoals?: number;
    penaltiesSaved?: number;
    penaltiesMissed?: number;
    yellowCards?: number;
    redCards?: number;
    saves?: number;
    bonus?: number;
    bps?: number;
    influence?: string;
    creativity?: string;
    threat?: string;
    ictIndex?: string;
    eaIndex?: number;
    openPlayCrosses?: number;
    bigChancesCreated?: number;
    clearancesBlocksInterceptions?: number;
    recoveries?: number;
    keyPasses?: number;
    tackles?: number;
    winningGoals?: number;
    attemptedPasses?: number;
    completedPasses?: number;
    penaltiesConceded?: number;
    bigChancesMissed?: number;
    errorsLeadingToGoal?: number;
    errorsLeadingToGoalAttempt?: number;
    tackled?: number;
    offside?: number;
    targetMissed?: number;
    fouls?: number;
    dribbles?: number;
    element?: number;
    fixture?: number;
    opponentTeam?: number;
    [k: string]: any;
  }[];
  [k: string]: any;
}
