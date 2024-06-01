import { PlaidLinkProps } from "@/types";
import { Button } from "./ui/button";
import { PlaidLinkOptions } from "react-plaid-link";
import { useCallback } from "react";

export function PlaidLink({ user, variant }: PlaidLinkProps) {
	const onSuccess = useCallback(async () => {}, [user]);

	const config: PlaidLinkOptions = {
		token,
		onSuccess,
	};

	return (
		<>
			{variant === "primary" ? (
				<Button className="plaidlink-primary">Connect bank</Button>
			) : variant === "ghost" ? (
				<Button>Connect bank</Button>
			) : (
				<Button>Connect bank</Button>
			)}
		</>
	);
}
