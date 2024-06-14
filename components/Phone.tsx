import { HTMLAttributes } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string,
    dark?: boolean
}
export const Phone = ({ imgSrc, dark = false, className, ...props }: PhoneProps) => {
    return (
        <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
            <Image src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"} alt="Phone template dark" className="pointer-events-none z-50 select-none" width={800} height={800} priority />

            <div className="absolute -z-10 inset-0">
                <Image src={imgSrc} alt="Overlaying phone image" className="object-cover" width={800} height={800} priority />
            </div>
        </div>
    )
}
