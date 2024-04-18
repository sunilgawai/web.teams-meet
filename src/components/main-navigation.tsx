"use server";

import {Link} from "react-router-dom";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { AccountSwitcher, accounts } from "./account-switcher";
import { Separator } from "./ui/separator";
// import { usePathname } from "next/navigation";

interface NavProps {
	isCollapsed: boolean;
	links: {
		title: string;
		label?: string;
		href: string;
		icon: LucideIcon;
		variant: "default" | "ghost";
	}[];
}

const MainNavigation = ({ links, isCollapsed }: NavProps) => {
    // const path = usePathname();
	return (
		<>
			<div
				className={cn(
					"flex h-[59px] items-center justify-center",
					isCollapsed ? "h-[52px]" : "px-2"
				)}
			>
				<AccountSwitcher isCollapsed={false} accounts={accounts} />
			</div>
			<Separator />

			<div
				data-collapsed={isCollapsed}
				className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
			>
				<nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
					{links.map((link, index) =>
						isCollapsed ? (
							<TooltipProvider>
								<Tooltip key={index} delayDuration={0}>
									<TooltipTrigger asChild>
										<Link
											to={link.href}
											className={cn(
												buttonVariants({ variant: link.variant, size: "icon" }),
												"h-11 w-11",
												link.variant === "default" &&
													"dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
											)}
										>
											<link.icon className="h-4 w-4" />
											<span className="sr-only">{link.title}</span>
										</Link>
									</TooltipTrigger>
									<TooltipContent
										side="right"
										className="flex items-center gap-4 text-white"
									>
										{link.title}
										{link.label && (
											<span className="ml-auto text-muted-foreground">
												{link.label}
											</span>
										)}
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						) : (
							<Link
								key={index}
								to={link.href}
								className={cn(
									buttonVariants({ variant: link.variant, size: "lg" }),
									link.variant === "default" &&
										"dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
									"justify-start"
								)}
							>
								<link.icon className="mr-2 h-4 w-4" />
								{link.title}
								{link.label && (
									<span
										className={cn(
											"ml-auto",
											link.variant === "default" &&
												"text-background dark:text-white"
										)}
									>
										{link.label}
									</span>
								)}
							</Link>
						)
					)}
				</nav>
			</div>
		</>
	);
};

export default MainNavigation;
