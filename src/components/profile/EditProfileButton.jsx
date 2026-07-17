import Button from "@/components/ui/Button";

export default function EditProfileButton({ onClick }) {
  return (
    <div className="flex justify-end">
      <Button type="button" onClick={onClick}>
        Edit Profile
      </Button>
    </div>
  );
}
