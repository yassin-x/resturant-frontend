interface MainHeadingProps {
  title: string;
  subtitle: string;
}
export default function MainHeading({ title, subtitle }: MainHeadingProps) {
  return <div className="element-center flex-col text-center select-none">
    <p className="text-lg md:text-xl text-muted-foreground mt-4 font-normal italic">{subtitle}</p>
    <h1 className="text-4xl md:text-5xl font-bold text-primary">{title}</h1>
  </div>;
}
