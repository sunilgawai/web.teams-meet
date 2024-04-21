import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Delete, Pin } from "lucide-react";

const Chat = () => {
	return (
		<div className="h-screen grid md:grid-cols-[260px_1fr]">
			<ScrollArea className="flex flex-1 border-r">
				<div className="p-2">
					<h4 className="mb-4 text-sm font-medium leading-none">
						Chat with friends & family
					</h4>
				</div>
				{new Array(12).fill(null).map((_, idx) => (
					<div
						key={idx}
						className="w-full h-10 rounded-sm flex flex-row items-center justify-center gap-4 px-2 pb-2 my-2 border-b"
					>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="w-full">
							<h1 className="text-sm font-light">Sunil Gawai</h1>
							<p className="text-xs">You: Testing</p>
						</div>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<DotsVerticalIcon className="w-4 h-4" />
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-28">
								<DropdownMenuItem>
									<Pin className="mr-2 h-4 w-4" />
									<span className="text-xs">Pin Chat</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Delete className="mr-2 h-4 w-4" />
									<span className="text-xs">Delete Chat</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				))}
			</ScrollArea>
			<div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div
					className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
					x-chunk="dashboard-02-chunk-1"
				>
					<div className="flex flex-col items-center gap-1 text-center">
						<h3 className="text-2xl font-bold tracking-tight">Welcome</h3>
						<p className="text-sm text-muted-foreground">
							You can start calling & meetings.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chat;
