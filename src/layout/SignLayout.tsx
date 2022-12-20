import { ReactElement } from "react";

export interface ChildrenInterface {
    children: ReactElement
}

export default function SignLayout({children}: ChildrenInterface) {

    return (
        <div className="sign_app_layout">
        <header />
        <main>
            {children}
        </main>
        <footer />
      </div>
    );

}