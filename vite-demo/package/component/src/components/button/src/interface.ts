export type ButtonNativeType = "button" | "submit" | "reset";

export type ButtonType = "primary" | "success" | "normal" | "warning" | "danger" | "error";

export type ButtonSize = "lg" | "sm" | "xs"

export const ButtonEmits = {
    click: (ev: MouseEvent) => ev instanceof MouseEvent
}