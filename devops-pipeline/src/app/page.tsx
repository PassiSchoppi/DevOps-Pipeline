'use client';

import { FormEvent } from "react";


export default function Home() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const JSONformData = JSON.stringify(Object.fromEntries(formData));
  
    const response = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSONformData,
    });
  
    if (!response.ok) {
      console.error('Failed to submit form:', response.statusText);
      return;
    }
  
    const data = await response.json();
    console.log('Response data:', data);
  }
  

  return (
    <div className="p-6">
      {/* Datumsauswahl */}
      <div className="mb-6 text-center">
        <h1 className="text-xl font-bold mb-2" id="selected-date">Kalender für Montag 18. Februar 2025</h1>
        <div className="flex justify-center items-center gap-4">
          <div>
            <label htmlFor="day" className="block">Tag</label>
            <input type="number" id="day" name="day" min="1" max="31" defaultValue="18" className="border p-2 w-16" />
          </div>
          <div>
            <label htmlFor="month" className="block">Monat</label>
            <select id="month" name="month" className="border p-2" defaultValue="2">
              <option value="1">Januar</option>
              <option value="2">Februar</option>
              <option value="3">März</option>
              <option value="4">April</option>
              <option value="5">Mai</option>
              <option value="6">Juni</option>
              <option value="7">Juli</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">Oktober</option>
              <option value="11">November</option>
              <option value="12">Dezember</option>
            </select>
          </div>
          <div>
            <label htmlFor="year" className="block">Jahr</label>
            <input type="number" id="year" name="year" min="2024" defaultValue="2025" className="border p-2 w-20" />
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
        <form onSubmit={onSubmit} id="event-form" className="flex gap-4">
          <input type="text" id="title" name="title" placeholder="Titel" className="border p-2" required />
          <input type="date" id="start_date" name="start_date" className="border p-2" required />
          <input type="time" id="start_time" name="start_time" className="border p-2" />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Erstellen</button>
        </form>
      </div>
    </div>
  );
}
