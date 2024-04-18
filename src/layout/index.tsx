import MainNavigation from "@/components/main-navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { useOutlet } from "react-router-dom";
import {
	Archive,
	ArchiveX,
	Calendar,
	File,
	Inbox,
	LucideIcon,
	MessageCircle,
	MessageSquareText,
	Send,
	Trash2,
	Users,
} from "lucide-react";
import MainHeader from "@/components/main-header";
const links: {
	title: string;
	label?: string | undefined;
	href: string;
	icon: LucideIcon;
	variant: "default" | "ghost";
}[] = [
	{
		title: "Activity",
		label: "128",
		href: "/",
		icon: Inbox,
		variant: "default",
	},
	{
		title: "Community",
		label: "9",
		href: "/community",
		icon: Users,
		variant: "ghost",
	},
	{
		title: "Chat",
		label: "",
		href: "/chat",
		icon: MessageCircle,
		variant: "ghost",
	},
	{
		title: "Calendar",
		label: "23",
		href: "/calendar",
		icon: Calendar,
		variant: "ghost",
	},
	{
		title: "Meetings",
		label: "",
		href: "/meetings",
		icon: MessageSquareText,
		variant: "ghost",
	},
	{
		title: "Archive",
		label: "",
		href: "/archive",
		icon: Archive,
		variant: "ghost",
	},
];

const RootLayout = () => {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<div className="min-h-screen w-full bg-background font-sans antialiased">
				<div className="grid min-h-screen w-full  md:grid-cols-[220px_0px_1fr] lg:grid-cols-[280px_0px_1fr]">
					<div className="hidden h-full border-r bg-muted/40 md:block">
						<MainNavigation isCollapsed={false} links={links} />
					</div>
					<div />
					<div className="h-full flex flex-col">
						<MainHeader />
						{useOutlet()}
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default RootLayout;
