import ProfileField from "./ProfileField";
import Button from "../ui/Button";
export default function ProfileInformation({ profile }) {
  const fields = [
    {
      id: 1,
      label: "Full Name",
      value: profile.full_name,
    },
    {
      id: 2,
      label: "Email",
      value: profile.email,
    },
    {
      id: 3,
      label: "Phone",
      value: profile.phone,
    },
    {
      id: 4,
      label: "Department",
      value: profile.departments?.name,
    },
    {
      id: 5,
      label: "Role",
      value: profile.role.charAt(0).toUpperCase() + profile.role.slice(1),
    },
  ];
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Personal Information</h2>

      <div>
        {fields.map((field) => (
          <ProfileField
            key={field.id}
            label={field.label}
            value={field.value}
          />
        ))}
      </div>
    </section>
  );
}
