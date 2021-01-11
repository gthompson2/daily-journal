export const topPageHTML = () => {
    return `
    <section class="top">
        <form action=""> <!-- Date Box -->
            <fieldset>
                <label for="journalDate">Date of Entry:</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
        </form>
        <form action=""> <!-- Small Box for concepts-->
            <fieldset>
                <label for="journalConcepts">Concepts Covered:</label>
                <input type="text">
            </fieldset>
        </form>
        <form action=""> <!-- drop down box for selecting mood -->
            <fieldset>
                <label for="journalMood">Mood for the Day:</label>
                <select name="moods" id="moods">
                    <option value="Happy">Happy</option>
                    <option value="Optimistic">Optimistic</option>
                    <option value="Frustrated">Frustrated</option>
                    <option value="Clueless">Clueless</option>
                </select>
            </fieldset>
         </form>
    </section> 
    ` 
}

export const middlePageHTML = () => {
    return `
    <section class="middle">
        <form action=""> <!-- Journal Entry box for paragraphs -->
            <fieldset>
                <label for="journalEntry">Journal Entry:</label>
                <textarea name="journalEntry" id="paragraphs" cols="30" rows="10"></textarea>
            </fieldset>
        </form>
    </section>
    `
}

export const bottomPageHTML = () => {
    return`
    <section class="bottom">
        <form action=""> <!-- Button used to record entry -->
            <button>Record Journal Entry</button>
        </form>
    </section>
    `
}