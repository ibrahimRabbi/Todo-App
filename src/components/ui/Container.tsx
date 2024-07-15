import { ReactNode } from "react";

 
type Tchildren = {
     children:ReactNode
}
 
const Container = ({children}:Tchildren) => {
    return (
        <section className=" w-full max-w-[80%] mx-auto">
            {children}
        </section>
    );
};

export default Container;