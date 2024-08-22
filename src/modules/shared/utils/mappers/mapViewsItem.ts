import { UniversalEngagementType } from "../../types";

export interface UniversalEngagementApiTypeInput {
  created_at: string;
  profiles: {
    username: string;
    id: string;
  } | null;
}

export const mapUniversalEngagement = (
  data: UniversalEngagementApiTypeInput,
): UniversalEngagementType => {
  const { created_at: createdAt, profiles } = data;

  return {
    id: profiles?.id,
    createdAt: new Date(createdAt),
    userName: profiles?.username,
  };
};
