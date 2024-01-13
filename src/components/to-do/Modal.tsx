import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

export function Modal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Click Me</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <div>
                    <h2>Hello👋...</h2>
                </div>
            </DialogContent>
        </Dialog>
    )
}
