/**
    * Enters clicker answers automatically.
    * @param {string} lowerCaseOption - Enter answer letter in lowercase.
    */
function selectOption(lowerCaseOption = 'a', deltaTimeMilli = 5000) {
    console.log("To option selected page.")

    const interval = setInterval(function() {
        console.log("still going...")
        const btn = document.querySelector(`button#multiple-choice-${lowerCaseOption}`)
        if (btn) {
            btn.click()
            clearInterval(interval)
            console.log("Ended.")
        }
    }, deltaTimeMilli)
}
