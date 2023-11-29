import {FC, PropsWithChildren} from "react";

type Props = PropsWithChildren<{
  location?: string;
}>

export const Location: FC<Props> = ({children, location}: Props) => {
  try {
    if (location == null) return children;
    new URL(location);
    return <a href={location} className="underline">Visit recipe online</a>
  } catch {
    return children;
  }
}