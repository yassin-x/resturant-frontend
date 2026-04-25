import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-4 w-full flex flex-col gap-6 items-center backdrop-blur-2xl bg-background/50 rounded-t-xl mt-12">
      <div className="flex items-center justify-between container flex-col md:flex-row gap-6">
        <div className="element-center flex-col">
          <h2 className="text-lg font-bold text-primary">مطعم الجوكر</h2>
          <p className="text-sm text-muted-foreground">
            العنوان: شارع المطعم، المدينة، البلد
          </p>
          <p className="text-sm text-muted-foreground">
            الهاتف: +123 456 7890 | البريد الإلكتروني: 4k7jS@example.com
          </p>
        </div>
        <div className="element-center flex-col gap-4">
          <h3 className="text-md font-semibold text-primary">تابعنا على</h3>
          <div className="flex flex-raw items-center justify-center gap-4">
            <FaFacebook size={"21"} />
            <FaInstagram size={"21"} />
            <FaTwitter size={"21"} />
            <FaTelegram size={"21"} />
          </div>
        </div>
      </div>
      <div className="w-full text-center border-t-2 p-2">
        <p>
          &copy; {new Date().getFullYear()} مطعم الجوكر. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
