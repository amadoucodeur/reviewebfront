import Image from "next/image";

export default function Cover() {
  return (
    <div>
      <Image src="/cover.jpg" alt="cover" width={1920} height={1080} />
    </div>
  )
}
