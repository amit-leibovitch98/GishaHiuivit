
export const VerificationComponent = () => {
    return(
        <div className={"verification-component"}>
            <div className={"verification-line"}>
:נגישות העסק            </div>
            <div className={"verification-line"}>
                <span>גישה ללא מדרגות</span>
                <span className={"correct-icon"}>v</span>

            </div>
            <div className={"verification-line"}>
                <span>שירותים נגישים כולל כיור</span>
                <span className={"wrong-icon"}>x</span>

            </div>
            <div className={"verification-line"}>
                <span>כל נקודה במרחב נגישה באצעות עבר של 80 ס״מ</span>
                <span className={"correct-icon"}>v</span>
            </div>
            <div className={"verification-line"}>
                <span>אפשרות לישיבה במקומות לא קבועים</span>
                <span className={"correct-icon"}>v</span>
            </div>
        </div>
    )
}