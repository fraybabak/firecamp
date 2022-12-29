import { IUiAuth, IRest } from '@firecamp/types';

export enum EReqChangeRootKeys {
  method = 'method',
  headers = 'headers',
  config = 'config',
  body = 'body',
  auth = 'auth',
}

export enum EReqChangeMetaKeys {
  name = 'name',
  description = 'description',
  inheritScripts = 'inheritScripts',
}

export enum EReqChangeUrlKeys {
  raw = 'raw',
  queryParams = 'queryParams',
  pathParams = 'pathParams',
}

export enum EReqChangeScriptsKeys {
  pre = 'pre',
  post = 'post',
  test = 'test',
}

export enum ERequestPanelTabs {
  Body = 'Body',
  Auths = 'Auths',
  Headers = 'Headers',
  Params = 'Params',
  Scripts = 'Scripts',
  Config = 'Config',
}

export enum EResponsePanelTabs {
  Body = 'Body',
  Headers = 'Headers',
  Cookies = 'Cookies',
  TestResult = 'TestResult',
}

export enum ERestConfigKeys {
  MaxRedirects = 'maxRedirects',
  FollowLocation = 'followLocation',
  RejectUnauthorized = 'rejectUnauthorized',
  RequestTimeout = 'requestTimeout',
}

export interface IRestClientRequest extends Omit<IRest, 'auth'> {
  auth?: IUiAuth;
}
