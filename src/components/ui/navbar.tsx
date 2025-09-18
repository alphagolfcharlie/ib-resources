"use client"

import * as React from "react"
import Link from "next/link"
import { TestTubeIcon, OrbitIcon, RadicalIcon } from "lucide-react";
import { ModeToggle } from "@/components/ui/modetoggle"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
    return (
        <div className="p-4 border-b border-sky-900 dark:border-sky-50 flex items-center justify-between z-10 bg-background sticky top-0">
            {/* Left: Navigation Menu */}
            <NavigationMenu viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/chemistry">
                                <div className="font-medium flex items-center gap-2">
                                    <TestTubeIcon className="w-4 h-4" />
                                    Chemistry
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/physics">
                                <div className="font-medium flex items-center gap-2">
                                    <OrbitIcon className="w-4 h-4" />
                                    Physics
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">
                                <div className="font-medium flex items-center gap-2">
                                    <RadicalIcon className="w-4 h-4" />
                                    Maths
                                </div>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            {/* Right: Mode Toggle */}
            <div className="ml-auto">
                <ModeToggle />
            </div>
        </div>
    )
}
