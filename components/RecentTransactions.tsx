import { RecentTransactionsProps } from "@/types";
import Link from "next/link";

export function RecentTransactions({
	accounts,
	transactions = [],
	appwriteItemId,
	page = 1,
}: RecentTransactionsProps) {
	return (
		<section className="recent-transactions">
			<header className="flex items-center justify-between">
				<h2 className="recent-transactions-label">Recent transactions</h2>
				<Link
					href={`/transaction-history/?id=${appwriteItemId}`}
					className="view-all-btn"
				>
					View all
				</Link>
			</header>
            
		</section>
	);
}
