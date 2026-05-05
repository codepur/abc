import Image from "next/image";

export default function PatternDivider() {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <Image
        src="/images/pattern-divider.png"
        alt=""
        width={1440}
        height={60}
        className="w-full h-auto block object-cover"
        aria-hidden="true"
      />
    </div>
  );
}
