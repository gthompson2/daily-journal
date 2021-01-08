/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    let entries = []
    getEntries()
        .then(() => {
            entries = useJournalEntries()

            for (const entry of entries) {
                /*
                    Invoke the component that returns an
                    HTML representation of a single entry
                */
                const journalHTML = JournalEntryComponent(entry)
                entryLog.innerHTML += journalHTML
            }
        })
    
    // const component = JournalEntryComponent()

    
}