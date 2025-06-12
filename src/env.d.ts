// Custom types declarations
// declare var myString: string;

type NavLink = {
    href: string;
    name: string;
};

type Service = {
    title: string;
    image: string;
    subtitle: string;
    desc1: string;
    desc2: string;
}

type ApproachItem = {
    title: string;
    subTitle1: string | null;
    desc1: string;

    subTitle2: string | null;
    desc2: string | null;
}

type CaseStudy = {
    title: string;
    subtitle: string;
    image: string;
    challenge: CaseStudyItem;
    role: CaseStudyItem;
    outcome: CaseStudyItem;
}

type CaseStudyItem = {
    desc: string
    bullets: CaseStudyBulletItem[];
}

type CaseStudyBulletItem = {
    title: string;
    desc: string
}


// Astro types, not necessary if you already have a `tsconfig.json`
/// <reference path="../.astro/types.d.ts" />