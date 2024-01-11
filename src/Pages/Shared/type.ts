export type SampleLinkData = {
  id: number;
  createdAt: string;
  url: string;
  title: string | null;
  description: string | null;
  imageSource: string | null;
  folder_id: number | null;
};

export type SampleFolderData = {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: SampleLinkData[];
};
export type CardData = {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number;
};
