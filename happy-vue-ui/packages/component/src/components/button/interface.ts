export type ButtonNativeType = "button" | "submit" | "reset";

export type ButtonType = "normal" | "primary" | "success" | "warning" | "danger" | "error";

export type ButtonSize = "lg" | "sm" | "xs"

export const ButtonEmits = {
    click: (ev: MouseEvent) => ev instanceof MouseEvent
}