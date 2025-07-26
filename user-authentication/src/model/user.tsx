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
  return (
    <div>
      <h1 className="text-2xl font-bold">User Validation</h1>
    </div>
  );
}

export default user;
