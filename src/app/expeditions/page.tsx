import Cards from './page_content';
import Ad_Comp from '../util/ads_component';

export async function generateMetadata() {
  return {
    title: 'Expedition / Team Guide - Gameplay Planner',
    description: "Expedition / Team Planner - Help you build, plan and optimise expeditions teams / groups based on damage, rank or stats. You can also tell the calculator to include specific bonuses such as token gain, time gain, card power, expedition damage by adding them to a white list. You can also add and remove pets to future planning"
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function Page() {
  return (
    <>
      <Cards />
      <Ad_Comp />
    </>
  )
}