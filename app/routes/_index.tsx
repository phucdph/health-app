import { useLoaderData} from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/react";
import Container from "~/components/Container";
import ChartSection from "~/components/sections/ChartSection";
import CategorySection from "~/components/sections/CategorySection";
import MenuSection from "~/components/sections/MenuSection";
import { json } from "@remix-run/node";
import { getMenus } from "~/services/api";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home | Healthy" }];
};

export const loader = async () => {
  return json({
    menus: await getMenus(),
  });
};

export default function Index() {
  const { menus } = useLoaderData<typeof loader>();

  return (
    <>
      <ChartSection />
      <Container>
        <CategorySection />
        <MenuSection menus={menus} />
      </Container>
    </>
  );
}
