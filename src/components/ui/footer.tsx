"use client";

import * as React from "react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="box-border border-sky-600 dark:border-sky-400 p-6 md:p-8 border-t">
            <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
                    This tool is to be used as a reference only. Please double-check all
                    information with relevant textbooks, formula booklets, and so on. This
                    is not an official resource of the IB or any other organisation.
                </p>
            </div>

            <Separator className="my-6 border-sky-700 dark:border-sky-300" />

            <p className="text-center text-xs text-gray-500 dark:text-gray-500">
                Site made by Arya Chandrasekharan. If you have any questions, or believe
                any information is incorrect, please email (email).
            </p>
        </footer>
    );
}