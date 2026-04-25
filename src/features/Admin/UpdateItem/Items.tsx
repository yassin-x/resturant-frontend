import {
  useGetMenuItems,
  useUpdateMenuItemAvailability,
} from "../hooks/useMenuQueries";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Pages, Routes } from "@/constants/enums";

export default function Items() {
  const { data, isLoading } = useGetMenuItems();
  const { mutate } = useUpdateMenuItemAvailability();
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full gap-4 flex-wrap">
      {isLoading ? (
        <Loader />
      ) : (
        data?.data?.menus?.map((item) => (
          <Card key={item.id} className="w-75 py-0 overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-xs rounded-full ${
                  item.isAvailable ? "bg-green-500" : "bg-red-500"
                } text-white`}
              >
                {item.isAvailable ? "متاح" : "غير متاح"}
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.category}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm line-clamp-2">{item.description}</p>
              <div className="flex items-center gap-2">
                {item.discount > 0 ? (
                  <>
                    <span className="text-lg font-bold text-primary">
                      {item.price - item.discount} جنيه
                    </span>
                    <span className="text-sm line-through text-muted-foreground">
                      {item.price}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold">{item.price} جنيه</span>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                <p>
                  تاريخ الانشاء: {new Date(item.createdAt).toLocaleDateString()}
                </p>
                <p>
                  اخر تحديث: {new Date(item.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 h-full items-end">
              <Button
                variant={"default"}
                className="flex-1"
                onClick={() => {
                  navigate(`/${Routes.ADMIN}/${Pages.UPDATE_ITEM}/${item.id}`);
                }}
              >
                تعديل
              </Button>
              <Button
                variant={"destructive"}
                className="flex-1"
                onClick={() => mutate(item.id)}
              >
                {item.isAvailable ? "غير متاح" : "متاح"}
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
}
