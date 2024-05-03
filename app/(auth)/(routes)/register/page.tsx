import RegisterForm from "./_components/register-form";

export default function RegisterPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div>
      <RegisterForm searchParams={searchParams} />
    </div>
  );
}
