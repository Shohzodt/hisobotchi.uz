import { BaseButtonProps } from "./base-button.types"

export default function BaseButton({
    text
}: BaseButtonProps) {
  return (
    <button title={text}>{text}</button>
  )
}
