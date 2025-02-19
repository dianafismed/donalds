import { db } from "@/lib/prisma";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  await db.restaurant.findFirst({ where: { slug: slug } });
  return <h1>{slug}</h1>;
};

export default RestaurantPage;
