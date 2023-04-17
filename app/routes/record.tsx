import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

import Container from "~/components/Container";
import BodyRecordSection from "~/components/sections/BodyRecordSection";
import MyDiarySection from "~/components/sections/MyDiarySection";
import MyExerciseSection from "~/components/sections/MyExerciseSection";
import RecordSection from "~/components/sections/RecordSection";
import { getExercises } from "~/services/api";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Record | Healthy" }];
};

export const loader = async () => {
  return json({
    exercises: await getExercises(),
  });
};

export default function Record() {
  const { exercises } = useLoaderData<typeof loader>();

  return (
    <Container>
      <RecordSection />
      <BodyRecordSection />
      <MyExerciseSection exercises={exercises} />
      <MyDiarySection />
    </Container>
  );
}
