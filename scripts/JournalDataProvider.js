/**
 * This application collects the following data from users:
 * 1) Date of journal entry
 * 2) Concepts covered (will be the title of the entry)
 * 3) Long-form contents of teh journal entry
 * 4) The mood of the journal entry
 * 
 *      This program:
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journal = []

export const getEntries = () => {
    return fetch ("http://localhost:8088/entries")
        .then(entries => entries.json())
        .then(entries => {
            journal = entries
        })
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}