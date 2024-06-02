import { logoutAccount } from "@/lib/actions/user.actions";
import { FooterProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Footer({ user, type = "desktop" }: FooterProps) {
	const router = useRouter();
	async function handleLogOut() {
		const loggedOut = await logoutAccount();

		if (loggedOut) router.push("/sign-in");
	}

	return (
		<footer className="footer">
			<div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
				<p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
			</div>
			<div
				className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
			>
				<h1 className="text-14 truncate font-semibold text-gray-700">
					{user?.firstName[0]}
				</h1>
				<p className="text-14 truncate font-normal text-gray-600">
					{user?.email}
				</p>
			</div>
			<div className="footer_image" onClick={handleLogOut}>
				<Image src="icons/logout.svg" alt="logout" fill />
			</div>
		</footer>
	);
}
