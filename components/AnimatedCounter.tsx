"use client";

import CountUp from "react-countup";

export function AnimatedCounter({ amount }: { amount: number }) {
	return (
		<div className="w-full">
			<CountUp end={amount} decimal="," prefix="$" decimals={2} />
		</div>
	);
}
