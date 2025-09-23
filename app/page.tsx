import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/images.jpg"
          alt="Next.js logo"
          width={333}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            안녕하세요{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              휴학생 임정민 입니다
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            건강한 신체에 건강한 정신이 깃든다고 생각합니다.
          </li>
        </ol>       
      </main>
    </div>
  );
}
