import axios from 'axios';
import qs from 'query-string';

export interface ModelInit {
  url: string;
  key: string;
  is_config_model_agent: boolean;
}

export function submitModelInit(data: ModelInit) {
  return axios.post('/api/v1/model/init', data);
}

export interface ModelCreateBaseInfo {
  corp: string;
  name: string;
  model: string;
  type: string;
  base_url: string;
  path: string;
  prompt: string;
  remark: string;
}

export interface ForwardConfig {
  forward_rule: string;
  match_rule: string[];
  target_model: string;
  target_model_name?: string;
  decision_model: string;
  decision_model_name?: string;
  keywords: string[];
  target_models: string[];
  target_model_names?: string[];
  content_length: any;
}

export interface ImageQuota {
  fixed_quota: any;
  width: any;
  height: any;
  is_default: string;
}

export interface FallbackConfig {
  fallback_model: string;
  fallback_model_name?: string;
}

export interface ModelCreateAdvanced {
  billing_method: string;
  prompt_ratio: number;
  completion_ratio: number;
  fixed_quota: number;
  image_quotas: ImageQuota[];
  data_format: string;
  is_public: boolean;
  is_enable_model_agent: boolean;
  model_agents: string[];
  is_enable_forward: boolean;
  forward_config: ForwardConfig;
  is_enable_fallback: boolean;
  fallback_config: FallbackConfig;
}

export type ModelCreate = ModelCreateBaseInfo & ModelCreateAdvanced;

export function submitModelCreate(data: ModelCreate) {
  return axios.post('/api/v1/model/create', data);
}

export interface ModelPage {
  id: string;
  corp: string;
  corp_name: string;
  name: string;
  model: string;
  type: number;
  billing_method: number;
  prompt_ratio: number;
  completion_ratio: number;
  fixed_quota: number;
  data_format: number;
  is_public: boolean;
  status: number;
  remark: string;
}
export interface Paging {
  page: number;
  page_size: number;
  total: number;
  page_count: number;
}

export interface ModelPageParams extends Partial<ModelPage> {
  current: number;
  pageSize: number;
}

export interface ModelPageRes {
  items: ModelPage[];
  paging: Paging;
}

export function queryModelPage(params: ModelPageParams) {
  return axios.post<ModelPageRes>('/api/v1/model/page', params);
}

export interface ModelList {
  id: string;
  corp: string;
  name: string;
  model: string;
  type: number;
  billing_method: number;
  prompt_ratio: number;
  completion_ratio: number;
  fixed_quota: number;
  data_format: number;
  is_public: boolean;
  status: number;
  remark: string;
}

export interface ModelListRes {
  items: ModelList[];
}

export function queryModelList() {
  return axios.get<ModelListRes>('/api/v1/model/list');
}

export interface ModelDeleteParams {
  id: string;
}

export function submitModelDelete(params: ModelDeleteParams) {
  return axios.post('/api/v1/model/delete', params);
}

export interface ModelDetailParams {
  id: any;
}

export interface ModelDetail {
  id: string;
  corp: string;
  corp_name: string;
  name: string;
  model: string;
  type: number;
  base_url: string;
  path: string;
  prompt: string;
  billing_method: number;
  prompt_ratio: number;
  completion_ratio: number;
  fixed_quota: number;
  data_format: number;
  is_public: boolean;
  is_enable_model_agent: boolean;
  model_agents: string[];
  model_agent_names: string[];
  is_enable_forward: boolean;
  forward_config: ForwardConfig;
  is_enable_fallback: boolean;
  fallback_config: FallbackConfig;
  status: number;
  remark: string;
  created_at: string;
  updated_at: string;
}

export function queryModelDetail(params: ModelDetailParams) {
  return axios.get<ModelDetail>('/api/v1/model/detail', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export interface ModelUpdateBaseInfo {
  id: string;
  corp: string;
  name: string;
  model: string;
  type: string;
  base_url: string;
  path: string;
  prompt: string;
  remark: string;
  status: number;
}

export interface ModelUpdateAdvanced {
  billing_method: string;
  prompt_ratio: number;
  completion_ratio: number;
  fixed_quota: number;
  data_format: string;
  is_public: boolean;
  is_enable_model_agent: boolean;
  model_agents: string[];
  is_enable_forward: boolean;
  forward_config: ForwardConfig;
  is_enable_fallback: boolean;
  fallback_config: FallbackConfig;
}

export type ModelUpdate = ModelUpdateBaseInfo & ModelUpdateAdvanced;

export function submitModelUpdate(data: ModelUpdate) {
  return axios.post('/api/v1/model/update', data);
}

export interface ModelChangeStatus {
  id: string;
  status: number;
}

export function submitModelChangeStatus(data: ModelChangeStatus) {
  return axios.post('/api/v1/model/change/status', data);
}

export interface ModelBatchOperate {
  action: string;
  ids?: string[];
  value?: any;
  model_agents?: string[];
  target_model?: string;
  fallback_model?: string;
}

export function submitModelBatchOperate(data: ModelBatchOperate) {
  return axios.post('/api/v1/model/batch/operate', data);
}
