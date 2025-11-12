"use client";

import type { ReactNode } from "react";
import {
    AssistantRuntimeProvider,
    useLocalRuntime,
    type ChatModelAdapter,
} from "@assistant-ui/react";

const MyModelAdapter: ChatModelAdapter = {
    async *run({ messages, abortSignal }) {
        // Transform messages to match backend format
        const transformedMessages = messages.map((msg: any) => ({
            content: msg.content.map((part: any) => ({
                text: part.type === "text" ? part.text : "",
            })),
        }));

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ messages: transformedMessages }),
            signal: abortSignal
        });

        let text: string = "";
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader!.read();
            if (done) break;

            text += decoder.decode(value, { stream: true });

            yield {
                content: [{ type: "text", text }],
            };
        }
    },
};

export function MyRuntimeProvider({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const runtime = useLocalRuntime(MyModelAdapter);

    return (
        <AssistantRuntimeProvider runtime={runtime}>
            {children}
        </AssistantRuntimeProvider>
    );
}
