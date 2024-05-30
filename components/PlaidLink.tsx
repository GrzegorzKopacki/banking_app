import { PlaidLinkProps } from "@/types";
import { Button } from "./ui/button";

export function PlaidLink({ user, variant }: PlaidLinkProps) {
	return (
		<>
			{variant === "primary" ? (
				<Button>Connect bank</Button>
			) : variant === "ghost" ? (
				<Button>Connect bank</Button>
			) : (
				<Button>Connect bank</Button>
			)}
		</>
	);
}
