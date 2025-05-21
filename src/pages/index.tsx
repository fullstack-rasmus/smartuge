// pages/index.tsx
import Layout from '../components/Layout';
import MealPlanCard from '../components/MealPlanCard';
import ActivityList from '../components/ActivityList';

export default function Home() {
  const sampleMeals = [
    { day: 'Mandag', meals: { breakfast: 'Havregrød', lunch: 'Smørrebrød', dinner: 'Spaghetti' } },
    { day: 'Tirsdag', meals: { breakfast: 'Yoghurt', lunch: 'Salat', dinner: 'Fiskefrikadeller' } },
    { day: 'Onsdag', meals: { breakfast: 'Pandekager', lunch: 'Pastasalat', dinner: 'Kyllingefrikasse' } },
    { day: 'Torsdag', meals: { breakfast: 'Rugbrød', lunch: 'Tunsandwich', dinner: 'Vegetar Taco' } },
    { day: 'Fredag', meals: { breakfast: 'Smoothie', lunch: 'Pizza', dinner: 'Bøf med pommes' } },
    { day: 'Lørdag', meals: { breakfast: 'Croissant', lunch: 'Burger', dinner: 'Boller i karry' } },
    { day: 'Søndag', meals: { breakfast: 'Æg og bacon', lunch: 'Grøn salat', dinner: 'Fisk i fad' } },
  ];

  const activities = [
    'Leg i parken',
    'Krea-hjørne',
    'Læseudfordring',
    'Cykeltur',
    'Brætspilsaften',
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">SmartUge – Din AI-ugeplan</h1>

      <section id="meals" className="grid md:grid-cols-2 gap-6">
        {sampleMeals.map(({ day, meals }) => (
          <MealPlanCard key={day} day={day} meals={meals} />
        ))}
      </section>

      <section id="activities" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Aktiviteter</h2>
        <ActivityList activities={activities} />
      </section>

      <section id="kontakt" className="mt-12 text-center text-gray-600">
        <p>Kontakt os på <a href="mailto:info@smartuge.dk" className="underline">info@smartuge.dk</a></p>
      </section>
    </Layout>
  );
}