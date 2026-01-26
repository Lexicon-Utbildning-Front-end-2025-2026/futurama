export default function About() {
    const title = "About Futurama"

    return (
        <main className="px-4 py-16">
            <article className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-balance font-josefin">{title}</h1>
                <div className="space-y-6">

                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-sky-600 font-josefin">Overview</h2>
                        <p className="leading-relaxed">Futurama is an American animated science fiction sitcom created by Matt Groening for the Fox Broadcasting Company and later revived by Comedy Central, and then Hulu.</p>
                        <p>The series follows Philip J. Fry, a young man who is cryogenically preserved for 1,000 years and revived on December 31, 2999. Fry finds work at the interplanetary delivery company Planet Express, working alongside the one-eyed mutant Leela and the robot Bender. </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-sky-600 font-josefin">The series</h2>
                        <p className="leading-relaxed">The series was envisioned by Groening in the mid-1990s while working on The Simpsons; he brought David X. Cohen aboard to develop storylines and characters to pitch the show to Fox.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-sky-600 font-josefin">Characters</h2>
                        <ul className="list-disc list-inside space-y-2 text-neutral-500">
                            <li><strong className="text-foreground">Philip J. Fry</strong> (voiced by Billy West) – Fry is a slovenly, gullible, yet good-hearted and sensitive pizza delivery boy who falls into a cryogenic pod, causing it to activate and freeze him just after midnight on January 1, 2000. He reawakens on New Year's Eve of 2999 and gets a job as a cargo delivery boy at Planet Express, a company owned by his only living relative, Professor Hubert J. Farnsworth. Fry's love for Leela is a recurring theme throughout the series.</li>
                            <li><strong className="text-foreground">Turanga Leela</strong> (voiced by Katey Sagal) – Leela is the competent, one-eyed captain of the Planet Express Ship.[18] Abandoned as a baby, she grows up in the Cookieville Minimum Security Orphanarium believing herself to be an alien from another planet, but learns that she is actually a mutant from the sewers in the episode "Leela's Homeworld".[20] Prior to becoming the ship's captain, Leela works as a career assignment officer at the cryogenics lab where she first meets Fry. She is Fry's primary love interest and eventually becomes his wife. Her name is a reference to the Turangalîla-Symphonie by Olivier Messiaen.</li>
                            <li><strong className="text-foreground">Bender Bending</strong> Rodriguez (voiced by John DiMaggio) – Bender is a foul-mouthed, heavy-drinking, cigar-smoking, kleptomaniacal, misanthropic, egocentric, ill-tempered robot manufactured by Mom's Friendly Robot Company. He is originally programmed to bend girders, and is later designated as assistant sales manager and cook at Planet Express, despite lacking a sense of taste. He is Fry's best friend and roommate. He must drink heavily to power his fuel cells and becomes the robot equivalent of drunk when low on alcohol.[22]</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-sky-600 font-josefin">Critical Acclaim</h2>
                        <p className="leading-relaxed">
                            Futurama has received critical acclaim throughout its run and was nominated for 17 Annie Awards,
                            winning nine of them, and 12 Emmy Awards, winning six. The series developed a cult following partially
                            due to the large number of in-jokes it contains, most of which are aimed at science fiction fans and
                            enthusiasts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-2 text-sky-600 font-josefin">Setting</h2>
                        <p className="leading-relaxed">
                            Futurama is set in New New York at the turn of the 31st century, in a time filled with technological
                            wonders. The city has been built over the ruins of present-day New York City, which has become a
                            catacomb-like space that acts as the sewer. The show uses its &quot;world of tomorrow&quot; setting to
                            highlight and lampoon issues of today and to parody the science-fiction genre.
                        </p>
                    </section>

                </div>
            </article>
        </main>
    )
}