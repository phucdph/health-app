import type { V2_MetaFunction } from "@remix-run/react";

import Container from "~/components/Container";
import ChartSection from "~/components/sections/ChartSection";
import CategorySection from "~/components/sections/CategorySection";
import MenuSection from "~/components/sections/MenuSection";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home | Healthy" }];
};

export default function Index() {
  return (
    <>
      <ChartSection />
      <Container>
        <CategorySection />
        <MenuSection />
      </Container>
    </>
  );
}
