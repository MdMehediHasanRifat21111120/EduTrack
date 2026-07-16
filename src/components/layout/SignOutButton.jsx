import { signOutAction } from "@/features/auth/actions";

import Button from "@/components/ui/Button";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <Button type="submit" className="w-full">
        Sign Out
      </Button>
    </form>
  );
}
