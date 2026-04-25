import { Button } from "@/components/ui/button";
import ColorBends from "@/components/ui/ColorBends";

export default function Intro() {
  return (
    <section className="section-gap container min-h-screen">
      <div className="absolute inset-0 -z-10 opacity-30">
        <ColorBends
          colors={["#e7e4e7", "#8a5cff", "#00ffd1"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
          autoRotate={0}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 bg-background/50 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-xl flex flex-col items-center text-center md:text-right">
          <img
            src="/top-view-delicious-pizza.png"
            alt="pizza-intro-image"
            className="w-40 sm:w-56 md:w-64 h-auto object-cover"
            loading="eager"
          />
          <div className="mt-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              مرحبًا بكم في مطعم الجوكر
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4">
              استمتع بأشهى الأطباق وأفضل خدمة في جو مميز لا مثيل له.
            </p>
            <Button
              className="mt-6 w-full sm:w-auto"
              size="lg"
              variant="outline"
            >
              اطلب الآن
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right">
          <h2 className="text-xl sm:text-2xl font-bold text-primary">
            اكتشف طعمنا المميز
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
            في مطعم الجوكر، نقدم لك تجربة طعام لا تُنسى مع مجموعة متنوعة من
            الأطباق الشهية التي تلبي جميع الأذواق. سواء كنت من محبي البيتزا، أو
            المعكرونة، أو الأطباق الجانبية، فإننا نضمن لك جودة عالية وطعم لا
            يُضاهى.
          </p>
        </div>
      </div>
    </section>
  );
}
