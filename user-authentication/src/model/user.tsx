import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

const userSchema = z.object({
  firstName: z.string().optional(),
  email: z.string().email(),
  profileUrl: z.string().url(),
  age: z
    .number()
    .min(0, "Age must be a positive number")
    .max(120, "Age must be less than or equal to 120"),
  friends: z.array(z.string()).max(3),
  isActive: z.boolean(),
});

type userForm = z.infer<typeof userSchema>;

const users = {
  firstName: "Anju",
  email: "anju@gmail.com",
  profileUrl: "https://www.example.com",
  age: 18,
  friends: ["John", "Doe", "Jane"],
  isActive: false,
};
console.log(userSchema.safeParse(users));

function user() {
  const form = useForm<userForm>({
    resolver: zodResolver(userSchema),
  });
function handleSubmit(data: userForm) {
  const result = userSchema.safeParse(data);
  if(!result.success) {
    console.error("Validation failed:", result.error);
  }
    console.log("Validation succeeded:", data);
}
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1 className="text-2xl font-bold">User Validation</h1>
      {/* Example usage of form fields */}
      <input {...form.register("firstName")} placeholder="First Name" />
      <input {...form.register("email")} placeholder="Email" />
      <input {...form.register("profileUrl")} placeholder="Profile URL" />
      <input type="number" {...form.register("age", { valueAsNumber: true })} placeholder="Age" />
      <input {...form.register("friends.0")} placeholder="Friend 1" />
      <input {...form.register("friends.1")} placeholder="Friend 2" />
      <input {...form.register("friends.2")} placeholder="Friend 3" />
      <label>
        Active:
        <input type="checkbox" {...form.register("isActive")} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default user;
