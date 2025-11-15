export default function HelpCard({
  title = "",
  subTitle = "",
  description = "",
  textColor = "white",
}) {
  const titleColor = textColor === "white" ? "#86868b" : "#424245";
  const bgTheme = textColor === "white" ? "#1d1d1f" : "white";
  const heading = subTitle
    .toLowerCase()
    .replaceAll(/[?,']/g, "")
    .replace(/\s+/g, "");
  return (
    <div
      className={`w-[309px] h-[450px] drop-shadow-lg shrink-0 flex flex-col bg-contain bg-center bg-${bgTheme} rounded-2xl `}
      style={{ backgroundImage: `url('/help/` + heading + `.png')` }}
    >
      <div className={`p-7 text-${textColor}`}>
        <p className={`text-xs pb-[7px] tracking-wider  text-[${titleColor}]`}>
          {title.toUpperCase()}
        </p>
        <h3 className="text-[21px] font-semibold leading-6">{subTitle}</h3>
        <div className="pt-1.5 flex flex-col">
          <p className="text-[17px] pt-1.5">{description}</p>
        </div>
      </div>
    </div>
  );
}
