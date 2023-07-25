/*
 * @Author: 前端天才蔡嘉睿
 * @Date: 2023-07-21 19:51:00
 * @LastEditors: Giaruei 247658354@qq.com
 * @LastEditTime: 2023-07-25 10:56:37
 * @FilePath: \ai-saas\app\(dashboard)\(routes)\code\page.tsx
 * @Description:
 */
"use client";
import * as z from "zod";
import axios from "axios";
import Heading from "@/components/Heading";
import ReactMarkdown from "react-markdown";
import { Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";
import { UserAvater } from "@/components/UserAvater";
import { BotAvater } from "@/components/Bot-avater";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

const CodePage = () => {
	const router = useRouter();
	const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
	const proModal = useProModal();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: "",
		},
	});
	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values);
		try {
			const userMessage: ChatCompletionRequestMessage = {
				role: "user",
				content: values.prompt,
			};
			const newMessages = [...messages, userMessage];

			const response = await axios.post("/api/code", {
				messages: newMessages,
			});
			setMessages((current) => [...current, userMessage, response.data]);
			form.reset();
		} catch (error: any) {
			// todo: open pro modal
			if (error?.response?.status === 403) {
				proModal.onOpen();
			} else {
				toast.error("Someting went wrong.");
			}
			console.log(error);
		} finally {
			router.refresh();
		}
	};

	return (
		<div>
			<Heading
				title="Code Generation"
				description="Generate code using descriptive text."
				icon={Code}
				iconColor="text-green-700"
				bgColor="bg-green-700/10"
			/>
			<div className="px-4 lg:px-8">
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
						>
							<FormField
								name="prompt"
								render={({ field }) => (
									<FormItem className="col-span-12 lg:col-span-10">
										<FormControl className="m-0 p-0">
											<Input
												className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
												disabled={isLoading}
												placeholder="Simple toggle button using react"
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								className="col-span-12 lg:col-span-2 w-full"
								disabled={isLoading}
							>
								Generate
							</Button>
						</form>
					</Form>
				</div>
				<div className="space-y-4 mt-4">
					{isLoading && (
						<div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
							<Loader />
						</div>
					)}
					{messages.length === 0 && !isLoading && (
						<Empty label="No conversation started." />
					)}
					<div className="flex flex-col-reverse gap-y-4">
						{messages.map((message) => (
							<div
								key={message.content}
								className={cn(
									"p-8 w-full flex items-start gap-x-8 rounded-lg",
									message.role === "user"
										? "bg-white border border-black/10"
										: "bg-muted"
								)}
							>
								{message.role === "user" ? <UserAvater /> : <BotAvater />}
								<ReactMarkdown
									components={{
										pre: ({ node, ...props }) => (
											<div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
												<pre {...props} />
											</div>
										),
										code: ({ node, ...props }) => (
											<code className="bg-black/10 p-1 rounded-lg" />
										),
									}}
									className="text-sm overflow-hidden leading-7"
								>
									{message.content || ""}
								</ReactMarkdown>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodePage;
