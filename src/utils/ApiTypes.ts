/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface GetPlayersParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface MatchesDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Fields to project (array) */
  project?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface HeroesDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface PeersDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface ProsDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface TotalsDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface CountsDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface HistogramsDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;

  /** Field to aggregate on */
  field: string;
}

export interface WardmapDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface WordcloudDetailParams {
  /** Number of matches to limit to */
  limit?: number;

  /** Number of matches to offset start by */
  offset?: number;

  /** Whether the player won */
  win?: number;

  /** Patch ID */
  patch?: number;

  /** Game Mode ID */
  game_mode?: number;

  /** Lobby type ID */
  lobby_type?: number;

  /** Region ID */
  region?: number;

  /** Days previous */
  date?: number;

  /** Lane Role ID */
  lane_role?: number;

  /** Hero ID */
  hero_id?: number;

  /** Whether the player was radiant */
  is_radiant?: number;

  /** Account IDs in the match (array) */
  included_account_id?: number;

  /** Account IDs not in the match (array) */
  excluded_account_id?: number;

  /** Hero IDs on the player's team (array) */
  with_hero_id?: number;

  /** Hero IDs against the player's team (array) */
  against_hero_id?: number;

  /** Whether the match was significant for aggregation purposes. Defaults to 1 (true), set this to 0 to return data for non-standard modes/matches. */
  significant?: number;

  /** The minimum number of games played, for filtering hero stats */
  having?: number;

  /** The field to return matches sorted by in descending order */
  sort?: string;

  /** Steam32 account ID */
  accountId: number;
}

export interface ProMatchesListParams {
  /** Get matches with a match ID lower than this value */
  less_than_match_id?: number;
}

export interface PublicMatchesListParams {
  /** Order by MMR ascending */
  mmr_ascending?: number;

  /** Order by MMR descending */
  mmr_descending?: number;

  /** Get matches with a match ID lower than this value */
  less_than_match_id?: number;
}

export interface ParsedMatchesListParams {
  /** Get matches with a match ID lower than this value */
  less_than_match_id?: number;
}

export interface ExplorerListParams {
  /** The PostgreSQL query as percent-encoded string. */
  sql?: string;
}

export interface SearchListParams {
  /** Search string */
  q: string;
}

export interface RankingsListParams {
  /** Hero ID */
  hero_id: string;
}

export interface BenchmarksListParams {
  /** Hero ID */
  hero_id: string;
}

export interface FindMatchesListParams {
  /** Hero IDs on first team (array) */
  teamA?: number;

  /** Hero IDs on second team (array) */
  teamB?: number;
}

export interface ReplaysListParams {
  /** Match IDs (array) */
  match_id: number;
}

export interface ItemTimingsListParams {
  /** Filter by item name e.g. "spirit_vessel" */
  item?: string;

  /** Hero ID */
  hero_id?: number;
}

export interface LaneRolesListParams {
  /** Filter by lane role 1-4 (Safe, Mid, Off, Jungle) */
  lane_role?: string;

  /** Hero ID */
  hero_id?: number;
}

export interface MiscListParams {
  /** pos_chat_1min,neg_chat_1min,courier_kill,first_blood */
  scenario?: string;
}

export namespace Matches {
  /**
   * @description Match data
   * @tags matches
   * @name MatchesDetail
   * @summary GET /matches/{match_id}
   * @request GET:/matches/{match_id}
   */
  export namespace MatchesDetail {
    export type RequestParams = { matchId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      barracks_status_dire?: number;
      barracks_status_radiant?: number;
      chat?: {
        time?: number;
        unit?: string;
        key?: string;
        slot?: number;
        player_slot?: number;
      }[];
      cluster?: number;
      cosmetics?: object;
      dire_score?: number;
      draft_timings?: {
        order?: number;
        pick?: boolean;
        active_team?: number;
        hero_id?: number;
        player_slot?: number;
        extra_time?: number;
        total_time_taken?: number;
      }[];
      duration?: number;
      engine?: number;
      first_blood_time?: number;
      game_mode?: number;
      human_players?: number;
      leagueid?: number;
      lobby_type?: number;
      match_seq_num?: number;
      negative_votes?: number;
      objectives?: object;
      picks_bans?: object;
      positive_votes?: number;
      radiant_gold_adv?: object;
      radiant_score?: number;
      radiant_win?: boolean;
      radiant_xp_adv?: object;
      start_time?: number;
      teamfights?: object;
      tower_status_dire?: number;
      tower_status_radiant?: number;
      version?: number;
      replay_salt?: number;
      series_id?: number;
      series_type?: number;
      radiant_team?: object;
      dire_team?: object;
      league?: object;
      skill?: number;
      players?: {
        match_id?: number;
        player_slot?: number;
        ability_upgrades_arr?: number[];
        ability_uses?: object;
        ability_targets?: object;
        damage_targets?: object;
        account_id?: number;
        actions?: object;
        additional_units?: object;
        assists?: number;
        backpack_0?: number;
        backpack_1?: number;
        backpack_2?: number;
        buyback_log?: { time?: number; slot?: number; player_slot?: number }[];
        camps_stacked?: number;
        connection_log?: {
          time?: number;
          event?: string;
          player_slot?: number;
        }[];
        creeps_stacked?: number;
        damage?: object;
        damage_inflictor?: object;
        damage_inflictor_received?: object;
        damage_taken?: object;
        deaths?: number;
        denies?: number;
        dn_t?: number[];
        gold?: number;
        gold_per_min?: number;
        gold_reasons?: object;
        gold_spent?: number;
        gold_t?: number[];
        hero_damage?: number;
        hero_healing?: number;
        hero_hits?: object;
        hero_id?: number;
        item_0?: number;
        item_1?: number;
        item_2?: number;
        item_3?: number;
        item_4?: number;
        item_5?: number;
        item_uses?: object;
        kill_streaks?: object;
        killed?: object;
        killed_by?: object;
        kills?: number;
        kills_log?: { time?: number; key?: string }[];
        lane_pos?: object;
        last_hits?: number;
        leaver_status?: number;
        level?: number;
        lh_t?: number[];
        life_state?: object;
        max_hero_hit?: object;
        multi_kills?: object;
        obs?: object;
        obs_left_log?: object[];
        obs_log?: object[];
        obs_placed?: number;
        party_id?: number;
        permanent_buffs?: object[];
        pings?: number;
        purchase?: object;
        purchase_log?: { time?: number; key?: string; charges?: number }[];
        rune_pickups?: number;
        runes?: Record<string, number>;
        runes_log?: { time?: number; key?: number }[];
        sen?: object;
        sen_left_log?: object[];
        sen_log?: object[];
        sen_placed?: number;
        stuns?: number;
        times?: number[];
        tower_damage?: number;
        xp_per_min?: number;
        xp_reasons?: object;
        xp_t?: number[];
        personaname?: string;
        name?: string;
        last_login?: Date;
        radiant_win?: boolean;
        start_time?: number;
        duration?: number;
        cluster?: number;
        lobby_type?: number;
        game_mode?: number;
        patch?: number;
        region?: number;
        isRadiant?: boolean;
        win?: number;
        lose?: number;
        total_gold?: number;
        total_xp?: number;
        kills_per_min?: number;
        kda?: number;
        abandons?: number;
        neutral_kills?: number;
        tower_kills?: number;
        courier_kills?: number;
        lane_kills?: number;
        hero_kills?: number;
        observer_kills?: number;
        sentry_kills?: number;
        roshan_kills?: number;
        necronomicon_kills?: number;
        ancient_kills?: number;
        buyback_count?: number;
        observer_uses?: number;
        sentry_uses?: number;
        lane_efficiency?: number;
        lane_efficiency_pct?: number;
        lane?: number;
        lane_role?: number;
        is_roaming?: boolean;
        purchase_time?: object;
        first_purchase_time?: object;
        item_win?: object;
        item_usage?: object;
        purchase_tpscroll?: object;
        actions_per_min?: number;
        life_state_dead?: number;
        rank_tier?: number;
        cosmetics?: number[];
        benchmarks?: object;
      }[];
      patch?: number;
      region?: number;
      all_word_counts?: object;
      my_word_counts?: object;
      throw?: number;
      comeback?: number;
      loss?: number;
      win?: number;
      replay_url?: string;
    };
  }
}

export namespace PlayersByRank {
  /**
   * @description Players ordered by rank/medal tier
   * @tags playersByRank
   * @name PlayersByRankList
   * @summary GET /playersByRank
   * @request GET:/playersByRank
   */
  export namespace PlayersByRankList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account_id?: number;
      rank_tier?: number;
      fh_unavailable?: boolean;
    };
  }
}

export namespace Players {
  /**
   * @description Player data
   * @tags players
   * @name PlayersDetail
   * @summary GET /players/{account_id}
   * @request GET:/players/{account_id}
   */
  export namespace PlayersDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      tracked_until?: string;
      solo_competitive_rank?: string;
      competitive_rank?: string;
      rank_tier?: number;
      leaderboard_rank?: number;
      mmr_estimate?: { estimate?: number; stdDev?: number; n?: number };
      profile?: {
        account_id?: number;
        personaname?: string;
        name?: string;
        plus?: boolean;
        cheese?: number;
        steamid?: string;
        avatar?: string;
        avatarmedium?: string;
        avatarfull?: string;
        profileurl?: string;
        last_login?: string;
        loccountrycode?: string;
        is_contributor?: boolean;
      };
    };
  }
  /**
   * @description Win/Loss count
   * @tags players
   * @name GetPlayers
   * @summary GET /players/{account_id}/wl
   * @request GET:/players/{account_id}/wl
   */
  export namespace GetPlayers {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = { win?: number; lose?: number };
  }
  /**
   * @description Recent matches played
   * @tags players
   * @name RecentMatchesDetail
   * @summary GET /players/{account_id}/recentMatches
   * @request GET:/players/{account_id}/recentMatches
   */
  export namespace RecentMatchesDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      player_slot?: number;
      radiant_win?: boolean;
      duration?: number;
      game_mode?: number;
      lobby_type?: number;
      hero_id?: number;
      start_time?: number;
      version?: number;
      kills?: number;
      deaths?: number;
      assists?: number;
      skill?: number;
      lane?: number;
      lane_role?: number;
      is_roaming?: boolean;
      cluster?: number;
      leaver_status?: number;
      party_size?: number;
    }[];
  }
  /**
   * @description Matches played
   * @tags players
   * @name MatchesDetail
   * @summary GET /players/{account_id}/matches
   * @request GET:/players/{account_id}/matches
   */
  export namespace MatchesDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
      project?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      player_slot?: number;
      radiant_win?: boolean;
      duration?: number;
      game_mode?: number;
      lobby_type?: number;
      hero_id?: number;
      start_time?: number;
      version?: number;
      kills?: number;
      deaths?: number;
      assists?: number;
      skill?: number;
      party_size?: number;
      heroes?: {
        player_slot?: {
          account_id?: number;
          hero_id?: number;
          player_slot?: number;
        };
      };
    }[];
  }
  /**
   * @description Heroes played
   * @tags players
   * @name HeroesDetail
   * @summary GET /players/{account_id}/heroes
   * @request GET:/players/{account_id}/heroes
   */
  export namespace HeroesDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      hero_id?: string;
      last_played?: number;
      games?: number;
      win?: number;
      with_games?: number;
      with_win?: number;
      against_games?: number;
      against_win?: number;
    }[];
  }
  /**
   * @description Players played with
   * @tags players
   * @name PeersDetail
   * @summary GET /players/{account_id}/peers
   * @request GET:/players/{account_id}/peers
   */
  export namespace PeersDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account_id?: number;
      last_played?: number;
      win?: number;
      games?: number;
      with_win?: number;
      with_games?: number;
      against_win?: number;
      against_games?: number;
      with_gpm_sum?: number;
      with_xpm_sum?: number;
      personaname?: string;
      name?: string;
      is_contributor?: boolean;
      last_login?: string;
      avatar?: string;
      avatarfull?: string;
    }[];
  }
  /**
   * @description Pro players played with
   * @tags players
   * @name ProsDetail
   * @summary GET /players/{account_id}/pros
   * @request GET:/players/{account_id}/pros
   */
  export namespace ProsDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account_id?: number;
      name?: string;
      country_code?: string;
      fantasy_role?: number;
      team_id?: number;
      team_name?: string;
      team_tag?: string;
      is_locked?: boolean;
      is_pro?: boolean;
      locked_until?: number;
      steamid?: string;
      avatar?: string;
      avatarmedium?: string;
      avatarfull?: string;
      profileurl?: string;
      last_login?: Date;
      full_history_time?: Date;
      cheese?: number;
      fh_unavailable?: boolean;
      loccountrycode?: string;
      last_played?: number;
      win?: number;
      games?: number;
      with_win?: number;
      with_games?: number;
      against_win?: number;
      against_games?: number;
      with_gpm_sum?: number;
      with_xpm_sum?: number;
    }[];
  }
  /**
   * @description Totals in stats
   * @tags players
   * @name TotalsDetail
   * @summary GET /players/{account_id}/totals
   * @request GET:/players/{account_id}/totals
   */
  export namespace TotalsDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = { field?: string; n?: number; sum?: number }[];
  }
  /**
   * @description Counts in categories
   * @tags players
   * @name CountsDetail
   * @summary GET /players/{account_id}/counts
   * @request GET:/players/{account_id}/counts
   */
  export namespace CountsDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      leaver_status?: object;
      game_mode?: object;
      lobby_type?: object;
      lane_role?: object;
      region?: object;
      patch?: object;
    };
  }
  /**
   * @description Distribution of matches in a single stat
   * @tags players
   * @name HistogramsDetail
   * @summary GET /players/{account_id}/histograms
   * @request GET:/players/{account_id}/histograms/{field}
   */
  export namespace HistogramsDetail {
    export type RequestParams = { accountId: number; field: string };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object[];
  }
  /**
   * @description Wards placed in matches played
   * @tags players
   * @name WardmapDetail
   * @summary GET /players/{account_id}/wardmap
   * @request GET:/players/{account_id}/wardmap
   */
  export namespace WardmapDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = { obs?: object; sen?: object };
  }
  /**
   * @description Words said/read in matches played
   * @tags players
   * @name WordcloudDetail
   * @summary GET /players/{account_id}/wordcloud
   * @request GET:/players/{account_id}/wordcloud
   */
  export namespace WordcloudDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {
      limit?: number;
      offset?: number;
      win?: number;
      patch?: number;
      game_mode?: number;
      lobby_type?: number;
      region?: number;
      date?: number;
      lane_role?: number;
      hero_id?: number;
      is_radiant?: number;
      included_account_id?: number;
      excluded_account_id?: number;
      with_hero_id?: number;
      against_hero_id?: number;
      significant?: number;
      having?: number;
      sort?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      my_word_counts?: object;
      all_word_counts?: object;
    };
  }
  /**
   * @description Player rating history
   * @tags players
   * @name RatingsDetail
   * @summary GET /players/{account_id}/ratings
   * @request GET:/players/{account_id}/ratings
   */
  export namespace RatingsDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account_id?: number;
      match_id?: number;
      solo_competitive_rank?: number;
      competitive_rank?: number;
      time?: Date;
    }[];
  }
  /**
   * @description Player hero rankings
   * @tags players
   * @name RankingsDetail
   * @summary GET /players/{account_id}/rankings
   * @request GET:/players/{account_id}/rankings
   */
  export namespace RankingsDetail {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object[];
  }
  /**
   * @description Refresh player match history
   * @tags players
   * @name RefreshCreate
   * @summary POST /players/{account_id}/refresh
   * @request POST:/players/{account_id}/refresh
   */
  export namespace RefreshCreate {
    export type RequestParams = { accountId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
}

export namespace ProPlayers {
  /**
   * @description Get list of pro players
   * @tags pro players
   * @name ProPlayersList
   * @summary GET /proPlayers
   * @request GET:/proPlayers
   */
  export namespace ProPlayersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account_id?: number;
      steamid?: string;
      avatar?: string;
      avatarmedium?: string;
      avatarfull?: string;
      profileurl?: string;
      personaname?: string;
      last_login?: Date;
      full_history_time?: Date;
      cheese?: number;
      fh_unavailable?: boolean;
      loccountrycode?: string;
      name?: string;
      country_code?: string;
      fantasy_role?: number;
      team_id?: number;
      team_name?: string;
      team_tag?: string;
      is_locked?: boolean;
      is_pro?: boolean;
      locked_until?: number;
    }[];
  }
}

export namespace ProMatches {
  /**
   * @description Get list of pro matches
   * @tags pro matches
   * @name ProMatchesList
   * @summary GET /proMatches
   * @request GET:/proMatches
   */
  export namespace ProMatchesList {
    export type RequestParams = {};
    export type RequestQuery = { less_than_match_id?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      duration?: number;
      start_time?: number;
      radiant_team_id?: number;
      radiant_name?: string;
      dire_team_id?: number;
      dire_name?: string;
      leagueid?: number;
      league_name?: string;
      series_id?: number;
      series_type?: number;
      radiant_score?: number;
      dire_score?: number;
      radiant_win?: boolean;
      radiant?: boolean;
    }[];
  }
}

export namespace PublicMatches {
  /**
   * @description Get list of randomly sampled public matches
   * @tags public matches
   * @name PublicMatchesList
   * @summary GET /publicMatches
   * @request GET:/publicMatches
   */
  export namespace PublicMatchesList {
    export type RequestParams = {};
    export type RequestQuery = {
      mmr_ascending?: number;
      mmr_descending?: number;
      less_than_match_id?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      match_seq_num?: number;
      radiant_win?: boolean;
      start_time?: number;
      duration?: number;
      radiant_team?: string;
      dire_team?: string;
    }[];
  }
}

export namespace ParsedMatches {
  /**
   * @description Get list of parsed match IDs
   * @tags parsed matches
   * @name ParsedMatchesList
   * @summary GET /parsedMatches
   * @request GET:/parsedMatches
   */
  export namespace ParsedMatchesList {
    export type RequestParams = {};
    export type RequestQuery = { less_than_match_id?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = { match_id?: number }[];
  }
}

export namespace Explorer {
  /**
   * @description Submit arbitrary SQL queries to the database
   * @tags explorer
   * @name ExplorerList
   * @summary GET /explorer
   * @request GET:/explorer
   */
  export namespace ExplorerList {
    export type RequestParams = {};
    export type RequestQuery = { sql?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
}

export namespace Metadata {
  /**
   * @description Site metadata
   * @tags metadata
   * @name MetadataList
   * @summary GET /metadata
   * @request GET:/metadata
   */
  export namespace MetadataList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      banner?: object;
      cheese?: { cheese?: string; goal?: string };
    };
  }
}

export namespace Distributions {
  /**
   * @description Distributions of MMR data by bracket and country
   * @tags distributions
   * @name DistributionsList
   * @summary GET /distributions
   * @request GET:/distributions
   */
  export namespace DistributionsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      ranks?: {
        commmand?: string;
        rowCount?: number;
        rows?: {
          bin?: number;
          bin_name?: number;
          count?: number;
          cumulative_sum?: number;
        }[];
        fields?: {
          name?: string;
          tableID?: number;
          columnID?: number;
          dataTypeID?: number;
          dataTypeSize?: number;
          dataTypeModifier?: string;
          format?: string;
        }[];
        rowAsArray?: boolean;
        sum?: { count?: number };
      };
      mmr?: {
        commmand?: string;
        rowCount?: number;
        rows?: {
          bin?: number;
          bin_name?: number;
          count?: number;
          cumulative_sum?: number;
        }[];
        fields?: {
          name?: string;
          tableID?: number;
          columnID?: number;
          dataTypeID?: number;
          dataTypeSize?: number;
          dataTypeModifier?: string;
          format?: string;
        }[];
        rowAsArray?: boolean;
        sum?: { count?: number };
      };
      country_mmr?: {
        commmand?: string;
        rowCount?: number;
        rows?: {
          loccountrycode?: string;
          count?: number;
          avg?: string;
          common?: string;
        }[];
        fields?: {
          name?: string;
          tableID?: number;
          columnID?: number;
          dataTypeID?: number;
          dataTypeSize?: number;
          dataTypeModifier?: number;
          format?: string;
        }[];
        rowAsArray?: boolean;
      };
    };
  }
}

export namespace Search {
  /**
   * @description Search players by personaname.
   * @tags search
   * @name SearchList
   * @summary GET /search
   * @request GET:/search
   */
  export namespace SearchList {
    export type RequestParams = {};
    export type RequestQuery = { q: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account_id?: number;
      avatarfull?: string;
      personaname?: string;
      last_match_time?: string;
      similarity?: number;
    }[];
  }
}

export namespace Rankings {
  /**
   * @description Top players by hero
   * @tags rankings
   * @name RankingsList
   * @summary GET /rankings
   * @request GET:/rankings
   */
  export namespace RankingsList {
    export type RequestParams = {};
    export type RequestQuery = { hero_id: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      hero_id?: number;
      rankings?: {
        account_id?: number;
        score?: string;
        steamid?: string;
        avatar?: string;
        avatarmedium?: string;
        avatarfull?: string;
        profileurl?: string;
        personaname?: string;
        last_login?: Date;
        full_history_time?: Date;
        cheese?: number;
        fh_unavailable?: boolean;
        loccountrycode?: string;
        rank_tier?: number;
      };
    };
  }
}

export namespace Benchmarks {
  /**
   * @description Benchmarks of average stat values for a hero
   * @tags benchmarks
   * @name BenchmarksList
   * @summary GET /benchmarks
   * @request GET:/benchmarks
   */
  export namespace BenchmarksList {
    export type RequestParams = {};
    export type RequestQuery = { hero_id: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      hero_id?: number;
      result?: {
        gold_per_min?: { percentile?: number; value?: number }[];
        xp_per_min?: { percentile?: number; value?: number }[];
        kills_per_min?: { percentile?: number; value?: number }[];
        last_hits_per_min?: { percentile?: number; value?: number }[];
        hero_damage_per_min?: { percentile?: number; value?: number }[];
        hero_healing_per_min?: { percentile?: number; value?: number }[];
        tower_damage?: { percentile?: number; value?: number }[];
      };
    };
  }
}

export namespace Status {
  /**
   * @description Get current service statistics
   * @tags status
   * @name StatusList
   * @summary GET /status
   * @request GET:/status
   */
  export namespace StatusList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
}

export namespace Health {
  /**
   * @description Get service health data
   * @tags health
   * @name HealthList
   * @summary GET /health
   * @request GET:/health
   */
  export namespace HealthList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
}

export namespace Request {
  /**
   * @description Get parse request state
   * @tags request
   * @name RequestDetail
   * @summary GET /request/{jobId}
   * @request GET:/request/{jobId}
   */
  export namespace RequestDetail {
    export type RequestParams = { jobId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
  /**
   * @description Submit a new parse request
   * @tags request
   * @name RequestCreate
   * @summary POST /request/{match_id}
   * @request POST:/request/{match_id}
   */
  export namespace RequestCreate {
    export type RequestParams = { matchId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
}

export namespace FindMatches {
  /**
   * @description Finds recent matches by heroes played
   * @tags findMatches
   * @name FindMatchesList
   * @summary GET /
   * @request GET:/findMatches
   */
  export namespace FindMatchesList {
    export type RequestParams = {};
    export type RequestQuery = { teamA?: number; teamB?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
}

export namespace Heroes {
  /**
   * @description Get hero data
   * @tags heroes
   * @name HeroesList
   * @summary GET /heroes
   * @request GET:/heroes
   */
  export namespace HeroesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      id?: number;
      name?: string;
      localized_name?: string;
      primary_attr?: string;
      attack_type?: string;
      roles?: string[];
    }[];
  }
  /**
   * @description Get recent matches with a hero
   * @tags heroes
   * @name MatchesDetail
   * @summary GET /heroes/{hero_id}/matches
   * @request GET:/heroes/{hero_id}/matches
   */
  export namespace MatchesDetail {
    export type RequestParams = { heroId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      duration?: number;
      start_time?: number;
      radiant_team_id?: number;
      radiant_name?: string;
      dire_team_id?: number;
      dire_name?: string;
      leagueid?: number;
      league_name?: string;
      series_id?: number;
      series_type?: number;
      radiant_score?: number;
      dire_score?: number;
      radiant_win?: boolean;
      radiant?: boolean;
    }[];
  }
  /**
   * @description Get results against other heroes for a hero
   * @tags heroes
   * @name MatchupsDetail
   * @summary GET /heroes/{hero_id}/matchups
   * @request GET:/heroes/{hero_id}/matchups
   */
  export namespace MatchupsDetail {
    export type RequestParams = { heroId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      hero_id?: number;
      games_played?: number;
      wins?: number;
    }[];
  }
  /**
   * @description Get hero performance over a range of match durations
   * @tags heroes
   * @name DurationsDetail
   * @summary GET /heroes/{hero_id}/durations
   * @request GET:/heroes/{hero_id}/durations
   */
  export namespace DurationsDetail {
    export type RequestParams = { heroId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      duration_bin?: string;
      games_played?: number;
      wins?: number;
    }[];
  }
  /**
   * @description Get players who have played this hero
   * @tags heroes
   * @name PlayersDetail
   * @summary GET /heroes/{hero_id}/players
   * @request GET:/heroes/{hero_id}/players
   */
  export namespace PlayersDetail {
    export type RequestParams = { heroId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account_id?: number;
      steamid?: string;
      avatar?: string;
      avatarmedium?: string;
      avatarfull?: string;
      profileurl?: string;
      personaname?: string;
      last_login?: Date;
      full_history_time?: Date;
      cheese?: number;
      fh_unavailable?: boolean;
      loccountrycode?: string;
      name?: string;
      country_code?: string;
      fantasy_role?: number;
      team_id?: number;
      team_name?: string;
      team_tag?: string;
      is_locked?: boolean;
      is_pro?: boolean;
      locked_until?: number;
    }[][];
  }
  /**
   * @description Get item popularity of hero categoried by start, early, mid and late game, analyzed from professional games
   * @tags heroes
   * @name ItemPopularityDetail
   * @summary GET /heroes/{hero_id}/itemPopularity
   * @request GET:/heroes/{hero_id}/itemPopularity
   */
  export namespace ItemPopularityDetail {
    export type RequestParams = { heroId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      start_game_items?: { item?: number };
      early_game_items?: { item?: number };
      mid_game_items?: { item?: number };
      late_game_items?: { item?: number };
    };
  }
}

export namespace HeroStats {
  /**
   * @description Get stats about hero performance in recent matches
   * @tags hero stats
   * @name HeroStatsList
   * @summary GET /heroStats
   * @request GET:/heroStats
   */
  export namespace HeroStatsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      id?: number;
      name?: string;
      localized_name?: string;
      img?: string;
      icon?: string;
      pro_win?: number;
      pro_pick?: number;
      hero_id?: number;
      pro_ban?: number;
      "1_pick"?: number;
      "1_win"?: number;
      "2_pick"?: number;
      "2_win"?: number;
      "3_pick"?: number;
      "3_win"?: number;
      "4_pick"?: number;
      "4_win"?: number;
      "5_pick"?: number;
      "5_win"?: number;
      "6_pick"?: number;
      "6_win"?: number;
      "7_pick"?: number;
      "7_win"?: number;
      "8_pick"?: number;
      "8_win"?: number;
      turbo_pick?: number;
      turbo_win?: number;
    }[];
  }
}

export namespace Leagues {
  /**
   * @description Get league data
   * @tags leagues
   * @name LeaguesList
   * @summary GET /leagues
   * @request GET:/leagues
   */
  export namespace LeaguesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      leagueid?: number;
      ticket?: string;
      banner?: string;
      tier?: string;
      name?: string;
    }[];
  }
}

export namespace Teams {
  /**
   * @description Get team data
   * @tags teams
   * @name TeamsList
   * @summary GET /teams
   * @request GET:/teams
   */
  export namespace TeamsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      team_id?: number;
      rating?: number;
      wins?: number;
      losses?: number;
      last_match_time?: number;
      name?: string;
      tag?: string;
    }[];
  }
  /**
   * @description Get data for a team
   * @tags teams
   * @name TeamsDetail
   * @summary GET /teams/{team_id}
   * @request GET:/teams/{team_id}
   */
  export namespace TeamsDetail {
    export type RequestParams = { teamId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      team_id?: number;
      rating?: number;
      wins?: number;
      losses?: number;
      last_match_time?: number;
      name?: string;
      tag?: string;
    };
  }
  /**
   * @description Get matches for a team
   * @tags teams
   * @name MatchesDetail
   * @summary GET /teams/{team_id}/matches
   * @request GET:/teams/{team_id}/matches
   */
  export namespace MatchesDetail {
    export type RequestParams = { teamId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      duration?: number;
      start_time?: number;
      radiant_team_id?: number;
      radiant_name?: string;
      dire_team_id?: number;
      dire_name?: string;
      leagueid?: number;
      league_name?: string;
      series_id?: number;
      series_type?: number;
      radiant_score?: number;
      dire_score?: number;
      radiant_win?: boolean;
      radiant?: boolean;
    };
  }
  /**
   * @description Get players who have played for a team
   * @tags teams
   * @name PlayersDetail
   * @summary GET /teams/{team_id}/players
   * @request GET:/teams/{team_id}/players
   */
  export namespace PlayersDetail {
    export type RequestParams = { teamId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      account_id?: string;
      name?: string;
      games_played?: number;
      wins?: number;
      is_current_team_member?: boolean;
    };
  }
  /**
   * @description Get heroes for a team
   * @tags teams
   * @name HeroesDetail
   * @summary GET /teams/{team_id}/heroes
   * @request GET:/teams/{team_id}/heroes
   */
  export namespace HeroesDetail {
    export type RequestParams = { teamId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      hero_id?: number;
      name?: string;
      games_played?: number;
      wins?: number;
    };
  }
}

export namespace Replays {
  /**
   * @description Get data to construct a replay URL with
   * @tags replays
   * @name ReplaysList
   * @summary GET /replays
   * @request GET:/replays
   */
  export namespace ReplaysList {
    export type RequestParams = {};
    export type RequestQuery = { match_id: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      cluster?: number;
      replay_salt?: number;
    }[];
  }
}

export namespace Records {
  /**
   * @description Get top performances in a stat
   * @tags records
   * @name RecordsDetail
   * @summary GET /records/{field}
   * @request GET:/records/{field}
   */
  export namespace RecordsDetail {
    export type RequestParams = { field: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      match_id?: number;
      start_time?: number;
      hero_id?: number;
      score?: number;
    }[];
  }
}

export namespace Live {
  /**
   * @description Get top currently ongoing live games
   * @tags live
   * @name LiveList
   * @summary GET /live
   * @request GET:/live
   */
  export namespace LiveList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object[];
  }
}

export namespace Scenarios {
  /**
   * @description Win rates for certain item timings on a hero for items that cost at least 1400 gold
   * @tags scenarios
   * @name ItemTimingsList
   * @summary GET /scenarios/itemTimings
   * @request GET:/scenarios/itemTimings
   */
  export namespace ItemTimingsList {
    export type RequestParams = {};
    export type RequestQuery = { item?: string; hero_id?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      hero_id?: number;
      item?: string;
      time?: number;
      games?: string;
      wins?: string;
    }[];
  }
  /**
   * @description Win rates for heroes in certain lane roles
   * @tags scenarios
   * @name LaneRolesList
   * @summary GET /scenarios/laneRoles
   * @request GET:/scenarios/laneRoles
   */
  export namespace LaneRolesList {
    export type RequestParams = {};
    export type RequestQuery = { lane_role?: string; hero_id?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      hero_id?: number;
      lane_role?: number;
      time?: number;
      games?: string;
      wins?: string;
    }[];
  }
  /**
   * @description Miscellaneous team scenarios
   * @tags scenarios
   * @name MiscList
   * @summary GET /scenarios/misc
   * @request GET:/scenarios/misc
   */
  export namespace MiscList {
    export type RequestParams = {};
    export type RequestQuery = { scenario?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      scenario?: string;
      is_radiant?: boolean;
      region?: number;
      games?: string;
      wins?: string;
    }[];
  }
}

export namespace Schema {
  /**
   * @description Get database schema
   * @tags schema
   * @name SchemaList
   * @summary GET /schema
   * @request GET:/schema
   */
  export namespace SchemaList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      table_name?: string;
      column_name?: string;
      data_type?: string;
    }[];
  }
}

export namespace Constants {
  /**
   * @description Get static game data mirrored from the dotaconstants repository. If no resource is specified, returns an array of available resources.
   * @tags constants
   * @name ConstantsDetail
   * @summary GET /constants
   * @request GET:/constants/{resource}
   */
  export namespace ConstantsDetail {
    export type RequestParams = { resource?: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}
