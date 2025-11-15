export default function LatestCard({
  title,
  subTitle = "",
  prize = "",
  textColor = "white",
}) {
  const bgTheme = textColor === "white" ? "black" : "white";
  const heading = title.toLowerCase().replace(/\s+/g, "");
  return (
    <div
      className={`w-[309px] h-[450px] drop-shadow-md shrink-0 flex flex-col bg-contain bg-center bg-${bgTheme} rounded-2xl `}
      style={{ backgroundImage: `url('/latest/` + heading + `.png')` }}
    >
      <div className={`p-7 text-${textColor}`}>
        <h3 className="pt-[23px] text-[21px] font-semibold">{title}</h3>
        <div className="pt-1.5 flex flex-col">
          <p className="text-[17px] font-semibold pb-1.5">{subTitle}</p>
          <p className="text-[14px]">{prize ? `From ₹${prize}.00*` : ""}</p>
        </div>
      </div>
    </div>
  );
}
