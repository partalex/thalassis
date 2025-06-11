// Custom types declarations
// declare var myString: string;

type NavLink = {
    href: string;
    name: string;
};

type ApproachItem = {
    title: string;
    subTitle1: string | null;
    desc1: string;

    subTitle2: string | null;
    desc2: string | null;
}

// Astro types, not necessary if you already have a `tsconfig.json`
/// <reference path="../.astro/types.d.ts" />