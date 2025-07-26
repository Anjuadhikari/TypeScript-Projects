import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  firstName: z.string().optional(),
  email: z.string().email(),
  profileUrl: z.string().url(),
  age: z.number().min(0).max(120),
  friends: z.array(z.string()).max(3),
  isActive: z.boolean(),
});

type userForm = z.infer<typeof userSchema>;

export default function UserForm() {
  const form = useForm<userForm>({
    resolver: zodResolver(userSchema),
  });

  function handleSubmit(data: userForm) {
    console.log("Validation succeeded:", data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-peach-50 p-6">
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="bg-peach-100 text-peach-900 p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-peach-800">
          User Validation Form
        </h1>

        <div className="flex flex-col gap-2">
          <label>First Name</label>
          <input
            {...form.register("firstName")}
            className="input-style"
            placeholder="First Name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Email</label>
          <input
            {...form.register("email")}
            className="input-style"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Profile URL</label>
          <input
            {...form.register("profileUrl")}
            className="input-style"
            placeholder="https://example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Age</label>
          <input
            type="number"
            {...form.register("age", { valueAsNumber: true })}
            className="input-style"
            placeholder="Age"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Friends</label>
          <input {...form.register("friends.0")} className="input-style" placeholder="Friend 1" />
          <input {...form.register("friends.1")} className="input-style" placeholder="Friend 2" />
          <input {...form.register("friends.2")} className="input-style" placeholder="Friend 3" />
        </div>

        <div className="flex items-center gap-2">
          <label>Active:</label>
          <input type="checkbox" {...form.register("isActive")} />
        </div>

        <button
          type="submit"
          className="w-full bg-peach-600 hover:bg-peach-700 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
