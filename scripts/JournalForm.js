import { topPageHTML, middlePageHTML, bottomPageHTML } from "./JournalFormProvider.js"

export const JournalFormComponent = () => {
    const contentTarget = document.querySelector("#form")

    contentTarget.innerHTML += topPageHTML()
    contentTarget.innerHTML += middlePageHTML()
    contentTarget.innerHTML += bottomPageHTML()

}
