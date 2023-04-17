import type { V2_MetaFunction } from "@remix-run/react";
import Container from "~/components/Container";
import RecommendSection from "~/components/sections/RecommendSection";
import PostSection from "~/components/sections/PostSection";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Notice | Healthy" }];
};

export default function Column() {
  return (
    <Container>
      <RecommendSection />
      <PostSection />
    </Container>
  );
}
