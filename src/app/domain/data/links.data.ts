import { Link, LinkSection } from "../models";


export const LINKS: Link[] = [
    {
        text: 'cgu',
        href: '/cgu',
        section: LinkSection.ADMIN
    },
    {
        text: 'cgv',
        href: '/cgv',
        section: LinkSection.ADMIN
    },
    {
        text: 'pizzas',
        href: '/pizzas',
        section: LinkSection.CATEGORY
    },
    {
        text: 'sandwichs',
        href: '/pizzas',
        section: LinkSection.CATEGORY
    },
    {
        text: 'assiettes',
        href: '/assiettes',
        section: LinkSection.CATEGORY
    },
    {
        text: 'burgers',
        href: '/burgers',
        section: LinkSection.CATEGORY
    },
    {
        text: 'facebook',
        href: '/facebook',
        section: LinkSection.SOCIAL
    },
    {
        text: 'snap',
        href: '/span',
        section: LinkSection.SOCIAL
    },
    {
        text: 'instagram',
        href: '/instagram',
        section: LinkSection.SOCIAL
    },
]
