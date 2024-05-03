import { Icons } from "@/components/icons/icons";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// async function getCountOfData(data: string) {
//   const supabase = createClient();

//   const { count } = await supabase.from(data).select("*", { count: "exact" });

//   return count;
// }

export default async function DashboardPage() {
  // const supabase = createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   redirect("/login");
  // }

  // const studentsCount = await getCountOfData("students");
  // const parentsCount = await getCountOfData("parents");

  // const [students, parents] = await Promise.all([studentsCount, parentsCount]);

  // console.log({ students });
  // console.log({ parents });

  return (
    <section className="h-full w-full">
      <h1>Dashboard</h1>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="w-full rounded-lg bg-white p-4 shadow">
            <div className="flex items-center gap-4 md:justify-between md:gap-0">
              <div className="rounded-full bg-blue-200/40 p-4">
                <Icons.briefcase className="size-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase">
                  Total de estudiantes
                </h2>
                <p className="text-xl font-bold">450</p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg bg-white p-4 shadow">
            <div className="flex items-center gap-4 md:justify-between md:gap-0">
              <div className="rounded-full bg-blue-200/40 p-4">
                <Icons.briefcase className="size-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase">
                  Total de estudiantes
                </h2>
                <p className="text-xl font-bold">450</p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg bg-white p-4 shadow">
            <div className="flex items-center gap-4 md:justify-between md:gap-0">
              <div className="rounded-full bg-blue-200/40 p-4">
                <Icons.briefcase className="size-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase">
                  Total de estudiantes
                </h2>
                <p className="text-xl font-bold">450</p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg bg-white p-4 shadow">
            <div className="flex items-center gap-4 md:justify-between md:gap-0">
              <div className="rounded-full bg-blue-200/40 p-4">
                <Icons.briefcase className="size-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase">
                  Total de estudiantes
                </h2>
                <p className="text-xl font-bold">450</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
