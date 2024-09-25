import { serial,text,varchar,boolean } from "drizzle-orm/pg-core";
import { pgTable} from "drizzle-orm/pg-core";

export const AiOutput=pgTable("AiOutput",{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    slug:varchar('slug').notNull(),
    createdBy:varchar('email').notNull(),
    createdAt:varchar('createdAt'),
});

export const subscription=pgTable("Subscription",{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    username:varchar('username'),
    status:boolean('status'),
    paymentId:varchar('paymentId'),
    joinDate:varchar('joinDate')
})