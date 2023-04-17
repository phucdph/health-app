import type { V2_MetaFunction } from "@remix-run/react";

import Container from "~/components/Container";
import BodyRecordSection from "~/components/sections/BodyRecordSection";
import MyDiarySection from "~/components/sections/MyDiarySection";
import MyExerciseSection from "~/components/sections/MyExerciseSection";
import RecordSection from "~/components/sections/RecordSection";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Record | Healthy" }];
};

export default function Record() {
  return (
    <Container>
      <RecordSection />
      <BodyRecordSection />
      <MyExerciseSection />
      <MyDiarySection />
    </Container>
  );
}
