export type UserTypes = {
  username: string;
  email: string;
  role: string;
  password: string;
};

export type UserLoginTypes = {
  sub: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
}

export type PostTypes = {
  id: number;
  authorId: number;
  authorName: string;
  title: string;
  subTitle: string;
  description: string;
  images: string[];
};

export type NewPostTypes = {
  authorId: number | null | undefined;
  title: string;
  subTitle: string;
  description: string;
  images: any[];
};