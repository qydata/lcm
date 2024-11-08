import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Acted = {
  __typename?: 'Acted';
  actionModuleReturnData: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  publicationActionParams_actionModuleAddress: Scalars['Bytes']['output'];
  publicationActionParams_actionModuleData: Scalars['Bytes']['output'];
  publicationActionParams_actorProfileId: Scalars['BigInt']['output'];
  publicationActionParams_publicationActedId: Scalars['BigInt']['output'];
  publicationActionParams_publicationActedProfileId: Scalars['BigInt']['output'];
  publicationActionParams_referrerProfileIds: Array<Scalars['BigInt']['output']>;
  publicationActionParams_referrerPubIds: Array<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Acted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actionModuleReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  actionModuleReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  actionModuleReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  actionModuleReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  actionModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModuleReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  actionModuleReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  actionModuleReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  actionModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  actionModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Acted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Acted_Filter>>>;
  publicationActionParams_actionModuleAddress?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publicationActionParams_actionModuleAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publicationActionParams_actionModuleData?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publicationActionParams_actionModuleData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleData_not?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publicationActionParams_actionModuleData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publicationActionParams_actorProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_actorProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_actorProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_actorProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_actorProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_actorProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_actorProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_actorProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_publicationActedId?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_publicationActedId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedId_not?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_publicationActedProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_publicationActedProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  publicationActionParams_publicationActedProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerProfileIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerProfileIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerProfileIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerProfileIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerProfileIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerProfileIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerPubIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerPubIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerPubIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerPubIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerPubIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  publicationActionParams_referrerPubIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Acted_OrderBy {
  ActionModuleReturnData = 'actionModuleReturnData',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  PublicationActionParamsActionModuleAddress = 'publicationActionParams_actionModuleAddress',
  PublicationActionParamsActionModuleData = 'publicationActionParams_actionModuleData',
  PublicationActionParamsActorProfileId = 'publicationActionParams_actorProfileId',
  PublicationActionParamsPublicationActedId = 'publicationActionParams_publicationActedId',
  PublicationActionParamsPublicationActedProfileId = 'publicationActionParams_publicationActedProfileId',
  PublicationActionParamsReferrerProfileIds = 'publicationActionParams_referrerProfileIds',
  PublicationActionParamsReferrerPubIds = 'publicationActionParams_referrerPubIds',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type Approval = {
  __typename?: 'Approval';
  approved: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll = {
  __typename?: 'ApprovalForAll';
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ApprovalForAll_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Operator = 'operator',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
  approved?: InputMaybe<Scalars['Bytes']['input']>;
  approved_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  approved_lt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_lte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Approval_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Owner = 'owner',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type BaseInitialized = {
  __typename?: 'BaseInitialized';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BaseInitialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BaseInitialized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<BaseInitialized_Filter>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BaseInitialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type BatchMetadataUpdate = {
  __typename?: 'BatchMetadataUpdate';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fromTokenId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  toTokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BatchMetadataUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchMetadataUpdate_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BatchMetadataUpdate_Filter>>>;
  toTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BatchMetadataUpdate_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FromTokenId = 'fromTokenId',
  Id = 'id',
  ToTokenId = 'toTokenId',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Blocked = {
  __typename?: 'Blocked';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  byProfileId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  idOfProfileBlocked: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Blocked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Blocked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  byProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  byProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  idOfProfileBlocked?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileBlocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileBlocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileBlocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  idOfProfileBlocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileBlocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileBlocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileBlocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Blocked_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Blocked_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ByProfileId = 'byProfileId',
  Id = 'id',
  IdOfProfileBlocked = 'idOfProfileBlocked',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type Challenge = {
  __typename?: 'Challenge';
  id: Scalars['Bytes']['output'];
  signedBy: Scalars['Bytes']['output'];
  text: Scalars['String']['output'];
};

export type Challenge_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Challenge_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Challenge_Filter>>>;
  signedBy?: InputMaybe<Scalars['Bytes']['input']>;
  signedBy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  signedBy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  signedBy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  signedBy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  signedBy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  signedBy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  signedBy_not?: InputMaybe<Scalars['Bytes']['input']>;
  signedBy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  signedBy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  text_ends_with?: InputMaybe<Scalars['String']['input']>;
  text_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  text_gt?: InputMaybe<Scalars['String']['input']>;
  text_gte?: InputMaybe<Scalars['String']['input']>;
  text_in?: InputMaybe<Array<Scalars['String']['input']>>;
  text_lt?: InputMaybe<Scalars['String']['input']>;
  text_lte?: InputMaybe<Scalars['String']['input']>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  text_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  text_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  text_starts_with?: InputMaybe<Scalars['String']['input']>;
  text_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Challenge_OrderBy {
  Id = 'id',
  SignedBy = 'signedBy',
  Text = 'text'
}

export type CollectNftTransferred = {
  __typename?: 'CollectNFTTransferred';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  collectNFTId: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  profileId: Scalars['BigInt']['output'];
  pubId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CollectNftTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollectNftTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectNFTId?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectNFTId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_not?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CollectNftTransferred_Filter>>>;
  profileId?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CollectNftTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CollectNftId = 'collectNFTId',
  From = 'from',
  Id = 'id',
  ProfileId = 'profileId',
  PubId = 'pubId',
  Timestamp = 'timestamp',
  To = 'to',
  TransactionHash = 'transactionHash'
}

export type CommentCreated = {
  __typename?: 'CommentCreated';
  actionModulesInitReturnDatas: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  commentParams_actionModules: Array<Scalars['Bytes']['output']>;
  commentParams_actionModulesInitDatas: Array<Scalars['Bytes']['output']>;
  commentParams_contentURI: Scalars['String']['output'];
  commentParams_pointedProfileId: Scalars['BigInt']['output'];
  commentParams_pointedPubId: Scalars['BigInt']['output'];
  commentParams_profileId: Scalars['BigInt']['output'];
  commentParams_referenceModule: Scalars['Bytes']['output'];
  commentParams_referenceModuleData: Scalars['Bytes']['output'];
  commentParams_referenceModuleInitData: Scalars['Bytes']['output'];
  commentParams_referrerProfileIds: Array<Scalars['BigInt']['output']>;
  commentParams_referrerPubIds: Array<Scalars['BigInt']['output']>;
  id: Scalars['Bytes']['output'];
  pubId: Scalars['BigInt']['output'];
  referenceModuleInitReturnData: Scalars['Bytes']['output'];
  referenceModuleReturnData: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CommentCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actionModulesInitReturnDatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CommentCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_actionModules?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModulesInitDatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModulesInitDatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModulesInitDatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModulesInitDatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModulesInitDatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModulesInitDatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModules_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModules_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModules_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModules_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_actionModules_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_contentURI?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_contains?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_gt?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_gte?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  commentParams_contentURI_lt?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_lte?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_not?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  commentParams_contentURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  commentParams_contentURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  commentParams_pointedProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_pointedProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_pointedPubId?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedPubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedPubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedPubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_pointedPubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedPubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedPubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_pointedPubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_profileId?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  commentParams_profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referenceModule?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_referenceModuleData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData_not?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_referenceModuleInitData?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleInitData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleInitData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleInitData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleInitData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_referenceModuleInitData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleInitData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleInitData_not?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleInitData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModuleInitData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_referenceModule_contains?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModule_gt?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModule_gte?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModule_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_referenceModule_lt?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModule_lte?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModule_not?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModule_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  commentParams_referenceModule_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  commentParams_referrerProfileIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerProfileIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerProfileIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerProfileIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerProfileIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerProfileIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerPubIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerPubIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerPubIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerPubIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerPubIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commentParams_referrerPubIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CommentCreated_Filter>>>;
  pubId?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referenceModuleInitReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  referenceModuleInitReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  referenceModuleReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  referenceModuleReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CommentCreated_OrderBy {
  ActionModulesInitReturnDatas = 'actionModulesInitReturnDatas',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CommentParamsActionModules = 'commentParams_actionModules',
  CommentParamsActionModulesInitDatas = 'commentParams_actionModulesInitDatas',
  CommentParamsContentUri = 'commentParams_contentURI',
  CommentParamsPointedProfileId = 'commentParams_pointedProfileId',
  CommentParamsPointedPubId = 'commentParams_pointedPubId',
  CommentParamsProfileId = 'commentParams_profileId',
  CommentParamsReferenceModule = 'commentParams_referenceModule',
  CommentParamsReferenceModuleData = 'commentParams_referenceModuleData',
  CommentParamsReferenceModuleInitData = 'commentParams_referenceModuleInitData',
  CommentParamsReferrerProfileIds = 'commentParams_referrerProfileIds',
  CommentParamsReferrerPubIds = 'commentParams_referrerPubIds',
  Id = 'id',
  PubId = 'pubId',
  ReferenceModuleInitReturnData = 'referenceModuleInitReturnData',
  ReferenceModuleReturnData = 'referenceModuleReturnData',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type CreditBalanceChanged = {
  __typename?: 'CreditBalanceChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creditAddress: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  remainingCredits: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CreditBalanceChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CreditBalanceChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creditAddress?: InputMaybe<Scalars['Bytes']['input']>;
  creditAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creditAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creditAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creditAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creditAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creditAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creditAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  creditAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creditAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CreditBalanceChanged_Filter>>>;
  remainingCredits?: InputMaybe<Scalars['BigInt']['input']>;
  remainingCredits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  remainingCredits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  remainingCredits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  remainingCredits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  remainingCredits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  remainingCredits_not?: InputMaybe<Scalars['BigInt']['input']>;
  remainingCredits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CreditBalanceChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CreditAddress = 'creditAddress',
  Id = 'id',
  RemainingCredits = 'remainingCredits',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type CreditProviderStatusChanged = {
  __typename?: 'CreditProviderStatusChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creditProvider: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  isCreditProvider: Scalars['Boolean']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CreditProviderStatusChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CreditProviderStatusChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creditProvider?: InputMaybe<Scalars['Bytes']['input']>;
  creditProvider_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creditProvider_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creditProvider_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creditProvider_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creditProvider_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creditProvider_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creditProvider_not?: InputMaybe<Scalars['Bytes']['input']>;
  creditProvider_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creditProvider_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isCreditProvider?: InputMaybe<Scalars['Boolean']['input']>;
  isCreditProvider_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isCreditProvider_not?: InputMaybe<Scalars['Boolean']['input']>;
  isCreditProvider_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CreditProviderStatusChanged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CreditProviderStatusChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CreditProvider = 'creditProvider',
  Id = 'id',
  IsCreditProvider = 'isCreditProvider',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type DateTime = {
  __typename?: 'DateTime';
  id: Scalars['Bytes']['output'];
  value: Scalars['String']['output'];
};

export type DateTime_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DateTime_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DateTime_Filter>>>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_gt?: InputMaybe<Scalars['String']['input']>;
  value_gte?: InputMaybe<Scalars['String']['input']>;
  value_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_lt?: InputMaybe<Scalars['String']['input']>;
  value_lte?: InputMaybe<Scalars['String']['input']>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DateTime_OrderBy {
  Id = 'id',
  Value = 'value'
}

export type DelegatedExecutorsConfigApplied = {
  __typename?: 'DelegatedExecutorsConfigApplied';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  configNumber: Scalars['BigInt']['output'];
  delegatorProfileId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DelegatedExecutorsConfigApplied_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegatedExecutorsConfigApplied_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  configNumber?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  configNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatorProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatorProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DelegatedExecutorsConfigApplied_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DelegatedExecutorsConfigApplied_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ConfigNumber = 'configNumber',
  DelegatorProfileId = 'delegatorProfileId',
  Id = 'id',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type DelegatedExecutorsConfigChanged = {
  __typename?: 'DelegatedExecutorsConfigChanged';
  approvals: Array<Scalars['Boolean']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  configNumber: Scalars['BigInt']['output'];
  delegatedExecutors: Array<Scalars['Bytes']['output']>;
  delegatorProfileId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DelegatedExecutorsConfigChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegatedExecutorsConfigChanged_Filter>>>;
  approvals?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approvals_contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approvals_contains_nocase?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approvals_not?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approvals_not_contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approvals_not_contains_nocase?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  configNumber?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  configNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  configNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedExecutors?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegatedExecutors_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegatedExecutors_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegatedExecutors_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegatedExecutors_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegatedExecutors_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegatorProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatorProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DelegatedExecutorsConfigChanged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DelegatedExecutorsConfigChanged_OrderBy {
  Approvals = 'approvals',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ConfigNumber = 'configNumber',
  DelegatedExecutors = 'delegatedExecutors',
  DelegatorProfileId = 'delegatorProfileId',
  Id = 'id',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Erc721Approval = {
  __typename?: 'ERC721Approval';
  approved: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Erc721ApprovalForAll = {
  __typename?: 'ERC721ApprovalForAll';
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Erc721ApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721ApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc721ApprovalForAll_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Erc721ApprovalForAll_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Operator = 'operator',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type Erc721Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721Approval_Filter>>>;
  approved?: InputMaybe<Scalars['Bytes']['input']>;
  approved_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  approved_lt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_lte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc721Approval_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Erc721Approval_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Owner = 'owner',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type Erc721Transfer = {
  __typename?: 'ERC721Transfer';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Erc721Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721Transfer_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc721Transfer_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Erc721Transfer_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  From = 'from',
  Id = 'id',
  To = 'to',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type EmergencyAdminSet = {
  __typename?: 'EmergencyAdminSet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  caller: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  newEmergencyAdmin: Scalars['Bytes']['output'];
  oldEmergencyAdmin: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type EmergencyAdminSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EmergencyAdminSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newEmergencyAdmin?: InputMaybe<Scalars['Bytes']['input']>;
  newEmergencyAdmin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newEmergencyAdmin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newEmergencyAdmin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newEmergencyAdmin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newEmergencyAdmin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newEmergencyAdmin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newEmergencyAdmin_not?: InputMaybe<Scalars['Bytes']['input']>;
  newEmergencyAdmin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newEmergencyAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldEmergencyAdmin?: InputMaybe<Scalars['Bytes']['input']>;
  oldEmergencyAdmin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldEmergencyAdmin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oldEmergencyAdmin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oldEmergencyAdmin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldEmergencyAdmin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oldEmergencyAdmin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oldEmergencyAdmin_not?: InputMaybe<Scalars['Bytes']['input']>;
  oldEmergencyAdmin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldEmergencyAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EmergencyAdminSet_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EmergencyAdminSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Caller = 'caller',
  Id = 'id',
  NewEmergencyAdmin = 'newEmergencyAdmin',
  OldEmergencyAdmin = 'oldEmergencyAdmin',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type EncryptableImage = {
  __typename?: 'EncryptableImage';
  altTag?: Maybe<Scalars['String']['output']>;
  artist?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  credits?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  lyrics?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  recordLabel?: Maybe<Scalars['String']['output']>;
  uri: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type EncryptableImageSet = {
  __typename?: 'EncryptableImageSet';
  id: Scalars['String']['output'];
  optimized?: Maybe<Image>;
  raw?: Maybe<EncryptableImage>;
  transformed?: Maybe<Image>;
};

export type EncryptableImageSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EncryptableImageSet_Filter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized?: InputMaybe<Scalars['String']['input']>;
  optimized_?: InputMaybe<Image_Filter>;
  optimized_contains?: InputMaybe<Scalars['String']['input']>;
  optimized_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_ends_with?: InputMaybe<Scalars['String']['input']>;
  optimized_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_gt?: InputMaybe<Scalars['String']['input']>;
  optimized_gte?: InputMaybe<Scalars['String']['input']>;
  optimized_in?: InputMaybe<Array<Scalars['String']['input']>>;
  optimized_lt?: InputMaybe<Scalars['String']['input']>;
  optimized_lte?: InputMaybe<Scalars['String']['input']>;
  optimized_not?: InputMaybe<Scalars['String']['input']>;
  optimized_not_contains?: InputMaybe<Scalars['String']['input']>;
  optimized_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  optimized_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  optimized_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  optimized_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_starts_with?: InputMaybe<Scalars['String']['input']>;
  optimized_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<EncryptableImageSet_Filter>>>;
  raw?: InputMaybe<Scalars['String']['input']>;
  raw_?: InputMaybe<EncryptableImage_Filter>;
  raw_contains?: InputMaybe<Scalars['String']['input']>;
  raw_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_ends_with?: InputMaybe<Scalars['String']['input']>;
  raw_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_gt?: InputMaybe<Scalars['String']['input']>;
  raw_gte?: InputMaybe<Scalars['String']['input']>;
  raw_in?: InputMaybe<Array<Scalars['String']['input']>>;
  raw_lt?: InputMaybe<Scalars['String']['input']>;
  raw_lte?: InputMaybe<Scalars['String']['input']>;
  raw_not?: InputMaybe<Scalars['String']['input']>;
  raw_not_contains?: InputMaybe<Scalars['String']['input']>;
  raw_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  raw_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  raw_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  raw_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_starts_with?: InputMaybe<Scalars['String']['input']>;
  raw_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed?: InputMaybe<Scalars['String']['input']>;
  transformed_?: InputMaybe<Image_Filter>;
  transformed_contains?: InputMaybe<Scalars['String']['input']>;
  transformed_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_ends_with?: InputMaybe<Scalars['String']['input']>;
  transformed_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_gt?: InputMaybe<Scalars['String']['input']>;
  transformed_gte?: InputMaybe<Scalars['String']['input']>;
  transformed_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transformed_lt?: InputMaybe<Scalars['String']['input']>;
  transformed_lte?: InputMaybe<Scalars['String']['input']>;
  transformed_not?: InputMaybe<Scalars['String']['input']>;
  transformed_not_contains?: InputMaybe<Scalars['String']['input']>;
  transformed_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transformed_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transformed_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transformed_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_starts_with?: InputMaybe<Scalars['String']['input']>;
  transformed_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum EncryptableImageSet_OrderBy {
  Id = 'id',
  Optimized = 'optimized',
  OptimizedHeight = 'optimized__height',
  OptimizedId = 'optimized__id',
  OptimizedMimeType = 'optimized__mimeType',
  OptimizedUri = 'optimized__uri',
  OptimizedWidth = 'optimized__width',
  Raw = 'raw',
  RawAltTag = 'raw__altTag',
  RawArtist = 'raw__artist',
  RawCover = 'raw__cover',
  RawCredits = 'raw__credits',
  RawDuration = 'raw__duration',
  RawGenre = 'raw__genre',
  RawHeight = 'raw__height',
  RawId = 'raw__id',
  RawLyrics = 'raw__lyrics',
  RawMimeType = 'raw__mimeType',
  RawRecordLabel = 'raw__recordLabel',
  RawUri = 'raw__uri',
  RawWidth = 'raw__width',
  Transformed = 'transformed',
  TransformedHeight = 'transformed__height',
  TransformedId = 'transformed__id',
  TransformedMimeType = 'transformed__mimeType',
  TransformedUri = 'transformed__uri',
  TransformedWidth = 'transformed__width'
}

export type EncryptableImage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  altTag?: InputMaybe<Scalars['String']['input']>;
  altTag_contains?: InputMaybe<Scalars['String']['input']>;
  altTag_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_ends_with?: InputMaybe<Scalars['String']['input']>;
  altTag_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_gt?: InputMaybe<Scalars['String']['input']>;
  altTag_gte?: InputMaybe<Scalars['String']['input']>;
  altTag_in?: InputMaybe<Array<Scalars['String']['input']>>;
  altTag_lt?: InputMaybe<Scalars['String']['input']>;
  altTag_lte?: InputMaybe<Scalars['String']['input']>;
  altTag_not?: InputMaybe<Scalars['String']['input']>;
  altTag_not_contains?: InputMaybe<Scalars['String']['input']>;
  altTag_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  altTag_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  altTag_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  altTag_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_starts_with?: InputMaybe<Scalars['String']['input']>;
  altTag_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<EncryptableImage_Filter>>>;
  artist?: InputMaybe<Scalars['String']['input']>;
  artist_contains?: InputMaybe<Scalars['String']['input']>;
  artist_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_ends_with?: InputMaybe<Scalars['String']['input']>;
  artist_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_gt?: InputMaybe<Scalars['String']['input']>;
  artist_gte?: InputMaybe<Scalars['String']['input']>;
  artist_in?: InputMaybe<Array<Scalars['String']['input']>>;
  artist_lt?: InputMaybe<Scalars['String']['input']>;
  artist_lte?: InputMaybe<Scalars['String']['input']>;
  artist_not?: InputMaybe<Scalars['String']['input']>;
  artist_not_contains?: InputMaybe<Scalars['String']['input']>;
  artist_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  artist_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  artist_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  artist_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_starts_with?: InputMaybe<Scalars['String']['input']>;
  artist_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  cover_contains?: InputMaybe<Scalars['String']['input']>;
  cover_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_ends_with?: InputMaybe<Scalars['String']['input']>;
  cover_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_gt?: InputMaybe<Scalars['String']['input']>;
  cover_gte?: InputMaybe<Scalars['String']['input']>;
  cover_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cover_lt?: InputMaybe<Scalars['String']['input']>;
  cover_lte?: InputMaybe<Scalars['String']['input']>;
  cover_not?: InputMaybe<Scalars['String']['input']>;
  cover_not_contains?: InputMaybe<Scalars['String']['input']>;
  cover_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cover_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cover_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cover_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_starts_with?: InputMaybe<Scalars['String']['input']>;
  cover_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  credits?: InputMaybe<Scalars['String']['input']>;
  credits_contains?: InputMaybe<Scalars['String']['input']>;
  credits_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  credits_ends_with?: InputMaybe<Scalars['String']['input']>;
  credits_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  credits_gt?: InputMaybe<Scalars['String']['input']>;
  credits_gte?: InputMaybe<Scalars['String']['input']>;
  credits_in?: InputMaybe<Array<Scalars['String']['input']>>;
  credits_lt?: InputMaybe<Scalars['String']['input']>;
  credits_lte?: InputMaybe<Scalars['String']['input']>;
  credits_not?: InputMaybe<Scalars['String']['input']>;
  credits_not_contains?: InputMaybe<Scalars['String']['input']>;
  credits_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  credits_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  credits_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  credits_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  credits_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  credits_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  credits_starts_with?: InputMaybe<Scalars['String']['input']>;
  credits_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_gt?: InputMaybe<Scalars['Int']['input']>;
  duration_gte?: InputMaybe<Scalars['Int']['input']>;
  duration_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  duration_lt?: InputMaybe<Scalars['Int']['input']>;
  duration_lte?: InputMaybe<Scalars['Int']['input']>;
  duration_not?: InputMaybe<Scalars['Int']['input']>;
  duration_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_contains?: InputMaybe<Scalars['String']['input']>;
  genre_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  genre_ends_with?: InputMaybe<Scalars['String']['input']>;
  genre_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  genre_gt?: InputMaybe<Scalars['String']['input']>;
  genre_gte?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<Scalars['String']['input']>>;
  genre_lt?: InputMaybe<Scalars['String']['input']>;
  genre_lte?: InputMaybe<Scalars['String']['input']>;
  genre_not?: InputMaybe<Scalars['String']['input']>;
  genre_not_contains?: InputMaybe<Scalars['String']['input']>;
  genre_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  genre_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  genre_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  genre_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  genre_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  genre_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  genre_starts_with?: InputMaybe<Scalars['String']['input']>;
  genre_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lyrics?: InputMaybe<Scalars['String']['input']>;
  lyrics_contains?: InputMaybe<Scalars['String']['input']>;
  lyrics_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lyrics_ends_with?: InputMaybe<Scalars['String']['input']>;
  lyrics_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lyrics_gt?: InputMaybe<Scalars['String']['input']>;
  lyrics_gte?: InputMaybe<Scalars['String']['input']>;
  lyrics_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lyrics_lt?: InputMaybe<Scalars['String']['input']>;
  lyrics_lte?: InputMaybe<Scalars['String']['input']>;
  lyrics_not?: InputMaybe<Scalars['String']['input']>;
  lyrics_not_contains?: InputMaybe<Scalars['String']['input']>;
  lyrics_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lyrics_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lyrics_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lyrics_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lyrics_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lyrics_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lyrics_starts_with?: InputMaybe<Scalars['String']['input']>;
  lyrics_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  mimeType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_gt?: InputMaybe<Scalars['String']['input']>;
  mimeType_gte?: InputMaybe<Scalars['String']['input']>;
  mimeType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mimeType_lt?: InputMaybe<Scalars['String']['input']>;
  mimeType_lte?: InputMaybe<Scalars['String']['input']>;
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<EncryptableImage_Filter>>>;
  recordLabel?: InputMaybe<Scalars['String']['input']>;
  recordLabel_contains?: InputMaybe<Scalars['String']['input']>;
  recordLabel_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  recordLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  recordLabel_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recordLabel_gt?: InputMaybe<Scalars['String']['input']>;
  recordLabel_gte?: InputMaybe<Scalars['String']['input']>;
  recordLabel_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recordLabel_lt?: InputMaybe<Scalars['String']['input']>;
  recordLabel_lte?: InputMaybe<Scalars['String']['input']>;
  recordLabel_not?: InputMaybe<Scalars['String']['input']>;
  recordLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  recordLabel_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  recordLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  recordLabel_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recordLabel_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recordLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  recordLabel_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recordLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  recordLabel_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum EncryptableImage_OrderBy {
  AltTag = 'altTag',
  Artist = 'artist',
  Cover = 'cover',
  Credits = 'credits',
  Duration = 'duration',
  Genre = 'genre',
  Height = 'height',
  Id = 'id',
  Lyrics = 'lyrics',
  MimeType = 'mimeType',
  RecordLabel = 'recordLabel',
  Uri = 'uri',
  Width = 'width'
}

export type EventsBatchMetadataUpdate = {
  __typename?: 'EventsBatchMetadataUpdate';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fromTokenId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  toTokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type EventsBatchMetadataUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EventsBatchMetadataUpdate_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EventsBatchMetadataUpdate_Filter>>>;
  toTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EventsBatchMetadataUpdate_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FromTokenId = 'fromTokenId',
  Id = 'id',
  ToTokenId = 'toTokenId',
  TransactionHash = 'transactionHash'
}

export type EventsCollectNftTransferred = {
  __typename?: 'EventsCollectNFTTransferred';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  collectNFTId: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  profileId: Scalars['BigInt']['output'];
  pubId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type EventsCollectNftTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EventsCollectNftTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectNFTId?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectNFTId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_not?: InputMaybe<Scalars['BigInt']['input']>;
  collectNFTId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EventsCollectNftTransferred_Filter>>>;
  profileId?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EventsCollectNftTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CollectNftId = 'collectNFTId',
  From = 'from',
  Id = 'id',
  ProfileId = 'profileId',
  PubId = 'pubId',
  Timestamp = 'timestamp',
  To = 'to',
  TransactionHash = 'transactionHash'
}

export type EventsTokenGuardianStateChanged = {
  __typename?: 'EventsTokenGuardianStateChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  tokenGuardianDisablingTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  wallet: Scalars['Bytes']['output'];
};

export type EventsTokenGuardianStateChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EventsTokenGuardianStateChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EventsTokenGuardianStateChanged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenGuardianDisablingTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenGuardianDisablingTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  wallet?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_gt?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_gte?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  wallet_lt?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_lte?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EventsTokenGuardianStateChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Enabled = 'enabled',
  Id = 'id',
  Timestamp = 'timestamp',
  TokenGuardianDisablingTimestamp = 'tokenGuardianDisablingTimestamp',
  TransactionHash = 'transactionHash',
  Wallet = 'wallet'
}

export type EventsTreasuryFeeSet = {
  __typename?: 'EventsTreasuryFeeSet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newTreasuryFee: Scalars['Int']['output'];
  prevTreasuryFee: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type EventsTreasuryFeeSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EventsTreasuryFeeSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newTreasuryFee?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_gt?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_gte?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  newTreasuryFee_lt?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_lte?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_not?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EventsTreasuryFeeSet_Filter>>>;
  prevTreasuryFee?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_gt?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_gte?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  prevTreasuryFee_lt?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_lte?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_not?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EventsTreasuryFeeSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewTreasuryFee = 'newTreasuryFee',
  PrevTreasuryFee = 'prevTreasuryFee',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type EventsTreasurySet = {
  __typename?: 'EventsTreasurySet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newTreasury: Scalars['Bytes']['output'];
  prevTreasury: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type EventsTreasurySet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EventsTreasurySet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newTreasury?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newTreasury_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EventsTreasurySet_Filter>>>;
  prevTreasury?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_contains?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_gt?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_gte?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  prevTreasury_lt?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_lte?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_not?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EventsTreasurySet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewTreasury = 'newTreasury',
  PrevTreasury = 'prevTreasury',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type EventsUnfollowed = {
  __typename?: 'EventsUnfollowed';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  idOfProfileUnfollowed: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  unfollowerProfileId: Scalars['BigInt']['output'];
};

export type EventsUnfollowed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EventsUnfollowed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  idOfProfileUnfollowed?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  idOfProfileUnfollowed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_not?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EventsUnfollowed_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  unfollowerProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unfollowerProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum EventsUnfollowed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  IdOfProfileUnfollowed = 'idOfProfileUnfollowed',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash',
  UnfollowerProfileId = 'unfollowerProfileId'
}

export type EvmAddress = {
  __typename?: 'EvmAddress';
  id: Scalars['Bytes']['output'];
  value: Scalars['Bytes']['output'];
};

export type EvmAddress_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EvmAddress_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EvmAddress_Filter>>>;
  value?: InputMaybe<Scalars['Bytes']['input']>;
  value_contains?: InputMaybe<Scalars['Bytes']['input']>;
  value_gt?: InputMaybe<Scalars['Bytes']['input']>;
  value_gte?: InputMaybe<Scalars['Bytes']['input']>;
  value_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  value_lt?: InputMaybe<Scalars['Bytes']['input']>;
  value_lte?: InputMaybe<Scalars['Bytes']['input']>;
  value_not?: InputMaybe<Scalars['Bytes']['input']>;
  value_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EvmAddress_OrderBy {
  Id = 'id',
  Value = 'value'
}

export type FollowModuleSet = {
  __typename?: 'FollowModuleSet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  followModule: Scalars['Bytes']['output'];
  followModuleInitData: Scalars['Bytes']['output'];
  followModuleReturnData: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  profileId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FollowModuleSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FollowModuleSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  followModule?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  followModuleInitData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData_not?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleInitData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  followModuleReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  followModuleReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  followModule_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followModule_gt?: InputMaybe<Scalars['Bytes']['input']>;
  followModule_gte?: InputMaybe<Scalars['Bytes']['input']>;
  followModule_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  followModule_lt?: InputMaybe<Scalars['Bytes']['input']>;
  followModule_lte?: InputMaybe<Scalars['Bytes']['input']>;
  followModule_not?: InputMaybe<Scalars['Bytes']['input']>;
  followModule_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followModule_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FollowModuleSet_Filter>>>;
  profileId?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FollowModuleSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FollowModule = 'followModule',
  FollowModuleInitData = 'followModuleInitData',
  FollowModuleReturnData = 'followModuleReturnData',
  Id = 'id',
  ProfileId = 'profileId',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type FollowNftDeployed = {
  __typename?: 'FollowNFTDeployed';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  followNFT: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  profileId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FollowNftDeployed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FollowNftDeployed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  followNFT?: InputMaybe<Scalars['Bytes']['input']>;
  followNFT_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followNFT_gt?: InputMaybe<Scalars['Bytes']['input']>;
  followNFT_gte?: InputMaybe<Scalars['Bytes']['input']>;
  followNFT_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  followNFT_lt?: InputMaybe<Scalars['Bytes']['input']>;
  followNFT_lte?: InputMaybe<Scalars['Bytes']['input']>;
  followNFT_not?: InputMaybe<Scalars['Bytes']['input']>;
  followNFT_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followNFT_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FollowNftDeployed_Filter>>>;
  profileId?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum FollowNftDeployed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FollowNft = 'followNFT',
  Id = 'id',
  ProfileId = 'profileId',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Followed = {
  __typename?: 'Followed';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  followModuleData: Scalars['Bytes']['output'];
  followTokenIdAssigned: Scalars['BigInt']['output'];
  followerProfileId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  idOfProfileFollowed: Scalars['BigInt']['output'];
  processFollowModuleReturnData: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Followed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Followed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  followModuleData?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  followModuleData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleData_not?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  followModuleData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  followTokenIdAssigned?: InputMaybe<Scalars['BigInt']['input']>;
  followTokenIdAssigned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  followTokenIdAssigned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  followTokenIdAssigned_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  followTokenIdAssigned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  followTokenIdAssigned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  followTokenIdAssigned_not?: InputMaybe<Scalars['BigInt']['input']>;
  followTokenIdAssigned_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  followerProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  followerProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  followerProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  followerProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  followerProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  followerProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  followerProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  followerProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  idOfProfileFollowed?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileFollowed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileFollowed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileFollowed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  idOfProfileFollowed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileFollowed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileFollowed_not?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileFollowed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Followed_Filter>>>;
  processFollowModuleReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  processFollowModuleReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  processFollowModuleReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  processFollowModuleReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  processFollowModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  processFollowModuleReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  processFollowModuleReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  processFollowModuleReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  processFollowModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  processFollowModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Followed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FollowModuleData = 'followModuleData',
  FollowTokenIdAssigned = 'followTokenIdAssigned',
  FollowerProfileId = 'followerProfileId',
  Id = 'id',
  IdOfProfileFollowed = 'idOfProfileFollowed',
  ProcessFollowModuleReturnData = 'processFollowModuleReturnData',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type GovernanceSet = {
  __typename?: 'GovernanceSet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  caller: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  newGovernance: Scalars['Bytes']['output'];
  prevGovernance: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type GovernanceSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GovernanceSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newGovernance?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newGovernance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_not?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GovernanceSet_Filter>>>;
  prevGovernance?: InputMaybe<Scalars['Bytes']['input']>;
  prevGovernance_contains?: InputMaybe<Scalars['Bytes']['input']>;
  prevGovernance_gt?: InputMaybe<Scalars['Bytes']['input']>;
  prevGovernance_gte?: InputMaybe<Scalars['Bytes']['input']>;
  prevGovernance_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  prevGovernance_lt?: InputMaybe<Scalars['Bytes']['input']>;
  prevGovernance_lte?: InputMaybe<Scalars['Bytes']['input']>;
  prevGovernance_not?: InputMaybe<Scalars['Bytes']['input']>;
  prevGovernance_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  prevGovernance_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum GovernanceSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Caller = 'caller',
  Id = 'id',
  NewGovernance = 'newGovernance',
  PrevGovernance = 'prevGovernance',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type HandleCreatedUsingCredits = {
  __typename?: 'HandleCreatedUsingCredits';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creator: Scalars['Bytes']['output'];
  handle: Scalars['String']['output'];
  handleId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type HandleCreatedUsingCredits_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleCreatedUsingCredits_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  handle?: InputMaybe<Scalars['String']['input']>;
  handleId?: InputMaybe<Scalars['BigInt']['input']>;
  handleId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  handleId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  handleId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  handleId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  handleId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  handleId_not?: InputMaybe<Scalars['BigInt']['input']>;
  handleId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  handle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_gt?: InputMaybe<Scalars['String']['input']>;
  handle_gte?: InputMaybe<Scalars['String']['input']>;
  handle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_lt?: InputMaybe<Scalars['String']['input']>;
  handle_lte?: InputMaybe<Scalars['String']['input']>;
  handle_not?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HandleCreatedUsingCredits_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum HandleCreatedUsingCredits_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Creator = 'creator',
  Handle = 'handle',
  HandleId = 'handleId',
  Id = 'id',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type HandleCreationPriceChanged = {
  __typename?: 'HandleCreationPriceChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPrice: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type HandleCreationPriceChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleCreationPriceChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPrice?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HandleCreationPriceChanged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum HandleCreationPriceChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPrice = 'newPrice',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type HandleGuardianResult = {
  __typename?: 'HandleGuardianResult';
  cooldownEndsOn?: Maybe<DateTime>;
  id: Scalars['Bytes']['output'];
};

export type HandleGuardianResult_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleGuardianResult_Filter>>>;
  cooldownEndsOn?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_?: InputMaybe<DateTime_Filter>;
  cooldownEndsOn_contains?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_ends_with?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_gt?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_gte?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cooldownEndsOn_lt?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_lte?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_not?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_not_contains?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cooldownEndsOn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_starts_with?: InputMaybe<Scalars['String']['input']>;
  cooldownEndsOn_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HandleGuardianResult_Filter>>>;
};

export enum HandleGuardianResult_OrderBy {
  CooldownEndsOn = 'cooldownEndsOn',
  CooldownEndsOnId = 'cooldownEndsOn__id',
  CooldownEndsOnValue = 'cooldownEndsOn__value',
  Id = 'id'
}

export type HandleInfo = {
  __typename?: 'HandleInfo';
  fullHandle: Scalars['String']['output'];
  guardian?: Maybe<HandleGuardianResult>;
  id: Scalars['Bytes']['output'];
  linkedTo?: Maybe<HandleLinkedTo>;
  localName: Scalars['String']['output'];
  namespace: Scalars['String']['output'];
  ownedBy?: Maybe<Scalars['Bytes']['output']>;
  ownedHandles?: Maybe<OwnedHandles>;
  suggestedFormatted?: Maybe<SuggestedFormattedHandle>;
};

export type HandleInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleInfo_Filter>>>;
  fullHandle?: InputMaybe<Scalars['String']['input']>;
  fullHandle_contains?: InputMaybe<Scalars['String']['input']>;
  fullHandle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullHandle_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullHandle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullHandle_gt?: InputMaybe<Scalars['String']['input']>;
  fullHandle_gte?: InputMaybe<Scalars['String']['input']>;
  fullHandle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullHandle_lt?: InputMaybe<Scalars['String']['input']>;
  fullHandle_lte?: InputMaybe<Scalars['String']['input']>;
  fullHandle_not?: InputMaybe<Scalars['String']['input']>;
  fullHandle_not_contains?: InputMaybe<Scalars['String']['input']>;
  fullHandle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullHandle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullHandle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullHandle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullHandle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullHandle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullHandle_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullHandle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian?: InputMaybe<Scalars['String']['input']>;
  guardian_?: InputMaybe<HandleGuardianResult_Filter>;
  guardian_contains?: InputMaybe<Scalars['String']['input']>;
  guardian_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_ends_with?: InputMaybe<Scalars['String']['input']>;
  guardian_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_gt?: InputMaybe<Scalars['String']['input']>;
  guardian_gte?: InputMaybe<Scalars['String']['input']>;
  guardian_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guardian_lt?: InputMaybe<Scalars['String']['input']>;
  guardian_lte?: InputMaybe<Scalars['String']['input']>;
  guardian_not?: InputMaybe<Scalars['String']['input']>;
  guardian_not_contains?: InputMaybe<Scalars['String']['input']>;
  guardian_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  guardian_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guardian_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  guardian_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_starts_with?: InputMaybe<Scalars['String']['input']>;
  guardian_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  linkedTo?: InputMaybe<Scalars['String']['input']>;
  linkedTo_?: InputMaybe<HandleLinkedTo_Filter>;
  linkedTo_contains?: InputMaybe<Scalars['String']['input']>;
  linkedTo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedTo_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedTo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedTo_gt?: InputMaybe<Scalars['String']['input']>;
  linkedTo_gte?: InputMaybe<Scalars['String']['input']>;
  linkedTo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedTo_lt?: InputMaybe<Scalars['String']['input']>;
  linkedTo_lte?: InputMaybe<Scalars['String']['input']>;
  linkedTo_not?: InputMaybe<Scalars['String']['input']>;
  linkedTo_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedTo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedTo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedTo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedTo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedTo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedTo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedTo_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedTo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localName?: InputMaybe<Scalars['String']['input']>;
  localName_contains?: InputMaybe<Scalars['String']['input']>;
  localName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_ends_with?: InputMaybe<Scalars['String']['input']>;
  localName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_gt?: InputMaybe<Scalars['String']['input']>;
  localName_gte?: InputMaybe<Scalars['String']['input']>;
  localName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  localName_lt?: InputMaybe<Scalars['String']['input']>;
  localName_lte?: InputMaybe<Scalars['String']['input']>;
  localName_not?: InputMaybe<Scalars['String']['input']>;
  localName_not_contains?: InputMaybe<Scalars['String']['input']>;
  localName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  localName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  localName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  localName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_starts_with?: InputMaybe<Scalars['String']['input']>;
  localName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  namespace_contains?: InputMaybe<Scalars['String']['input']>;
  namespace_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_ends_with?: InputMaybe<Scalars['String']['input']>;
  namespace_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_gt?: InputMaybe<Scalars['String']['input']>;
  namespace_gte?: InputMaybe<Scalars['String']['input']>;
  namespace_in?: InputMaybe<Array<Scalars['String']['input']>>;
  namespace_lt?: InputMaybe<Scalars['String']['input']>;
  namespace_lte?: InputMaybe<Scalars['String']['input']>;
  namespace_not?: InputMaybe<Scalars['String']['input']>;
  namespace_not_contains?: InputMaybe<Scalars['String']['input']>;
  namespace_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  namespace_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  namespace_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  namespace_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_starts_with?: InputMaybe<Scalars['String']['input']>;
  namespace_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<HandleInfo_Filter>>>;
  ownedBy?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ownedBy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_not?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ownedHandles?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_?: InputMaybe<OwnedHandles_Filter>;
  ownedHandles_contains?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_gt?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_gte?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownedHandles_lt?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_lte?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_not?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ownedHandles_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownedHandles_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_?: InputMaybe<SuggestedFormattedHandle_Filter>;
  suggestedFormatted_contains?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_ends_with?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_gt?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_gte?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_in?: InputMaybe<Array<Scalars['String']['input']>>;
  suggestedFormatted_lt?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_lte?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_not?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_not_contains?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  suggestedFormatted_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_starts_with?: InputMaybe<Scalars['String']['input']>;
  suggestedFormatted_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum HandleInfo_OrderBy {
  FullHandle = 'fullHandle',
  Guardian = 'guardian',
  GuardianId = 'guardian__id',
  Id = 'id',
  LinkedTo = 'linkedTo',
  LinkedToContract = 'linkedTo__contract',
  LinkedToId = 'linkedTo__id',
  LinkedToNftTokenId = 'linkedTo__nftTokenId',
  LocalName = 'localName',
  Namespace = 'namespace',
  OwnedBy = 'ownedBy',
  OwnedHandles = 'ownedHandles',
  OwnedHandlesId = 'ownedHandles__id',
  SuggestedFormatted = 'suggestedFormatted',
  SuggestedFormattedFull = 'suggestedFormatted__full',
  SuggestedFormattedId = 'suggestedFormatted__id',
  SuggestedFormattedLocalName = 'suggestedFormatted__localName'
}

export type HandleLengthMinChanged = {
  __typename?: 'HandleLengthMinChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newMinLength: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type HandleLengthMinChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleLengthMinChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newMinLength?: InputMaybe<Scalars['Int']['input']>;
  newMinLength_gt?: InputMaybe<Scalars['Int']['input']>;
  newMinLength_gte?: InputMaybe<Scalars['Int']['input']>;
  newMinLength_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  newMinLength_lt?: InputMaybe<Scalars['Int']['input']>;
  newMinLength_lte?: InputMaybe<Scalars['Int']['input']>;
  newMinLength_not?: InputMaybe<Scalars['Int']['input']>;
  newMinLength_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HandleLengthMinChanged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum HandleLengthMinChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewMinLength = 'newMinLength',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type HandleLinked = {
  __typename?: 'HandleLinked';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  handle_collection: Scalars['Bytes']['output'];
  handle_id: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token_collection: Scalars['Bytes']['output'];
  token_id: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type HandleLinkedTo = {
  __typename?: 'HandleLinkedTo';
  contract: Scalars['Bytes']['output'];
  handleInfo: HandleInfo;
  id: Scalars['Bytes']['output'];
  nftTokenId: Scalars['BigInt']['output'];
};

export type HandleLinkedTo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleLinkedTo_Filter>>>;
  contract?: InputMaybe<Scalars['Bytes']['input']>;
  contract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  contract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  contract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  contract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  contract_not?: InputMaybe<Scalars['Bytes']['input']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  handleInfo?: InputMaybe<Scalars['String']['input']>;
  handleInfo_?: InputMaybe<HandleInfo_Filter>;
  handleInfo_contains?: InputMaybe<Scalars['String']['input']>;
  handleInfo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handleInfo_ends_with?: InputMaybe<Scalars['String']['input']>;
  handleInfo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handleInfo_gt?: InputMaybe<Scalars['String']['input']>;
  handleInfo_gte?: InputMaybe<Scalars['String']['input']>;
  handleInfo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handleInfo_lt?: InputMaybe<Scalars['String']['input']>;
  handleInfo_lte?: InputMaybe<Scalars['String']['input']>;
  handleInfo_not?: InputMaybe<Scalars['String']['input']>;
  handleInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  handleInfo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handleInfo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handleInfo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handleInfo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handleInfo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  handleInfo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handleInfo_starts_with?: InputMaybe<Scalars['String']['input']>;
  handleInfo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  nftTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nftTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nftTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nftTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nftTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  nftTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HandleLinkedTo_Filter>>>;
};

export enum HandleLinkedTo_OrderBy {
  Contract = 'contract',
  HandleInfo = 'handleInfo',
  HandleInfoFullHandle = 'handleInfo__fullHandle',
  HandleInfoId = 'handleInfo__id',
  HandleInfoLocalName = 'handleInfo__localName',
  HandleInfoNamespace = 'handleInfo__namespace',
  HandleInfoOwnedBy = 'handleInfo__ownedBy',
  Id = 'id',
  NftTokenId = 'nftTokenId'
}

export type HandleLinked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleLinked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  handle_collection?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_contains?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_gt?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_gte?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  handle_collection_lt?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_lte?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_not?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  handle_id?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  handle_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HandleLinked_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token_collection?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_collection_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_id?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum HandleLinked_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  HandleCollection = 'handle_collection',
  HandleId = 'handle_id',
  Id = 'id',
  Timestamp = 'timestamp',
  TokenCollection = 'token_collection',
  TokenId = 'token_id',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type HandleMinted = {
  __typename?: 'HandleMinted';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  handle: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  namespace: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type HandleMinted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleMinted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  handle?: InputMaybe<Scalars['String']['input']>;
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  handle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_gt?: InputMaybe<Scalars['String']['input']>;
  handle_gte?: InputMaybe<Scalars['String']['input']>;
  handle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_lt?: InputMaybe<Scalars['String']['input']>;
  handle_lte?: InputMaybe<Scalars['String']['input']>;
  handle_not?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  namespace?: InputMaybe<Scalars['String']['input']>;
  namespace_contains?: InputMaybe<Scalars['String']['input']>;
  namespace_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_ends_with?: InputMaybe<Scalars['String']['input']>;
  namespace_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_gt?: InputMaybe<Scalars['String']['input']>;
  namespace_gte?: InputMaybe<Scalars['String']['input']>;
  namespace_in?: InputMaybe<Array<Scalars['String']['input']>>;
  namespace_lt?: InputMaybe<Scalars['String']['input']>;
  namespace_lte?: InputMaybe<Scalars['String']['input']>;
  namespace_not?: InputMaybe<Scalars['String']['input']>;
  namespace_not_contains?: InputMaybe<Scalars['String']['input']>;
  namespace_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  namespace_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  namespace_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  namespace_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  namespace_starts_with?: InputMaybe<Scalars['String']['input']>;
  namespace_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<HandleMinted_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum HandleMinted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Handle = 'handle',
  Id = 'id',
  Namespace = 'namespace',
  Timestamp = 'timestamp',
  To = 'to',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type HandleToAddress = {
  __typename?: 'HandleToAddress';
  address: Scalars['Bytes']['output'];
  handle: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
};

export type HandleToAddress_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<HandleToAddress_Filter>>>;
  handle?: InputMaybe<Scalars['String']['input']>;
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  handle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_gt?: InputMaybe<Scalars['String']['input']>;
  handle_gte?: InputMaybe<Scalars['String']['input']>;
  handle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_lt?: InputMaybe<Scalars['String']['input']>;
  handle_lte?: InputMaybe<Scalars['String']['input']>;
  handle_not?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HandleToAddress_Filter>>>;
};

export enum HandleToAddress_OrderBy {
  Address = 'address',
  Handle = 'handle',
  Id = 'id'
}

export type HandleUnlinked = {
  __typename?: 'HandleUnlinked';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  handle_collection: Scalars['Bytes']['output'];
  handle_id: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  token_collection: Scalars['Bytes']['output'];
  token_id: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type HandleUnlinked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HandleUnlinked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  handle_collection?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_contains?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_gt?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_gte?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  handle_collection_lt?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_lte?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_not?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  handle_collection_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  handle_id?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  handle_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  handle_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HandleUnlinked_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token_collection?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_collection_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_collection_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_id?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  token_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum HandleUnlinked_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  HandleCollection = 'handle_collection',
  HandleId = 'handle_id',
  Id = 'id',
  Timestamp = 'timestamp',
  TokenCollection = 'token_collection',
  TokenId = 'token_id',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  uri: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type ImageSet = {
  __typename?: 'ImageSet';
  id: Scalars['String']['output'];
  optimized?: Maybe<Image>;
  raw?: Maybe<Scalars['String']['output']>;
  transformed?: Maybe<Image>;
};

export type ImageSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ImageSet_Filter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized?: InputMaybe<Scalars['String']['input']>;
  optimized_?: InputMaybe<Image_Filter>;
  optimized_contains?: InputMaybe<Scalars['String']['input']>;
  optimized_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_ends_with?: InputMaybe<Scalars['String']['input']>;
  optimized_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_gt?: InputMaybe<Scalars['String']['input']>;
  optimized_gte?: InputMaybe<Scalars['String']['input']>;
  optimized_in?: InputMaybe<Array<Scalars['String']['input']>>;
  optimized_lt?: InputMaybe<Scalars['String']['input']>;
  optimized_lte?: InputMaybe<Scalars['String']['input']>;
  optimized_not?: InputMaybe<Scalars['String']['input']>;
  optimized_not_contains?: InputMaybe<Scalars['String']['input']>;
  optimized_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  optimized_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  optimized_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  optimized_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  optimized_starts_with?: InputMaybe<Scalars['String']['input']>;
  optimized_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ImageSet_Filter>>>;
  raw?: InputMaybe<Scalars['String']['input']>;
  raw_contains?: InputMaybe<Scalars['String']['input']>;
  raw_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_ends_with?: InputMaybe<Scalars['String']['input']>;
  raw_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_gt?: InputMaybe<Scalars['String']['input']>;
  raw_gte?: InputMaybe<Scalars['String']['input']>;
  raw_in?: InputMaybe<Array<Scalars['String']['input']>>;
  raw_lt?: InputMaybe<Scalars['String']['input']>;
  raw_lte?: InputMaybe<Scalars['String']['input']>;
  raw_not?: InputMaybe<Scalars['String']['input']>;
  raw_not_contains?: InputMaybe<Scalars['String']['input']>;
  raw_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  raw_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  raw_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  raw_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  raw_starts_with?: InputMaybe<Scalars['String']['input']>;
  raw_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed?: InputMaybe<Scalars['String']['input']>;
  transformed_?: InputMaybe<Image_Filter>;
  transformed_contains?: InputMaybe<Scalars['String']['input']>;
  transformed_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_ends_with?: InputMaybe<Scalars['String']['input']>;
  transformed_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_gt?: InputMaybe<Scalars['String']['input']>;
  transformed_gte?: InputMaybe<Scalars['String']['input']>;
  transformed_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transformed_lt?: InputMaybe<Scalars['String']['input']>;
  transformed_lte?: InputMaybe<Scalars['String']['input']>;
  transformed_not?: InputMaybe<Scalars['String']['input']>;
  transformed_not_contains?: InputMaybe<Scalars['String']['input']>;
  transformed_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transformed_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transformed_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transformed_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transformed_starts_with?: InputMaybe<Scalars['String']['input']>;
  transformed_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ImageSet_OrderBy {
  Id = 'id',
  Optimized = 'optimized',
  OptimizedHeight = 'optimized__height',
  OptimizedId = 'optimized__id',
  OptimizedMimeType = 'optimized__mimeType',
  OptimizedUri = 'optimized__uri',
  OptimizedWidth = 'optimized__width',
  Raw = 'raw',
  Transformed = 'transformed',
  TransformedHeight = 'transformed__height',
  TransformedId = 'transformed__id',
  TransformedMimeType = 'transformed__mimeType',
  TransformedUri = 'transformed__uri',
  TransformedWidth = 'transformed__width'
}

export type Image_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Image_Filter>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  mimeType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_gt?: InputMaybe<Scalars['String']['input']>;
  mimeType_gte?: InputMaybe<Scalars['String']['input']>;
  mimeType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mimeType_lt?: InputMaybe<Scalars['String']['input']>;
  mimeType_lte?: InputMaybe<Scalars['String']['input']>;
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Image_Filter>>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum Image_OrderBy {
  Height = 'height',
  Id = 'id',
  MimeType = 'mimeType',
  Uri = 'uri',
  Width = 'width'
}

export type LegacyCollectNftDeployed = {
  __typename?: 'LegacyCollectNFTDeployed';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  collectNFT: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  profileId: Scalars['BigInt']['output'];
  pubId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LegacyCollectNftDeployed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LegacyCollectNftDeployed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectNFT?: InputMaybe<Scalars['Bytes']['input']>;
  collectNFT_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collectNFT_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collectNFT_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collectNFT_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collectNFT_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collectNFT_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collectNFT_not?: InputMaybe<Scalars['Bytes']['input']>;
  collectNFT_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collectNFT_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LegacyCollectNftDeployed_Filter>>>;
  profileId?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LegacyCollectNftDeployed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CollectNft = 'collectNFT',
  Id = 'id',
  ProfileId = 'profileId',
  PubId = 'pubId',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Lens = {
  __typename?: 'Lens';
  appId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<ImageSet>;
  locale?: Maybe<Scalars['String']['output']>;
  mainContentFocus?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type LensHubApproval = {
  __typename?: 'LensHubApproval';
  approved: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LensHubApprovalForAll = {
  __typename?: 'LensHubApprovalForAll';
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LensHubApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LensHubApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LensHubApprovalForAll_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LensHubApprovalForAll_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Operator = 'operator',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type LensHubApproval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LensHubApproval_Filter>>>;
  approved?: InputMaybe<Scalars['Bytes']['input']>;
  approved_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  approved_lt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_lte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LensHubApproval_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LensHubApproval_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Owner = 'owner',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type LensHubBatchMetadataUpdate = {
  __typename?: 'LensHubBatchMetadataUpdate';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fromTokenId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  toTokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LensHubBatchMetadataUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LensHubBatchMetadataUpdate_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fromTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  fromTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LensHubBatchMetadataUpdate_Filter>>>;
  toTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  toTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LensHubBatchMetadataUpdate_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FromTokenId = 'fromTokenId',
  Id = 'id',
  ToTokenId = 'toTokenId',
  TransactionHash = 'transactionHash'
}

export type LensHubTokenGuardianStateChanged = {
  __typename?: 'LensHubTokenGuardianStateChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  tokenGuardianDisablingTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  wallet: Scalars['Bytes']['output'];
};

export type LensHubTokenGuardianStateChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LensHubTokenGuardianStateChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LensHubTokenGuardianStateChanged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenGuardianDisablingTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenGuardianDisablingTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  wallet?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_gt?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_gte?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  wallet_lt?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_lte?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LensHubTokenGuardianStateChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Enabled = 'enabled',
  Id = 'id',
  Timestamp = 'timestamp',
  TokenGuardianDisablingTimestamp = 'tokenGuardianDisablingTimestamp',
  TransactionHash = 'transactionHash',
  Wallet = 'wallet'
}

export type LensHubTransfer = {
  __typename?: 'LensHubTransfer';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LensHubTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LensHubTransfer_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LensHubTransfer_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LensHubTransfer_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  From = 'from',
  Id = 'id',
  To = 'to',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type LensUpgradeVersion = {
  __typename?: 'LensUpgradeVersion';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  gitCommit: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  implementation: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['String']['output'];
};

export type LensUpgradeVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LensUpgradeVersion_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gitCommit?: InputMaybe<Scalars['Bytes']['input']>;
  gitCommit_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gitCommit_gt?: InputMaybe<Scalars['Bytes']['input']>;
  gitCommit_gte?: InputMaybe<Scalars['Bytes']['input']>;
  gitCommit_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gitCommit_lt?: InputMaybe<Scalars['Bytes']['input']>;
  gitCommit_lte?: InputMaybe<Scalars['Bytes']['input']>;
  gitCommit_not?: InputMaybe<Scalars['Bytes']['input']>;
  gitCommit_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gitCommit_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  implementation?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_contains?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_gt?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_gte?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  implementation_lt?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_lte?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LensUpgradeVersion_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum LensUpgradeVersion_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  GitCommit = 'gitCommit',
  Id = 'id',
  Implementation = 'implementation',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type Lens_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Lens_Filter>>>;
  appId?: InputMaybe<Scalars['String']['input']>;
  appId_contains?: InputMaybe<Scalars['String']['input']>;
  appId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_ends_with?: InputMaybe<Scalars['String']['input']>;
  appId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_gt?: InputMaybe<Scalars['String']['input']>;
  appId_gte?: InputMaybe<Scalars['String']['input']>;
  appId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appId_lt?: InputMaybe<Scalars['String']['input']>;
  appId_lte?: InputMaybe<Scalars['String']['input']>;
  appId_not?: InputMaybe<Scalars['String']['input']>;
  appId_not_contains?: InputMaybe<Scalars['String']['input']>;
  appId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_starts_with?: InputMaybe<Scalars['String']['input']>;
  appId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_gt?: InputMaybe<Scalars['String']['input']>;
  content_gte?: InputMaybe<Scalars['String']['input']>;
  content_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_lt?: InputMaybe<Scalars['String']['input']>;
  content_lte?: InputMaybe<Scalars['String']['input']>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_?: InputMaybe<ImageSet_Filter>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_contains?: InputMaybe<Scalars['String']['input']>;
  locale_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_ends_with?: InputMaybe<Scalars['String']['input']>;
  locale_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_gt?: InputMaybe<Scalars['String']['input']>;
  locale_gte?: InputMaybe<Scalars['String']['input']>;
  locale_in?: InputMaybe<Array<Scalars['String']['input']>>;
  locale_lt?: InputMaybe<Scalars['String']['input']>;
  locale_lte?: InputMaybe<Scalars['String']['input']>;
  locale_not?: InputMaybe<Scalars['String']['input']>;
  locale_not_contains?: InputMaybe<Scalars['String']['input']>;
  locale_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  locale_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  locale_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  locale_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_starts_with?: InputMaybe<Scalars['String']['input']>;
  locale_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_contains?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_ends_with?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_gt?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_gte?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mainContentFocus_lt?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_lte?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_contains?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mainContentFocus_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_starts_with?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Lens_Filter>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Lens_OrderBy {
  AppId = 'appId',
  Content = 'content',
  Id = 'id',
  Image = 'image',
  ImageId = 'image__id',
  ImageRaw = 'image__raw',
  Locale = 'locale',
  MainContentFocus = 'mainContentFocus',
  Title = 'title'
}

export type MarketplaceMetadata = {
  __typename?: 'MarketplaceMetadata';
  animationUrl?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalURL?: Maybe<Scalars['Bytes']['output']>;
  id: Scalars['Bytes']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MarketplaceMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketplaceMetadata_Filter>>>;
  animationUrl?: InputMaybe<Scalars['String']['input']>;
  animationUrl_contains?: InputMaybe<Scalars['String']['input']>;
  animationUrl_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  animationUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  animationUrl_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  animationUrl_gt?: InputMaybe<Scalars['String']['input']>;
  animationUrl_gte?: InputMaybe<Scalars['String']['input']>;
  animationUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  animationUrl_lt?: InputMaybe<Scalars['String']['input']>;
  animationUrl_lte?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  animationUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  animationUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  animationUrl_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  externalURL?: InputMaybe<Scalars['Bytes']['input']>;
  externalURL_contains?: InputMaybe<Scalars['Bytes']['input']>;
  externalURL_gt?: InputMaybe<Scalars['Bytes']['input']>;
  externalURL_gte?: InputMaybe<Scalars['Bytes']['input']>;
  externalURL_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  externalURL_lt?: InputMaybe<Scalars['Bytes']['input']>;
  externalURL_lte?: InputMaybe<Scalars['Bytes']['input']>;
  externalURL_not?: InputMaybe<Scalars['Bytes']['input']>;
  externalURL_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  externalURL_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<MarketplaceMetadata_Filter>>>;
};

export enum MarketplaceMetadata_OrderBy {
  AnimationUrl = 'animationUrl',
  Description = 'description',
  ExternalUrl = 'externalURL',
  Id = 'id',
  Image = 'image',
  Name = 'name'
}

export type MetadataAttribute = {
  __typename?: 'MetadataAttribute';
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  profileMetadata?: Maybe<ProfileMetadata>;
  type: MetadataAttributeType;
  value: Scalars['String']['output'];
};

export enum MetadataAttributeType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Json = 'JSON',
  Number = 'NUMBER',
  String = 'String'
}

export type MetadataAttribute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MetadataAttribute_Filter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<MetadataAttribute_Filter>>>;
  profileMetadata?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_?: InputMaybe<ProfileMetadata_Filter>;
  profileMetadata_contains?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_gt?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_gte?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profileMetadata_lt?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_lte?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_not?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profileMetadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  profileMetadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MetadataAttributeType>;
  type_in?: InputMaybe<Array<MetadataAttributeType>>;
  type_not?: InputMaybe<MetadataAttributeType>;
  type_not_in?: InputMaybe<Array<MetadataAttributeType>>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_gt?: InputMaybe<Scalars['String']['input']>;
  value_gte?: InputMaybe<Scalars['String']['input']>;
  value_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_lt?: InputMaybe<Scalars['String']['input']>;
  value_lte?: InputMaybe<Scalars['String']['input']>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MetadataAttribute_OrderBy {
  Id = 'id',
  Key = 'key',
  ProfileMetadata = 'profileMetadata',
  ProfileMetadataAppId = 'profileMetadata__appId',
  ProfileMetadataBio = 'profileMetadata__bio',
  ProfileMetadataDisplayName = 'profileMetadata__displayName',
  ProfileMetadataId = 'profileMetadata__id',
  ProfileMetadataRawUri = 'profileMetadata__rawURI',
  ProfileMetadataSchema = 'profileMetadata__schema',
  Type = 'type',
  Value = 'value'
}

export type MirrorCreated = {
  __typename?: 'MirrorCreated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  mirrorParams_metadataURI: Scalars['String']['output'];
  mirrorParams_pointedProfileId: Scalars['BigInt']['output'];
  mirrorParams_pointedPubId: Scalars['BigInt']['output'];
  mirrorParams_profileId: Scalars['BigInt']['output'];
  mirrorParams_referenceModuleData: Scalars['Bytes']['output'];
  mirrorParams_referrerProfileIds: Array<Scalars['BigInt']['output']>;
  mirrorParams_referrerPubIds: Array<Scalars['BigInt']['output']>;
  pubId: Scalars['BigInt']['output'];
  referenceModuleReturnData: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MirrorCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MirrorCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  mirrorParams_metadataURI?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mirrorParams_metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mirrorParams_metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mirrorParams_pointedProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_pointedProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_pointedPubId?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedPubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedPubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedPubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_pointedPubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedPubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedPubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_pointedPubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_profileId?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  mirrorParams_profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referenceModuleData?: InputMaybe<Scalars['Bytes']['input']>;
  mirrorParams_referenceModuleData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  mirrorParams_referenceModuleData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  mirrorParams_referenceModuleData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  mirrorParams_referenceModuleData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  mirrorParams_referenceModuleData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  mirrorParams_referenceModuleData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  mirrorParams_referenceModuleData_not?: InputMaybe<Scalars['Bytes']['input']>;
  mirrorParams_referenceModuleData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  mirrorParams_referenceModuleData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  mirrorParams_referrerProfileIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerProfileIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerProfileIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerProfileIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerProfileIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerProfileIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerPubIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerPubIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerPubIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerPubIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerPubIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mirrorParams_referrerPubIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MirrorCreated_Filter>>>;
  pubId?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referenceModuleReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  referenceModuleReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MirrorCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MirrorParamsMetadataUri = 'mirrorParams_metadataURI',
  MirrorParamsPointedProfileId = 'mirrorParams_pointedProfileId',
  MirrorParamsPointedPubId = 'mirrorParams_pointedPubId',
  MirrorParamsProfileId = 'mirrorParams_profileId',
  MirrorParamsReferenceModuleData = 'mirrorParams_referenceModuleData',
  MirrorParamsReferrerProfileIds = 'mirrorParams_referrerProfileIds',
  MirrorParamsReferrerPubIds = 'mirrorParams_referrerPubIds',
  PubId = 'pubId',
  ReferenceModuleReturnData = 'referenceModuleReturnData',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type NetworkAddress = {
  __typename?: 'NetworkAddress';
  address: Scalars['Bytes']['output'];
  chainId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Bytes']['output'];
};

export type NetworkAddress_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<NetworkAddress_Filter>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NetworkAddress_Filter>>>;
};

export enum NetworkAddress_OrderBy {
  Address = 'address',
  ChainId = 'chainId',
  Id = 'id'
}

export enum NftContractType {
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type NonceUpdated = {
  __typename?: 'NonceUpdated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  signer: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type NonceUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NonceUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NonceUpdated_Filter>>>;
  signer?: InputMaybe<Scalars['Bytes']['input']>;
  signer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  signer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  signer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  signer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  signer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  signer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  signer_not?: InputMaybe<Scalars['Bytes']['input']>;
  signer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  signer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum NonceUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Nonce = 'nonce',
  Signer = 'signer',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnedHandles = {
  __typename?: 'OwnedHandles';
  id: Scalars['Bytes']['output'];
  items?: Maybe<Array<HandleInfo>>;
};


export type OwnedHandlesItemsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HandleInfo_Filter>;
};

export type OwnedHandles_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnedHandles_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  items_?: InputMaybe<HandleInfo_Filter>;
  or?: InputMaybe<Array<InputMaybe<OwnedHandles_Filter>>>;
};

export enum OwnedHandles_OrderBy {
  Id = 'id',
  Items = 'items'
}

export type Post = {
  __typename?: 'Post';
  accessControl: Array<Scalars['Bytes']['output']>;
  by: Profile;
  createdAt: Scalars['String']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['String']['output'];
  isDiscarded?: Maybe<Scalars['Boolean']['output']>;
  isEncrypted?: Maybe<Scalars['Boolean']['output']>;
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<PublicationMetadata>;
  openActionModules?: Maybe<Array<Scalars['String']['output']>>;
  profilesMentioned?: Maybe<Array<Scalars['String']['output']>>;
  publication: Post;
  publicationTypes: PublicationType;
  publishedOn?: Maybe<Scalars['String']['output']>;
  shareFromProfileId?: Maybe<Scalars['Bytes']['output']>;
  stats?: Maybe<PublicationStats>;
  txHash: Scalars['Bytes']['output'];
};

export type PostCreated = {
  __typename?: 'PostCreated';
  actionModulesInitReturnDatas: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  postParams_actionModules: Array<Scalars['Bytes']['output']>;
  postParams_actionModulesInitDatas: Array<Scalars['Bytes']['output']>;
  postParams_contentURI: Scalars['String']['output'];
  postParams_profileId: Scalars['BigInt']['output'];
  postParams_referenceModule: Scalars['Bytes']['output'];
  postParams_referenceModuleInitData: Scalars['Bytes']['output'];
  pubId: Scalars['BigInt']['output'];
  referenceModuleInitReturnData: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PostCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actionModulesInitReturnDatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PostCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PostCreated_Filter>>>;
  postParams_actionModules?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModulesInitDatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModulesInitDatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModulesInitDatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModulesInitDatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModulesInitDatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModulesInitDatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModules_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModules_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModules_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModules_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_actionModules_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_contentURI?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_contains?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_gt?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_gte?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  postParams_contentURI_lt?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_lte?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_not?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  postParams_contentURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  postParams_contentURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  postParams_profileId?: InputMaybe<Scalars['BigInt']['input']>;
  postParams_profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  postParams_profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  postParams_profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  postParams_profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  postParams_profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  postParams_profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  postParams_profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  postParams_referenceModule?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_referenceModuleInitData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData_not?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModuleInitData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_referenceModule_contains?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModule_gt?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModule_gte?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModule_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  postParams_referenceModule_lt?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModule_lte?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModule_not?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModule_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  postParams_referenceModule_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pubId?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referenceModuleInitReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  referenceModuleInitReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PostCreated_OrderBy {
  ActionModulesInitReturnDatas = 'actionModulesInitReturnDatas',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  PostParamsActionModules = 'postParams_actionModules',
  PostParamsActionModulesInitDatas = 'postParams_actionModulesInitDatas',
  PostParamsContentUri = 'postParams_contentURI',
  PostParamsProfileId = 'postParams_profileId',
  PostParamsReferenceModule = 'postParams_referenceModule',
  PostParamsReferenceModuleInitData = 'postParams_referenceModuleInitData',
  PubId = 'pubId',
  ReferenceModuleInitReturnData = 'referenceModuleInitReturnData',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type PostMetadata = {
  __typename?: 'PostMetadata';
  animation_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  external_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lens?: Maybe<Lens>;
  name?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<Scalars['String']['output']>;
};

export type PostMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PostMetadata_Filter>>>;
  animation_url?: InputMaybe<Scalars['String']['input']>;
  animation_url_contains?: InputMaybe<Scalars['String']['input']>;
  animation_url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  animation_url_ends_with?: InputMaybe<Scalars['String']['input']>;
  animation_url_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  animation_url_gt?: InputMaybe<Scalars['String']['input']>;
  animation_url_gte?: InputMaybe<Scalars['String']['input']>;
  animation_url_in?: InputMaybe<Array<Scalars['String']['input']>>;
  animation_url_lt?: InputMaybe<Scalars['String']['input']>;
  animation_url_lte?: InputMaybe<Scalars['String']['input']>;
  animation_url_not?: InputMaybe<Scalars['String']['input']>;
  animation_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  animation_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  animation_url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  animation_url_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  animation_url_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  animation_url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  animation_url_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  animation_url_starts_with?: InputMaybe<Scalars['String']['input']>;
  animation_url_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url?: InputMaybe<Scalars['String']['input']>;
  external_url_contains?: InputMaybe<Scalars['String']['input']>;
  external_url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_ends_with?: InputMaybe<Scalars['String']['input']>;
  external_url_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_gt?: InputMaybe<Scalars['String']['input']>;
  external_url_gte?: InputMaybe<Scalars['String']['input']>;
  external_url_in?: InputMaybe<Array<Scalars['String']['input']>>;
  external_url_lt?: InputMaybe<Scalars['String']['input']>;
  external_url_lte?: InputMaybe<Scalars['String']['input']>;
  external_url_not?: InputMaybe<Scalars['String']['input']>;
  external_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  external_url_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  external_url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  external_url_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_starts_with?: InputMaybe<Scalars['String']['input']>;
  external_url_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lens?: InputMaybe<Scalars['String']['input']>;
  lens_?: InputMaybe<Lens_Filter>;
  lens_contains?: InputMaybe<Scalars['String']['input']>;
  lens_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lens_ends_with?: InputMaybe<Scalars['String']['input']>;
  lens_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lens_gt?: InputMaybe<Scalars['String']['input']>;
  lens_gte?: InputMaybe<Scalars['String']['input']>;
  lens_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lens_lt?: InputMaybe<Scalars['String']['input']>;
  lens_lte?: InputMaybe<Scalars['String']['input']>;
  lens_not?: InputMaybe<Scalars['String']['input']>;
  lens_not_contains?: InputMaybe<Scalars['String']['input']>;
  lens_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lens_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lens_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lens_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lens_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lens_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lens_starts_with?: InputMaybe<Scalars['String']['input']>;
  lens_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<PostMetadata_Filter>>>;
  schema?: InputMaybe<Scalars['String']['input']>;
  schema_contains?: InputMaybe<Scalars['String']['input']>;
  schema_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_ends_with?: InputMaybe<Scalars['String']['input']>;
  schema_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_gt?: InputMaybe<Scalars['String']['input']>;
  schema_gte?: InputMaybe<Scalars['String']['input']>;
  schema_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schema_lt?: InputMaybe<Scalars['String']['input']>;
  schema_lte?: InputMaybe<Scalars['String']['input']>;
  schema_not?: InputMaybe<Scalars['String']['input']>;
  schema_not_contains?: InputMaybe<Scalars['String']['input']>;
  schema_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  schema_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schema_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  schema_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_starts_with?: InputMaybe<Scalars['String']['input']>;
  schema_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PostMetadata_OrderBy {
  AnimationUrl = 'animation_url',
  Description = 'description',
  ExternalUrl = 'external_url',
  Id = 'id',
  Lens = 'lens',
  LensAppId = 'lens__appId',
  LensContent = 'lens__content',
  LensId = 'lens__id',
  LensLocale = 'lens__locale',
  LensMainContentFocus = 'lens__mainContentFocus',
  LensTitle = 'lens__title',
  Name = 'name',
  Schema = 'schema'
}

export type Post_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accessControl?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accessControl_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accessControl_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accessControl_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accessControl_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accessControl_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Post_Filter>>>;
  by?: InputMaybe<Scalars['String']['input']>;
  by_?: InputMaybe<Profile_Filter>;
  by_contains?: InputMaybe<Scalars['String']['input']>;
  by_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  by_ends_with?: InputMaybe<Scalars['String']['input']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  by_gt?: InputMaybe<Scalars['String']['input']>;
  by_gte?: InputMaybe<Scalars['String']['input']>;
  by_in?: InputMaybe<Array<Scalars['String']['input']>>;
  by_lt?: InputMaybe<Scalars['String']['input']>;
  by_lte?: InputMaybe<Scalars['String']['input']>;
  by_not?: InputMaybe<Scalars['String']['input']>;
  by_not_contains?: InputMaybe<Scalars['String']['input']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  by_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  by_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  by_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  by_starts_with?: InputMaybe<Scalars['String']['input']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  createdAt_contains?: InputMaybe<Scalars['String']['input']>;
  createdAt_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_ends_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_gt?: InputMaybe<Scalars['String']['input']>;
  createdAt_gte?: InputMaybe<Scalars['String']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['String']['input']>;
  createdAt_lte?: InputMaybe<Scalars['String']['input']>;
  createdAt_not?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_contains?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  isDiscarded?: InputMaybe<Scalars['Boolean']['input']>;
  isDiscarded_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isDiscarded_not?: InputMaybe<Scalars['Boolean']['input']>;
  isDiscarded_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isEncrypted?: InputMaybe<Scalars['Boolean']['input']>;
  isEncrypted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isEncrypted_not?: InputMaybe<Scalars['Boolean']['input']>;
  isEncrypted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isHidden_not?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_?: InputMaybe<PublicationMetadata_Filter>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  openActionModules?: InputMaybe<Array<Scalars['String']['input']>>;
  openActionModules_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  openActionModules_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  openActionModules_not?: InputMaybe<Array<Scalars['String']['input']>>;
  openActionModules_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  openActionModules_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Post_Filter>>>;
  profilesMentioned?: InputMaybe<Array<Scalars['String']['input']>>;
  profilesMentioned_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  profilesMentioned_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  profilesMentioned_not?: InputMaybe<Array<Scalars['String']['input']>>;
  profilesMentioned_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  profilesMentioned_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  publication?: InputMaybe<Scalars['String']['input']>;
  publicationTypes?: InputMaybe<PublicationType>;
  publicationTypes_in?: InputMaybe<Array<PublicationType>>;
  publicationTypes_not?: InputMaybe<PublicationType>;
  publicationTypes_not_in?: InputMaybe<Array<PublicationType>>;
  publication_?: InputMaybe<Publication_Filter>;
  publication_contains?: InputMaybe<Scalars['String']['input']>;
  publication_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publication_ends_with?: InputMaybe<Scalars['String']['input']>;
  publication_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publication_gt?: InputMaybe<Scalars['String']['input']>;
  publication_gte?: InputMaybe<Scalars['String']['input']>;
  publication_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publication_lt?: InputMaybe<Scalars['String']['input']>;
  publication_lte?: InputMaybe<Scalars['String']['input']>;
  publication_not?: InputMaybe<Scalars['String']['input']>;
  publication_not_contains?: InputMaybe<Scalars['String']['input']>;
  publication_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publication_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publication_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publication_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publication_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publication_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publication_starts_with?: InputMaybe<Scalars['String']['input']>;
  publication_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishedOn?: InputMaybe<Scalars['String']['input']>;
  publishedOn_contains?: InputMaybe<Scalars['String']['input']>;
  publishedOn_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishedOn_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishedOn_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishedOn_gt?: InputMaybe<Scalars['String']['input']>;
  publishedOn_gte?: InputMaybe<Scalars['String']['input']>;
  publishedOn_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedOn_lt?: InputMaybe<Scalars['String']['input']>;
  publishedOn_lte?: InputMaybe<Scalars['String']['input']>;
  publishedOn_not?: InputMaybe<Scalars['String']['input']>;
  publishedOn_not_contains?: InputMaybe<Scalars['String']['input']>;
  publishedOn_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishedOn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishedOn_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishedOn_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedOn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedOn_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishedOn_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedOn_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  shareFromProfileId?: InputMaybe<Scalars['Bytes']['input']>;
  shareFromProfileId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  shareFromProfileId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  shareFromProfileId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  shareFromProfileId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  shareFromProfileId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  shareFromProfileId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  shareFromProfileId_not?: InputMaybe<Scalars['Bytes']['input']>;
  shareFromProfileId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  shareFromProfileId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  stats?: InputMaybe<Scalars['String']['input']>;
  stats_?: InputMaybe<PublicationStats_Filter>;
  stats_contains?: InputMaybe<Scalars['String']['input']>;
  stats_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_ends_with?: InputMaybe<Scalars['String']['input']>;
  stats_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_gt?: InputMaybe<Scalars['String']['input']>;
  stats_gte?: InputMaybe<Scalars['String']['input']>;
  stats_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stats_lt?: InputMaybe<Scalars['String']['input']>;
  stats_lte?: InputMaybe<Scalars['String']['input']>;
  stats_not?: InputMaybe<Scalars['String']['input']>;
  stats_not_contains?: InputMaybe<Scalars['String']['input']>;
  stats_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stats_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stats_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stats_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_starts_with?: InputMaybe<Scalars['String']['input']>;
  stats_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Post_OrderBy {
  AccessControl = 'accessControl',
  By = 'by',
  ByCreatedAt = 'by__createdAt',
  ByFollowModule = 'by__followModule',
  ById = 'by__id',
  ByOwnedBy = 'by__ownedBy',
  ByPeerToPeerRecommendedByMe = 'by__peerToPeerRecommendedByMe',
  CreatedAt = 'createdAt',
  From = 'from',
  Id = 'id',
  IsDiscarded = 'isDiscarded',
  IsEncrypted = 'isEncrypted',
  IsHidden = 'isHidden',
  Metadata = 'metadata',
  MetadataAppId = 'metadata__appId',
  MetadataContent = 'metadata__content',
  MetadataContentWarning = 'metadata__contentWarning',
  MetadataHideFromFeed = 'metadata__hideFromFeed',
  MetadataId = 'metadata__id',
  MetadataLocale = 'metadata__locale',
  MetadataMainContentFocus = 'metadata__mainContentFocus',
  MetadataRawUri = 'metadata__rawURI',
  MetadataSharingLink = 'metadata__sharingLink',
  MetadataTitle = 'metadata__title',
  OpenActionModules = 'openActionModules',
  ProfilesMentioned = 'profilesMentioned',
  Publication = 'publication',
  PublicationTypes = 'publicationTypes',
  PublicationId = 'publication__id',
  PublishedOn = 'publishedOn',
  ShareFromProfileId = 'shareFromProfileId',
  Stats = 'stats',
  StatsBookmarks = 'stats__bookmarks',
  StatsComments = 'stats__comments',
  StatsCountOpenActions = 'stats__countOpenActions',
  StatsId = 'stats__id',
  StatsMirrors = 'stats__mirrors',
  StatsQuotes = 'stats__quotes',
  StatsReactions = 'stats__reactions',
  TxHash = 'txHash'
}

export type Profile = {
  __typename?: 'Profile';
  createdAt: Scalars['String']['output'];
  followModule?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<HandleInfo>;
  id: Scalars['Bytes']['output'];
  metadata?: Maybe<ProfileMetadata>;
  operations?: Maybe<ProfileOperations>;
  ownedBy: Scalars['Bytes']['output'];
  peerToPeerRecommendedByMe?: Maybe<Scalars['Boolean']['output']>;
  profilesManaged?: Maybe<ProfilesManaged>;
  signInfo?: Maybe<UserSignedUp>;
  stats?: Maybe<Stats>;
};

export type ProfileCreated = {
  __typename?: 'ProfileCreated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creator: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  profileId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ProfileCreatedUsingCredits = {
  __typename?: 'ProfileCreatedUsingCredits';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  creator: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  profileId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ProfileCreatedUsingCredits_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileCreatedUsingCredits_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProfileCreatedUsingCredits_Filter>>>;
  profileId?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ProfileCreatedUsingCredits_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Creator = 'creator',
  Id = 'id',
  ProfileId = 'profileId',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type ProfileCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProfileCreated_Filter>>>;
  profileId?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ProfileCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Creator = 'creator',
  Id = 'id',
  ProfileId = 'profileId',
  Timestamp = 'timestamp',
  To = 'to',
  TransactionHash = 'transactionHash'
}

export type ProfileCreationPriceChanged = {
  __typename?: 'ProfileCreationPriceChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newPrice: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ProfileCreationPriceChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileCreationPriceChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newPrice?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  newPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProfileCreationPriceChanged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ProfileCreationPriceChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewPrice = 'newPrice',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type ProfileCreatorWhitelisted = {
  __typename?: 'ProfileCreatorWhitelisted';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  profileCreator: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  whitelisted: Scalars['Boolean']['output'];
};

export type ProfileCreatorWhitelisted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileCreatorWhitelisted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProfileCreatorWhitelisted_Filter>>>;
  profileCreator?: InputMaybe<Scalars['Bytes']['input']>;
  profileCreator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  profileCreator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  profileCreator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  profileCreator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  profileCreator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  profileCreator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  profileCreator_not?: InputMaybe<Scalars['Bytes']['input']>;
  profileCreator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  profileCreator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  whitelisted?: InputMaybe<Scalars['Boolean']['input']>;
  whitelisted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  whitelisted_not?: InputMaybe<Scalars['Boolean']['input']>;
  whitelisted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export enum ProfileCreatorWhitelisted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ProfileCreator = 'profileCreator',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
  Whitelisted = 'whitelisted'
}

export type ProfileMetadata = {
  __typename?: 'ProfileMetadata';
  appId?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  bio?: Maybe<Scalars['String']['output']>;
  coverPicture?: Maybe<ImageSet>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  picture?: Maybe<ImageSet>;
  profile?: Maybe<Profile>;
  rawURI?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<Scalars['String']['output']>;
};


export type ProfileMetadataAttributesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetadataAttribute_Filter>;
};

export type ProfileMetadataSet = {
  __typename?: 'ProfileMetadataSet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  metadata: Scalars['String']['output'];
  profileId: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ProfileMetadataSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileMetadataSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ProfileMetadataSet_Filter>>>;
  profileId?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ProfileMetadataSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Metadata = 'metadata',
  ProfileId = 'profileId',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type ProfileMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileMetadata_Filter>>>;
  appId?: InputMaybe<Scalars['String']['input']>;
  appId_contains?: InputMaybe<Scalars['String']['input']>;
  appId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_ends_with?: InputMaybe<Scalars['String']['input']>;
  appId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_gt?: InputMaybe<Scalars['String']['input']>;
  appId_gte?: InputMaybe<Scalars['String']['input']>;
  appId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appId_lt?: InputMaybe<Scalars['String']['input']>;
  appId_lte?: InputMaybe<Scalars['String']['input']>;
  appId_not?: InputMaybe<Scalars['String']['input']>;
  appId_not_contains?: InputMaybe<Scalars['String']['input']>;
  appId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_starts_with?: InputMaybe<Scalars['String']['input']>;
  appId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attributes_?: InputMaybe<MetadataAttribute_Filter>;
  bio?: InputMaybe<Scalars['String']['input']>;
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  bio_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bio_ends_with?: InputMaybe<Scalars['String']['input']>;
  bio_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bio_gt?: InputMaybe<Scalars['String']['input']>;
  bio_gte?: InputMaybe<Scalars['String']['input']>;
  bio_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bio_lt?: InputMaybe<Scalars['String']['input']>;
  bio_lte?: InputMaybe<Scalars['String']['input']>;
  bio_not?: InputMaybe<Scalars['String']['input']>;
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  bio_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bio_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bio_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bio_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bio_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bio_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bio_starts_with?: InputMaybe<Scalars['String']['input']>;
  bio_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  coverPicture?: InputMaybe<Scalars['String']['input']>;
  coverPicture_?: InputMaybe<ImageSet_Filter>;
  coverPicture_contains?: InputMaybe<Scalars['String']['input']>;
  coverPicture_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  coverPicture_ends_with?: InputMaybe<Scalars['String']['input']>;
  coverPicture_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  coverPicture_gt?: InputMaybe<Scalars['String']['input']>;
  coverPicture_gte?: InputMaybe<Scalars['String']['input']>;
  coverPicture_in?: InputMaybe<Array<Scalars['String']['input']>>;
  coverPicture_lt?: InputMaybe<Scalars['String']['input']>;
  coverPicture_lte?: InputMaybe<Scalars['String']['input']>;
  coverPicture_not?: InputMaybe<Scalars['String']['input']>;
  coverPicture_not_contains?: InputMaybe<Scalars['String']['input']>;
  coverPicture_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  coverPicture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  coverPicture_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  coverPicture_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  coverPicture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  coverPicture_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  coverPicture_starts_with?: InputMaybe<Scalars['String']['input']>;
  coverPicture_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  displayName_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_gt?: InputMaybe<Scalars['String']['input']>;
  displayName_gte?: InputMaybe<Scalars['String']['input']>;
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_lt?: InputMaybe<Scalars['String']['input']>;
  displayName_lte?: InputMaybe<Scalars['String']['input']>;
  displayName_not?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ProfileMetadata_Filter>>>;
  picture?: InputMaybe<Scalars['String']['input']>;
  picture_?: InputMaybe<ImageSet_Filter>;
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  picture_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  picture_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  picture_gt?: InputMaybe<Scalars['String']['input']>;
  picture_gte?: InputMaybe<Scalars['String']['input']>;
  picture_in?: InputMaybe<Array<Scalars['String']['input']>>;
  picture_lt?: InputMaybe<Scalars['String']['input']>;
  picture_lte?: InputMaybe<Scalars['String']['input']>;
  picture_not?: InputMaybe<Scalars['String']['input']>;
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  picture_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  picture_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  picture_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  profile_?: InputMaybe<Profile_Filter>;
  profile_contains?: InputMaybe<Scalars['String']['input']>;
  profile_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_ends_with?: InputMaybe<Scalars['String']['input']>;
  profile_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_gt?: InputMaybe<Scalars['String']['input']>;
  profile_gte?: InputMaybe<Scalars['String']['input']>;
  profile_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profile_lt?: InputMaybe<Scalars['String']['input']>;
  profile_lte?: InputMaybe<Scalars['String']['input']>;
  profile_not?: InputMaybe<Scalars['String']['input']>;
  profile_not_contains?: InputMaybe<Scalars['String']['input']>;
  profile_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  profile_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profile_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  profile_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_starts_with?: InputMaybe<Scalars['String']['input']>;
  profile_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI?: InputMaybe<Scalars['String']['input']>;
  rawURI_contains?: InputMaybe<Scalars['String']['input']>;
  rawURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  rawURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_gt?: InputMaybe<Scalars['String']['input']>;
  rawURI_gte?: InputMaybe<Scalars['String']['input']>;
  rawURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rawURI_lt?: InputMaybe<Scalars['String']['input']>;
  rawURI_lte?: InputMaybe<Scalars['String']['input']>;
  rawURI_not?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rawURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  rawURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<Scalars['String']['input']>;
  schema_contains?: InputMaybe<Scalars['String']['input']>;
  schema_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_ends_with?: InputMaybe<Scalars['String']['input']>;
  schema_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_gt?: InputMaybe<Scalars['String']['input']>;
  schema_gte?: InputMaybe<Scalars['String']['input']>;
  schema_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schema_lt?: InputMaybe<Scalars['String']['input']>;
  schema_lte?: InputMaybe<Scalars['String']['input']>;
  schema_not?: InputMaybe<Scalars['String']['input']>;
  schema_not_contains?: InputMaybe<Scalars['String']['input']>;
  schema_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  schema_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schema_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  schema_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_starts_with?: InputMaybe<Scalars['String']['input']>;
  schema_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ProfileMetadata_OrderBy {
  AppId = 'appId',
  Attributes = 'attributes',
  Bio = 'bio',
  CoverPicture = 'coverPicture',
  CoverPictureId = 'coverPicture__id',
  CoverPictureRaw = 'coverPicture__raw',
  DisplayName = 'displayName',
  Id = 'id',
  Picture = 'picture',
  PictureId = 'picture__id',
  PictureRaw = 'picture__raw',
  Profile = 'profile',
  ProfileCreatedAt = 'profile__createdAt',
  ProfileFollowModule = 'profile__followModule',
  ProfileId = 'profile__id',
  ProfileOwnedBy = 'profile__ownedBy',
  ProfilePeerToPeerRecommendedByMe = 'profile__peerToPeerRecommendedByMe',
  RawUri = 'rawURI',
  Schema = 'schema'
}

export type ProfileOperations = {
  __typename?: 'ProfileOperations';
  id: Scalars['Bytes']['output'];
  isBlockedByMe?: Maybe<Scalars['Boolean']['output']>;
  isFollowedByMe?: Maybe<Scalars['Boolean']['output']>;
  isFollowingMe?: Maybe<Scalars['Boolean']['output']>;
};

export type ProfileOperations_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfileOperations_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isBlockedByMe?: InputMaybe<Scalars['Boolean']['input']>;
  isBlockedByMe_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isBlockedByMe_not?: InputMaybe<Scalars['Boolean']['input']>;
  isBlockedByMe_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isFollowedByMe?: InputMaybe<Scalars['Boolean']['input']>;
  isFollowedByMe_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isFollowedByMe_not?: InputMaybe<Scalars['Boolean']['input']>;
  isFollowedByMe_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isFollowingMe?: InputMaybe<Scalars['Boolean']['input']>;
  isFollowingMe_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isFollowingMe_not?: InputMaybe<Scalars['Boolean']['input']>;
  isFollowingMe_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProfileOperations_Filter>>>;
};

export enum ProfileOperations_OrderBy {
  Id = 'id',
  IsBlockedByMe = 'isBlockedByMe',
  IsFollowedByMe = 'isFollowedByMe',
  IsFollowingMe = 'isFollowingMe'
}

export type Profile_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Profile_Filter>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  createdAt_contains?: InputMaybe<Scalars['String']['input']>;
  createdAt_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_ends_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_gt?: InputMaybe<Scalars['String']['input']>;
  createdAt_gte?: InputMaybe<Scalars['String']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['String']['input']>;
  createdAt_lte?: InputMaybe<Scalars['String']['input']>;
  createdAt_not?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_contains?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  followModule?: InputMaybe<Scalars['String']['input']>;
  followModule_contains?: InputMaybe<Scalars['String']['input']>;
  followModule_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  followModule_ends_with?: InputMaybe<Scalars['String']['input']>;
  followModule_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  followModule_gt?: InputMaybe<Scalars['String']['input']>;
  followModule_gte?: InputMaybe<Scalars['String']['input']>;
  followModule_in?: InputMaybe<Array<Scalars['String']['input']>>;
  followModule_lt?: InputMaybe<Scalars['String']['input']>;
  followModule_lte?: InputMaybe<Scalars['String']['input']>;
  followModule_not?: InputMaybe<Scalars['String']['input']>;
  followModule_not_contains?: InputMaybe<Scalars['String']['input']>;
  followModule_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  followModule_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  followModule_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  followModule_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  followModule_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  followModule_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  followModule_starts_with?: InputMaybe<Scalars['String']['input']>;
  followModule_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  handle_?: InputMaybe<HandleInfo_Filter>;
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  handle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_gt?: InputMaybe<Scalars['String']['input']>;
  handle_gte?: InputMaybe<Scalars['String']['input']>;
  handle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_lt?: InputMaybe<Scalars['String']['input']>;
  handle_lte?: InputMaybe<Scalars['String']['input']>;
  handle_not?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_?: InputMaybe<ProfileMetadata_Filter>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operations?: InputMaybe<Scalars['String']['input']>;
  operations_?: InputMaybe<ProfileOperations_Filter>;
  operations_contains?: InputMaybe<Scalars['String']['input']>;
  operations_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operations_ends_with?: InputMaybe<Scalars['String']['input']>;
  operations_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operations_gt?: InputMaybe<Scalars['String']['input']>;
  operations_gte?: InputMaybe<Scalars['String']['input']>;
  operations_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operations_lt?: InputMaybe<Scalars['String']['input']>;
  operations_lte?: InputMaybe<Scalars['String']['input']>;
  operations_not?: InputMaybe<Scalars['String']['input']>;
  operations_not_contains?: InputMaybe<Scalars['String']['input']>;
  operations_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operations_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operations_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operations_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operations_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operations_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operations_starts_with?: InputMaybe<Scalars['String']['input']>;
  operations_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Profile_Filter>>>;
  ownedBy?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ownedBy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_not?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ownedBy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  peerToPeerRecommendedByMe?: InputMaybe<Scalars['Boolean']['input']>;
  peerToPeerRecommendedByMe_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  peerToPeerRecommendedByMe_not?: InputMaybe<Scalars['Boolean']['input']>;
  peerToPeerRecommendedByMe_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  profilesManaged?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_?: InputMaybe<ProfilesManaged_Filter>;
  profilesManaged_contains?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_gt?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_gte?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilesManaged_lt?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_lte?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_not?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_not_contains?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilesManaged_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilesManaged_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signInfo?: InputMaybe<Scalars['String']['input']>;
  signInfo_?: InputMaybe<UserSignedUp_Filter>;
  signInfo_contains?: InputMaybe<Scalars['String']['input']>;
  signInfo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signInfo_ends_with?: InputMaybe<Scalars['String']['input']>;
  signInfo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signInfo_gt?: InputMaybe<Scalars['String']['input']>;
  signInfo_gte?: InputMaybe<Scalars['String']['input']>;
  signInfo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signInfo_lt?: InputMaybe<Scalars['String']['input']>;
  signInfo_lte?: InputMaybe<Scalars['String']['input']>;
  signInfo_not?: InputMaybe<Scalars['String']['input']>;
  signInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  signInfo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signInfo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signInfo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signInfo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signInfo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signInfo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signInfo_starts_with?: InputMaybe<Scalars['String']['input']>;
  signInfo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stats?: InputMaybe<Scalars['String']['input']>;
  stats_?: InputMaybe<Stats_Filter>;
  stats_contains?: InputMaybe<Scalars['String']['input']>;
  stats_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_ends_with?: InputMaybe<Scalars['String']['input']>;
  stats_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_gt?: InputMaybe<Scalars['String']['input']>;
  stats_gte?: InputMaybe<Scalars['String']['input']>;
  stats_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stats_lt?: InputMaybe<Scalars['String']['input']>;
  stats_lte?: InputMaybe<Scalars['String']['input']>;
  stats_not?: InputMaybe<Scalars['String']['input']>;
  stats_not_contains?: InputMaybe<Scalars['String']['input']>;
  stats_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stats_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stats_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stats_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stats_starts_with?: InputMaybe<Scalars['String']['input']>;
  stats_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Profile_OrderBy {
  CreatedAt = 'createdAt',
  FollowModule = 'followModule',
  Handle = 'handle',
  HandleFullHandle = 'handle__fullHandle',
  HandleId = 'handle__id',
  HandleLocalName = 'handle__localName',
  HandleNamespace = 'handle__namespace',
  HandleOwnedBy = 'handle__ownedBy',
  Id = 'id',
  Metadata = 'metadata',
  MetadataAppId = 'metadata__appId',
  MetadataBio = 'metadata__bio',
  MetadataDisplayName = 'metadata__displayName',
  MetadataId = 'metadata__id',
  MetadataRawUri = 'metadata__rawURI',
  MetadataSchema = 'metadata__schema',
  Operations = 'operations',
  OperationsId = 'operations__id',
  OperationsIsBlockedByMe = 'operations__isBlockedByMe',
  OperationsIsFollowedByMe = 'operations__isFollowedByMe',
  OperationsIsFollowingMe = 'operations__isFollowingMe',
  OwnedBy = 'ownedBy',
  PeerToPeerRecommendedByMe = 'peerToPeerRecommendedByMe',
  ProfilesManaged = 'profilesManaged',
  ProfilesManagedId = 'profilesManaged__id',
  SignInfo = 'signInfo',
  SignInfoBlockNumber = 'signInfo__blockNumber',
  SignInfoBlockTimestamp = 'signInfo__blockTimestamp',
  SignInfoEncPrivateKey = 'signInfo__encPrivateKey',
  SignInfoId = 'signInfo__id',
  SignInfoPublicKey = 'signInfo__publicKey',
  SignInfoTransactionHash = 'signInfo__transactionHash',
  SignInfoUser = 'signInfo__user',
  Stats = 'stats',
  StatsFollowers = 'stats__followers',
  StatsFollowing = 'stats__following',
  StatsId = 'stats__id'
}

export type ProfilesManaged = {
  __typename?: 'ProfilesManaged';
  id: Scalars['Bytes']['output'];
  items: Array<Profile>;
};


export type ProfilesManagedItemsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Profile_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Profile_Filter>;
};

export type ProfilesManaged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProfilesManaged_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  items_?: InputMaybe<Profile_Filter>;
  or?: InputMaybe<Array<InputMaybe<ProfilesManaged_Filter>>>;
};

export enum ProfilesManaged_OrderBy {
  Id = 'id',
  Items = 'items'
}

export type Publication = {
  __typename?: 'Publication';
  id: Scalars['Bytes']['output'];
  items: Array<Post>;
};


export type PublicationItemsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Post_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Post_Filter>;
};

export enum PublicationContentWarningType {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationMetadata = {
  __typename?: 'PublicationMetadata';
  appId?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<PublicationMetadataMedia>;
  attachments?: Maybe<Array<EncryptableImage>>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  content?: Maybe<Scalars['String']['output']>;
  contentWarning?: Maybe<PublicationContentWarningType>;
  encryptedWith?: Maybe<PublicationMetadataLitEncryption>;
  hideFromFeed?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  mainContentFocus?: Maybe<Scalars['String']['output']>;
  marketplace?: Maybe<MarketplaceMetadata>;
  rawURI: Scalars['String']['output'];
  sharingLink?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  /**
   * The title of the image. Empty if not set.
   *
   */
  title?: Maybe<Scalars['String']['output']>;
};


export type PublicationMetadataAttachmentsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EncryptableImage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EncryptableImage_Filter>;
};


export type PublicationMetadataAttributesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetadataAttribute_Filter>;
};

export enum PublicationMetadataLicenseType {
  Cco = 'CCO',
  CcBy = 'CC_BY',
  CcByNc = 'CC_BY_NC',
  CcByNd = 'CC_BY_ND',
  TbnlCDtsaNplLedger = 'TBNL_C_DTSA_NPL_Ledger',
  TbnlCDtsaNplLegal = 'TBNL_C_DTSA_NPL_Legal',
  TbnlCDtsaPlLedger = 'TBNL_C_DTSA_PL_Ledger',
  TbnlCDtsaPlLegal = 'TBNL_C_DTSA_PL_Legal',
  TbnlCDtNplLedger = 'TBNL_C_DT_NPL_Ledger',
  TbnlCDtNplLegal = 'TBNL_C_DT_NPL_Legal',
  TbnlCDtPlLedger = 'TBNL_C_DT_PL_Ledger',
  TbnlCDtPlLegal = 'TBNL_C_DT_PL_Legal',
  TbnlCDNplLedger = 'TBNL_C_D_NPL_Ledger',
  TbnlCDNplLegal = 'TBNL_C_D_NPL_Legal',
  TbnlCDPlLedger = 'TBNL_C_D_PL_Ledger',
  TbnlCDPlLegal = 'TBNL_C_D_PL_Legal',
  TbnlCNdNplLedger = 'TBNL_C_ND_NPL_Ledger',
  TbnlCNdNplLegal = 'TBNL_C_ND_NPL_Legal',
  TbnlCNdPlLedger = 'TBNL_C_ND_PL_Ledger',
  TbnlCNdPlLegal = 'TBNL_C_ND_PL_Legal',
  TbnlNcDtsaNplLedger = 'TBNL_NC_DTSA_NPL_Ledger',
  TbnlNcDtsaNplLegal = 'TBNL_NC_DTSA_NPL_Legal',
  TbnlNcDtsaPlLedger = 'TBNL_NC_DTSA_PL_Ledger',
  TbnlNcDtsaPlLegal = 'TBNL_NC_DTSA_PL_Legal',
  TbnlNcDtNplLedger = 'TBNL_NC_DT_NPL_Ledger',
  TbnlNcDtNplLegal = 'TBNL_NC_DT_NPL_Legal',
  TbnlNcDtPlLedger = 'TBNL_NC_DT_PL_Ledger',
  TbnlNcDtPlLegal = 'TBNL_NC_DT_PL_Legal',
  TbnlNcDNplLedger = 'TBNL_NC_D_NPL_Ledger',
  TbnlNcDNplLegal = 'TBNL_NC_D_NPL_Legal',
  TbnlNcDPlLedger = 'TBNL_NC_D_PL_Ledger',
  TbnlNcDPlLegal = 'TBNL_NC_D_PL_Legal',
  TbnlNcNdNplLedger = 'TBNL_NC_ND_NPL_Ledger',
  TbnlNcNdNplLegal = 'TBNL_NC_ND_NPL_Legal',
  TbnlNcNdPlLedger = 'TBNL_NC_ND_PL_Ledger',
  TbnlNcNdPlLegal = 'TBNL_NC_ND_PL_Legal'
}

export type PublicationMetadataLitEncryption = {
  __typename?: 'PublicationMetadataLitEncryption';
  accessCondition?: Maybe<Array<SimpleConditionSchema>>;
  accessControlContract?: Maybe<Scalars['Bytes']['output']>;
  encryptedPaths?: Maybe<Array<Scalars['String']['output']>>;
  encryptionKey: Scalars['String']['output'];
  id: Scalars['String']['output'];
  provider: Scalars['String']['output'];
};


export type PublicationMetadataLitEncryptionAccessConditionArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SimpleConditionSchema_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SimpleConditionSchema_Filter>;
};

export type PublicationMetadataLitEncryption_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accessCondition?: InputMaybe<Array<Scalars['String']['input']>>;
  accessCondition_?: InputMaybe<SimpleConditionSchema_Filter>;
  accessCondition_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accessCondition_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accessCondition_not?: InputMaybe<Array<Scalars['String']['input']>>;
  accessCondition_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  accessCondition_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  accessControlContract?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  accessControlContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  accessControlContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PublicationMetadataLitEncryption_Filter>>>;
  encryptedPaths?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptedPaths_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptedPaths_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptedPaths_not?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptedPaths_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptedPaths_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptionKey?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_contains?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_ends_with?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_gt?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_gte?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptionKey_lt?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_lte?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_not?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptionKey_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_starts_with?: InputMaybe<Scalars['String']['input']>;
  encryptionKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<PublicationMetadataLitEncryption_Filter>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_contains?: InputMaybe<Scalars['String']['input']>;
  provider_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_ends_with?: InputMaybe<Scalars['String']['input']>;
  provider_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_gt?: InputMaybe<Scalars['String']['input']>;
  provider_gte?: InputMaybe<Scalars['String']['input']>;
  provider_in?: InputMaybe<Array<Scalars['String']['input']>>;
  provider_lt?: InputMaybe<Scalars['String']['input']>;
  provider_lte?: InputMaybe<Scalars['String']['input']>;
  provider_not?: InputMaybe<Scalars['String']['input']>;
  provider_not_contains?: InputMaybe<Scalars['String']['input']>;
  provider_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  provider_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  provider_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  provider_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_starts_with?: InputMaybe<Scalars['String']['input']>;
  provider_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PublicationMetadataLitEncryption_OrderBy {
  AccessCondition = 'accessCondition',
  AccessControlContract = 'accessControlContract',
  EncryptedPaths = 'encryptedPaths',
  EncryptionKey = 'encryptionKey',
  Id = 'id',
  Provider = 'provider'
}

export type PublicationMetadataMedia = {
  __typename?: 'PublicationMetadataMedia';
  /**
   * Alternative text for the image
   *
   */
  altTag?: Maybe<Scalars['String']['output']>;
  artist?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<MetadataAttribute>>;
  audio?: Maybe<EncryptableImageSet>;
  cover?: Maybe<EncryptableImageSet>;
  id: Scalars['String']['output'];
  image?: Maybe<EncryptableImageSet>;
  license?: Maybe<PublicationMetadataLicenseType>;
  video?: Maybe<EncryptableImageSet>;
};


export type PublicationMetadataMediaAttributesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetadataAttribute_Filter>;
};

export type PublicationMetadataMedia_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  altTag?: InputMaybe<Scalars['String']['input']>;
  altTag_contains?: InputMaybe<Scalars['String']['input']>;
  altTag_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_ends_with?: InputMaybe<Scalars['String']['input']>;
  altTag_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_gt?: InputMaybe<Scalars['String']['input']>;
  altTag_gte?: InputMaybe<Scalars['String']['input']>;
  altTag_in?: InputMaybe<Array<Scalars['String']['input']>>;
  altTag_lt?: InputMaybe<Scalars['String']['input']>;
  altTag_lte?: InputMaybe<Scalars['String']['input']>;
  altTag_not?: InputMaybe<Scalars['String']['input']>;
  altTag_not_contains?: InputMaybe<Scalars['String']['input']>;
  altTag_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  altTag_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  altTag_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  altTag_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  altTag_starts_with?: InputMaybe<Scalars['String']['input']>;
  altTag_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<PublicationMetadataMedia_Filter>>>;
  artist?: InputMaybe<Scalars['String']['input']>;
  artist_contains?: InputMaybe<Scalars['String']['input']>;
  artist_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_ends_with?: InputMaybe<Scalars['String']['input']>;
  artist_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_gt?: InputMaybe<Scalars['String']['input']>;
  artist_gte?: InputMaybe<Scalars['String']['input']>;
  artist_in?: InputMaybe<Array<Scalars['String']['input']>>;
  artist_lt?: InputMaybe<Scalars['String']['input']>;
  artist_lte?: InputMaybe<Scalars['String']['input']>;
  artist_not?: InputMaybe<Scalars['String']['input']>;
  artist_not_contains?: InputMaybe<Scalars['String']['input']>;
  artist_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  artist_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  artist_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  artist_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  artist_starts_with?: InputMaybe<Scalars['String']['input']>;
  artist_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_?: InputMaybe<MetadataAttribute_Filter>;
  attributes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_not?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  audio?: InputMaybe<Scalars['String']['input']>;
  audio_?: InputMaybe<EncryptableImageSet_Filter>;
  audio_contains?: InputMaybe<Scalars['String']['input']>;
  audio_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  audio_ends_with?: InputMaybe<Scalars['String']['input']>;
  audio_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  audio_gt?: InputMaybe<Scalars['String']['input']>;
  audio_gte?: InputMaybe<Scalars['String']['input']>;
  audio_in?: InputMaybe<Array<Scalars['String']['input']>>;
  audio_lt?: InputMaybe<Scalars['String']['input']>;
  audio_lte?: InputMaybe<Scalars['String']['input']>;
  audio_not?: InputMaybe<Scalars['String']['input']>;
  audio_not_contains?: InputMaybe<Scalars['String']['input']>;
  audio_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  audio_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  audio_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  audio_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  audio_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  audio_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  audio_starts_with?: InputMaybe<Scalars['String']['input']>;
  audio_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  cover_?: InputMaybe<EncryptableImageSet_Filter>;
  cover_contains?: InputMaybe<Scalars['String']['input']>;
  cover_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_ends_with?: InputMaybe<Scalars['String']['input']>;
  cover_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_gt?: InputMaybe<Scalars['String']['input']>;
  cover_gte?: InputMaybe<Scalars['String']['input']>;
  cover_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cover_lt?: InputMaybe<Scalars['String']['input']>;
  cover_lte?: InputMaybe<Scalars['String']['input']>;
  cover_not?: InputMaybe<Scalars['String']['input']>;
  cover_not_contains?: InputMaybe<Scalars['String']['input']>;
  cover_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cover_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cover_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cover_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_starts_with?: InputMaybe<Scalars['String']['input']>;
  cover_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_?: InputMaybe<EncryptableImageSet_Filter>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  license?: InputMaybe<PublicationMetadataLicenseType>;
  license_in?: InputMaybe<Array<PublicationMetadataLicenseType>>;
  license_not?: InputMaybe<PublicationMetadataLicenseType>;
  license_not_in?: InputMaybe<Array<PublicationMetadataLicenseType>>;
  or?: InputMaybe<Array<InputMaybe<PublicationMetadataMedia_Filter>>>;
  video?: InputMaybe<Scalars['String']['input']>;
  video_?: InputMaybe<EncryptableImageSet_Filter>;
  video_contains?: InputMaybe<Scalars['String']['input']>;
  video_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  video_ends_with?: InputMaybe<Scalars['String']['input']>;
  video_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  video_gt?: InputMaybe<Scalars['String']['input']>;
  video_gte?: InputMaybe<Scalars['String']['input']>;
  video_in?: InputMaybe<Array<Scalars['String']['input']>>;
  video_lt?: InputMaybe<Scalars['String']['input']>;
  video_lte?: InputMaybe<Scalars['String']['input']>;
  video_not?: InputMaybe<Scalars['String']['input']>;
  video_not_contains?: InputMaybe<Scalars['String']['input']>;
  video_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  video_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  video_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  video_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  video_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  video_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  video_starts_with?: InputMaybe<Scalars['String']['input']>;
  video_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PublicationMetadataMedia_OrderBy {
  AltTag = 'altTag',
  Artist = 'artist',
  Attributes = 'attributes',
  Audio = 'audio',
  AudioId = 'audio__id',
  Cover = 'cover',
  CoverId = 'cover__id',
  Id = 'id',
  Image = 'image',
  ImageId = 'image__id',
  License = 'license',
  Video = 'video',
  VideoId = 'video__id'
}

export type PublicationMetadata_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PublicationMetadata_Filter>>>;
  appId?: InputMaybe<Scalars['String']['input']>;
  appId_contains?: InputMaybe<Scalars['String']['input']>;
  appId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_ends_with?: InputMaybe<Scalars['String']['input']>;
  appId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_gt?: InputMaybe<Scalars['String']['input']>;
  appId_gte?: InputMaybe<Scalars['String']['input']>;
  appId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appId_lt?: InputMaybe<Scalars['String']['input']>;
  appId_lte?: InputMaybe<Scalars['String']['input']>;
  appId_not?: InputMaybe<Scalars['String']['input']>;
  appId_not_contains?: InputMaybe<Scalars['String']['input']>;
  appId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  appId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  appId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  appId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  appId_starts_with?: InputMaybe<Scalars['String']['input']>;
  appId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<PublicationMetadataMedia_Filter>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  attachments_?: InputMaybe<EncryptableImage_Filter>;
  attachments_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  attachments_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  attachments_not?: InputMaybe<Array<Scalars['String']['input']>>;
  attachments_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  attachments_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_?: InputMaybe<MetadataAttribute_Filter>;
  attributes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_not?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentWarning?: InputMaybe<PublicationContentWarningType>;
  contentWarning_in?: InputMaybe<Array<PublicationContentWarningType>>;
  contentWarning_not?: InputMaybe<PublicationContentWarningType>;
  contentWarning_not_in?: InputMaybe<Array<PublicationContentWarningType>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  content_ends_with?: InputMaybe<Scalars['String']['input']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_gt?: InputMaybe<Scalars['String']['input']>;
  content_gte?: InputMaybe<Scalars['String']['input']>;
  content_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_lt?: InputMaybe<Scalars['String']['input']>;
  content_lte?: InputMaybe<Scalars['String']['input']>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  content_starts_with?: InputMaybe<Scalars['String']['input']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptedWith?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_?: InputMaybe<PublicationMetadataLitEncryption_Filter>;
  encryptedWith_contains?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_ends_with?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_gt?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_gte?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_in?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptedWith_lt?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_lte?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_not?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_not_contains?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  encryptedWith_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_starts_with?: InputMaybe<Scalars['String']['input']>;
  encryptedWith_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hideFromFeed?: InputMaybe<Scalars['Boolean']['input']>;
  hideFromFeed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hideFromFeed_not?: InputMaybe<Scalars['Boolean']['input']>;
  hideFromFeed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_contains?: InputMaybe<Scalars['String']['input']>;
  locale_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_ends_with?: InputMaybe<Scalars['String']['input']>;
  locale_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_gt?: InputMaybe<Scalars['String']['input']>;
  locale_gte?: InputMaybe<Scalars['String']['input']>;
  locale_in?: InputMaybe<Array<Scalars['String']['input']>>;
  locale_lt?: InputMaybe<Scalars['String']['input']>;
  locale_lte?: InputMaybe<Scalars['String']['input']>;
  locale_not?: InputMaybe<Scalars['String']['input']>;
  locale_not_contains?: InputMaybe<Scalars['String']['input']>;
  locale_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  locale_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  locale_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  locale_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  locale_starts_with?: InputMaybe<Scalars['String']['input']>;
  locale_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_contains?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_ends_with?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_gt?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_gte?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mainContentFocus_lt?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_lte?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_contains?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mainContentFocus_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_starts_with?: InputMaybe<Scalars['String']['input']>;
  mainContentFocus_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketplace?: InputMaybe<Scalars['String']['input']>;
  marketplace_?: InputMaybe<MarketplaceMetadata_Filter>;
  marketplace_contains?: InputMaybe<Scalars['String']['input']>;
  marketplace_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketplace_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketplace_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketplace_gt?: InputMaybe<Scalars['String']['input']>;
  marketplace_gte?: InputMaybe<Scalars['String']['input']>;
  marketplace_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketplace_lt?: InputMaybe<Scalars['String']['input']>;
  marketplace_lte?: InputMaybe<Scalars['String']['input']>;
  marketplace_not?: InputMaybe<Scalars['String']['input']>;
  marketplace_not_contains?: InputMaybe<Scalars['String']['input']>;
  marketplace_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  marketplace_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  marketplace_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketplace_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  marketplace_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketplace_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  marketplace_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketplace_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<PublicationMetadata_Filter>>>;
  rawURI?: InputMaybe<Scalars['String']['input']>;
  rawURI_contains?: InputMaybe<Scalars['String']['input']>;
  rawURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  rawURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_gt?: InputMaybe<Scalars['String']['input']>;
  rawURI_gte?: InputMaybe<Scalars['String']['input']>;
  rawURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rawURI_lt?: InputMaybe<Scalars['String']['input']>;
  rawURI_lte?: InputMaybe<Scalars['String']['input']>;
  rawURI_not?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  rawURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  rawURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rawURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  rawURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharingLink?: InputMaybe<Scalars['String']['input']>;
  sharingLink_contains?: InputMaybe<Scalars['String']['input']>;
  sharingLink_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sharingLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  sharingLink_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharingLink_gt?: InputMaybe<Scalars['String']['input']>;
  sharingLink_gte?: InputMaybe<Scalars['String']['input']>;
  sharingLink_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sharingLink_lt?: InputMaybe<Scalars['String']['input']>;
  sharingLink_lte?: InputMaybe<Scalars['String']['input']>;
  sharingLink_not?: InputMaybe<Scalars['String']['input']>;
  sharingLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  sharingLink_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sharingLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sharingLink_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharingLink_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sharingLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sharingLink_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sharingLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  sharingLink_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PublicationMetadata_OrderBy {
  AppId = 'appId',
  Asset = 'asset',
  AssetAltTag = 'asset__altTag',
  AssetArtist = 'asset__artist',
  AssetId = 'asset__id',
  AssetLicense = 'asset__license',
  Attachments = 'attachments',
  Attributes = 'attributes',
  Content = 'content',
  ContentWarning = 'contentWarning',
  EncryptedWith = 'encryptedWith',
  EncryptedWithAccessControlContract = 'encryptedWith__accessControlContract',
  EncryptedWithEncryptionKey = 'encryptedWith__encryptionKey',
  EncryptedWithId = 'encryptedWith__id',
  EncryptedWithProvider = 'encryptedWith__provider',
  HideFromFeed = 'hideFromFeed',
  Id = 'id',
  Locale = 'locale',
  MainContentFocus = 'mainContentFocus',
  Marketplace = 'marketplace',
  MarketplaceAnimationUrl = 'marketplace__animationUrl',
  MarketplaceDescription = 'marketplace__description',
  MarketplaceExternalUrl = 'marketplace__externalURL',
  MarketplaceId = 'marketplace__id',
  MarketplaceImage = 'marketplace__image',
  MarketplaceName = 'marketplace__name',
  RawUri = 'rawURI',
  SharingLink = 'sharingLink',
  Tags = 'tags',
  Title = 'title'
}

export type PublicationStats = {
  __typename?: 'PublicationStats';
  bookmarks: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  countOpenActions: Scalars['Int']['output'];
  id: Scalars['Bytes']['output'];
  mirrors: Scalars['Int']['output'];
  quotes: Scalars['Int']['output'];
  reactions: Scalars['Int']['output'];
};

export type PublicationStats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PublicationStats_Filter>>>;
  bookmarks?: InputMaybe<Scalars['Int']['input']>;
  bookmarks_gt?: InputMaybe<Scalars['Int']['input']>;
  bookmarks_gte?: InputMaybe<Scalars['Int']['input']>;
  bookmarks_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  bookmarks_lt?: InputMaybe<Scalars['Int']['input']>;
  bookmarks_lte?: InputMaybe<Scalars['Int']['input']>;
  bookmarks_not?: InputMaybe<Scalars['Int']['input']>;
  bookmarks_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  comments?: InputMaybe<Scalars['Int']['input']>;
  comments_gt?: InputMaybe<Scalars['Int']['input']>;
  comments_gte?: InputMaybe<Scalars['Int']['input']>;
  comments_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  comments_lt?: InputMaybe<Scalars['Int']['input']>;
  comments_lte?: InputMaybe<Scalars['Int']['input']>;
  comments_not?: InputMaybe<Scalars['Int']['input']>;
  comments_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  countOpenActions?: InputMaybe<Scalars['Int']['input']>;
  countOpenActions_gt?: InputMaybe<Scalars['Int']['input']>;
  countOpenActions_gte?: InputMaybe<Scalars['Int']['input']>;
  countOpenActions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  countOpenActions_lt?: InputMaybe<Scalars['Int']['input']>;
  countOpenActions_lte?: InputMaybe<Scalars['Int']['input']>;
  countOpenActions_not?: InputMaybe<Scalars['Int']['input']>;
  countOpenActions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  mirrors?: InputMaybe<Scalars['Int']['input']>;
  mirrors_gt?: InputMaybe<Scalars['Int']['input']>;
  mirrors_gte?: InputMaybe<Scalars['Int']['input']>;
  mirrors_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  mirrors_lt?: InputMaybe<Scalars['Int']['input']>;
  mirrors_lte?: InputMaybe<Scalars['Int']['input']>;
  mirrors_not?: InputMaybe<Scalars['Int']['input']>;
  mirrors_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PublicationStats_Filter>>>;
  quotes?: InputMaybe<Scalars['Int']['input']>;
  quotes_gt?: InputMaybe<Scalars['Int']['input']>;
  quotes_gte?: InputMaybe<Scalars['Int']['input']>;
  quotes_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  quotes_lt?: InputMaybe<Scalars['Int']['input']>;
  quotes_lte?: InputMaybe<Scalars['Int']['input']>;
  quotes_not?: InputMaybe<Scalars['Int']['input']>;
  quotes_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactions?: InputMaybe<Scalars['Int']['input']>;
  reactions_gt?: InputMaybe<Scalars['Int']['input']>;
  reactions_gte?: InputMaybe<Scalars['Int']['input']>;
  reactions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reactions_lt?: InputMaybe<Scalars['Int']['input']>;
  reactions_lte?: InputMaybe<Scalars['Int']['input']>;
  reactions_not?: InputMaybe<Scalars['Int']['input']>;
  reactions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum PublicationStats_OrderBy {
  Bookmarks = 'bookmarks',
  Comments = 'comments',
  CountOpenActions = 'countOpenActions',
  Id = 'id',
  Mirrors = 'mirrors',
  Quotes = 'quotes',
  Reactions = 'reactions'
}

export enum PublicationType {
  Post = 'POST'
}

export type Publication_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Publication_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  items_?: InputMaybe<Post_Filter>;
  or?: InputMaybe<Array<InputMaybe<Publication_Filter>>>;
};

export enum Publication_OrderBy {
  Id = 'id',
  Items = 'items'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  acted?: Maybe<Acted>;
  acteds: Array<Acted>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  baseInitialized?: Maybe<BaseInitialized>;
  baseInitializeds: Array<BaseInitialized>;
  batchMetadataUpdate?: Maybe<BatchMetadataUpdate>;
  batchMetadataUpdates: Array<BatchMetadataUpdate>;
  blocked?: Maybe<Blocked>;
  blockeds: Array<Blocked>;
  challenge?: Maybe<Challenge>;
  challenges: Array<Challenge>;
  collectNFTTransferred?: Maybe<CollectNftTransferred>;
  collectNFTTransferreds: Array<CollectNftTransferred>;
  commentCreated?: Maybe<CommentCreated>;
  commentCreateds: Array<CommentCreated>;
  creditBalanceChanged?: Maybe<CreditBalanceChanged>;
  creditBalanceChangeds: Array<CreditBalanceChanged>;
  creditProviderStatusChanged?: Maybe<CreditProviderStatusChanged>;
  creditProviderStatusChangeds: Array<CreditProviderStatusChanged>;
  dateTime?: Maybe<DateTime>;
  dateTimes: Array<DateTime>;
  delegatedExecutorsConfigApplied?: Maybe<DelegatedExecutorsConfigApplied>;
  delegatedExecutorsConfigApplieds: Array<DelegatedExecutorsConfigApplied>;
  delegatedExecutorsConfigChanged?: Maybe<DelegatedExecutorsConfigChanged>;
  delegatedExecutorsConfigChangeds: Array<DelegatedExecutorsConfigChanged>;
  emergencyAdminSet?: Maybe<EmergencyAdminSet>;
  emergencyAdminSets: Array<EmergencyAdminSet>;
  encryptableImage?: Maybe<EncryptableImage>;
  encryptableImageSet?: Maybe<EncryptableImageSet>;
  encryptableImageSets: Array<EncryptableImageSet>;
  encryptableImages: Array<EncryptableImage>;
  erc721Approval?: Maybe<Erc721Approval>;
  erc721ApprovalForAll?: Maybe<Erc721ApprovalForAll>;
  erc721ApprovalForAlls: Array<Erc721ApprovalForAll>;
  erc721Approvals: Array<Erc721Approval>;
  erc721Transfer?: Maybe<Erc721Transfer>;
  erc721Transfers: Array<Erc721Transfer>;
  eventsBatchMetadataUpdate?: Maybe<EventsBatchMetadataUpdate>;
  eventsBatchMetadataUpdates: Array<EventsBatchMetadataUpdate>;
  eventsCollectNFTTransferred?: Maybe<EventsCollectNftTransferred>;
  eventsCollectNFTTransferreds: Array<EventsCollectNftTransferred>;
  eventsTokenGuardianStateChanged?: Maybe<EventsTokenGuardianStateChanged>;
  eventsTokenGuardianStateChangeds: Array<EventsTokenGuardianStateChanged>;
  eventsTreasuryFeeSet?: Maybe<EventsTreasuryFeeSet>;
  eventsTreasuryFeeSets: Array<EventsTreasuryFeeSet>;
  eventsTreasurySet?: Maybe<EventsTreasurySet>;
  eventsTreasurySets: Array<EventsTreasurySet>;
  eventsUnfollowed?: Maybe<EventsUnfollowed>;
  eventsUnfolloweds: Array<EventsUnfollowed>;
  evmAddress?: Maybe<EvmAddress>;
  evmAddresses: Array<EvmAddress>;
  followModuleSet?: Maybe<FollowModuleSet>;
  followModuleSets: Array<FollowModuleSet>;
  followNFTDeployed?: Maybe<FollowNftDeployed>;
  followNFTDeployeds: Array<FollowNftDeployed>;
  followed?: Maybe<Followed>;
  followeds: Array<Followed>;
  governanceSet?: Maybe<GovernanceSet>;
  governanceSets: Array<GovernanceSet>;
  handleCreatedUsingCredits?: Maybe<HandleCreatedUsingCredits>;
  handleCreatedUsingCredits_collection: Array<HandleCreatedUsingCredits>;
  handleCreationPriceChanged?: Maybe<HandleCreationPriceChanged>;
  handleCreationPriceChangeds: Array<HandleCreationPriceChanged>;
  handleGuardianResult?: Maybe<HandleGuardianResult>;
  handleGuardianResults: Array<HandleGuardianResult>;
  handleInfo?: Maybe<HandleInfo>;
  handleInfos: Array<HandleInfo>;
  handleLengthMinChanged?: Maybe<HandleLengthMinChanged>;
  handleLengthMinChangeds: Array<HandleLengthMinChanged>;
  handleLinked?: Maybe<HandleLinked>;
  handleLinkedTo?: Maybe<HandleLinkedTo>;
  handleLinkedTos: Array<HandleLinkedTo>;
  handleLinkeds: Array<HandleLinked>;
  handleMinted?: Maybe<HandleMinted>;
  handleMinteds: Array<HandleMinted>;
  handleToAddress?: Maybe<HandleToAddress>;
  handleToAddresses: Array<HandleToAddress>;
  handleUnlinked?: Maybe<HandleUnlinked>;
  handleUnlinkeds: Array<HandleUnlinked>;
  image?: Maybe<Image>;
  imageSet?: Maybe<ImageSet>;
  imageSets: Array<ImageSet>;
  images: Array<Image>;
  lastLoggedInProfile?: Maybe<LastLoggedInProfile>;
  lastLoggedInProfiles: Array<LastLoggedInProfile>;
  legacyCollectNFTDeployed?: Maybe<LegacyCollectNftDeployed>;
  legacyCollectNFTDeployeds: Array<LegacyCollectNftDeployed>;
  lens?: Maybe<Lens>;
  lensHubApproval?: Maybe<LensHubApproval>;
  lensHubApprovalForAll?: Maybe<LensHubApprovalForAll>;
  lensHubApprovalForAlls: Array<LensHubApprovalForAll>;
  lensHubApprovals: Array<LensHubApproval>;
  lensHubBatchMetadataUpdate?: Maybe<LensHubBatchMetadataUpdate>;
  lensHubBatchMetadataUpdates: Array<LensHubBatchMetadataUpdate>;
  lensHubTokenGuardianStateChanged?: Maybe<LensHubTokenGuardianStateChanged>;
  lensHubTokenGuardianStateChangeds: Array<LensHubTokenGuardianStateChanged>;
  lensHubTransfer?: Maybe<LensHubTransfer>;
  lensHubTransfers: Array<LensHubTransfer>;
  lensUpgradeVersion?: Maybe<LensUpgradeVersion>;
  lensUpgradeVersions: Array<LensUpgradeVersion>;
  lens_collection: Array<Lens>;
  marketplaceMetadata?: Maybe<MarketplaceMetadata>;
  marketplaceMetadata_collection: Array<MarketplaceMetadata>;
  metadataAttribute?: Maybe<MetadataAttribute>;
  metadataAttributes: Array<MetadataAttribute>;
  mirrorCreated?: Maybe<MirrorCreated>;
  mirrorCreateds: Array<MirrorCreated>;
  networkAddress?: Maybe<NetworkAddress>;
  networkAddresses: Array<NetworkAddress>;
  nonceUpdated?: Maybe<NonceUpdated>;
  nonceUpdateds: Array<NonceUpdated>;
  ownedHandles?: Maybe<OwnedHandles>;
  ownedHandles_collection: Array<OwnedHandles>;
  post?: Maybe<Post>;
  postCreated?: Maybe<PostCreated>;
  postCreateds: Array<PostCreated>;
  postMetadata?: Maybe<PostMetadata>;
  postMetadata_collection: Array<PostMetadata>;
  posts: Array<Post>;
  profile?: Maybe<Profile>;
  profileCreated?: Maybe<ProfileCreated>;
  profileCreatedUsingCredits?: Maybe<ProfileCreatedUsingCredits>;
  profileCreatedUsingCredits_collection: Array<ProfileCreatedUsingCredits>;
  profileCreateds: Array<ProfileCreated>;
  profileCreationPriceChanged?: Maybe<ProfileCreationPriceChanged>;
  profileCreationPriceChangeds: Array<ProfileCreationPriceChanged>;
  profileCreatorWhitelisted?: Maybe<ProfileCreatorWhitelisted>;
  profileCreatorWhitelisteds: Array<ProfileCreatorWhitelisted>;
  profileMetadata?: Maybe<ProfileMetadata>;
  profileMetadataSet?: Maybe<ProfileMetadataSet>;
  profileMetadataSets: Array<ProfileMetadataSet>;
  profileMetadata_collection: Array<ProfileMetadata>;
  profileOperations?: Maybe<ProfileOperations>;
  profileOperations_collection: Array<ProfileOperations>;
  profiles: Array<Profile>;
  profilesManaged?: Maybe<ProfilesManaged>;
  profilesManageds: Array<ProfilesManaged>;
  publication?: Maybe<Publication>;
  publicationMetadata?: Maybe<PublicationMetadata>;
  publicationMetadataLitEncryption?: Maybe<PublicationMetadataLitEncryption>;
  publicationMetadataLitEncryptions: Array<PublicationMetadataLitEncryption>;
  publicationMetadataMedia?: Maybe<PublicationMetadataMedia>;
  publicationMetadataMedias: Array<PublicationMetadataMedia>;
  publicationMetadata_collection: Array<PublicationMetadata>;
  publicationStats?: Maybe<PublicationStats>;
  publicationStats_collection: Array<PublicationStats>;
  publications: Array<Publication>;
  querys?: Maybe<Querys>;
  querys_collection: Array<Querys>;
  quoteCreated?: Maybe<QuoteCreated>;
  quoteCreateds: Array<QuoteCreated>;
  registryEventsNonceUpdated?: Maybe<RegistryEventsNonceUpdated>;
  registryEventsNonceUpdateds: Array<RegistryEventsNonceUpdated>;
  simpleConditionSchema?: Maybe<SimpleConditionSchema>;
  simpleConditionSchemas: Array<SimpleConditionSchema>;
  stateSet?: Maybe<StateSet>;
  stateSets: Array<StateSet>;
  stats?: Maybe<Stats>;
  stats_collection: Array<Stats>;
  suggestedFormattedHandle?: Maybe<SuggestedFormattedHandle>;
  suggestedFormattedHandles: Array<SuggestedFormattedHandle>;
  tokenGuardianStateChanged?: Maybe<TokenGuardianStateChanged>;
  tokenGuardianStateChangeds: Array<TokenGuardianStateChanged>;
  tokenId?: Maybe<TokenId>;
  tokenIds: Array<TokenId>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  treasuryFeeSet?: Maybe<TreasuryFeeSet>;
  treasuryFeeSets: Array<TreasuryFeeSet>;
  treasurySet?: Maybe<TreasurySet>;
  treasurySets: Array<TreasurySet>;
  trustStatusChanged?: Maybe<TrustStatusChanged>;
  trustStatusChangeds: Array<TrustStatusChanged>;
  unblocked?: Maybe<Unblocked>;
  unblockeds: Array<Unblocked>;
  unfollowed?: Maybe<Unfollowed>;
  unfolloweds: Array<Unfollowed>;
  userSignedUp?: Maybe<UserSignedUp>;
  userSignedUps: Array<UserSignedUp>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryActedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryActedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Acted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Acted_Filter>;
};


export type QueryApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
};


export type QueryApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type QueryBaseInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBaseInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BaseInitialized_Filter>;
};


export type QueryBatchMetadataUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBatchMetadataUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BatchMetadataUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchMetadataUpdate_Filter>;
};


export type QueryBlockedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBlockedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Blocked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Blocked_Filter>;
};


export type QueryChallengeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChallengesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Challenge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Challenge_Filter>;
};


export type QueryCollectNftTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectNftTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollectNftTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectNftTransferred_Filter>;
};


export type QueryCommentCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCommentCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CommentCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CommentCreated_Filter>;
};


export type QueryCreditBalanceChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCreditBalanceChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CreditBalanceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CreditBalanceChanged_Filter>;
};


export type QueryCreditProviderStatusChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCreditProviderStatusChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CreditProviderStatusChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CreditProviderStatusChanged_Filter>;
};


export type QueryDateTimeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDateTimesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DateTime_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DateTime_Filter>;
};


export type QueryDelegatedExecutorsConfigAppliedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegatedExecutorsConfigAppliedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegatedExecutorsConfigApplied_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegatedExecutorsConfigApplied_Filter>;
};


export type QueryDelegatedExecutorsConfigChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegatedExecutorsConfigChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegatedExecutorsConfigChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegatedExecutorsConfigChanged_Filter>;
};


export type QueryEmergencyAdminSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEmergencyAdminSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EmergencyAdminSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EmergencyAdminSet_Filter>;
};


export type QueryEncryptableImageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEncryptableImageSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEncryptableImageSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EncryptableImageSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EncryptableImageSet_Filter>;
};


export type QueryEncryptableImagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EncryptableImage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EncryptableImage_Filter>;
};


export type QueryErc721ApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721ApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721ApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721ApprovalForAll_Filter>;
};


export type QueryErc721ApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Approval_Filter>;
};


export type QueryErc721TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Transfer_Filter>;
};


export type QueryEventsBatchMetadataUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsBatchMetadataUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsBatchMetadataUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsBatchMetadataUpdate_Filter>;
};


export type QueryEventsCollectNftTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsCollectNftTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsCollectNftTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsCollectNftTransferred_Filter>;
};


export type QueryEventsTokenGuardianStateChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsTokenGuardianStateChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsTokenGuardianStateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsTokenGuardianStateChanged_Filter>;
};


export type QueryEventsTreasuryFeeSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsTreasuryFeeSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsTreasuryFeeSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsTreasuryFeeSet_Filter>;
};


export type QueryEventsTreasurySetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsTreasurySetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsTreasurySet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsTreasurySet_Filter>;
};


export type QueryEventsUnfollowedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsUnfollowedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsUnfollowed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsUnfollowed_Filter>;
};


export type QueryEvmAddressArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEvmAddressesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EvmAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EvmAddress_Filter>;
};


export type QueryFollowModuleSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFollowModuleSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FollowModuleSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FollowModuleSet_Filter>;
};


export type QueryFollowNftDeployedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFollowNftDeployedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FollowNftDeployed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FollowNftDeployed_Filter>;
};


export type QueryFollowedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFollowedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Followed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Followed_Filter>;
};


export type QueryGovernanceSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernanceSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceSet_Filter>;
};


export type QueryHandleCreatedUsingCreditsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleCreatedUsingCredits_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleCreatedUsingCredits_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleCreatedUsingCredits_Filter>;
};


export type QueryHandleCreationPriceChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleCreationPriceChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleCreationPriceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleCreationPriceChanged_Filter>;
};


export type QueryHandleGuardianResultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleGuardianResultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleGuardianResult_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleGuardianResult_Filter>;
};


export type QueryHandleInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleInfo_Filter>;
};


export type QueryHandleLengthMinChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleLengthMinChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleLengthMinChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleLengthMinChanged_Filter>;
};


export type QueryHandleLinkedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleLinkedToArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleLinkedTosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleLinkedTo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleLinkedTo_Filter>;
};


export type QueryHandleLinkedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleLinked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleLinked_Filter>;
};


export type QueryHandleMintedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleMintedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleMinted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleMinted_Filter>;
};


export type QueryHandleToAddressArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleToAddressesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleToAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleToAddress_Filter>;
};


export type QueryHandleUnlinkedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHandleUnlinkedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleUnlinked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleUnlinked_Filter>;
};


export type QueryImageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryImageSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryImageSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImageSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ImageSet_Filter>;
};


export type QueryImagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Image_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Image_Filter>;
};


export type QueryLastLoggedInProfileArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLastLoggedInProfilesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LastLoggedInProfile_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LastLoggedInProfile_Filter>;
};


export type QueryLegacyCollectNftDeployedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLegacyCollectNftDeployedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LegacyCollectNftDeployed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LegacyCollectNftDeployed_Filter>;
};


export type QueryLensArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLensHubApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLensHubApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLensHubApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubApprovalForAll_Filter>;
};


export type QueryLensHubApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubApproval_Filter>;
};


export type QueryLensHubBatchMetadataUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLensHubBatchMetadataUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubBatchMetadataUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubBatchMetadataUpdate_Filter>;
};


export type QueryLensHubTokenGuardianStateChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLensHubTokenGuardianStateChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubTokenGuardianStateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubTokenGuardianStateChanged_Filter>;
};


export type QueryLensHubTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLensHubTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubTransfer_Filter>;
};


export type QueryLensUpgradeVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLensUpgradeVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensUpgradeVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensUpgradeVersion_Filter>;
};


export type QueryLens_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Lens_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Lens_Filter>;
};


export type QueryMarketplaceMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketplaceMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketplaceMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketplaceMetadata_Filter>;
};


export type QueryMetadataAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMetadataAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetadataAttribute_Filter>;
};


export type QueryMirrorCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMirrorCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MirrorCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MirrorCreated_Filter>;
};


export type QueryNetworkAddressArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNetworkAddressesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkAddress_Filter>;
};


export type QueryNonceUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNonceUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NonceUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NonceUpdated_Filter>;
};


export type QueryOwnedHandlesArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnedHandles_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnedHandles_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnedHandles_Filter>;
};


export type QueryPostArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPostCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPostCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PostCreated_Filter>;
};


export type QueryPostMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPostMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PostMetadata_Filter>;
};


export type QueryPostsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Post_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Post_Filter>;
};


export type QueryProfileArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfileCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfileCreatedUsingCreditsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfileCreatedUsingCredits_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileCreatedUsingCredits_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileCreatedUsingCredits_Filter>;
};


export type QueryProfileCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileCreated_Filter>;
};


export type QueryProfileCreationPriceChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfileCreationPriceChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileCreationPriceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileCreationPriceChanged_Filter>;
};


export type QueryProfileCreatorWhitelistedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfileCreatorWhitelistedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileCreatorWhitelisted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileCreatorWhitelisted_Filter>;
};


export type QueryProfileMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfileMetadataSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfileMetadataSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileMetadataSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileMetadataSet_Filter>;
};


export type QueryProfileMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileMetadata_Filter>;
};


export type QueryProfileOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfileOperations_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileOperations_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileOperations_Filter>;
};


export type QueryProfilesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Profile_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Profile_Filter>;
};


export type QueryProfilesManagedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProfilesManagedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfilesManaged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfilesManaged_Filter>;
};


export type QueryPublicationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPublicationMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPublicationMetadataLitEncryptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPublicationMetadataLitEncryptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicationMetadataLitEncryption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicationMetadataLitEncryption_Filter>;
};


export type QueryPublicationMetadataMediaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPublicationMetadataMediasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicationMetadataMedia_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicationMetadataMedia_Filter>;
};


export type QueryPublicationMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicationMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicationMetadata_Filter>;
};


export type QueryPublicationStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPublicationStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicationStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicationStats_Filter>;
};


export type QueryPublicationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Publication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Publication_Filter>;
};


export type QueryQuerysArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryQuerys_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Querys_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Querys_Filter>;
};


export type QueryQuoteCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryQuoteCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<QuoteCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<QuoteCreated_Filter>;
};


export type QueryRegistryEventsNonceUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRegistryEventsNonceUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RegistryEventsNonceUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RegistryEventsNonceUpdated_Filter>;
};


export type QuerySimpleConditionSchemaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySimpleConditionSchemasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SimpleConditionSchema_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SimpleConditionSchema_Filter>;
};


export type QueryStateSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStateSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StateSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StateSet_Filter>;
};


export type QueryStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stats_Filter>;
};


export type QuerySuggestedFormattedHandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySuggestedFormattedHandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuggestedFormattedHandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuggestedFormattedHandle_Filter>;
};


export type QueryTokenGuardianStateChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenGuardianStateChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenGuardianStateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenGuardianStateChanged_Filter>;
};


export type QueryTokenIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenIdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenId_Filter>;
};


export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type QueryTreasuryFeeSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTreasuryFeeSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasuryFeeSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryFeeSet_Filter>;
};


export type QueryTreasurySetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTreasurySetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasurySet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasurySet_Filter>;
};


export type QueryTrustStatusChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTrustStatusChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TrustStatusChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TrustStatusChanged_Filter>;
};


export type QueryUnblockedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnblockedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unblocked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unblocked_Filter>;
};


export type QueryUnfollowedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnfollowedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unfollowed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unfollowed_Filter>;
};


export type QueryUserSignedUpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserSignedUpsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserSignedUp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserSignedUp_Filter>;
};

export type Querys = {
  __typename?: 'Querys';
  handleToAddress: Array<HandleToAddress>;
  id: Scalars['Bytes']['output'];
};


export type QuerysHandleToAddressArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleToAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HandleToAddress_Filter>;
};

export type Querys_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Querys_Filter>>>;
  handleToAddress?: InputMaybe<Array<Scalars['String']['input']>>;
  handleToAddress_?: InputMaybe<HandleToAddress_Filter>;
  handleToAddress_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  handleToAddress_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  handleToAddress_not?: InputMaybe<Array<Scalars['String']['input']>>;
  handleToAddress_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  handleToAddress_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Querys_Filter>>>;
};

export enum Querys_OrderBy {
  HandleToAddress = 'handleToAddress',
  Id = 'id'
}

export type QuoteCreated = {
  __typename?: 'QuoteCreated';
  actionModulesInitReturnDatas: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  pubId: Scalars['BigInt']['output'];
  quoteParams_actionModules: Array<Scalars['Bytes']['output']>;
  quoteParams_actionModulesInitDatas: Array<Scalars['Bytes']['output']>;
  quoteParams_contentURI: Scalars['String']['output'];
  quoteParams_pointedProfileId: Scalars['BigInt']['output'];
  quoteParams_pointedPubId: Scalars['BigInt']['output'];
  quoteParams_profileId: Scalars['BigInt']['output'];
  quoteParams_referenceModule: Scalars['Bytes']['output'];
  quoteParams_referenceModuleData: Scalars['Bytes']['output'];
  quoteParams_referenceModuleInitData: Scalars['Bytes']['output'];
  quoteParams_referrerProfileIds: Array<Scalars['BigInt']['output']>;
  quoteParams_referrerPubIds: Array<Scalars['BigInt']['output']>;
  referenceModuleInitReturnData: Scalars['Bytes']['output'];
  referenceModuleReturnData: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type QuoteCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actionModulesInitReturnDatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  actionModulesInitReturnDatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<QuoteCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<QuoteCreated_Filter>>>;
  pubId?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  pubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_actionModules?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModulesInitDatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModulesInitDatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModulesInitDatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModulesInitDatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModulesInitDatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModulesInitDatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModules_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModules_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModules_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModules_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_actionModules_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_contentURI?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_contains?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_gt?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_gte?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteParams_contentURI_lt?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_lte?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_not?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteParams_contentURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteParams_contentURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteParams_pointedProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_pointedProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_pointedPubId?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedPubId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedPubId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedPubId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_pointedPubId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedPubId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedPubId_not?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_pointedPubId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_profileId?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_profileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_profileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_profileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_profileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_profileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_profileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  quoteParams_profileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referenceModule?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_referenceModuleData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData_not?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_referenceModuleInitData?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleInitData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleInitData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleInitData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleInitData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_referenceModuleInitData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleInitData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleInitData_not?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleInitData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModuleInitData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_referenceModule_contains?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModule_gt?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModule_gte?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModule_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_referenceModule_lt?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModule_lte?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModule_not?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModule_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  quoteParams_referenceModule_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quoteParams_referrerProfileIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerProfileIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerProfileIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerProfileIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerProfileIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerProfileIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerPubIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerPubIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerPubIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerPubIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerPubIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteParams_referrerPubIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  referenceModuleInitReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  referenceModuleInitReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleInitReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  referenceModuleReturnData?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  referenceModuleReturnData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  referenceModuleReturnData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum QuoteCreated_OrderBy {
  ActionModulesInitReturnDatas = 'actionModulesInitReturnDatas',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  PubId = 'pubId',
  QuoteParamsActionModules = 'quoteParams_actionModules',
  QuoteParamsActionModulesInitDatas = 'quoteParams_actionModulesInitDatas',
  QuoteParamsContentUri = 'quoteParams_contentURI',
  QuoteParamsPointedProfileId = 'quoteParams_pointedProfileId',
  QuoteParamsPointedPubId = 'quoteParams_pointedPubId',
  QuoteParamsProfileId = 'quoteParams_profileId',
  QuoteParamsReferenceModule = 'quoteParams_referenceModule',
  QuoteParamsReferenceModuleData = 'quoteParams_referenceModuleData',
  QuoteParamsReferenceModuleInitData = 'quoteParams_referenceModuleInitData',
  QuoteParamsReferrerProfileIds = 'quoteParams_referrerProfileIds',
  QuoteParamsReferrerPubIds = 'quoteParams_referrerPubIds',
  ReferenceModuleInitReturnData = 'referenceModuleInitReturnData',
  ReferenceModuleReturnData = 'referenceModuleReturnData',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type RegistryEventsNonceUpdated = {
  __typename?: 'RegistryEventsNonceUpdated';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  signer: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RegistryEventsNonceUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RegistryEventsNonceUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RegistryEventsNonceUpdated_Filter>>>;
  signer?: InputMaybe<Scalars['Bytes']['input']>;
  signer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  signer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  signer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  signer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  signer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  signer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  signer_not?: InputMaybe<Scalars['Bytes']['input']>;
  signer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  signer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RegistryEventsNonceUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Nonce = 'nonce',
  Signer = 'signer',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type SimpleConditionSchema = {
  __typename?: 'SimpleConditionSchema';
  address?: Maybe<Scalars['String']['output']>;
  encryptionKey?: Maybe<Scalars['Bytes']['output']>;
  id: Scalars['String']['output'];
  publicKey?: Maybe<Scalars['Bytes']['output']>;
};

export type SimpleConditionSchema_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<SimpleConditionSchema_Filter>>>;
  encryptionKey?: InputMaybe<Scalars['Bytes']['input']>;
  encryptionKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encryptionKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
  encryptionKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
  encryptionKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  encryptionKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
  encryptionKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
  encryptionKey_not?: InputMaybe<Scalars['Bytes']['input']>;
  encryptionKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encryptionKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SimpleConditionSchema_Filter>>>;
  publicKey?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SimpleConditionSchema_OrderBy {
  Address = 'address',
  EncryptionKey = 'encryptionKey',
  Id = 'id',
  PublicKey = 'publicKey'
}

export type StateSet = {
  __typename?: 'StateSet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  caller: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  newState: Scalars['Int']['output'];
  prevState: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StateSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StateSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newState?: InputMaybe<Scalars['Int']['input']>;
  newState_gt?: InputMaybe<Scalars['Int']['input']>;
  newState_gte?: InputMaybe<Scalars['Int']['input']>;
  newState_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  newState_lt?: InputMaybe<Scalars['Int']['input']>;
  newState_lte?: InputMaybe<Scalars['Int']['input']>;
  newState_not?: InputMaybe<Scalars['Int']['input']>;
  newState_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StateSet_Filter>>>;
  prevState?: InputMaybe<Scalars['Int']['input']>;
  prevState_gt?: InputMaybe<Scalars['Int']['input']>;
  prevState_gte?: InputMaybe<Scalars['Int']['input']>;
  prevState_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  prevState_lt?: InputMaybe<Scalars['Int']['input']>;
  prevState_lte?: InputMaybe<Scalars['Int']['input']>;
  prevState_not?: InputMaybe<Scalars['Int']['input']>;
  prevState_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum StateSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Caller = 'caller',
  Id = 'id',
  NewState = 'newState',
  PrevState = 'prevState',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Stats = {
  __typename?: 'Stats';
  followers?: Maybe<Scalars['Int']['output']>;
  following?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Bytes']['output'];
};

export type Stats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stats_Filter>>>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  followers_gt?: InputMaybe<Scalars['Int']['input']>;
  followers_gte?: InputMaybe<Scalars['Int']['input']>;
  followers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  followers_lt?: InputMaybe<Scalars['Int']['input']>;
  followers_lte?: InputMaybe<Scalars['Int']['input']>;
  followers_not?: InputMaybe<Scalars['Int']['input']>;
  followers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  following?: InputMaybe<Scalars['Int']['input']>;
  following_gt?: InputMaybe<Scalars['Int']['input']>;
  following_gte?: InputMaybe<Scalars['Int']['input']>;
  following_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  following_lt?: InputMaybe<Scalars['Int']['input']>;
  following_lte?: InputMaybe<Scalars['Int']['input']>;
  following_not?: InputMaybe<Scalars['Int']['input']>;
  following_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Stats_Filter>>>;
};

export enum Stats_OrderBy {
  Followers = 'followers',
  Following = 'following',
  Id = 'id'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  acted?: Maybe<Acted>;
  acteds: Array<Acted>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  baseInitialized?: Maybe<BaseInitialized>;
  baseInitializeds: Array<BaseInitialized>;
  batchMetadataUpdate?: Maybe<BatchMetadataUpdate>;
  batchMetadataUpdates: Array<BatchMetadataUpdate>;
  blocked?: Maybe<Blocked>;
  blockeds: Array<Blocked>;
  challenge?: Maybe<Challenge>;
  challenges: Array<Challenge>;
  collectNFTTransferred?: Maybe<CollectNftTransferred>;
  collectNFTTransferreds: Array<CollectNftTransferred>;
  commentCreated?: Maybe<CommentCreated>;
  commentCreateds: Array<CommentCreated>;
  creditBalanceChanged?: Maybe<CreditBalanceChanged>;
  creditBalanceChangeds: Array<CreditBalanceChanged>;
  creditProviderStatusChanged?: Maybe<CreditProviderStatusChanged>;
  creditProviderStatusChangeds: Array<CreditProviderStatusChanged>;
  dateTime?: Maybe<DateTime>;
  dateTimes: Array<DateTime>;
  delegatedExecutorsConfigApplied?: Maybe<DelegatedExecutorsConfigApplied>;
  delegatedExecutorsConfigApplieds: Array<DelegatedExecutorsConfigApplied>;
  delegatedExecutorsConfigChanged?: Maybe<DelegatedExecutorsConfigChanged>;
  delegatedExecutorsConfigChangeds: Array<DelegatedExecutorsConfigChanged>;
  emergencyAdminSet?: Maybe<EmergencyAdminSet>;
  emergencyAdminSets: Array<EmergencyAdminSet>;
  encryptableImage?: Maybe<EncryptableImage>;
  encryptableImageSet?: Maybe<EncryptableImageSet>;
  encryptableImageSets: Array<EncryptableImageSet>;
  encryptableImages: Array<EncryptableImage>;
  erc721Approval?: Maybe<Erc721Approval>;
  erc721ApprovalForAll?: Maybe<Erc721ApprovalForAll>;
  erc721ApprovalForAlls: Array<Erc721ApprovalForAll>;
  erc721Approvals: Array<Erc721Approval>;
  erc721Transfer?: Maybe<Erc721Transfer>;
  erc721Transfers: Array<Erc721Transfer>;
  eventsBatchMetadataUpdate?: Maybe<EventsBatchMetadataUpdate>;
  eventsBatchMetadataUpdates: Array<EventsBatchMetadataUpdate>;
  eventsCollectNFTTransferred?: Maybe<EventsCollectNftTransferred>;
  eventsCollectNFTTransferreds: Array<EventsCollectNftTransferred>;
  eventsTokenGuardianStateChanged?: Maybe<EventsTokenGuardianStateChanged>;
  eventsTokenGuardianStateChangeds: Array<EventsTokenGuardianStateChanged>;
  eventsTreasuryFeeSet?: Maybe<EventsTreasuryFeeSet>;
  eventsTreasuryFeeSets: Array<EventsTreasuryFeeSet>;
  eventsTreasurySet?: Maybe<EventsTreasurySet>;
  eventsTreasurySets: Array<EventsTreasurySet>;
  eventsUnfollowed?: Maybe<EventsUnfollowed>;
  eventsUnfolloweds: Array<EventsUnfollowed>;
  evmAddress?: Maybe<EvmAddress>;
  evmAddresses: Array<EvmAddress>;
  followModuleSet?: Maybe<FollowModuleSet>;
  followModuleSets: Array<FollowModuleSet>;
  followNFTDeployed?: Maybe<FollowNftDeployed>;
  followNFTDeployeds: Array<FollowNftDeployed>;
  followed?: Maybe<Followed>;
  followeds: Array<Followed>;
  governanceSet?: Maybe<GovernanceSet>;
  governanceSets: Array<GovernanceSet>;
  handleCreatedUsingCredits?: Maybe<HandleCreatedUsingCredits>;
  handleCreatedUsingCredits_collection: Array<HandleCreatedUsingCredits>;
  handleCreationPriceChanged?: Maybe<HandleCreationPriceChanged>;
  handleCreationPriceChangeds: Array<HandleCreationPriceChanged>;
  handleGuardianResult?: Maybe<HandleGuardianResult>;
  handleGuardianResults: Array<HandleGuardianResult>;
  handleInfo?: Maybe<HandleInfo>;
  handleInfos: Array<HandleInfo>;
  handleLengthMinChanged?: Maybe<HandleLengthMinChanged>;
  handleLengthMinChangeds: Array<HandleLengthMinChanged>;
  handleLinked?: Maybe<HandleLinked>;
  handleLinkedTo?: Maybe<HandleLinkedTo>;
  handleLinkedTos: Array<HandleLinkedTo>;
  handleLinkeds: Array<HandleLinked>;
  handleMinted?: Maybe<HandleMinted>;
  handleMinteds: Array<HandleMinted>;
  handleToAddress?: Maybe<HandleToAddress>;
  handleToAddresses: Array<HandleToAddress>;
  handleUnlinked?: Maybe<HandleUnlinked>;
  handleUnlinkeds: Array<HandleUnlinked>;
  image?: Maybe<Image>;
  imageSet?: Maybe<ImageSet>;
  imageSets: Array<ImageSet>;
  images: Array<Image>;
  lastLoggedInProfile?: Maybe<LastLoggedInProfile>;
  lastLoggedInProfiles: Array<LastLoggedInProfile>;
  legacyCollectNFTDeployed?: Maybe<LegacyCollectNftDeployed>;
  legacyCollectNFTDeployeds: Array<LegacyCollectNftDeployed>;
  lens?: Maybe<Lens>;
  lensHubApproval?: Maybe<LensHubApproval>;
  lensHubApprovalForAll?: Maybe<LensHubApprovalForAll>;
  lensHubApprovalForAlls: Array<LensHubApprovalForAll>;
  lensHubApprovals: Array<LensHubApproval>;
  lensHubBatchMetadataUpdate?: Maybe<LensHubBatchMetadataUpdate>;
  lensHubBatchMetadataUpdates: Array<LensHubBatchMetadataUpdate>;
  lensHubTokenGuardianStateChanged?: Maybe<LensHubTokenGuardianStateChanged>;
  lensHubTokenGuardianStateChangeds: Array<LensHubTokenGuardianStateChanged>;
  lensHubTransfer?: Maybe<LensHubTransfer>;
  lensHubTransfers: Array<LensHubTransfer>;
  lensUpgradeVersion?: Maybe<LensUpgradeVersion>;
  lensUpgradeVersions: Array<LensUpgradeVersion>;
  lens_collection: Array<Lens>;
  marketplaceMetadata?: Maybe<MarketplaceMetadata>;
  marketplaceMetadata_collection: Array<MarketplaceMetadata>;
  metadataAttribute?: Maybe<MetadataAttribute>;
  metadataAttributes: Array<MetadataAttribute>;
  mirrorCreated?: Maybe<MirrorCreated>;
  mirrorCreateds: Array<MirrorCreated>;
  networkAddress?: Maybe<NetworkAddress>;
  networkAddresses: Array<NetworkAddress>;
  nonceUpdated?: Maybe<NonceUpdated>;
  nonceUpdateds: Array<NonceUpdated>;
  ownedHandles?: Maybe<OwnedHandles>;
  ownedHandles_collection: Array<OwnedHandles>;
  post?: Maybe<Post>;
  postCreated?: Maybe<PostCreated>;
  postCreateds: Array<PostCreated>;
  postMetadata?: Maybe<PostMetadata>;
  postMetadata_collection: Array<PostMetadata>;
  posts: Array<Post>;
  profile?: Maybe<Profile>;
  profileCreated?: Maybe<ProfileCreated>;
  profileCreatedUsingCredits?: Maybe<ProfileCreatedUsingCredits>;
  profileCreatedUsingCredits_collection: Array<ProfileCreatedUsingCredits>;
  profileCreateds: Array<ProfileCreated>;
  profileCreationPriceChanged?: Maybe<ProfileCreationPriceChanged>;
  profileCreationPriceChangeds: Array<ProfileCreationPriceChanged>;
  profileCreatorWhitelisted?: Maybe<ProfileCreatorWhitelisted>;
  profileCreatorWhitelisteds: Array<ProfileCreatorWhitelisted>;
  profileMetadata?: Maybe<ProfileMetadata>;
  profileMetadataSet?: Maybe<ProfileMetadataSet>;
  profileMetadataSets: Array<ProfileMetadataSet>;
  profileMetadata_collection: Array<ProfileMetadata>;
  profileOperations?: Maybe<ProfileOperations>;
  profileOperations_collection: Array<ProfileOperations>;
  profiles: Array<Profile>;
  profilesManaged?: Maybe<ProfilesManaged>;
  profilesManageds: Array<ProfilesManaged>;
  publication?: Maybe<Publication>;
  publicationMetadata?: Maybe<PublicationMetadata>;
  publicationMetadataLitEncryption?: Maybe<PublicationMetadataLitEncryption>;
  publicationMetadataLitEncryptions: Array<PublicationMetadataLitEncryption>;
  publicationMetadataMedia?: Maybe<PublicationMetadataMedia>;
  publicationMetadataMedias: Array<PublicationMetadataMedia>;
  publicationMetadata_collection: Array<PublicationMetadata>;
  publicationStats?: Maybe<PublicationStats>;
  publicationStats_collection: Array<PublicationStats>;
  publications: Array<Publication>;
  querys?: Maybe<Querys>;
  querys_collection: Array<Querys>;
  quoteCreated?: Maybe<QuoteCreated>;
  quoteCreateds: Array<QuoteCreated>;
  registryEventsNonceUpdated?: Maybe<RegistryEventsNonceUpdated>;
  registryEventsNonceUpdateds: Array<RegistryEventsNonceUpdated>;
  simpleConditionSchema?: Maybe<SimpleConditionSchema>;
  simpleConditionSchemas: Array<SimpleConditionSchema>;
  stateSet?: Maybe<StateSet>;
  stateSets: Array<StateSet>;
  stats?: Maybe<Stats>;
  stats_collection: Array<Stats>;
  suggestedFormattedHandle?: Maybe<SuggestedFormattedHandle>;
  suggestedFormattedHandles: Array<SuggestedFormattedHandle>;
  tokenGuardianStateChanged?: Maybe<TokenGuardianStateChanged>;
  tokenGuardianStateChangeds: Array<TokenGuardianStateChanged>;
  tokenId?: Maybe<TokenId>;
  tokenIds: Array<TokenId>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  treasuryFeeSet?: Maybe<TreasuryFeeSet>;
  treasuryFeeSets: Array<TreasuryFeeSet>;
  treasurySet?: Maybe<TreasurySet>;
  treasurySets: Array<TreasurySet>;
  trustStatusChanged?: Maybe<TrustStatusChanged>;
  trustStatusChangeds: Array<TrustStatusChanged>;
  unblocked?: Maybe<Unblocked>;
  unblockeds: Array<Unblocked>;
  unfollowed?: Maybe<Unfollowed>;
  unfolloweds: Array<Unfollowed>;
  userSignedUp?: Maybe<UserSignedUp>;
  userSignedUps: Array<UserSignedUp>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionActedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionActedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Acted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Acted_Filter>;
};


export type SubscriptionApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
};


export type SubscriptionApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type SubscriptionBaseInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBaseInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BaseInitialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BaseInitialized_Filter>;
};


export type SubscriptionBatchMetadataUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBatchMetadataUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BatchMetadataUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchMetadataUpdate_Filter>;
};


export type SubscriptionBlockedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBlockedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Blocked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Blocked_Filter>;
};


export type SubscriptionChallengeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChallengesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Challenge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Challenge_Filter>;
};


export type SubscriptionCollectNftTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectNftTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollectNftTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectNftTransferred_Filter>;
};


export type SubscriptionCommentCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCommentCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CommentCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CommentCreated_Filter>;
};


export type SubscriptionCreditBalanceChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCreditBalanceChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CreditBalanceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CreditBalanceChanged_Filter>;
};


export type SubscriptionCreditProviderStatusChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCreditProviderStatusChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CreditProviderStatusChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CreditProviderStatusChanged_Filter>;
};


export type SubscriptionDateTimeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDateTimesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DateTime_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DateTime_Filter>;
};


export type SubscriptionDelegatedExecutorsConfigAppliedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegatedExecutorsConfigAppliedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegatedExecutorsConfigApplied_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegatedExecutorsConfigApplied_Filter>;
};


export type SubscriptionDelegatedExecutorsConfigChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegatedExecutorsConfigChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegatedExecutorsConfigChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegatedExecutorsConfigChanged_Filter>;
};


export type SubscriptionEmergencyAdminSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEmergencyAdminSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EmergencyAdminSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EmergencyAdminSet_Filter>;
};


export type SubscriptionEncryptableImageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEncryptableImageSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEncryptableImageSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EncryptableImageSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EncryptableImageSet_Filter>;
};


export type SubscriptionEncryptableImagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EncryptableImage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EncryptableImage_Filter>;
};


export type SubscriptionErc721ApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721ApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721ApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721ApprovalForAll_Filter>;
};


export type SubscriptionErc721ApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Approval_Filter>;
};


export type SubscriptionErc721TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Transfer_Filter>;
};


export type SubscriptionEventsBatchMetadataUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsBatchMetadataUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsBatchMetadataUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsBatchMetadataUpdate_Filter>;
};


export type SubscriptionEventsCollectNftTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsCollectNftTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsCollectNftTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsCollectNftTransferred_Filter>;
};


export type SubscriptionEventsTokenGuardianStateChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsTokenGuardianStateChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsTokenGuardianStateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsTokenGuardianStateChanged_Filter>;
};


export type SubscriptionEventsTreasuryFeeSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsTreasuryFeeSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsTreasuryFeeSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsTreasuryFeeSet_Filter>;
};


export type SubscriptionEventsTreasurySetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsTreasurySetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsTreasurySet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsTreasurySet_Filter>;
};


export type SubscriptionEventsUnfollowedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsUnfollowedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventsUnfollowed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EventsUnfollowed_Filter>;
};


export type SubscriptionEvmAddressArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEvmAddressesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EvmAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EvmAddress_Filter>;
};


export type SubscriptionFollowModuleSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFollowModuleSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FollowModuleSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FollowModuleSet_Filter>;
};


export type SubscriptionFollowNftDeployedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFollowNftDeployedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FollowNftDeployed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FollowNftDeployed_Filter>;
};


export type SubscriptionFollowedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFollowedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Followed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Followed_Filter>;
};


export type SubscriptionGovernanceSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernanceSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceSet_Filter>;
};


export type SubscriptionHandleCreatedUsingCreditsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleCreatedUsingCredits_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleCreatedUsingCredits_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleCreatedUsingCredits_Filter>;
};


export type SubscriptionHandleCreationPriceChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleCreationPriceChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleCreationPriceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleCreationPriceChanged_Filter>;
};


export type SubscriptionHandleGuardianResultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleGuardianResultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleGuardianResult_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleGuardianResult_Filter>;
};


export type SubscriptionHandleInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleInfo_Filter>;
};


export type SubscriptionHandleLengthMinChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleLengthMinChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleLengthMinChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleLengthMinChanged_Filter>;
};


export type SubscriptionHandleLinkedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleLinkedToArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleLinkedTosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleLinkedTo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleLinkedTo_Filter>;
};


export type SubscriptionHandleLinkedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleLinked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleLinked_Filter>;
};


export type SubscriptionHandleMintedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleMintedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleMinted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleMinted_Filter>;
};


export type SubscriptionHandleToAddressArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleToAddressesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleToAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleToAddress_Filter>;
};


export type SubscriptionHandleUnlinkedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHandleUnlinkedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HandleUnlinked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HandleUnlinked_Filter>;
};


export type SubscriptionImageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionImageSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionImageSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ImageSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ImageSet_Filter>;
};


export type SubscriptionImagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Image_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Image_Filter>;
};


export type SubscriptionLastLoggedInProfileArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLastLoggedInProfilesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LastLoggedInProfile_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LastLoggedInProfile_Filter>;
};


export type SubscriptionLegacyCollectNftDeployedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLegacyCollectNftDeployedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LegacyCollectNftDeployed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LegacyCollectNftDeployed_Filter>;
};


export type SubscriptionLensArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLensHubApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLensHubApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLensHubApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubApprovalForAll_Filter>;
};


export type SubscriptionLensHubApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubApproval_Filter>;
};


export type SubscriptionLensHubBatchMetadataUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLensHubBatchMetadataUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubBatchMetadataUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubBatchMetadataUpdate_Filter>;
};


export type SubscriptionLensHubTokenGuardianStateChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLensHubTokenGuardianStateChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubTokenGuardianStateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubTokenGuardianStateChanged_Filter>;
};


export type SubscriptionLensHubTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLensHubTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensHubTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensHubTransfer_Filter>;
};


export type SubscriptionLensUpgradeVersionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLensUpgradeVersionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LensUpgradeVersion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LensUpgradeVersion_Filter>;
};


export type SubscriptionLens_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Lens_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Lens_Filter>;
};


export type SubscriptionMarketplaceMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketplaceMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketplaceMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketplaceMetadata_Filter>;
};


export type SubscriptionMetadataAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMetadataAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetadataAttribute_Filter>;
};


export type SubscriptionMirrorCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMirrorCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MirrorCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MirrorCreated_Filter>;
};


export type SubscriptionNetworkAddressArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNetworkAddressesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkAddress_Filter>;
};


export type SubscriptionNonceUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNonceUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NonceUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NonceUpdated_Filter>;
};


export type SubscriptionOwnedHandlesArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnedHandles_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnedHandles_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnedHandles_Filter>;
};


export type SubscriptionPostArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPostCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPostCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PostCreated_Filter>;
};


export type SubscriptionPostMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPostMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PostMetadata_Filter>;
};


export type SubscriptionPostsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Post_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Post_Filter>;
};


export type SubscriptionProfileArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfileCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfileCreatedUsingCreditsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfileCreatedUsingCredits_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileCreatedUsingCredits_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileCreatedUsingCredits_Filter>;
};


export type SubscriptionProfileCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileCreated_Filter>;
};


export type SubscriptionProfileCreationPriceChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfileCreationPriceChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileCreationPriceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileCreationPriceChanged_Filter>;
};


export type SubscriptionProfileCreatorWhitelistedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfileCreatorWhitelistedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileCreatorWhitelisted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileCreatorWhitelisted_Filter>;
};


export type SubscriptionProfileMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfileMetadataSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfileMetadataSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileMetadataSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileMetadataSet_Filter>;
};


export type SubscriptionProfileMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileMetadata_Filter>;
};


export type SubscriptionProfileOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfileOperations_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfileOperations_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfileOperations_Filter>;
};


export type SubscriptionProfilesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Profile_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Profile_Filter>;
};


export type SubscriptionProfilesManagedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProfilesManagedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProfilesManaged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProfilesManaged_Filter>;
};


export type SubscriptionPublicationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPublicationMetadataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPublicationMetadataLitEncryptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPublicationMetadataLitEncryptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicationMetadataLitEncryption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicationMetadataLitEncryption_Filter>;
};


export type SubscriptionPublicationMetadataMediaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPublicationMetadataMediasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicationMetadataMedia_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicationMetadataMedia_Filter>;
};


export type SubscriptionPublicationMetadata_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicationMetadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicationMetadata_Filter>;
};


export type SubscriptionPublicationStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPublicationStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicationStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicationStats_Filter>;
};


export type SubscriptionPublicationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Publication_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Publication_Filter>;
};


export type SubscriptionQuerysArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionQuerys_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Querys_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Querys_Filter>;
};


export type SubscriptionQuoteCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionQuoteCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<QuoteCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<QuoteCreated_Filter>;
};


export type SubscriptionRegistryEventsNonceUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRegistryEventsNonceUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RegistryEventsNonceUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RegistryEventsNonceUpdated_Filter>;
};


export type SubscriptionSimpleConditionSchemaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSimpleConditionSchemasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SimpleConditionSchema_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SimpleConditionSchema_Filter>;
};


export type SubscriptionStateSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStateSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StateSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StateSet_Filter>;
};


export type SubscriptionStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stats_Filter>;
};


export type SubscriptionSuggestedFormattedHandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSuggestedFormattedHandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SuggestedFormattedHandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SuggestedFormattedHandle_Filter>;
};


export type SubscriptionTokenGuardianStateChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenGuardianStateChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenGuardianStateChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenGuardianStateChanged_Filter>;
};


export type SubscriptionTokenIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenIdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenId_Filter>;
};


export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type SubscriptionTreasuryFeeSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTreasuryFeeSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasuryFeeSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryFeeSet_Filter>;
};


export type SubscriptionTreasurySetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTreasurySetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TreasurySet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasurySet_Filter>;
};


export type SubscriptionTrustStatusChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTrustStatusChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TrustStatusChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TrustStatusChanged_Filter>;
};


export type SubscriptionUnblockedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnblockedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unblocked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unblocked_Filter>;
};


export type SubscriptionUnfollowedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnfollowedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Unfollowed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unfollowed_Filter>;
};


export type SubscriptionUserSignedUpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserSignedUpsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserSignedUp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserSignedUp_Filter>;
};

export type SuggestedFormattedHandle = {
  __typename?: 'SuggestedFormattedHandle';
  full: Scalars['String']['output'];
  id: Scalars['Bytes']['output'];
  localName: Scalars['String']['output'];
};

export type SuggestedFormattedHandle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SuggestedFormattedHandle_Filter>>>;
  full?: InputMaybe<Scalars['String']['input']>;
  full_contains?: InputMaybe<Scalars['String']['input']>;
  full_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  full_ends_with?: InputMaybe<Scalars['String']['input']>;
  full_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  full_gt?: InputMaybe<Scalars['String']['input']>;
  full_gte?: InputMaybe<Scalars['String']['input']>;
  full_in?: InputMaybe<Array<Scalars['String']['input']>>;
  full_lt?: InputMaybe<Scalars['String']['input']>;
  full_lte?: InputMaybe<Scalars['String']['input']>;
  full_not?: InputMaybe<Scalars['String']['input']>;
  full_not_contains?: InputMaybe<Scalars['String']['input']>;
  full_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  full_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  full_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  full_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  full_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  full_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  full_starts_with?: InputMaybe<Scalars['String']['input']>;
  full_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  localName?: InputMaybe<Scalars['String']['input']>;
  localName_contains?: InputMaybe<Scalars['String']['input']>;
  localName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_ends_with?: InputMaybe<Scalars['String']['input']>;
  localName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_gt?: InputMaybe<Scalars['String']['input']>;
  localName_gte?: InputMaybe<Scalars['String']['input']>;
  localName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  localName_lt?: InputMaybe<Scalars['String']['input']>;
  localName_lte?: InputMaybe<Scalars['String']['input']>;
  localName_not?: InputMaybe<Scalars['String']['input']>;
  localName_not_contains?: InputMaybe<Scalars['String']['input']>;
  localName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  localName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  localName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  localName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  localName_starts_with?: InputMaybe<Scalars['String']['input']>;
  localName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SuggestedFormattedHandle_Filter>>>;
};

export enum SuggestedFormattedHandle_OrderBy {
  Full = 'full',
  Id = 'id',
  LocalName = 'localName'
}

export type TokenGuardianStateChanged = {
  __typename?: 'TokenGuardianStateChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  tokenGuardianDisablingTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  wallet: Scalars['Bytes']['output'];
};

export type TokenGuardianStateChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenGuardianStateChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenGuardianStateChanged_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenGuardianDisablingTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenGuardianDisablingTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenGuardianDisablingTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  wallet?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_gt?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_gte?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  wallet_lt?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_lte?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wallet_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TokenGuardianStateChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Enabled = 'enabled',
  Id = 'id',
  Timestamp = 'timestamp',
  TokenGuardianDisablingTimestamp = 'tokenGuardianDisablingTimestamp',
  TransactionHash = 'transactionHash',
  Wallet = 'wallet'
}

export type TokenId = {
  __typename?: 'TokenId';
  id: Scalars['Bytes']['output'];
  value: Scalars['Bytes']['output'];
};

export type TokenId_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenId_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenId_Filter>>>;
  value?: InputMaybe<Scalars['Bytes']['input']>;
  value_contains?: InputMaybe<Scalars['Bytes']['input']>;
  value_gt?: InputMaybe<Scalars['Bytes']['input']>;
  value_gte?: InputMaybe<Scalars['Bytes']['input']>;
  value_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  value_lt?: InputMaybe<Scalars['Bytes']['input']>;
  value_lte?: InputMaybe<Scalars['Bytes']['input']>;
  value_not?: InputMaybe<Scalars['Bytes']['input']>;
  value_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TokenId_OrderBy {
  Id = 'id',
  Value = 'value'
}

export type Transfer = {
  __typename?: 'Transfer';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Transfer_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  From = 'from',
  Id = 'id',
  To = 'to',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type TreasuryFeeSet = {
  __typename?: 'TreasuryFeeSet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newTreasuryFee: Scalars['Int']['output'];
  prevTreasuryFee: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TreasuryFeeSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TreasuryFeeSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newTreasuryFee?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_gt?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_gte?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  newTreasuryFee_lt?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_lte?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_not?: InputMaybe<Scalars['Int']['input']>;
  newTreasuryFee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TreasuryFeeSet_Filter>>>;
  prevTreasuryFee?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_gt?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_gte?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  prevTreasuryFee_lt?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_lte?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_not?: InputMaybe<Scalars['Int']['input']>;
  prevTreasuryFee_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TreasuryFeeSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewTreasuryFee = 'newTreasuryFee',
  PrevTreasuryFee = 'prevTreasuryFee',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type TreasurySet = {
  __typename?: 'TreasurySet';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newTreasury: Scalars['Bytes']['output'];
  prevTreasury: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TreasurySet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TreasurySet_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newTreasury?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newTreasury_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newTreasury_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TreasurySet_Filter>>>;
  prevTreasury?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_contains?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_gt?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_gte?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  prevTreasury_lt?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_lte?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_not?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  prevTreasury_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TreasurySet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewTreasury = 'newTreasury',
  PrevTreasury = 'prevTreasury',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type TrustStatusChanged = {
  __typename?: 'TrustStatusChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  isUntrusted: Scalars['Boolean']['output'];
  targetAddress: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TrustStatusChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TrustStatusChanged_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isUntrusted?: InputMaybe<Scalars['Boolean']['input']>;
  isUntrusted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isUntrusted_not?: InputMaybe<Scalars['Boolean']['input']>;
  isUntrusted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TrustStatusChanged_Filter>>>;
  targetAddress?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targetAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  targetAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TrustStatusChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  IsUntrusted = 'isUntrusted',
  TargetAddress = 'targetAddress',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type Unblocked = {
  __typename?: 'Unblocked';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  byProfileId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  idOfProfileUnblocked: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Unblocked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Unblocked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  byProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  byProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  byProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  idOfProfileUnblocked?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnblocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnblocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnblocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  idOfProfileUnblocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnblocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnblocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnblocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Unblocked_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Unblocked_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ByProfileId = 'byProfileId',
  Id = 'id',
  IdOfProfileUnblocked = 'idOfProfileUnblocked',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash'
}

export type Unfollowed = {
  __typename?: 'Unfollowed';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  idOfProfileUnfollowed: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionExecutor: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  unfollowerProfileId: Scalars['BigInt']['output'];
};

export type Unfollowed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Unfollowed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  idOfProfileUnfollowed?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  idOfProfileUnfollowed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_not?: InputMaybe<Scalars['BigInt']['input']>;
  idOfProfileUnfollowed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Unfollowed_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  unfollowerProfileId?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unfollowerProfileId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_not?: InputMaybe<Scalars['BigInt']['input']>;
  unfollowerProfileId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Unfollowed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  IdOfProfileUnfollowed = 'idOfProfileUnfollowed',
  Timestamp = 'timestamp',
  TransactionExecutor = 'transactionExecutor',
  TransactionHash = 'transactionHash',
  UnfollowerProfileId = 'unfollowerProfileId'
}

export type UserSignedUp = {
  __typename?: 'UserSignedUp';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  encPrivateKey: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  publicKey: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type UserSignedUp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserSignedUp_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  encPrivateKey?: InputMaybe<Scalars['Bytes']['input']>;
  encPrivateKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encPrivateKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
  encPrivateKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
  encPrivateKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  encPrivateKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
  encPrivateKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
  encPrivateKey_not?: InputMaybe<Scalars['Bytes']['input']>;
  encPrivateKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encPrivateKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UserSignedUp_Filter>>>;
  publicKey?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum UserSignedUp_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  EncPrivateKey = 'encPrivateKey',
  Id = 'id',
  PublicKey = 'publicKey',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type LastLoggedInProfile = {
  __typename?: 'lastLoggedInProfile';
  id: Scalars['Bytes']['output'];
  profile: Profile;
};

export type LastLoggedInProfile_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LastLoggedInProfile_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LastLoggedInProfile_Filter>>>;
  profile?: InputMaybe<Scalars['String']['input']>;
  profile_?: InputMaybe<Profile_Filter>;
  profile_contains?: InputMaybe<Scalars['String']['input']>;
  profile_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_ends_with?: InputMaybe<Scalars['String']['input']>;
  profile_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_gt?: InputMaybe<Scalars['String']['input']>;
  profile_gte?: InputMaybe<Scalars['String']['input']>;
  profile_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profile_lt?: InputMaybe<Scalars['String']['input']>;
  profile_lte?: InputMaybe<Scalars['String']['input']>;
  profile_not?: InputMaybe<Scalars['String']['input']>;
  profile_not_contains?: InputMaybe<Scalars['String']['input']>;
  profile_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  profile_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profile_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  profile_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profile_starts_with?: InputMaybe<Scalars['String']['input']>;
  profile_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum LastLoggedInProfile_OrderBy {
  Id = 'id',
  Profile = 'profile',
  ProfileCreatedAt = 'profile__createdAt',
  ProfileFollowModule = 'profile__followModule',
  ProfileId = 'profile__id',
  ProfileOwnedBy = 'profile__ownedBy',
  ProfilePeerToPeerRecommendedByMe = 'profile__peerToPeerRecommendedByMe'
}

export type AnyPublicationMetadataFieldsFragment = { __typename?: 'PublicationMetadata', id: string, content?: string | null, tags?: Array<string> | null, title?: string | null, mainContentFocus?: string | null, sharingLink?: string | null, encryptedWith?: { __typename: 'PublicationMetadataLitEncryption', id: string, encryptedPaths?: Array<string> | null, encryptionKey: string, accessCondition?: Array<{ __typename: 'SimpleConditionSchema', id: string, address?: string | null, publicKey?: any | null, encryptionKey?: any | null }> | null } | null, attributes?: Array<(
      { __typename?: 'MetadataAttribute' }
      & MetadataAttributeFieldsFragment
      )> | null, asset?: { __typename?: 'PublicationMetadataMedia', artist?: string | null, license?: PublicationMetadataLicenseType | null, video?: { __typename?: 'EncryptableImageSet', optimized?: { __typename?: 'Image', uri: string } | null, raw?: (
          { __typename?: 'EncryptableImage' }
          & EncryptableImageFieldsFragment
          ) | null } | null, cover?: { __typename?: 'EncryptableImageSet', optimized?: { __typename?: 'Image', uri: string } | null, raw?: (
          { __typename?: 'EncryptableImage' }
          & EncryptableImageFieldsFragment
          ) | null } | null, audio?: { __typename?: 'EncryptableImageSet', optimized?: { __typename?: 'Image', uri: string } | null, raw?: (
          { __typename?: 'EncryptableImage' }
          & EncryptableImageFieldsFragment
          ) | null } | null, image?: { __typename?: 'EncryptableImageSet', optimized?: { __typename?: 'Image', uri: string } | null, raw?: (
          { __typename?: 'EncryptableImage' }
          & EncryptableImageFieldsFragment
          ) | null } | null } | null, attachments?: Array<(
      { __typename?: 'EncryptableImage' }
      & EncryptableImageFieldsFragment
      )> | null };

export type EncryptableImageFieldsFragment = { __typename?: 'EncryptableImage', id: string, uri: string, cover?: string | null, credits?: string | null, recordLabel?: string | null, genre?: string | null, lyrics?: string | null, altTag?: string | null, artist?: string | null, duration?: number | null, mimeType?: string | null };

export type HandleInfoFieldsFragment = { __typename?: 'HandleInfo', fullHandle: string, localName: string, linkedTo?: { __typename?: 'HandleLinkedTo', nftTokenId: any } | null };

export type ImageSetFieldsFragment = { __typename?: 'ImageSet', raw?: string | null, optimized?: { __typename?: 'Image', uri: string } | null };

export type ListProfileFieldsFragment = { __typename?: 'Profile', id: any, ownedBy: any, peerToPeerRecommendedByMe?: boolean | null, handle?: (
      { __typename?: 'HandleInfo' }
      & HandleInfoFieldsFragment
      ) | null, signInfo?: { __typename?: 'UserSignedUp', user: any, encPrivateKey: any, publicKey: any } | null, operations?: (
      { __typename?: 'ProfileOperations' }
      & ProfileOperationsFieldsFragment
      ) | null, metadata?: (
      { __typename?: 'ProfileMetadata' }
      & ProfileMetadataFieldsFragment
      ) | null };

export type MetadataAttributeFieldsFragment = { __typename?: 'MetadataAttribute', type: MetadataAttributeType, key: string, value: string };

export type NetworkAddressFieldsFragment = { __typename?: 'NetworkAddress', address: any, chainId?: number | null };

export type PostFieldsFragment = { __typename?: 'Post', id: string, publishedOn?: string | null, isHidden?: boolean | null, isEncrypted?: boolean | null, createdAt: string, by: (
      { __typename?: 'Profile' }
      & PublicationProfileFieldsFragment
      ), metadata?: (
      { __typename?: 'PublicationMetadata' }
      & AnyPublicationMetadataFieldsFragment
      ) | null };

export type ProfileFieldsFragment = { __typename?: 'Profile', id: any, ownedBy: any, createdAt: string, peerToPeerRecommendedByMe?: boolean | null, handle?: (
      { __typename?: 'HandleInfo' }
      & HandleInfoFieldsFragment
      ) | null, operations?: (
      { __typename?: 'ProfileOperations' }
      & ProfileOperationsFieldsFragment
      ) | null, signInfo?: { __typename?: 'UserSignedUp', user: any, encPrivateKey: any, publicKey: any } | null, metadata?: (
      { __typename?: 'ProfileMetadata' }
      & ProfileMetadataFieldsFragment
      ) | null };

export type ProfileMetadataFieldsFragment = { __typename?: 'ProfileMetadata', displayName?: string | null, bio?: string | null, picture?: (
      { __typename?: 'ImageSet' }
      & ImageSetFieldsFragment
      ) | null, coverPicture?: (
      { __typename?: 'ImageSet' }
      & ImageSetFieldsFragment
      ) | null, attributes?: Array<(
      { __typename?: 'MetadataAttribute' }
      & MetadataAttributeFieldsFragment
      )> | null };

export type ProfileOperationsFieldsFragment = { __typename?: 'ProfileOperations', id: any, isBlockedByMe?: boolean | null, isFollowedByMe?: boolean | null, isFollowingMe?: boolean | null };

export type PublicationProfileFieldsFragment = { __typename?: 'Profile', id: any, ownedBy: any, peerToPeerRecommendedByMe?: boolean | null, handle?: (
      { __typename?: 'HandleInfo' }
      & HandleInfoFieldsFragment
      ) | null, operations?: (
      { __typename?: 'ProfileOperations' }
      & ProfileOperationsFieldsFragment
      ) | null, metadata?: (
      { __typename?: 'ProfileMetadata' }
      & ProfileMetadataFieldsFragment
      ) | null };

export type CurrentProfileQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CurrentProfileQuery = { __typename?: 'Query', profile?: (
      { __typename?: 'Profile', handle?: (
            { __typename?: 'HandleInfo' }
            & HandleInfoFieldsFragment
            ) | null }
      & ProfileFieldsFragment
      ) | null };

export type DefaultProfileQueryVariables = Exact<{
  for: Scalars['Bytes']['input'];
}>;


export type DefaultProfileQuery = { __typename?: 'Query', profiles: Array<(
      { __typename?: 'Profile' }
      & ProfileFieldsFragment
      )> };

export type ForYouQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  from: Scalars['Bytes']['input'];
}>;


export type ForYouQuery = { __typename?: 'Query', posts: Array<(
      { __typename?: 'Post' }
      & PostFieldsFragment
      )> };

export type HandleToAddressesQueryVariables = Exact<{
  handle: Scalars['String']['input'];
}>;


export type HandleToAddressesQuery = { __typename?: 'Query', handleToAddresses: Array<{ __typename?: 'HandleToAddress', address: any }> };

export type OwnedHandlesQueryVariables = Exact<{
  for: Scalars['ID']['input'];
}>;


export type OwnedHandlesQuery = { __typename?: 'Query', ownedHandles?: { __typename?: 'OwnedHandles', items?: Array<(
        { __typename?: 'HandleInfo' }
        & HandleInfoFieldsFragment
        )> | null } | null };

export type ProfileQueryVariables = Exact<{
  fullHandle: Scalars['String']['input'];
}>;


export type ProfileQuery = { __typename?: 'Query', profiles: Array<(
      { __typename?: 'Profile' }
      & ProfileFieldsFragment
      )> };

export type ProfilesManagedQueryVariables = Exact<{
  ownedBy: Scalars['Bytes']['input'];
}>;


export type ProfilesManagedQuery = { __typename?: 'Query', profiles: Array<(
      { __typename?: 'Profile' }
      & ListProfileFieldsFragment
      )>, lastLoggedInProfiles: Array<{ __typename?: 'lastLoggedInProfile', profile: (
        { __typename?: 'Profile' }
        & ListProfileFieldsFragment
        ) }> };

export type PublicationQueryVariables = Exact<{
  forId: Scalars['ID']['input'];
}>;


export type PublicationQuery = { __typename?: 'Query', post?: (
      { __typename?: 'Post' }
      & PostFieldsFragment
      ) | null };

export type PublicationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  from: Scalars['Bytes']['input'];
  mainContentFocus?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type PublicationsQuery = { __typename?: 'Query', posts: Array<(
      { __typename?: 'Post' }
      & PostFieldsFragment
      )> };

export type SearchProfilesQueryVariables = Exact<{
  ownedBy: Scalars['Bytes']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchProfilesQuery = { __typename?: 'Query', profiles: Array<(
      { __typename?: 'Profile' }
      & ProfileFieldsFragment
      )> };

export const HandleInfoFieldsFragmentDoc = gql`
  fragment HandleInfoFields on HandleInfo {
    fullHandle
    localName
    linkedTo {
      nftTokenId
    }
  }
`;
export const ProfileOperationsFieldsFragmentDoc = gql`
  fragment ProfileOperationsFields on ProfileOperations {
    id
    isBlockedByMe
    isFollowedByMe
    isFollowingMe
  }
`;
export const ImageSetFieldsFragmentDoc = gql`
  fragment ImageSetFields on ImageSet {
    optimized {
      uri
    }
    raw
  }
`;
export const MetadataAttributeFieldsFragmentDoc = gql`
  fragment MetadataAttributeFields on MetadataAttribute {
    type
    key
    value
  }
`;
export const ProfileMetadataFieldsFragmentDoc = gql`
  fragment ProfileMetadataFields on ProfileMetadata {
    displayName
    bio
    picture {
      ... on ImageSet {
        ...ImageSetFields
      }
    }
    coverPicture {
      ...ImageSetFields
    }
    attributes {
      ...MetadataAttributeFields
    }
  }
  ${ImageSetFieldsFragmentDoc}
${MetadataAttributeFieldsFragmentDoc}`;
export const ListProfileFieldsFragmentDoc = gql`
  fragment ListProfileFields on Profile {
    id
    handle {
      ...HandleInfoFields
    }
    signInfo {
      user
      encPrivateKey
      publicKey
    }
    ownedBy
    operations {
      ...ProfileOperationsFields
    }
    metadata {
      ...ProfileMetadataFields
    }
    peerToPeerRecommendedByMe
  }
  ${HandleInfoFieldsFragmentDoc}
  ${ProfileOperationsFieldsFragmentDoc}
${ProfileMetadataFieldsFragmentDoc}`;
export const NetworkAddressFieldsFragmentDoc = gql`
  fragment NetworkAddressFields on NetworkAddress {
    address
    chainId
  }
`;
export const PublicationProfileFieldsFragmentDoc = gql`
  fragment PublicationProfileFields on Profile {
    id
    handle {
      ...HandleInfoFields
    }
    operations {
      ...ProfileOperationsFields
    }
    ownedBy
    metadata {
      ...ProfileMetadataFields
    }
    peerToPeerRecommendedByMe
  }
  ${HandleInfoFieldsFragmentDoc}
  ${ProfileOperationsFieldsFragmentDoc}
${ProfileMetadataFieldsFragmentDoc}`;
export const EncryptableImageFieldsFragmentDoc = gql`
  fragment EncryptableImageFields on EncryptableImage {
    id
    uri
    cover
    credits
    recordLabel
    genre
    lyrics
    altTag
    artist
    duration
    mimeType
  }
`;
export const AnyPublicationMetadataFieldsFragmentDoc = gql`
  fragment AnyPublicationMetadataFields on PublicationMetadata {
    id
    content
    tags
    title
    mainContentFocus
    sharingLink
    encryptedWith {
      id
      encryptedPaths
      encryptionKey
      accessCondition {
        id
        __typename
        address
        publicKey
        encryptionKey
      }
      __typename
    }
    attributes {
      ...MetadataAttributeFields
    }
    asset {
      artist
      video {
        optimized {
          uri
        }
        raw {
          ...EncryptableImageFields
        }
      }
      cover {
        optimized {
          uri
        }
        raw {
          ...EncryptableImageFields
        }
      }
      audio {
        optimized {
          uri
        }
        raw {
          ...EncryptableImageFields
        }
      }
      image {
        optimized {
          uri
        }
        raw {
          ...EncryptableImageFields
        }
      }
      license
    }
    attachments {
      ...EncryptableImageFields
    }
  }
  ${MetadataAttributeFieldsFragmentDoc}
${EncryptableImageFieldsFragmentDoc}`;
export const PostFieldsFragmentDoc = gql`
  fragment PostFields on Post {
    id
    publishedOn
    isHidden
    isEncrypted
    createdAt
    by {
      ...PublicationProfileFields
    }
    metadata {
      ...AnyPublicationMetadataFields
    }
  }
  ${PublicationProfileFieldsFragmentDoc}
${AnyPublicationMetadataFieldsFragmentDoc}`;
export const ProfileFieldsFragmentDoc = gql`
  fragment ProfileFields on Profile {
    id
    handle {
      ...HandleInfoFields
    }
    ownedBy
    createdAt
    operations {
      ...ProfileOperationsFields
    }
    signInfo {
      user
      encPrivateKey
      publicKey
    }
    metadata {
      ...ProfileMetadataFields
    }
    peerToPeerRecommendedByMe
  }
  ${HandleInfoFieldsFragmentDoc}
  ${ProfileOperationsFieldsFragmentDoc}
${ProfileMetadataFieldsFragmentDoc}`;
export const CurrentProfileDocument = gql`
  query CurrentProfile($id: ID!) {
    profile(id: $id) {
      ...ProfileFields
      handle {
        ...HandleInfoFields
      }
    }
  }
  ${ProfileFieldsFragmentDoc}
${HandleInfoFieldsFragmentDoc}`;

/**
 * __useCurrentProfileQuery__
 *
 * To run a query within a React component, call `useCurrentProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCurrentProfileQuery(baseOptions: Apollo.QueryHookOptions<CurrentProfileQuery, CurrentProfileQueryVariables> & ({ variables: CurrentProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<CurrentProfileQuery, CurrentProfileQueryVariables>(CurrentProfileDocument, options);
}
export function useCurrentProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentProfileQuery, CurrentProfileQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<CurrentProfileQuery, CurrentProfileQueryVariables>(CurrentProfileDocument, options);
}
export function useCurrentProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CurrentProfileQuery, CurrentProfileQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<CurrentProfileQuery, CurrentProfileQueryVariables>(CurrentProfileDocument, options);
}
export type CurrentProfileQueryHookResult = ReturnType<typeof useCurrentProfileQuery>;
export type CurrentProfileLazyQueryHookResult = ReturnType<typeof useCurrentProfileLazyQuery>;
export type CurrentProfileSuspenseQueryHookResult = ReturnType<typeof useCurrentProfileSuspenseQuery>;
export type CurrentProfileQueryResult = Apollo.QueryResult<CurrentProfileQuery, CurrentProfileQueryVariables>;
export const DefaultProfileDocument = gql`
  query DefaultProfile($for: Bytes!) {
    profiles(first: 1, where: {ownedBy: $for}) {
      ...ProfileFields
    }
  }
${ProfileFieldsFragmentDoc}`;

/**
 * __useDefaultProfileQuery__
 *
 * To run a query within a React component, call `useDefaultProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useDefaultProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDefaultProfileQuery({
 *   variables: {
 *      for: // value for 'for'
 *   },
 * });
 */
export function useDefaultProfileQuery(baseOptions: Apollo.QueryHookOptions<DefaultProfileQuery, DefaultProfileQueryVariables> & ({ variables: DefaultProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<DefaultProfileQuery, DefaultProfileQueryVariables>(DefaultProfileDocument, options);
}
export function useDefaultProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DefaultProfileQuery, DefaultProfileQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<DefaultProfileQuery, DefaultProfileQueryVariables>(DefaultProfileDocument, options);
}
export function useDefaultProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DefaultProfileQuery, DefaultProfileQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<DefaultProfileQuery, DefaultProfileQueryVariables>(DefaultProfileDocument, options);
}
export type DefaultProfileQueryHookResult = ReturnType<typeof useDefaultProfileQuery>;
export type DefaultProfileLazyQueryHookResult = ReturnType<typeof useDefaultProfileLazyQuery>;
export type DefaultProfileSuspenseQueryHookResult = ReturnType<typeof useDefaultProfileSuspenseQuery>;
export type DefaultProfileQueryResult = Apollo.QueryResult<DefaultProfileQuery, DefaultProfileQueryVariables>;
export const ForYouDocument = gql`
  query ForYou($first: Int, $from: Bytes!) {
    posts(
      first: $first
      orderBy: createdAt
      orderDirection: desc
      where: {accessControl_contains_nocase: [$from], isDiscarded: false}
    ) {
      ... on Post {
        ...PostFields
      }
    }
  }
${PostFieldsFragmentDoc}`;

/**
 * __useForYouQuery__
 *
 * To run a query within a React component, call `useForYouQuery` and pass it any options that fit your needs.
 * When your component renders, `useForYouQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useForYouQuery({
 *   variables: {
 *      first: // value for 'first'
 *      from: // value for 'from'
 *   },
 * });
 */
export function useForYouQuery(baseOptions: Apollo.QueryHookOptions<ForYouQuery, ForYouQueryVariables> & ({ variables: ForYouQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<ForYouQuery, ForYouQueryVariables>(ForYouDocument, options);
}
export function useForYouLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ForYouQuery, ForYouQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<ForYouQuery, ForYouQueryVariables>(ForYouDocument, options);
}
export function useForYouSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ForYouQuery, ForYouQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<ForYouQuery, ForYouQueryVariables>(ForYouDocument, options);
}
export type ForYouQueryHookResult = ReturnType<typeof useForYouQuery>;
export type ForYouLazyQueryHookResult = ReturnType<typeof useForYouLazyQuery>;
export type ForYouSuspenseQueryHookResult = ReturnType<typeof useForYouSuspenseQuery>;
export type ForYouQueryResult = Apollo.QueryResult<ForYouQuery, ForYouQueryVariables>;
export const HandleToAddressesDocument = gql`
  query HandleToAddresses($handle: String!) {
    handleToAddresses(where: {handle: $handle}) {
      address
    }
  }
`;

/**
 * __useHandleToAddressesQuery__
 *
 * To run a query within a React component, call `useHandleToAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHandleToAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHandleToAddressesQuery({
 *   variables: {
 *      handle: // value for 'handle'
 *   },
 * });
 */
export function useHandleToAddressesQuery(baseOptions: Apollo.QueryHookOptions<HandleToAddressesQuery, HandleToAddressesQueryVariables> & ({ variables: HandleToAddressesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<HandleToAddressesQuery, HandleToAddressesQueryVariables>(HandleToAddressesDocument, options);
}
export function useHandleToAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HandleToAddressesQuery, HandleToAddressesQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<HandleToAddressesQuery, HandleToAddressesQueryVariables>(HandleToAddressesDocument, options);
}
export function useHandleToAddressesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HandleToAddressesQuery, HandleToAddressesQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<HandleToAddressesQuery, HandleToAddressesQueryVariables>(HandleToAddressesDocument, options);
}
export type HandleToAddressesQueryHookResult = ReturnType<typeof useHandleToAddressesQuery>;
export type HandleToAddressesLazyQueryHookResult = ReturnType<typeof useHandleToAddressesLazyQuery>;
export type HandleToAddressesSuspenseQueryHookResult = ReturnType<typeof useHandleToAddressesSuspenseQuery>;
export type HandleToAddressesQueryResult = Apollo.QueryResult<HandleToAddressesQuery, HandleToAddressesQueryVariables>;
export const OwnedHandlesDocument = gql`
  query OwnedHandles($for: ID!) {
    ownedHandles(id: $for) {
      items {
        ...HandleInfoFields
      }
    }
  }
${HandleInfoFieldsFragmentDoc}`;

/**
 * __useOwnedHandlesQuery__
 *
 * To run a query within a React component, call `useOwnedHandlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOwnedHandlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOwnedHandlesQuery({
 *   variables: {
 *      for: // value for 'for'
 *   },
 * });
 */
export function useOwnedHandlesQuery(baseOptions: Apollo.QueryHookOptions<OwnedHandlesQuery, OwnedHandlesQueryVariables> & ({ variables: OwnedHandlesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<OwnedHandlesQuery, OwnedHandlesQueryVariables>(OwnedHandlesDocument, options);
}
export function useOwnedHandlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OwnedHandlesQuery, OwnedHandlesQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<OwnedHandlesQuery, OwnedHandlesQueryVariables>(OwnedHandlesDocument, options);
}
export function useOwnedHandlesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OwnedHandlesQuery, OwnedHandlesQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<OwnedHandlesQuery, OwnedHandlesQueryVariables>(OwnedHandlesDocument, options);
}
export type OwnedHandlesQueryHookResult = ReturnType<typeof useOwnedHandlesQuery>;
export type OwnedHandlesLazyQueryHookResult = ReturnType<typeof useOwnedHandlesLazyQuery>;
export type OwnedHandlesSuspenseQueryHookResult = ReturnType<typeof useOwnedHandlesSuspenseQuery>;
export type OwnedHandlesQueryResult = Apollo.QueryResult<OwnedHandlesQuery, OwnedHandlesQueryVariables>;
export const ProfileDocument = gql`
  query Profile($fullHandle: String!) {
    profiles(where: {handle_: {fullHandle: $fullHandle}}) {
      ...ProfileFields
    }
  }
${ProfileFieldsFragmentDoc}`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      fullHandle: // value for 'fullHandle'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables> & ({ variables: ProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
}
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
}
export function useProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const ProfilesManagedDocument = gql`
  query ProfilesManaged($ownedBy: Bytes!) {
    profiles(where: {ownedBy: $ownedBy}) {
      ...ListProfileFields
    }
    lastLoggedInProfiles(first: 1, where: {profile_: {ownedBy: $ownedBy}}) {
      profile {
        ...ListProfileFields
      }
    }
  }
${ListProfileFieldsFragmentDoc}`;

/**
 * __useProfilesManagedQuery__
 *
 * To run a query within a React component, call `useProfilesManagedQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilesManagedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesManagedQuery({
 *   variables: {
 *      ownedBy: // value for 'ownedBy'
 *   },
 * });
 */
export function useProfilesManagedQuery(baseOptions: Apollo.QueryHookOptions<ProfilesManagedQuery, ProfilesManagedQueryVariables> & ({ variables: ProfilesManagedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<ProfilesManagedQuery, ProfilesManagedQueryVariables>(ProfilesManagedDocument, options);
}
export function useProfilesManagedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfilesManagedQuery, ProfilesManagedQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<ProfilesManagedQuery, ProfilesManagedQueryVariables>(ProfilesManagedDocument, options);
}
export function useProfilesManagedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProfilesManagedQuery, ProfilesManagedQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<ProfilesManagedQuery, ProfilesManagedQueryVariables>(ProfilesManagedDocument, options);
}
export type ProfilesManagedQueryHookResult = ReturnType<typeof useProfilesManagedQuery>;
export type ProfilesManagedLazyQueryHookResult = ReturnType<typeof useProfilesManagedLazyQuery>;
export type ProfilesManagedSuspenseQueryHookResult = ReturnType<typeof useProfilesManagedSuspenseQuery>;
export type ProfilesManagedQueryResult = Apollo.QueryResult<ProfilesManagedQuery, ProfilesManagedQueryVariables>;
export const PublicationDocument = gql`
  query Publication($forId: ID!) {
    post(id: $forId) {
      ... on Post {
        ...PostFields
      }
    }
  }
${PostFieldsFragmentDoc}`;

/**
 * __usePublicationQuery__
 *
 * To run a query within a React component, call `usePublicationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationQuery({
 *   variables: {
 *      forId: // value for 'forId'
 *   },
 * });
 */
export function usePublicationQuery(baseOptions: Apollo.QueryHookOptions<PublicationQuery, PublicationQueryVariables> & ({ variables: PublicationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
}
export function usePublicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationQuery, PublicationQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
}
export function usePublicationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PublicationQuery, PublicationQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
}
export type PublicationQueryHookResult = ReturnType<typeof usePublicationQuery>;
export type PublicationLazyQueryHookResult = ReturnType<typeof usePublicationLazyQuery>;
export type PublicationSuspenseQueryHookResult = ReturnType<typeof usePublicationSuspenseQuery>;
export type PublicationQueryResult = Apollo.QueryResult<PublicationQuery, PublicationQueryVariables>;
export const PublicationsDocument = gql`
  query Publications($first: Int, $skip: Int, $from: Bytes!, $mainContentFocus: [String!]) {
    posts(
      first: $first
      skip: $skip
      orderBy: createdAt
      orderDirection: desc
      where: {metadata_: {mainContentFocus_in: $mainContentFocus}, by_: {id: $from}}
    ) {
      ... on Post {
        ...PostFields
      }
    }
  }
${PostFieldsFragmentDoc}`;

/**
 * __usePublicationsQuery__
 *
 * To run a query within a React component, call `usePublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      from: // value for 'from'
 *      mainContentFocus: // value for 'mainContentFocus'
 *   },
 * });
 */
export function usePublicationsQuery(baseOptions: Apollo.QueryHookOptions<PublicationsQuery, PublicationsQueryVariables> & ({ variables: PublicationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
}
export function usePublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationsQuery, PublicationsQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
}
export function usePublicationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PublicationsQuery, PublicationsQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
}
export type PublicationsQueryHookResult = ReturnType<typeof usePublicationsQuery>;
export type PublicationsLazyQueryHookResult = ReturnType<typeof usePublicationsLazyQuery>;
export type PublicationsSuspenseQueryHookResult = ReturnType<typeof usePublicationsSuspenseQuery>;
export type PublicationsQueryResult = Apollo.QueryResult<PublicationsQuery, PublicationsQueryVariables>;
export const SearchProfilesDocument = gql`
  query SearchProfiles($ownedBy: Bytes!, $limit: Int) {
    profiles(first: $limit, where: {ownedBy: $ownedBy}) {
      ...ProfileFields
    }
  }
${ProfileFieldsFragmentDoc}`;

/**
 * __useSearchProfilesQuery__
 *
 * To run a query within a React component, call `useSearchProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProfilesQuery({
 *   variables: {
 *      ownedBy: // value for 'ownedBy'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchProfilesQuery(baseOptions: Apollo.QueryHookOptions<SearchProfilesQuery, SearchProfilesQueryVariables> & ({ variables: SearchProfilesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<SearchProfilesQuery, SearchProfilesQueryVariables>(SearchProfilesDocument, options);
}
export function useSearchProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProfilesQuery, SearchProfilesQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<SearchProfilesQuery, SearchProfilesQueryVariables>(SearchProfilesDocument, options);
}
export function useSearchProfilesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchProfilesQuery, SearchProfilesQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
  return Apollo.useSuspenseQuery<SearchProfilesQuery, SearchProfilesQueryVariables>(SearchProfilesDocument, options);
}
export type SearchProfilesQueryHookResult = ReturnType<typeof useSearchProfilesQuery>;
export type SearchProfilesLazyQueryHookResult = ReturnType<typeof useSearchProfilesLazyQuery>;
export type SearchProfilesSuspenseQueryHookResult = ReturnType<typeof useSearchProfilesSuspenseQuery>;
export type SearchProfilesQueryResult = Apollo.QueryResult<SearchProfilesQuery, SearchProfilesQueryVariables>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
export default result;

