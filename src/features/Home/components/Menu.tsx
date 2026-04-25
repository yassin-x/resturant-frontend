import { Loader } from "@/components/shared/Loader";
import MainHeading from "@/components/shared/MainHeading";
import { useGetMenuItems } from "@/features/Admin/hooks/useMenuQueries";

export default function Menu() {
  const { data, isLoading } = useGetMenuItems();
  return (
    <section className="section-gap container" id="menu">
      <MainHeading
        title="قائمة الطعام"
        subtitle="اكتشف أفضل الأطعمة في مطعم الجوكر"
      />
      <div className="element-center gap-6 flex-wrap mt-8">
        {isLoading ? (
          <Loader />
        ) : (
          data?.data?.menus?.map(
            (items) =>
              items.isAvailable && (
                <div
                  className="flex flex-col h-full bg-secondary/20 backdrop-blur-sm rounded-lg max-w-sm w-full cursor-pointer "
                  key={items.id}
                >
                  <div className="relative">
                    <img
                      src={items.image}
                      alt={items.name}
                      loading="lazy"
                      className="w-full h-40 rounded-t-xl object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-1 text-xs rounded-full bg-accent text-primary">
                      {items.price - items.discount} جنيه
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 p-4">
                    <h3 className="text-lg font-bold text-center">
                      {items.name}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {items.description}
                    </p>
      
                  </div>
                </div>
              ),
          )
        )}
      </div>
    </section>
  );
}
