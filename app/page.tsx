import { ArrowRight, Check, Plus, Star, Terminal } from "lucide-react";
import { UploadSection, people } from "@/common";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Icons } from '@/components/Icons'
import Image from "next/image";
import Link from "next/link";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Phone } from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src={'/snake-1.png'} alt="Snake Image" width={700} height={700} className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case</h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own, {" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCObra allows you to protect your memories, not just your phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    5 year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-3">
                <div className="flex -space-x-4 ">
                  <AnimatedTooltip items={people} />
                  <div className="relative z-10 right-0 h-12 w-12 rounded-full ring-2 ring-slate-100 bg-gray-400 flex items-center justify-center" >
                    <Terminal className="h-4 w-4 " />
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p><span className="font-semibold">1.250</span> happy customers</p>
                </div>
              </div>


            </div>
          </div>

          <div className=" col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <div className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block">
                <Image src={'/your-image.png'} alt="Your Image" width={500} height={500} />
              </div>
              <div className="absolute w-20 -left-6 -bottom-6 select-none">
                <Image src={'/line.png'} alt="Your Image" width={500} height={500} />
              </div>
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>

        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-2 mt-2 tracking-tight text-center text-balance !leading-tight text-5xl font-bold md:text-6xl text-gray-900">What our <span className="relative px-2">customers <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
            </span>{' '}say
            </h2>
            <Image src={'/snake-2.png'} alt="Snake Icon" width={500} height={500} className="w-24 order-1 lg:order-3" />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {people.map((item) => (

              <div key={item.id} className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                </div>
                <div className="text-lg leading-8">
                  <p className={`font-semibold`}>{item.description} </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <Image className="rounded-full h-12 w-12 object-cover" src={item.image} alt="user image" width={100} height={100} priority />
                  <div className="flex flex-col">
                    <p className="font-semibold">{item.name}</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      Verified Purchase
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-2 mt-2 tracking-tight text-center text-balance !leading-tight text-5xl font-bold md:text-6xl text-gray-900">

                Upload your photo and get {" "}
                <span className="relative px-2 bg-green-600 text-white">
                  your own case
                </span>{' '}
                now
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image
                src={'/arrow.png'}
                alt="arrow icon"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                width={100}
                height={100}
                priority
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-gray-900/10 lg:rounded-2xl">
                <Image src={'/horse.jpg'} alt="" className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full" width={1000} height={1000} priority />
              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            {UploadSection.map((item, index) => (
              <li className="w-fit" key={index}>
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                {item.title}
              </li>
            ))}
            <div className="flex justify-center">
              <Link href={'/configure/upload'} className={cn(buttonVariants({
                variant: 'default',
                size: 'lg',
                className: 'mx-auto mt-8'
              }))}>
                Create  your case now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
