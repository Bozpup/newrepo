import {react} from 'react'
import "./passwordVerificationComponent.css"
import verified from "../../assets/svgs/verification.svg"

export const PasswordVerificationComponent = () => {
    return (
        <> 
            <main>
            <p>Shuttle 9ja</p>
            <div className="password-confirm">
                <p>New password set!</p>
                <img src={verified} alt="password verified" />
            </div>
        </main>
        </>
    )
}