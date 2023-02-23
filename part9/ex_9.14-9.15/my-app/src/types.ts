export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface ContentProps  {
  courseParts: CoursePart[]
}

interface CoursePartBasic extends CoursePartBase, IDescription {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackround extends CoursePartBase, IDescription {
  backroundMaterial: string;
  kind: "background"
}

interface IDescription extends CoursePartBase {
  description: string;
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackround;
