import { z, defineCollection } from "astro:content";

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string().optional(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

export type StoreSchema = z.infer<typeof storeSchema>;

const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    'store': storeCollection
}