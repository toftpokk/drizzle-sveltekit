import { db } from "$lib/server/db";
import { usersTable } from "$lib/server/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // INSERT
  await db.insert(usersTable).values({
      fullName: "a",
      phone: "b"
  })
  
  // SELECT
  const users = await db.select().from(usersTable).all()
  console.log(users)
};
