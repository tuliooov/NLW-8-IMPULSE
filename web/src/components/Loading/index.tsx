import { CircleNotch } from "phosphor-react";

interface LoadingProps {

}

export function Loading({  }: LoadingProps) {
    return (
       <div className="w-6 y-6 flex items-center justify-center overflow-hidden">
           <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
       </div>
    )
}