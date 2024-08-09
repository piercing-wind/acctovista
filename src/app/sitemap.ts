import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
   const lastModified = new Date();
 
   return [
     {
       url: 'https://acctovista.com',
       lastModified,
     },
     {
       url: 'https://acctovista.com/about',
       lastModified,
     },
     {
       url: 'https://acctovista.com/blog',
       lastModified,
     },
     {
       url: 'https://acctovista.com/blog/[id]',
       lastModified,
     },
     {
       url: 'https://acctovista.com/careers',
       lastModified,
     },
     {
       url: 'https://acctovista.com/contact',
       lastModified,
     },
     {
       url: 'https://acctovista.com/our-team',
       lastModified,
     },
     {
       url: 'https://acctovista.com/stallite-office',
       lastModified,
     },
     {
       url: 'https://acctovista.com/whyus',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/accounting',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/accounting/bookkeeping',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/accounting/payroll',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/auditing-assurance',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/auditing-assurance/audit',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/business-setup',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/business-setup/business-setup-in-india',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/ites',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/ites/bpa',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/ites/it-support',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/ites/robust-data-analytics-ai',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/ites/software-development',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/ites/software-migration',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/taxation',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/taxation/international-tax',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/taxation/tax-planning-consultancy',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/taxation/tax-preparation-and-compliance',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/taxation/transfer-pricing',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/virtual-cfo',
       lastModified,
     },
     {
       url: 'https://acctovista.com/services/virtual-cfo/cfo',
       lastModified,
     },
   ];
 }
 