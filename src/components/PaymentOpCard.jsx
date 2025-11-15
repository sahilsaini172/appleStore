export default function PaymentOpCard({
  children,
  text = "",
  accentText = "",
  color,
}) {
  return (
    <div
      className={`w-[309px] h-[215px] drop-shadow-lg shrink-0 flex flex-col bg-contain bg-center bg-white rounded-2xl pt-7 px-7`}
    >
      <div className={`text-${color}-500  pb-2`}>{children}</div>
      <p className="text-primary text-[21px] leading-6 font-semibold">
        <span className={`text-${color}-500`}>{accentText}</span>
        {text}
      </p>
    </div>
  );
}
