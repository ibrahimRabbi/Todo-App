 import { Button } from "../ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'
 



function DropDown({changeHandler}:any) {
  

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup onValueChange={(v)=>changeHandler(v)}>
                    <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDown
