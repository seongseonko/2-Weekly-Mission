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
  created_at?: string;
  description: string | null;
  folder_id: number | null;
  id: number;
  image_source?: string | null;
  title: string | null;
  updated_at: string | null;
  url: string;
  createdAt?: string;
  imageSource?: string | null;
};
