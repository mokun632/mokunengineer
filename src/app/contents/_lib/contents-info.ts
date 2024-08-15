import { contentInfo as whyUseAbleToDetectCachesInfo } from "../why-use-able-to-detect-caches/layout";
import { contentInfo as whyCannotRecoverFromErrorBoundaryInfo } from "../why-can-not-recover-from-error-boundary/layout";

export type ContentInfoType = {
  pathName: string;
  title: string;
  date: string;
  content: string;
};

export const CONTENTS_INFO = [
    whyUseAbleToDetectCachesInfo,
    whyCannotRecoverFromErrorBoundaryInfo,
];
