"use client";

import { BotIcon, ChevronDownIcon } from "lucide-react";

import { type FC, forwardRef, useState, useEffect } from "react";
import { AssistantModalPrimitive } from "@assistant-ui/react";

import { Thread } from "@/components/assistant-ui/thread";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button";

export const AssistantModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open the chatbot modal automatically after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AssistantModalPrimitive.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <AssistantModalPrimitive.Anchor className="aui-root aui-modal-anchor">
        <AssistantModalPrimitive.Trigger asChild>
          <AssistantModalButton />
        </AssistantModalPrimitive.Trigger>
      </AssistantModalPrimitive.Anchor>

      {/* Overlay cliquable - ferme le modal sauf si on clique sur le modal ou le bouton */}
      {isOpen && (
        <div
          className="aui-modal-overlay"
          onClick={(e) => {
            const target = e.target as HTMLElement;

            // Check if click was on modal content or button
            const isClickOnModal = target.closest('[data-state]') ||
                                   target.closest('.aui-modal-content') ||
                                   target.closest('.aui-modal-anchor') ||
                                   target.closest('[role="dialog"]');

            // Only close if click was NOT on modal/button
            if (!isClickOnModal) {
              setIsOpen(false);
            }
          }}
        />
      )}

      <AssistantModalPrimitive.Content
        sideOffset={16}
        className="aui-root aui-modal-content z-50 overflow-y-auto rounded-xl border bg-popover p-0 text-popover-foreground shadow-md outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:zoom-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-1/2 data-[state=open]:slide-in-from-right-1/2 data-[state=open]:zoom-in [&>.aui-thread-root]:bg-inherit"
      >
        <Thread />
      </AssistantModalPrimitive.Content>
    </AssistantModalPrimitive.Root>
  );
};

type AssistantModalButtonProps = { "data-state"?: "open" | "closed" };

const AssistantModalButton = forwardRef<
  HTMLButtonElement,
  AssistantModalButtonProps
>(({ "data-state": state, ...rest }, ref) => {
  const tooltip = state === "open" ? "Fermer l'assistant" : "Ouvrir l'assistant";

  return (
    <TooltipIconButton
      variant="default"
      tooltip={tooltip}
      side="left"
      {...rest}
      className="aui-modal-button size-full rounded-full shadow transition-transform hover:scale-110 active:scale-90"
      ref={ref}
    >
      <BotIcon
        data-state={state}
        className="aui-modal-button-closed-icon aui-modal-button-icon absolute transition-all data-[state=closed]:scale-100 data-[state=closed]:rotate-0 data-[state=open]:scale-0 data-[state=open]:rotate-90"
      />

      <ChevronDownIcon
        data-state={state}
        className="aui-modal-button-open-icon aui-modal-button-icon absolute transition-all data-[state=closed]:scale-0 data-[state=closed]:-rotate-90 data-[state=open]:scale-100 data-[state=open]:rotate-0"
      />
      <span className="aui-sr-only sr-only">{tooltip}</span>
    </TooltipIconButton>
  );
});

AssistantModalButton.displayName = "AssistantModalButton";
