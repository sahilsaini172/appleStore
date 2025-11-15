export default function CategoryCard({ title = "Iphone" }) {
  return (
    <div className="flex flex-col flex-nowrap shrink-0 w-[100px] h-[124px] px-2 py-4 gap-3">
      <img
        src={"/categories/" + title.toLowerCase().replace(/\s+/g, "") + ".png"}
        alt={title}
        loading="lazy"
        className="h-full object-contain"
      />
      <h2 className="text-sm font-medium w-full text-center text-primary">
        {title}
      </h2>
    </div>
  );
}
