import { FooterItems } from "@/common"
import Link from "next/link"
import { MaxWidthWrapper } from "./MaxWidthWrapper"

export const Footer = () => {
    return (
        <footer className="bg-white h-20 relative">
            <MaxWidthWrapper>
                <div className="border-t border-gray-200" />
                <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
                    <div className="text-center md:text-left pb-2 md:p-0">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex space-x-8">
                            {FooterItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="text-sm text-muted-foreground hover:text-gray-800"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}


