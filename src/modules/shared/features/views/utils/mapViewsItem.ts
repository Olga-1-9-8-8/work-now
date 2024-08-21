interface ViewsApiTypeInput {
  created_at: string;
  profiles: {
    username: string;
    id: string;
  } | null;
}

export const mapViewsItem = (views: ViewsApiTypeInput) => {
  const { created_at: createdAt, profiles } = views;

  return {
    id: profiles?.id,
    createdAt: new Date(createdAt),
    userName: profiles?.username,
  };
};
