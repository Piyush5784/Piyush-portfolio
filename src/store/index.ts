import { select } from "@/types";
import { atom } from "recoil";

export const selectAtom = atom<select>({
  key: "selectAtom",
  default: "projects",
});
