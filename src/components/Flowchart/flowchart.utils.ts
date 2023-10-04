import { Node } from "reactflow";
import { Course } from "../../models/course";

export const buildCourseNode = (): Node => {
  return {
    id: "TestId",
    position: { x: 1, y: 0 },
    data: { label: "1" },
  } as Node;
};
