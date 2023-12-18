import { LoadingStatusEnum } from "./LoadingStatusEnum";

export interface BaseRequestState {
  status: LoadingStatusEnum;
  error?: string;
}
