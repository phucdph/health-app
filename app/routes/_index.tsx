import { useLoaderData } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/react";
import Container from "~/components/Container";
import ChartSection from "~/components/sections/ChartSection";
import CategorySection from "~/components/sections/CategorySection";
import MenuSection from "~/components/sections/MenuSection";
import { json } from "@remix-run/node";
import { getLineChartData, getMenus, getProgress } from "~/services/api";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home | Healthy" }];
};

export const loader = async () => {
  return json({
    menus: await getMenus(),
    progress: await getProgress(),
    chartData: await getLineChartData()
  });
};

export default function Index() {
  const { menus, progress, chartData } = useLoaderData<typeof loader>();

  return (
    <>
      <ChartSection progress={progress} data={chartData} />
      <Container>
        <CategorySection />
        <MenuSection menus={menus} />
      </Container>
    </>
  );
}
