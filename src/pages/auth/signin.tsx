import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Pages } from "@/constants/enums";
import AuthForm from "@/features/Auth/components/AuthForm";

export default function Signin() {
  return (
    <Card className="space-y-6">
      <CardHeader className="space-y-2">
        <h1 className="text-3xl lg:text-4xl font-bold text-card-foreground">
          تسجيل الدخول
        </h1>
        <p className="text-muted-foreground text-lg">
          ادخل المعلومات الخاصة بحسابك
        </p>
      </CardHeader>
      <CardContent>
        <AuthForm slug={Pages.SIGNIN} />
      </CardContent>
    </Card>
  );
}
