/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div>
                <h3 class="entryTitle">${entry.concept}<h3>
            </div>
            <div>${entry.entry}</div>
            <article class="journalData">
                <div>${entry.date}</div>
                <div>Mood: ${entry.mood}</div>
            </article>
        </section>
    `
}