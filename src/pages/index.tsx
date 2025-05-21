import { useEffect, useState, FormEvent } from 'react'

interface DayData {
  breakfast: string
  snack: string
  dinner: string
  activities: string[]
}

interface DayPlan extends DayData {
  day: string
}

export default function Home() {
  const [plan, setPlan] = useState<DayPlan[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [ages, setAges] = useState<string>('')
  const [preferencesList, setPreferencesList] = useState<string>('')
  const [rhythm, setRhythm] = useState<string>('')
  const [startTime, setStartTime] = useState<string>('08:00')
  const [endTime, setEndTime] = useState<string>('15:00')

  const fetchPlan = (url: string, options?: RequestInit) => {
    setLoading(true)
    setError(null)
    fetch(url, options)
      .then(res => {
        if (!res.ok) throw new Error(`Status ${res.status}`)
        return res.json()
      })
      .then((data: { plan: Record<string, DayData> }) => {
        const planObj = data.plan
        const arr: DayPlan[] = Object.entries(planObj).map(([day, info]) => ({ day, ...info }))
        setPlan(arr)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchPlan('/api/plan')
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const ageNumbers = ages
      .split(',')
      .map(a => parseInt(a.trim(), 10))
      .filter(n => !isNaN(n))
    const children = ageNumbers.map(age => ({ age }))
    const preferences = preferencesList
      .split(',')
      .map(p => p.trim())
      .filter(p => p)
    const body = {
      children,
      preferences,
      rhythm,
      schedule: { start: startTime, end: endTime },
    }

    fetchPlan('/api/plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">SmartUge: Din ugeplan</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 mb-8 grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        <div>
          <label className="block font-medium">Aldre (komma-separeret)</label>
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            placeholder="fx 4,7"
            value={ages}
            onChange={e => setAges(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium">Kostpræferencer (komma-separeret)</label>
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            placeholder="fx børnevenligt, vegetarisk"
            value={preferencesList}
            onChange={e => setPreferencesList(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium">Ønsket dagsrytme</label>
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            placeholder="fx balanceret"
            value={rhythm}
            onChange={e => setRhythm(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium">Schedule start</label>
          <input
            type="time"
            className="mt-1 p-2 border rounded w-full"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium">Schedule end</label>
          <input
            type="time"
            className="mt-1 p-2 border rounded w-full"
            value={endTime}
            onChange={e => setEndTime(e.target.value)}
          />
        </div>
        <div className="md:col-span-5 text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? 'Genererer...' : 'Generér plan'}
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mb-4">Fejl: {error}</p>}
      {loading && !plan.length && <p>Loader...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plan.map(({ day, breakfast, snack, dinner, activities }) => (
          <div
            key={day}
            className="bg-white shadow-md rounded-2xl p-4 flex flex-col space-y-2"
          >
            <h3 className="text-xl font-semibold capitalize">{day}</h3>
            <p><span className="font-medium">Morgen:</span> {breakfast}</p>
            <p><span className="font-medium">Snack:</span> {snack}</p>
            <p><span className="font-medium">Aften:</span> {dinner}</p>
            <div>
              <span className="font-medium">Aktiviteter:</span>
              <ul className="list-disc list-inside mt-1">
                {activities.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
