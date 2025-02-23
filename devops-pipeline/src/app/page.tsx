export default function Home() {

    return (
        <div className="p-6">
            {/* Datumsauswahl */}
            <div className="mb-6 text-center">
                <h1 className="text-xl font-bold mb-2" id="selected-date">Kalender für Montag 18. Februar 2025</h1>
                <div className="flex justify-center items-center gap-4">
                    <div>
                        <label htmlFor="day" className="block">Tag</label>
                        <input type="number" id="day" min="1" max="31" defaultValue="18" className="border p-2 w-16" />
                    </div>
                    <div>
                        <label htmlFor="month" className="block">Monat</label>
                        <select id="month" className="border p-2" defaultValue="2">
                            <option value="1">Januar</option>
                            <option value="2">Februar</option>
                            <option value="3">März</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="year" className="block">Jahr</label>
                        <input type="number" id="year" min="2024" defaultValue="2025" className="border p-2 w-20" />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Datum aktualisieren</button>
                </div>
            </div>

            {/* Kalenderbereich */}
            <div className="border p-4">
                <h2 className="text-lg font-bold mb-4">Kalenderansicht</h2>
                <div className="space-y-2" id="calendar">
                </div>
            </div>

            {/* Ereignisformular */}
            <div className="mt-6 border p-4">
                <h2 className="text-lg font-bold mb-4">Neues Ereignis erstellen</h2>
                <form id="event-form" className="flex gap-4">
                    <input type="text" id="event-title" placeholder="Titel" className="border p-2" required />
                    <input type="time" id="event-time" className="border p-2" required />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Erstellen</button>
                </form>
            </div>
        </div>
    );
} 
