import{z} from "zod";

const getUserSchema = z.object({
    limit:z.number(),
    offset:z.number(),

})

type userFilter = z.infer<typeof getUserSchema>;

export async function getUsers(filtres:userFilter) {

    const result = getUserSchema.safeParse(filtres);
    if (!result.success) {
        throw new Error("Invalid filters");
    }       
   


    
}